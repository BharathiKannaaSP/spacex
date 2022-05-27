import { Parallax } from 'react-parallax';
import video1 from '../assets/video1.mp4';
const Parallax2 = () => (
    <Parallax className='parallax'  strength={800}>
       <div className='content2'>
           <video className='video' src={video1} autoPlay loop muted></video>
           <img width={400} src="https://w0.peakpx.com/wallpaper/117/317/HD-wallpaper-spacex-black-design-elon-logo-musk-tesla-white.jpg" alt='spacex'/>
           <div>
           <p style={{color:'#fff',maxWidth:'190px'}}>SpaceX is a private spaceflight company that sends satellites and people to space, including NASA crews to the International Space Station (ISS). Founder Elon Musk is also creating and testing a Starship system for lunar landings and, he hopes, future crewed Mars missions.</p>

           </div>
       </div>
    </Parallax>
);

export default Parallax2