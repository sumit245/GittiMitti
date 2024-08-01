const {
  CreateAccount,
  SignIn,
  ResetPassword,
  SendOTP,
  VerifyOTP,
  CheckPassword,
} = require("../controllers/AuthController");

const router = require("express").Router();

router.post("/createAccount", CreateAccount);
router.post("/signIn", SignIn);
router.post("/reset-password", ResetPassword);
router.post("/sendOTP", SendOTP);
router.post("/verifyOTP", VerifyOTP);
router.post("/checkPassword", CheckPassword);

module.exports = router;
