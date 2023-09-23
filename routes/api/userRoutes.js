const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/userRoutes');

router.route('/')
.get(getAllUsers)
.post(createUser);



router.route('/:userId')
.get(getOneUser)
.delete(deleteUser)
.put(updateUser);



module.exports = router;