
import axios from "axios";

export const api = axios.create({
  baseURL: "http://my-wp-backend.local/wp-json/wp/v2/posts" 
});