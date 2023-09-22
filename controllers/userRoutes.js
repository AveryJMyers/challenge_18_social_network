const {User, Thought, Routes} = require('../models')
module.exports = {
//get all users
    async getAllUsers(req, res) {
        try{
            const allUsers = await User.find();
            res.json(allUsers);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get user by id
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');
            if (!user) {
              return res.status(404).json({ message: 'No user with that ID' });
            }
            res.json(user);
          } catch (err) {
            res.status(500).json(err);
          }
        },
// create new user


// update user by id


// delete user by id
}