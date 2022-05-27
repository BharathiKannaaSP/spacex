import { Parallax } from 'react-parallax';
//import video2 from '../assets/video2.mp4';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Login from './Login';
import rocket from '../assets/rocket.webp';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    padding: 4,
  };


function Parallax1 (){
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(
    <Parallax className='parallax' bgImage={rocket}  strength={1200}>
     {/* <div className='content1'>
           <video src={video2} className='videos' autoPlay loop muted></video>
       </div> */}
        <button className='parallax1_btn' onClick={handleOpen}>LOGIN</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box lg={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Login/>
          </Typography>
        
        </Box>
      </Modal>
 </Parallax>
)}

export default Parallax1





