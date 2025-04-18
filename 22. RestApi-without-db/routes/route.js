const { getAllUser, createUser, updateUser, deleteUser } = require("../controllers/controller");

const router = require("express").Router();




//users route
router.get("/", getAllUser)
router.post("/", createUser)
router.put("/:userid", updateUser)
router.delete("/:userid", deleteUser)


module.exports = router
