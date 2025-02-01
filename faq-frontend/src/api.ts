import axios from "axios";

const API_URL = "http://texteditorbe.shivanshsaxena.tech/api/faqs";

export const fetchFaqs = async (lang: string = "en") => {
  const response = await axios.get(`${API_URL}?lang=${lang}`);
  return response.data;
};
