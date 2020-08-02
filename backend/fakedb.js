const Hotel = require("./models/Hotel");

class FakeDb {
  constructor() {
    this.hotels = [
      {
        title: "Intereriated Design",
        city: "U.S.A",
        street: "redblue street",
        category: "appartment",
        image:
          "https://images.unsplash.com/photo-1596194815712-2975c42363a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
        description: "blazing view of city",
        bedroom: 6,
        dailyRate: 190,
        shared: false,
      },
      {
        title: "marvelous look",
        city: "india",
        street: "besttrapping street",
        category: "condo",
        image:
          "https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "bunglow is in very good condition",
        bedroom: 3,
        dailyRate: 100,
        shared: false,
      },
      {
        title: "Nice ocean view",
        city: "london",
        street: "onxan street",
        category: "bunglow",
        image:
          "https://images.unsplash.com/photo-1592494804071-faea15d93a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "bunglow is in very good condition",
        bedroom: 4,
        dailyRate: 120,
        shared: true,
      },
    ];
  }

  pushRentalsToDb() {
    this.hotels.forEach((hotel) => {
      const newHotel = new Hotel(hotel);

      newHotel.save();
    });
  }

  seedDb() {
    this.pushRentalsToDb();
  }
}

module.exports = FakeDb;
