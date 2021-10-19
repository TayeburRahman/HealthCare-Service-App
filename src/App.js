import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Component/Login/Login";

import Survditile from "./Component/HospitalDitile/Survditile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Register from "./Component/Register/Register";
import AllService from "./Component/Services/AllService";
import DoctorDepertment from "./Component/Doctor&depertment/DoctorDepertment";
import About from "./Component/About/About";
import NotFount from "./Component/NotFount/NotFount";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allService">
              <AllService></AllService>
            </Route>
            <Route path="/doctor&depertment">
              <DoctorDepertment></DoctorDepertment>
            </Route>
            <PrivateRoute path="/depertmentDitiel/:serviceId">
              <Survditile></Survditile>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFount></NotFount>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
