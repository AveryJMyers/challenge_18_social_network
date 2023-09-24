const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/userRoutes');

router.route('/')
.get(getAllUsers)
.post(createUser);



router.route('/:userId')
.get(getOneUser)
.delete(deleteUser)
.put(updateUser)

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)



module.exports = router;