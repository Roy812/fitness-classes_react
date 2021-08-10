import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import AboutPage from "./pages/AboutPage";
import NewsletterPage from "./pages/NewsletterPage";
import ReviewPage from "./pages/ReviewPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import NutritionPage from "./pages/NutritionPage";

function App() {
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
              <Route path="/about">
                  <AboutPage />
              </Route>
              <Route path="/newsletter">
                  <NewsletterPage />
              </Route>
              <Route path="/reviews">
                  <ReviewPage />
              </Route>
              <Route path="/login">
                  <LoginPage />
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
