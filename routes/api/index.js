const router = require("express").Router();
const thoughtRoutes = require("./thought-routes");
const usersRoutes = require("./users-routes");

router.use("/thoughts", thoughtRoutes);
router.use("/users", usersRoutes);

module.exports = router;