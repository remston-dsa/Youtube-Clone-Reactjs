import React from 'react';
import Stack from '@mui/material/Stack';
import { logo } from '../utils/constants';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      p={2}
      sx={{
        background: "#000",
        position: "fixed", // Set position to fixed
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Set a higher z-index to ensure it appears above other elements
        justifyContent: "space-between",
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
