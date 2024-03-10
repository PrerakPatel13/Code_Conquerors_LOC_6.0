import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests

import '../../src/Preferences.css';

export default function Preferences() {
  const [subject, setSubject] = useState('');
  const [age, setAge] = useState('');
  const [pref, setPref] = useState('');
  const [interest, setInterest] = useState('');

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangePref = (event) => {
    setPref(event.target.value);
  };

  const handleChangeInterest = (event) => {
    setInterest(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Make an API call to the backend to create a new course based on user preferences
      const response = await axios.post('http://localhost:8000/api/v1/users/course/get-preference', {
        subject,
        topics: age,
        studyPreference: pref,
        interests: interest,
      });

      // Handle the response as needed (you can log or show a success message)
      console.log(response.data);

      // Redirect or perform any other action after successful submission
    } catch (error) {
      console.error('Error submitting preferences:', error);
      // Handle error (show an error message, log, etc.)
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <div className="main">
        <h1 className="heads">Course Preferences</h1>
        <br />
        <div>
          <FormControl sx={{ width: '440px', margin: '10px' }}>
            <InputLabel id="subject-label">Subjects</InputLabel>
            <Select
              labelId="subject-label"
              id="subject-select"
              value={subject}
              label="Subjects"
              onChange={handleChangeSubject}
            >
              <MenuItem value={10}>Mathematics</MenuItem>
              <MenuItem value={20}>Science</MenuItem>
              <MenuItem value={30}>History</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ width: '440px', margin: '10px' }}>
            <InputLabel id="age-label">Topic</InputLabel>
            <Select
              labelId="age-label"
              id="age-select"
              value={age}
              label="Topic"
              onChange={handleChangeAge}
            >
              <MenuItem value={40}>Algebra</MenuItem>
              <MenuItem value={50}>Geometry</MenuItem>
              <MenuItem value={60}>Physics</MenuItem>
              <MenuItem value={70}>Chemistry</MenuItem>
              <MenuItem value={80}>Globalization</MenuItem>
              <MenuItem value={90}>Social Movements</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ width: '440px', margin: '10px' }}>
            <InputLabel id="pref-label">Study Preferences</InputLabel>
            <Select
              labelId="pref-label"
              id="pref-select"
              value={pref}
              label="Study Preferences"
              onChange={handleChangePref}
            >
              <MenuItem value={100}>Visual Learning</MenuItem>
              <MenuItem value={110}>Group Study</MenuItem>
              <MenuItem value={120}>Audiobooks</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl sx={{ width: '440px', margin: '10px' }}>
            <InputLabel id="interest-label">Interests</InputLabel>
            <Select
              labelId="interest-label"
              id="interest-select"
              value={interest}
              label="Interests"
              onChange={handleChangeInterest}
            >
              <MenuItem value={130}>Cryptography</MenuItem>
              <MenuItem value={140}>Mathematical Logic</MenuItem>
              <MenuItem value={150}>Astronomy</MenuItem>
            </Select>
          </FormControl>
        </div>

        <button className="sub" onClick={handleSubmit}>
          <Link to="./" style={{ textDecoration: 'none', color: 'black' }}>
            Submit
          </Link>
        </button>
      </div>
    </Box>
  );
}
