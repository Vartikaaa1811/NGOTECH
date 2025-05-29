const express = require("express");

const router = express.Router();

const {register, login, verifyAdmin, logout} = require("../controllers/userauth_controller");

router.post("/register", register);
router.post("/login", login);
router.get("/admin/dashboard", verifyAdmin, (req,res) =>{
    res.json({
    message: 'Welcome Admin',
    usersCount: 87,
    donationsTotal: 25300,
  });
   //need to write something here
});
router.get("/logout", logout);

module.exports = router;
