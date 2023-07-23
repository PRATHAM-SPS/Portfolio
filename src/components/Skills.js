import meter1 from "../assets/img/react.png";
import meter2 from "../assets/img/angularjs.png";
import meter3 from "../assets/img/mongo-db.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import hmtlimg from "../assets/img/html.png";
import jsimg from "../assets/img/javascript.png";
import javaimg from "../assets/img/java.png";
import cppimg from "../assets/img/s.png";
import pythonimg from "../assets/img/python-language-logo.png";
import nvidiaimg from "../assets/img/nvidia.png";
import arduinoimg from "../assets/img/arduino.png";
import rapie from "../assets/img/raspberry-pi.png";
import flaskimg from "../assets/img/flask.png";
import mlimg from "../assets/img/machine-learning.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        
                        {<h4>Prefers Practical knowledge over Theoretical Knowledge</h4>
                        /* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                       <p>Practical knowledge takes precedence,featuring hands-on expertise and real-world applications, enriching our skill set through experiential learning, and enabling seamless problem-solving and pragmatic implementation in diverse operational scenarios</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Mongo Db</h5>
                            </div>
                            <div className="item">
                                <img src={hmtlimg} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={jsimg} alt="Image" />
                                <h5>Java Script</h5>
                            </div>
                            <div className="item">
                                <img src={flaskimg} alt="Image" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={cppimg} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={javaimg} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={pythonimg} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={nvidiaimg} alt="Image" />
                                <h5>Jetson TX2</h5>
                            </div>
                            <div className="item">
                                <img src={arduinoimg} alt="Image" />
                                <h5>Arduino</h5>
                            </div>
                            <div className="item">
                                <img src={rapie} alt="Image" />
                                <h5>Raspberry Pi</h5>
                            </div>
                            <div className="item">
                                <img src={mlimg} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
