const {User, Thought, Routes} = require('../models')
module.exports = {
    //get all thoughts
    async getAllThoughts(req, res) {
        try{
            const allThoughts = await Thought.find();
            res.json(allThoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get thought by id

    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');
            if (!thought) {
              return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
          } catch (err) {
            res.status(500).json(err);
          }
    },

    // create new thought
    async createThought(req,res) {
      try{
        const thought = await Thought.create(req.body);
        res.json(thought)
      } catch (err){
        console.log(err)
        return res.status(500).json(err)
      }
    },
    // update thought by id
    async updateThought(req, res) {
        try{
            const thoughts = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
            );
            if (!thoughts) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete thought by id

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            
            if (!thought) {
              return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought);
          } catch (err) {
            res.status(500).json(err);
          }
    },
}