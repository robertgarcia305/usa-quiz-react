const data = [
    {
        id: 1,
        name: "q1",
        question: "What is the highest mountain in Oregon?",
        answer: [
            { value: "Mt. Hood", correct: true },
            { value: "Mt. Rushmore", correct: false },
            { value: "Mount St. Helens", correct: false }
        ]
    },
    {
        id: 2,
        name: "q2",
        question: "What is the capital of Texas?",
        answer: [
            { value: "Houston", correct: false },
            { value: "Austin", correct: true },
            { value: "Dallas", correct: false }
        ]
    },
    {
        id: 3,
        name: "q3",
        question: "Who was the first president of the U.S.?",
        answer: [
            { value: "George Washington", correct: true },
            { value: "Kanye West", correct: false },
            { value: "Abraham Lincoln", correct: false }
        ]
    },
    {
        id: 4,
        name: "q4",
        question: "Where was Coca-Cola invented?",
        answer: [
            { value: "Phoenix, AZ", correct: false },
            { value: "Los Angeles, CA", correct: false },
            { value: "Atlanta, GA", correct: true }
        ]
    },
    {
        id: 5,
        name: "q5",
        question: "What is Denver known for?",
        answer: [
            {
                value: "Its extensive network of canals and waterways",
                correct: false
            },
            {
                value:
                    "Its outdoor recreation opportunities, like hiking and skiing",
                correct: true
            },
            {
                value: "Its tropical climate and year-round warm weather",
                correct: false
            }
        ]
    }
];

export default data;
