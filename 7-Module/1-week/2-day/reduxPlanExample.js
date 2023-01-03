//******************** AirBnB redux store representation ********************

const store = {
    session: {
        user: {
            id: 1,
            username: "demo",
            // ...
        },
    },
    
    spots: {
        1: {
            id: 1,
            ownerId: 5,
            address: "123",
            avgReview: 4.7,
        },
    },

    reviews: {
        1: {
            id: 1,
            userId: 1,
            spotId: 2,
            reviewText: "It was good",
            rating: 4.5,
        },
    },
};
