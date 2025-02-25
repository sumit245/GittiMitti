import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import store from "../redux/store/store"; // Import your Redux store
import "./App.css";
import SignIn from "../pages/SignIn";
import CreateAccount from "../pages/CreateAccount";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
// import ProductList from "../pages/ProductList";
import ViewMore from "../pages/ViewMore";
import ProductDescriptiontemp from "../pages/ProductDescriptiontemp";
import ShoppingCart from "../pages/ShoppingCart";
import SignInPass from "../pages/SignInPass";
import PasswordAssistance from "../pages/PasswordAssistance";
import VerificationRequired from "../pages/VerificationRequired";
import CreateNewPassword from "../pages/CreateNewPassword";
import PasswordResetDone from "../pages/PasswordResetDone";
import SellerSignin from "../pages/SellerSignin";
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
import OrderTracking from "../pages/OrderTracking";
import SellerForm from "../pages/SellerForm";
import SellerAccountDetails from "../pages/SellerAccountDetails";
import SellerPasswordAssistance from "../pages/SellerPasswordAssistance";
import SellerVerificationRequired from "../pages/SellerVerificationRequired";
import SellerCreateAccount from "../pages/SellerCreateAccount";
import SellerCreateNewPassword from "../pages/SellerCreateNewPassword";
import SellerPasswordResetDone from "../pages/SellerPasswordResetDone";
import AdminSignin from "../pages/AdminSignin";

import Dashboard from "../pages/DashboardPanel/Dashboard";
import Orders from "../pages/DashboardPanel/Order";
import Productincart from "../pages/DashboardPanel/Productincart";
import Profile from "../pages/DashboardPanel/Profile";
import SellerRefunds from "../pages/DashboardPanel/SellerRefund";
import SellerReviews from "../pages/DashboardPanel/SellerReviews";
import SellerSettings from "../pages/DashboardPanel/SellerSettings";
import Wishlist from "../pages/DashboardPanel/Wishlist";

// import CreatePages from "../pages/SellerPanel/CreatePages";
// import StoreTest from "../pages/SellerPanel/StoreTest";

function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your app with Provider */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin-signin" element={<AdminSignin />} />
        <Route
          path="/productDescriptiontemp"
          element={<ProductDescriptiontemp />}
        />
        <Route path="/signinpass" element={<SignInPass />} />
        <Route path="/viewmore" element={<ViewMore />} />
        <Route path="/orde" element={<OrderTracking />} />
        <Route path="/passwordassistance" element={<PasswordAssistance />} />
        <Route
          path="/sellerpasswordassistance"
          element={<SellerPasswordAssistance />}
        />
        <Route
          path="/verificationrequired/"
          element={<VerificationRequired />}
        />
        <Route
          path="/sellerverificationrequired/"
          element={<SellerVerificationRequired />}
        />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route
          path="/sellercreatenewpassword"
          element={<SellerCreateNewPassword />}
        />
        <Route path="/passwordResetDone" element={<PasswordResetDone />} />
        <Route
          path="/sellerpasswordResetDone"
          element={<SellerPasswordResetDone />}
        />
        <Route
          path="/productDescriptiontemp"
          element={<ProductDescriptiontemp />}
        />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/sellerSignin" element={<SellerSignin />} />
        <Route path="/sellerCreateAccount" element={<SellerCreateAccount />} />
        {/* <Route path="/" element={<SellerPanelHome />} /> */}

        <Route path="/sellerForm" element={<SellerForm />} />
        <Route path="/sellerHome" element={<SellerPanelHome />} />
        <Route
          path="/sellerAccountDetails"
          element={<SellerAccountDetails />}
        />

        <Route path="/barcode" element={<BarCodePage />} />
        <Route path="/withdrawal" element={<WithdrawalPage />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/decorate-shop" element={<DecorateShop />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/kyc" element={<Kyc />} />
        {/* <Route path="/storetest" element={<StoreTest />} /> */}
        <Route path="/history" element={<History />} />
        {/* <Route path="/createPages" element={<CreatePages />} />  */}
        <Route path="/sUB001" element={<SUB001 />} />

            <Route path="/sdashboard" element={<Dashboard />} />
            <Route path="/sorders" element={<Orders />} />
            <Route path="/sprofile" element={<Profile />} />
            <Route path="/sreviews" element={<SellerReviews />} />
            <Route path="/swishlist" element={<Wishlist />} />
            <Route path="/srefunds" element={<SellerRefunds />} />
            <Route path="/sproductincart" element={<Productincart />} />
            <Route path="/ssettings" element={<SellerSettings />} />

      </Routes>
    </Provider>
    // <BarCodePage/>

    // <Provider store={store}>
    //   <Routes>

    //   </Routes>
    // </Provider>
  );
}

export default App;
