const router = require("express").router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller.js');

// /api/courses
router.route('/').get(getAllThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:Id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;