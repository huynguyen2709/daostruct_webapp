import moment from "moment";

export const getSpotLightData = (data) => {
  const lastestDataIndex = data?.length - 1;
  return data?.[lastestDataIndex];
};

export const truncateText = (text) => {
  const array = text?.split(".");
  return array?.[0] + "...";
};

export const getSevenPrevious = (data) => {
  const getLast8Element = data?.slice(-8);
  getLast8Element?.pop(); // After poping there's only 7 elements remain
  return getLast8Element;
};

export const getUrl = (singleData) => {
  let dynamicUrl;
  if (singleData?.media_type === "image") {
    dynamicUrl = singleData?.url;
  } else {
    dynamicUrl = singleData?.thumbnail_url;
  }
  return dynamicUrl;
};

export const subtractSevenDays = (inputDate) => {
  return moment(inputDate, "YYYY-MM-DD").subtract(7, "d").format("YYYY-MM-DD");
};

export function listToMatrix(list, elementsPerSubArray = 7) {
  var matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}
