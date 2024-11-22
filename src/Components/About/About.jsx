import './About.css'
import Client from '../../Assets/Client.jpg'


const About = () => {
  return (
    <div className="about-container">
        <div className="row">
            <div className="about-1">
                <img src={Client} alt="Dannybest-Autos CEO" />
            </div>
            <div className="about-2">
                <h1><span>About Dannybest-Autos</span></h1>
                <p className="hold">Welcome to Dannybest-Autos <br/> <b>&ldquo;</b>I’m passionate about connecting my customers with quality vehicles that meet their needs, budget, and lifestyle. Whether you’re looking for a stylish car for city driving or a powerful vehicle with more space, I ensure each option is selected with care and attention to detail. My goal is to make your car-buying experience smooth, transparent, and enjoyable. Come explore my inventory and see why Dannybest-Autos is a dealership you can trust in car sales.<b>&rdquo;</b></p>
                
                <div className="info">
                   <h5>Daniel A.U</h5>
                   <p>CEO | Dannybest-Auto</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About