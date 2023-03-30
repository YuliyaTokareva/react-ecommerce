import { baseUrl } from '../env';
import { Dispatch } from 'react';
import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
export const shopList = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchList = async (set: Dispatch<React.SetStateAction<[]>>) => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const res = await response.json();

    if (!res) {
      throw new Error('Empty response!');
    }
    set(res.results);
    return res;
  } catch (error) {
    throw new Error(`Failed to fetch : ${error.message}`);
  }
};
