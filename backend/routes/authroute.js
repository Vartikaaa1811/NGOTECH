const express = require("express");

const router = express.Router();

const {register, login} = require("../controllers/userauth_controller");

router.post("/register", register);
router.post("/login", login);
router.get("/admin/dashboard", verifyAdmin, (req,res) =>{
   //need to write something here
});
router.get("/logout", logout);

module.exports = router;
