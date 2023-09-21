const userData = [
    {
        username: 'User1',
        email: 'User1@test.com'
    },
    {
        username: 'User2',
        email: 'User2@test.com'
    },
    {
        username: 'User3',
        email: 'User3@test.com'
    }
]

const reactionData = [
    {
        reactionBody: 'This is a great post!',
        username: 'User1',
    },
    {
        reactionBody: 'I agree with the author!',
        username: 'User2',
    },
    {
        reactionBody: 'Interesting thoughts.',
        username: 'User3',
    },
];

const thoughtData = [
    {
        thoughtText: 'Just had a great coding session!',
        username: 'User3'
    },
    {
        thoughtText: 'I love learning new things in programming.',
        username: 'User2'
    },
    {
        thoughtText: 'Coding is both challenging and rewarding.',
        username: 'User1'
    },
];

module.exports = { thoughtData, userData, reactionData }