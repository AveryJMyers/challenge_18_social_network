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

    // add friend
    
    // async addFriend(req, res) {
    //   try {
    //     const user = await User.findOneAndUpdate(
    //       { _id: req.params.userId },
    //       { $addToSet: { friends: req.params.friendId } },
    //       { runValidators: true, new: true }
    //     );
    //     if (!user) {
    //       return res.status(404).json({ message: 'No user with this id!' });
    //     }
    //     res.json(user);
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // },
    // remove friend
}
