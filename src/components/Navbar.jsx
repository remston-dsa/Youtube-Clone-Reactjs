import React from 'react'
import Stack from '@mui/material/Stack'
import { logo } from '../utils/constants'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <div>
      <Stack 
      direction="row" 
      spacing={2}
      p={2}
      sx={{background: "#000", position: "sticky", top: 0, justifyContent: "space-between"}}>
        <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt="logo" height={45}></img>
        </Link>
        <SearchBar>
          
        </SearchBar>
      </Stack>
    </div>
  )
}

export default Navbar