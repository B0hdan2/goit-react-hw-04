import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const requestToServer = async (params) => {
  const { data } = await axios.get("search/photos", {
    params: {
      client_id: "e7nfDA8vRPvEmIjuvoBtPFIHCeGfCocmn1_hvUsUYik",
      per_page: 10,
      ...params,
    },
  });
  return data;
};

export default requestToServer;
