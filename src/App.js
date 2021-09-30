import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import NewsletterPage from "./pages/NewsletterPage";
import ReviewPage from "./pages/ReviewPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import NutritionPage from "./pages/NutritionPage";
import CICOPage from "./pages/CICOPage";
import MyClassesPage from "./pages/MyClassesPage";
import CICOPay from "./pages/CICOPay";
import ReviewPageNutrition from "./pages/ReviewPageNutrition";
import ReviewPageCICO from "./pages/ReviewPageCICO";
import CreateReviewPage from "./pages/CreateReviewPage";
import ReviewPageSNACKS from "./pages/ReviewPageSNACKS";
import ReviewPageTESTOSTERON from "./pages/ReviewPageTESTOSTERON";
import SNACKSPage from "./pages/SNACKSPage";
import TESTOSTERONEPage from "./pages/TESTOSTERONEPage";
import SNACKSPayPage from "./pages/SNACKSPayPage";
import TESTOSTERONEPayPage from "./pages/TESTOSTERONEPayPage";


function App() {

    const { user } = useContext(AuthContext);

  return (
          <Switch>
              <Route exact path="/">
                  {user === null ? <HomePage /> : <Redirect to="/login"/>}
              </Route>
              <Route path="/categories">
                  <CategoriesPage />
              </Route>
              <Route path="/nutrition">
                  <NutritionPage />
              </Route>
              <Route path="/CICO">
                  {user !== null ? <CICOPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/CICOpay">
                  {user !== null ? <CICOPay /> : <Redirect to="/"/>}
              </Route>
              <Route path="/SNACKS">
                  {user !== null ? <SNACKSPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/SNACKSpay">
                  {user !== null ? <SNACKSPayPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/TESTOSTERONE">
                  {user !== null ? <TESTOSTERONEPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/TESTOSTERONEpay">
                  {user !== null ? <TESTOSTERONEPayPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/about">
                  <AboutPage />
              </Route>
              <Route path="/newsletter">
                  <NewsletterPage />
              </Route>
              <Route path="/reviews">
                  <ReviewPage />
              </Route>
              <Route path="/nutritionreviews">
                  <ReviewPageNutrition />
              </Route>
              <Route path="/CICOreview">
                  <ReviewPageCICO />
              </Route>
              <Route path="/SNACKSreview">
                  <ReviewPageSNACKS />
              </Route>
              <Route path="/TESTOSTERONreview">
                  <ReviewPageTESTOSTERON />
              </Route>
              <Route path="/createreview">
                  {user !== null ? <CreateReviewPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/login">
                  {user !== null ? <LoginPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/myclasses">
                  {user !== null ? <MyClassesPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/register">
                  <RegisterPage />
              </Route>
              <Route path="/settings">
                  {user !== null ? <SettingsPage /> : <Redirect to="/"/>}
              </Route>
          </Switch>
  );
}

export default App;
