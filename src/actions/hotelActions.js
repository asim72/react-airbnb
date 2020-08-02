import { FETCH_HOTELS, SELECTED_HOTEL } from "../constants/airbnbConstants";

const hotels = [
  {
    id: 1,
    city: "navsari",
    title: "orchid palace",
    street: "tower road",
    image: "assets/1.jpg",
    category: "house",
    bedroom: 9,
    guest: 4,
    dailyRate: 33,
    shared: true,
    created: "24/7/2020",
    description: "golden lake view appt",
  },
  {
    id: 2,
    city: "navsari",
    title: "orchid palace",
    street: "tower road",
    image: "assets/1.jpg",
    category: "house",
    bedroom: 9,
    guest: 4,
    dailyRate: 33,
    shared: true,
    created: "24/7/2020",
    description: "golden lake view appt",
  },
  {
    id: 3,
    city: "navsari",
    street: "tower road",
    title: "orchid palace",
    image: "assets/1.jpg",
    category: "house",
    bedroom: 9,
    guest: 4,
    dailyRate: 33,
    shared: true,
    created: "24/7/2020",
    description: "golden lake view appt",
  },
  {
    id: 4,
    city: "navsari",
    street: "tower road",
    title: "orchid palace",
    image: "assets/1.jpg",
    category: "house",
    bedroom: 9,
    guest: 4,
    dailyRate: 33,
    shared: true,
    created: "24/7/2020",
    description: "golden lake view appt",
  },
];

export const fetch_hotels = () => {
  return {
    type: FETCH_HOTELS,
    hotels,
  };
};

export const selected_hotel = (hotelId) => {
  return {
    type: SELECTED_HOTEL,
    hotels,
    hotelId,
  };
};
