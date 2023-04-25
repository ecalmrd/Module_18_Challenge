const router = require("express").router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller.js');

// /api/courses
router.route('/').get(getAllUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;