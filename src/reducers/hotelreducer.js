import { FETCH_HOTELS, SELECTED_HOTEL } from "../constants/airbnbConstants";

let initialState = {
  data: [],
  selectedHotel: null,
};

export const hotelReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_HOTELS:
      return {
        ...state,
        data: actions.hotels,
      };
    case SELECTED_HOTEL:
      return {
        ...state,
        selectedHotel: actions.hotels.find(
          (hotel) => hotel.id == actions.hotelId
        ),
      };
    default:
      return state;
  }
};
