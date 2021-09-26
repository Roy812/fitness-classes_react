import CountReviews from "../helpers/CountReviews";
import FilterReviewsByRating from "../helpers/FilterReviewsByRating";
import FilterBookingsByTitleCICO from "../helpers/FilterBookingsByTitleCICO";
import FilterBookingsByTitleSNACKS from "../helpers/FilterBookingsByTitleSNACKS";
import FilterBookingsByTitleTESTOSTERON from "../helpers/FilterBookingsByTitleTESTOSTERON";

test('Count the total reviews', () => {
    //ARRANGE
    const list = [
        {
            id: 1,
            review: "Bad",
            rating: 2
        }, {
            id: 2,
            review: "Good",
            rating: 4
        }, {
            id: 3,
            review: "Perfect",
            rating: 5
        }
    ];

    //ACT
    const result = CountReviews(list);

    //ASSERT
    expect(result).toBe(3);
})

test('Return an array of ratings', () => {
    //ARRANGE
    const list = [
        {
            id: 1,
            review: "Bad",
            rating: 2
        }, {
            id: 2,
            review: "Good",
            rating: 4
        }, {
            id: 3,
            review: "Perfect",
            rating: 5
        }
    ];

    //ACT
    const result = FilterReviewsByRating(list);

    //ASSERT
    expect(result).toStrictEqual([2, 4, 5]);
})

test('Count bookings by title CICO', () => {
    //ARRANGE
    const bookings = [
        {
            lessonId: 1,
            title: "CICO, ITs ALL YOU NEED"
        }, {
            lessonId: 1,
            title: "CICO, ITs ALL YOU NEED"
        }, {
            lessonId: 2,
            title: "SNACKS"
        }
    ]

    //ACT
    const result = FilterBookingsByTitleCICO(bookings);

    //ASSERT
    expect(result).toBe(2);
})

test('Count bookings by title SNACKS', () => {
    //ARRANGE
    const bookings = [
        {
            lessonId: 1,
            title: "CICO"
        }, {
            lessonId: 2,
            title: "SNACKS"
        }
    ]

    //ACT
    const result = FilterBookingsByTitleSNACKS(bookings);

    //ASSERT
    expect(result).toBe(1);
})

test('Count bookings by title TESTOSTERON', () => {
    //ARRANGE
    const bookings = [
        {
            lessonId: 1,
            title: "CICO"
        }, {
            lessonId: 3,
            title: "TESTOSTERON"
        }, {
            lessonId: 3,
            title: "TESTOSTERON"
        }
    ]

    //ACT
    const result = FilterBookingsByTitleTESTOSTERON(bookings);

    //ASSERT
    expect(result).toBe(2);
})