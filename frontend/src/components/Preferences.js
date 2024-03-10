import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../src/Preferences.css'
import { Link } from 'react-router-dom';

export default function Preferences() {
  const [age, setAge] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [pref, setPref] = React.useState('');
  const [interest, setInterest] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    setSubject(event.target.value);
    setPref(event.target.value);
    setInterest(event.target.value);
  };

  return (
    <>
    <Box sx={{ minWidth: 120 }}>
<div className="main">
    <h1 className='heads'>
        Course Preferences
        </h1>
        <br/>
    <div>
      <FormControl sx={{width:'440px',margin:'10px'}}>
        <InputLabel id="demo-simple-select-label">Subjects</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
        >
          <MenuItem value={10}>Mathematics</MenuItem>
          <MenuItem value={20}>Science</MenuItem>
          <MenuItem value={30}>History</MenuItem>
        </Select>
      </FormControl>
      </div>

       <div>

      <FormControl sx={{width:'440px',margin:'10px'}}>
        <InputLabel id="demo-simple-select-label">Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Topic"
          onChange={handleChange}
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

      <FormControl sx={{width:'440px',margin:'10px'}}>
        <InputLabel id="demo-simple-select-label">Study Preferences</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pref}
          label="Study Preferences"
          onChange={handleChange}
        >
          <MenuItem value={100}>Visual Learning</MenuItem>
          <MenuItem value={110}>Group Study</MenuItem>
          <MenuItem value={120}>Audiobooks</MenuItem>
        </Select>
      </FormControl>
      </div>
       <div>

      <FormControl sx={{width:'440px',margin:'10px'}}>
        <InputLabel id="demo-simple-select-label">Interests</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={interest}
          label="Interests"
          onChange={handleChange}
        >
          <MenuItem value={130}>Cryptography</MenuItem>
          <MenuItem value={140}>Mathematical Logic</MenuItem>
          <MenuItem value={150}>Astronomy</MenuItem>
        </Select>
      </FormControl>
      </div>
      <button className='sub'>
        <Link to="./" style={{textDecoration:'none',color:'black'}} >Submit</Link>
        
    </button>
      </div>
    </Box>

   
    </>
  );
}