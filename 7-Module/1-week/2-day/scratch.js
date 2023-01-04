//******************** AirBnB redux store representation ********************

const store = {
    session: {
        user: {
            id: 1,
            username: 'demo',
            // ...
        },
    },

    /** /homepage - Load all spots
     * Spinners/loading screens
     * 1st page load, wait for db response
     * 2nd+ load, render what's currently in the store while dispatching for updates
     */

    /** /spots/:id - Use from store || Load single spot || Load all spots
     * If in store, render that
     * If not, but store holds other spots, just get single spot and add to store
     * If store is empty, load all spots
     */

    spots: {
        1: {
            id: 1,
            ownerId: 5,
            address: '123',
            avgReview: 4.7,
        },
        2: {
            id: 2,
            ownerId: 5,
            address: '123',
            avgReview: 4.7,
        },
        3: {
            id: 3,
            ownerId: 5,
            address: '123',
            avgReview: 4.7,
        },
        4: {
            id: 4,
            ownerId: 5,
            address: '123',
            avgReview: 4.7,
        },
        5: {
            id: 5,
            ownerId: 5,
            address: '123',
            avgReview: 4.7,
        },
    },

    /** avgReview saved on Spot, POST new review
     * Post to Review, get all reviews for that Spot, calculate new avg, save to Spot, send to frontend
     * (avgReview is saved in db && accessible in store)
     *
     * Good: Can access avgReview on each Spot from store
     * Bad: We must update Spot in db each time a review is made
     * Bad: Must re-query for Spot for avgReview to update in store
     */

    /** avgReview not saved on Spot, POST new review
     * Post to Review, get all reviews for that Spot, calculate new avg, send to frontend
     * (avgReview not saved in db or accessible in store)
     *
     * Good: Don't have to update Spot for every new review or re-query
     * Bad: Must recalculate each time you load a spot
     * Bad: Can't access avgReview on each Spot in the store
     */

    //***** Important to note, both above problems can be solved with clever redux store management.
    //***** However, we don't even have to think about that because we have SQLAlchemy 😎

    /** COOL NEW SQLALCHEMY METHOD! Use related data
     * Save all scores in list on Model (doesn't create a column on the table)
     * Average the list and use in to_dict()
     * (avgReview is NOT saved in db, but IS accessible in store!)
     *
     * Good: Don't have to update Spot
     * Good: Don't have to re-query/recalculate
     * Good: avgReview available on each Spot in the store
     * Good: Completely modular, can make as many optimizations as we wish (different to_dict methods)
     */

    //! Don't overwrite your data!!!
    /** Empty store, loading reviews
     * GET /spots/2
     * Fetch and store only 2's reviews, show all reviews in store
     *
     * GET /spots/3
     * Fetch and ADD to store only spot 3's reviews, show only 3's reviews
     *
     * When first getting 2's reviews, doesn't make sense to load any other reviews
     * When getting new reviews, there's no reason to remove old reviews from store
     * Instead, save everything, and only show the ones with matching spotId
     */

    reviews: {
        1: {
            id: 1,
            userId: 1,
            spotId: 2,
            reviewText: 'It was good',
            rating: 4.5,
        },
        2: {
            id: 2,
            userId: 2,
            spotId: 2,
            reviewText: 'It was good',
            rating: 4.5,
        },
        3: {
            id: 3,
            userId: 3,
            spotId: 2,
            reviewText: 'It was good',
            rating: 4.5,
        },
        4: {
            id: 4,
            userId: 4,
            spotId: 3,
            reviewText: 'It was good',
            rating: 4.5,
        },
        5: {
            id: 5,
            userId: 2,
            spotId: 1,
            reviewText: 'It was good',
            rating: 4.5,
        },
    },
};
