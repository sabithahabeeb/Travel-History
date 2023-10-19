import React, { useState } from 'react'
import './corosel.css'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'
import image10 from '../images/image10.jpg'
import { Link } from 'react-router-dom'

function Corosel() {
    const [count, setCount] = useState(0)
    const [margin, setMargin] = useState("0%")
    const [forward, setForward] = useState(true)

    const shiftImage = (count) => {
        switch (count) {
            case 0:
                setMargin("0%")
                break;
            case 1:
                setMargin("-10%")
                break; case 2:
                setMargin("-20%")
                break; case 3:
                setMargin("-30%")
                break; case 4:
                setMargin("-40%")
                break; case 5:
                setMargin("-50%")
                break;
                case 6:
                setMargin("-60%")
                break;
                case 7:
                setMargin("-70%")
                break;
                case 8:
                setMargin("-80%")
                break;
                case 9:
                setMargin("-90%")
                break;
            default:
                break;
        }

    }
    if(forward){
        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            if(count===10){
                setForward(false)
               }else{
                setCount(count + 1)
                shiftImage(count)
               }
          }, 1000);
            
        //   console.log(count );
        }
    }else{
        for (let i = 10; i > 0; i--) {
            setTimeout(() => {
              if(count===0){
                  setForward(true)
                 }else{
                  setCount(count - 1)
                  shiftImage(count)
                 }
            }, 1000);
              
          //   console.log(count );
          }

    }

    return (
        <>
            <div className="corosel-container mt-2 mb-5">
                <div className="images-container">
                    <div className="image" style={{marginLeft:margin}}>
                        <img src={image1} alt="image1" />
                    </div>
                    <div className="image">
                        <img src={image2} alt="image2" />
                    </div>
                    <div className="image">
                        <img src={image3} alt="image3" />
                    </div>
                    <div className="image">
                        <img src={image4} alt="image4" />
                    </div>
                    <div className="image">
                        <img src={image5} alt="image5" />
                    </div>
                    <div className="image">
                        <img src={image6} alt="image6" />
                    </div>
                    <div className="image">
                        <img src={image7} alt="image7" />
                    </div>
                    <div className="image">
                        <img src={image8} alt="image8" />
                    </div>
                    <div className="image">
                        <img src={image9} alt="image9" />
                    </div>
                    <div className="image">
                        <img src={image10} alt="image10" />
                    </div>
                </div>
            </div>


         
        </>
    )
}

export default Corosel