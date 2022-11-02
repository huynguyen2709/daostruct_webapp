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
