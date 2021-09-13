// import React from "react";
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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

function App() {

    const [loggedIn, toggleLoggedIn] = useState(true);

  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route path="/categories">
                  <CategoriesPage />
              </Route>
              <Route path="/nutrition">
                  <NutritionPage />
              </Route>
              <Route path="/CICO">
                  {loggedIn ? <CICOPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/CICOpay">
                  {loggedIn ? <CICOPay /> : <Redirect to="/"/>}
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
              <Route path="/createreview">
                  {loggedIn ? <CreateReviewPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/login">
                  {loggedIn ? <LoginPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/myclasses">
                  {loggedIn ? <MyClassesPage /> : <Redirect to="/"/>}
              </Route>
              <Route path="/register">
                  <RegisterPage />
              </Route>
              <Route path="/settings">
                  <SettingsPage />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
