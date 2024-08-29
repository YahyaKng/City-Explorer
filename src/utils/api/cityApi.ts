import axios from "axios";

const fetchCityData = async (city: string) => {
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json`,
    {
      params: {
        q: city,
        key: import.meta.env.VITE_OPENCAGE_API_KEY,
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch city data");
  }

  return response.data;
};

export default fetchCityData;
