import axios from "axios";

const searchImages = async (term) =>{
  const response = await axios.get("https://api.unsplash.com/search/photos",{
    headers: {
      Authorization: "Client-ID 7ck3BdUoxzA2CjunMkMJN6Wprx_ar4Fa4ef_6AapJbw"
    },
    params: {
      query: term
    }
  });
  return response.data.results;
};


export default searchImages;