import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/"

export const listUrls = () =>  axios.get(REST_API_BASE_URL);

export const createUrl = (url) => axios.post(REST_API_BASE_URL, url)
