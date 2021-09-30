import CountReviews from "../helpers/CountReviews";
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

test('Count bookings by title TESTOSTERONE', () => {
    //ARRANGE
    const bookings = [
        {
            lessonId: 1,
            title: "CICO"
        }, {
            lessonId: 3,
            title: "TESTOSTERONE"
        }, {
            lessonId: 3,
            title: "TESTOSTERONE"
        }
    ]

    //ACT
    const result = FilterBookingsByTitleTESTOSTERON(bookings);

    //ASSERT
    expect(result).toBe(2);
})