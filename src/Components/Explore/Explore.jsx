import './Explore.css'
import Moto1 from '../../Assets/Moto1.png'
import Moto2 from '../../Assets/Moto2.png'
import Moto3 from '../../Assets/Moto3.png'
import sci from '../../Assets/sci.png'
import Moto5 from '../../Assets/Moto5.png'
import Moto7 from '../../Assets/Moto7.png'
import Moto8 from '../../Assets/Moto8.png'
import Moto9 from '../../Assets/Moto9.png'
import Moto11 from '../../Assets/Moto11.png'
 

const Explore = () => {
  return (
    <div class="car-card">
    <h1>Explore the Latest Car For Sale</h1>
        <div class="car-box">
            <div class="box">
                <img src={Moto1} alt="Toyota Corolla" />
                <p>Toyota Corolla</p>
            </div>
            <div class="box">
                <img src={Moto2} alt="Lexus IS 300" />
                <p>Lexus IS 300</p>
            </div>
            <div class="box">
                <img src={Moto3} alt="GLE 450" />
                <p>Mercedes Benz GLE 450</p>
            </div>
            <div class="box">
                <img src={sci} alt="Toyota Sienna" />
                <p>Toyota Sienna</p>
            </div>
            <div class="box">
                <img src={Moto5} alt="Honda" />
                <p>Honda</p>
            </div>
            <div class="box">
                <img src={Moto7} alt="Toyota Avalon XLE" />
                <p>Toyota Avalon XLE</p>
            </div>
            <div class="box">
                <img src={Moto8} alt="Toyota Camry LE" />
                <p>Toyota Camry LE</p>
            </div>
            <div class="box">
                <img src={Moto9} alt="Lexus IS 350" />
                <p>Lexus IS 350</p>
            </div>
            <div class="box">
                <img src={Moto11} alt="Toyota Avalon XSE" />
                <p>Toyota Avalon XSE</p>
            </div>
        </div>
   </div>


    
  )
}

export default Explore