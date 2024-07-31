import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "../pages/SignIn";
import CreateAccount from "../pages/CreateAccount";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import ViewMore from "../pages/ViewMore";
import ProductDescriptiontemp from "../pages/ProductDescriptiontemp";
import ShoppingCart from "../pages/ShoppingCart";
import SignInPass from "../pages/SignInPass";
import PasswordAssistance from "../pages/PasswordAssistance";
import VerificationRequired from "../pages/VerificationRequired";
import CreateNewPassword from "../pages/CreateNewPassword";
import PasswordResetDone from "../pages/PasswordResetDone";
import SellerSignin from "../pages/SellerSignin";
import SellerCreateAccount from "../pages/SellerCreateAccount";
import SellerPanelHome from "../pages/SellerPanel/SellerPanelHome";
import BarCodePage from "../pages/SellerPanel/BarCodePage";
import WithdrawalPage from "../pages/SellerPanel/WithdrawalPage";
import Customers from "../pages/SellerPanel/Customers";
import Transactions from "../pages/SellerPanel/Transactions";
import Subscriptions from "../pages/SellerPanel/Subscriptions";
import DecorateShop from "../pages/SellerPanel/DecorateShop";
import Refunds from "../pages/SellerPanel/Refunds";
import Reviews from "../pages/SellerPanel/Reviews";
import Kyc from "../pages/SellerPanel/Kyc";
import Settings from "../pages/SellerPanel/Settings";
import Withdraw from "../pages/SellerPanel/Withdraw";
import History from "../pages/SellerPanel/History";
import SUB001 from "../pages/SellerPanel/SUB001";
import Menu from "../components/Menu";
import NewHome from "../pages/NewHome";
import OrderTracking from "../pages/OrderTracking";
// import CreatePages from "../pages/SellerPanel/CreatePages";
// import StoreTest from "../pages/SellerPanel/StoreTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/productDescriptiontemp" element={<ProductDescriptiontemp />} />
      <Route path="/signinpass" element={<SignInPass />} />
      <Route path="/viewmore" element={<ViewMore />} />
      <Route path="/orderTracking" element={<OrderTracking />} />
      <Route path="/passwordassistance" element={<PasswordAssistance />} />
      <Route
        path="/verificationrequired/"
        element={<VerificationRequired />}
      />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/createnewpassword" element={<CreateNewPassword />} />
      <Route path="/passwordResetDone" element={<PasswordResetDone />} />
      <Route
        path="/productDescriptiontemp"
        element={<ProductDescriptiontemp />}
      />
      <Route path="/shoppingcart" element={<ShoppingCart />} />
      <Route path="/sellerSignin" element={<SellerSignin />} />
      <Route path="/sellerCreateAccount" element={<SellerCreateAccount />} />
      <Route path="/" element={<SellerPanelHome />} />

    </Routes>
  );
}

export default App;
