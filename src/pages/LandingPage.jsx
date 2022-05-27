import React from 'react'
import Navbar from '../components/Navbar';
import Parallax1 from '../components/Parallax1';
import Parallax2 from '../components/Parallax2';
import Parallax3 from '../components/Parallax3';
import Text from '../components/Text'
function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Parallax1/>
      <Parallax2/>
      <Text/>
      <Parallax3/>
    </div>
  )
}

export default LandingPage