import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const requestToServer = async (query, page = 0) => {
  console.log(query);
  const { data } = await axios.get("photos", {
    params: {
      client_id: "e7nfDA8vRPvEmIjuvoBtPFIHCeGfCocmn1_hvUsUYik",
      page,
      per_page: 9,
      query,
    },
  });

  return data;
};

export default requestToServer;
