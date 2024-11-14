import './Background.css'
import video1 from '../../Assets/video1.mp4'
import image2 from '../../Assets/image2.jpg'
import image6 from '../../Assets/image6.png'
import image8 from '../../Assets/image8.jpg'


const Background = ({playStatus,heroCount}) => {
  
    if (playStatus){
      return (
        <video className='background fade-in' autoPlay loop muted>
          <source  src={video1} type='video/mp4'/>
        </video>
      )
    }
    else if (heroCount===0)
    {
      return <img src={image2} loading='eager' className='background fade-in' alt="" />
    }
    else if (heroCount===1)
    {
      return <img src={image8} loading='eager' className='background fade-in' alt="" />
    }
    else if (heroCount===2)
    {
      return <img src={image6} loading='eager' className='background fade-in' alt="" />
    }
}

export default Background