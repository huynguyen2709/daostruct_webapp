import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import SpotLight from "./SpotLight/SpotLight";
import axios from "axios";
import {
  getSpotLightData,
  getSevenPrevious,
  subtractSevenDays,
  listToMatrix,
} from "./utils/index";
import HorizontalSection from "./HorizontalSection/HorizontalSection";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./commons/Loader";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [url, setUrl] = useState(null);
  //
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [olderData, setOlderData] = useState([]);
  const [olderDataMatrix, setOlderDataMatrix] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [startDate, setStartDate] = useState("2022-10-15");
  const [endDate, setEndDate] = useState("2022-10-21");

  const fetchDataOfNasa = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}api_key=${process.env.REACT_APP_API_KEY}&start_date=2022-10-01&end_date=2022-10-29&thumbs=true`
      );
      setLoading(false);
      setData(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOlderData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}api_key=${process.env.REACT_APP_API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=true`
      );
      setOlderData([...olderData, ...data]);
      if (data.length === 0) {
        sethasMore(false);
      }
      setStartDate(subtractSevenDays(startDate));
      setEndDate(subtractSevenDays(endDate));
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataOfNasa();
  }, []);

  useEffect(() => {
    const olderDataToDisplay = listToMatrix(olderData);
    setOlderDataMatrix(olderDataToDisplay);
  }, [olderData]);

  return (
    <div className="App">
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <SpotLight
            lastestData={getSpotLightData(data)}
            handleShow={handleShow}
            setUrl={setUrl}
          />
          <HorizontalSection
            previousData={getSevenPrevious(data)}
            handleShow={handleShow}
            setUrl={setUrl}
          ></HorizontalSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "30px 0px 0px 0px",
            }}
          >
            <div style={{ width: "50%", height: "100%" }}>
              <hr />
            </div>
          </div>
          <InfiniteScroll
            dataLength={olderData.length}
            next={fetchOlderData}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>There is no content to be displayed</b>
              </p>
            }
          >
            {olderDataMatrix?.map((elment, index) => (
              <HorizontalSection
                key={index}
                previousData={elment}
                handleShow={handleShow}
                setUrl={setUrl}
              ></HorizontalSection>
            ))}
          </InfiniteScroll>
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body
          style={{
            height: "500px",
            width: "100%",
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
