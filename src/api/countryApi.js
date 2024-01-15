import userAxios from "../axios/axios";

export const getCountryApi = async () => {
    const response = await userAxios.get("/get-country");
    return response.data?.addedCountrys || [];
  };