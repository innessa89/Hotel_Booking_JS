use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Ross Napier",
        email: "ross-napier@hotmail.com",
        date: "2022-10-19",
        check_in: false
    },
    {
        name: "Jean-Pierre Gazian",
        email: "jp@gmail.com",
        date: "2021-12-01",
        check_in: true
    },
    {
        name: "Ina Kurlovich",
        email: "inak@outlook.com",
        date: "2022-06-15",
        check_in: false
    }
]);