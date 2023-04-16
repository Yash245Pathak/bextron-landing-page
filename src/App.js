import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'


function App() {
  return (
    <div className="w-100% h-fit">
      <div className='flex h-auto'>
        <div className='flex-1 bg-black/95 text-white/90'>
          <div className='flex gap-x-10 p-5 items-center'>
            <span className='font-bold text-[30px] text-blue-600 font-sans'>bextron</span>
            <span className='text-white text-[17px]'>We are hiring</span>
          </div>
          <div className='mt-10 p-5'>
            <h2 className='text-[60px] leading-tight'>Connecting <br/> Companies with top professionals</h2>
            <p className='mt-4 text-white/50 w-[32rem] text-[20px] leading-tight'>We connect the right people and make coorporation between them more efficient. Our customers get top professionals who handle their case.</p>
          </div>
          <div className='p-5 flex items-center gap-x-10'>
            <button className='btn btn-sm'>Hire a pro</button>
            <span className='cursor-pointer hover:scale-110 transition-all'>See <b>bextron</b> in  action.</span>
          </div>
          <div className='p-5'>
            <span className='uppercase text-white/40 text-[17px]'>Trusted by</span>
          </div>
          <hr className='text-white/40' />
          <div className='p-5 flex gap-x-10 items-center text-[30px] text-white/30'>
            <span className='cursor-pointer hover:scale-110 transition-all'>utbrain</span>
            <span className='cursor-pointer hover:scale-110 transition-all'>Phantom</span>
            <span className='cursor-pointer hover:scale-110 transition-all'>Combinator</span>
          </div>
        </div>
        <div className='flex-1 bg-white/50'>
          <div className='flex items-center p-5 mx-auto max-w-max gap-x-10 font-semibold'>
            <span className='cursor-pointer hover:scale-110 transition-all'>Freelancers</span>
            <span className='cursor-pointer hover:scale-110 transition-all'>Community</span>
            <span className='cursor-pointer hover:scale-110 transition-all'>Blog</span>
            <button className='btn btn-sm'>Hire a pro</button>
          </div>
          <div>
            <MyCarousel />
          </div>
        </div>
      </div>
    </div>
  )
}

const MyCarousel = () => {
  return (
    <Carousel className='w-[35rem] max-w-max mx-auto p-10 shado shadow-xl' autoPlay infiniteLoop showArrows={true} showThumbs={false} showStatus={false}>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
      <div>
        <img src={img4} alt="" />
      </div>
      <div>
        <img src={img5} alt="" />
      </div>
      <div>
        <img src={img6} alt="" />
      </div>
    </Carousel>
  )
}

export default App
