import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './personalDetailsStyles.css'; // Import the CSS file

const PersonalDetailsPage = () => {
  const [nicFullName, setNicFullName] = useState('');
  const [nicAddress, setNicAddress] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedDivisionalOffice, setSelectedDivisionalOffice] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (agree) {
      // Navigate to the JobDetailsPage using navigate function
      navigate('/job-details');
    } else {
      // Navigate back to the HomePage using navigate function
      navigate('/home-page');
    }
  };

  return (
    <div className="container">
      <h2>Personal Details</h2>
      <div className="form-group">
        <label htmlFor="nicFullName">NIC Per Full Name:</label>
        <input
          type="text"
          id="nicFullName"
          value={nicFullName}
          onChange={(e) => setNicFullName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nicAddress">NIC Per Address:</label>
        <input
          type="text"
          id="nicAddress"
          value={nicAddress}
          onChange={(e) => setNicAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="district">District:</label>
        <select
          id="district"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option value="">Select District</option>
          {/* Add options for all districts */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="divisionalOffice">Divisional Office:</label>
        <select
          id="divisionalOffice"
          value={selectedDivisionalOffice}
          onChange={(e) => setSelectedDivisionalOffice(e.target.value)}
        >
          <option value="">Select Divisional Office</option>
          {/* Add options for divisional offices based on selected district */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="agree">I agree:</label>
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalDetailsPage;
