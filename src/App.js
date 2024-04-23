import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomerRegistrationPage from './components/CustomerRegisterPage';
import PawnGeneratePage from './components/PawnGeneratePage';
import PersonalDetailsPage from './components/PersonalDetailsPage';
import JobDetailsPage from './components/JobDetailsPage';
import FamilyDetailsPage from './components/FamilyDetailsPage';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/customer-registration" element={<CustomerRegistrationPage />} />
      <Route path="/pawn-generate" element={<PawnGeneratePage />} />
      <Route path="/personal-details" element={<PersonalDetailsPage />} />
      <Route path="/job-details" element={<JobDetailsPage />} />
      <Route path="/family-details" element={<FamilyDetailsPage />} />
    </Routes>
  </Router>
  );
}

export default App;
