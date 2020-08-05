import { FETCH_HOTELS, SELECTED_HOTEL } from "../constants/airbnbConstants";

import axios from "axios";
import AxiosService from "../services/AxiosService";

const axiosInstance = AxiosService.getInterceptor();

export const fetch_hotels = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("http://localhost:1200/api/airbnb/all");

    setTimeout(() => {
      dispatch({
        type: FETCH_HOTELS,
        hotels: res.data.hotels,
      });
    }, 1000);
  } catch (error) {
    console.error(error);
  }
};

export const selected_hotel = (hotelId) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `http://localhost:1200/api/airbnb/hotel/${hotelId}`
    );

    dispatch({
      type: SELECTED_HOTEL,
      hotels: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
