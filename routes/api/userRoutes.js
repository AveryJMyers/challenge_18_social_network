const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
} = require('../../controllers/userRoutes');

router.route('/')
.get(getAllUsers)
.post(createUser);



router.route('/:userId')
.get(getOneUser)
.delete(deleteUser);



module.exports = router;