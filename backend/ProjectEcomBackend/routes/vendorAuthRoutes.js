const {
  SCreateAccount,
  SSignIn,
  SResetPassword,
  SSendOTP,
  SVerifyOTP,
  SCheckPassword,
} = require("../controllers/VendorAuthController");

const router = require("express").Router();

router.post("/seller-createAccount", SCreateAccount);
router.post("/seller-signIn", SSignIn);
router.post("/seller-reset-password", SResetPassword);
router.post("/seller-sendOTP", SSendOTP);
router.post("/seller-verifyOTP", SVerifyOTP);
router.post("/seller-checkPassword", SCheckPassword);

module.exports = router;
