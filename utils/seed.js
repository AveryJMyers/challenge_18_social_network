const connection = require('../config/connection');
const { User, Reaction, Thought } = require('../models');
const { userData, reactionData, thoughtData } = require('./data'); // Import your data

connection.on('error', (err) => {
  console.error('Database connection error:', err);
});

connection.once('open', async () => {
  try {
    console.log('Connected to the database');
    // Seed users
    const users = await User.insertMany(userData);

    // Map usernames to their respective IDs
    const userMap = {};
    users.forEach((user) => {
      userMap[user.username] = user._id;
    });

    // Seed reactions
    const reactions = reactionData.map((reaction) => ({
      ...reaction,
      user: userMap[reaction.username],
    }));
    await Reaction.insertMany(reactions);

    // Seed thoughts
    const thoughts = thoughtData.map((thought) => ({
      ...thought,
      user: userMap[thought.username],
    }));
    await Thought.insertMany(thoughts);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    connection.close();
  }
});
