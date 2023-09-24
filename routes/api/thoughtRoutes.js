const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought,
} = require('../../controllers/thoughtRoutes');

router.route('/')
.get(getAllThoughts)
.post(createThought);

router.route('/:thoughtId')
.get(getOneThought)
.delete(deleteThought)
.put(updateThought);