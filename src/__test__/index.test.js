import CountReviews from "../helpers/CountReviews";
import FilterReviewsByRating from "../helpers/FilterReviewsByRating";
import FilterBookingsByUserIdTest from "../helpers/FilterBookingsByUserIdTest";
import FilterBookingsByLessonIdCICO from "../helpers/FilterBookingsByLessonIdCICO";
import FilterBookingsByLessonIdSNACKS from "../helpers/FilterBookingsByLessonIdSNACKS";
import FilterBookingsByLessonIdTESTOSTERON from "../helpers/FilterBookingsByLessonIdTESTOSTERON";

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

test('Filter bookings by userId', () => {
    //ARRANGE
    const userId = 1;
    const list = [
        {
            userId: 1,
            title: 'CICO'
        }, {
            userId: 1,
            title: 'SNACKS'
        }, {
            userId: 3,
            title: 'TESTOSTERON'
        }
    ];

    //ACT
    const result = FilterBookingsByUserIdTest(list, userId);

    //ASSERT
    expect(result).toEqual([{
        userId: 1,
        title: 'CICO'
    }, {
        userId: 1,
        title: 'SNACKS'
    }]);
})

test('Count bookings by lessonId CICO', () => {
    //ARRANGE
    const lessonId = 1;
    const bookings = [
        {
            lessonId: 1,
            title: "CICO"
        }, {
            lessonId: 1,
            title: "CICO"
        }, {
            lessonId: 2,
            title: "SNACKS"
        }
    ]

    //ACT
    const result = FilterBookingsByLessonIdCICO(bookings, lessonId);

    //ASSERT
    expect(result).toBe(2);
})

test('Count bookings by lessonId SNACKS', () => {
    //ARRANGE
    const lessonId = 2;
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
    const result = FilterBookingsByLessonIdSNACKS(bookings, lessonId);

    //ASSERT
    expect(result).toBe(1);
})

test('Count bookings by lessonId TESTOSTERON', () => {
    //ARRANGE
    const lessonId = 3;
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
    const result = FilterBookingsByLessonIdTESTOSTERON(bookings, lessonId);

    //ASSERT
    expect(result).toBe(2);
})