import { Parallax } from 'react-parallax';
import video3 from '../assets/video3.mp4';
function Parallax3 (){

    
    return(
    <Parallax className='parallax'  strength={1700}>
       <div className='content3'>
           <video src={video3} className='videos' autoPlay loop muted></video>
            <p className='parallax_p'>RECENT LAUNCH<span className='span_parallax3'>STARLINK MISSION</span> </p>
       </div>
        <a style={{textDecoration:'none'}} href='https://www.spacex.com/launches/sl4-18/' className='parallax3_btn'>Launch</a> 
    </Parallax>
)};

export default Parallax3
