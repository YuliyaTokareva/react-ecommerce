import axios from 'axios';
import { baseUrl } from '../env';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    console.log(response);
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};
getProducts();
