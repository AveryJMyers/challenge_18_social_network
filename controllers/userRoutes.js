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
    async createUser(req,res) {
      try{
        const user = await User.create(req.body);
        res.json(user)
      } catch (err){
        console.log(err)
        return res.status(500).json(err)
      }
    },

// update user by id

    async updateUser(req, res) {
      try{
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
        if (!user) {
          return res.status(404).json({ message: 'No user with this id!' });
        }
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
// delete user by id

    async deleteUser(req, res) {
      try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        
        if (!user) {
          return res.status(404).json({ message: 'No user with this id!' });
        }
        res.json({ message: 'User deleted!' });
      } catch (err) {
        res.status(500).json(err);
      }
    },

// add friend to user
   async addFriend(req, res) {
      const { userId, friendId } = req.params;
      try {
        const user = await User.findByIdAndUpdate(
          userId,
          { $addToSet: { friends: friendId } },
          { new: true }
        );
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
// remove friend from user
    async removeFriend(req, res) {
      const { userId, friendId } = req.params;
      try{
        const user = await User.findByIdAndUpdate(
          userId,
          { $pull: { friends: friendId } },
          { runValidators: true, new: true }
        );
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  }


