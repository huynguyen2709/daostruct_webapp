export const getSpotLightData = (data) => {
  const lastestDataIndex = data?.length - 1;
  return data?.[lastestDataIndex];
};

export const truncateText = (text) => {
  const array = text?.split(".");
  return array?.[0] + "...";
};
