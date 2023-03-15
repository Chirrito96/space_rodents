import leadership from "../assets/img/leadership.png";
import comunication from "../assets/img/comunication.png";
import proactive from "../assets/img/proactive.png";
import teamwork from "../assets/img/teamwork.png";
import scrum from "../assets/img/scrum.png";
import emphaty from "../assets/img/emphaty.png";
import autodidact from "../assets/img/autodidactic.png";
import planning from "../assets/img/planning.png";

import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills2 = () => {
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
                        <h2>Soft Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={leadership} alt="Image" />
                                <h5>LeaderShip</h5>
                            </div>
                            <div className="item">
                                <img src={comunication} alt="Image" />
                                <h5>Communicative</h5>
                            </div>
                            <div className="item">
                                <img src={proactive} alt="Image" />
                                <h5>Proactive</h5>
                            </div>
                            <div className="item">
                                <img src={teamwork} alt="Image" />
                                <h5>Teamwork</h5>
                            </div>
                            <div className="item">
                                <img src={scrum} alt="Image" />
                                <h5>SCRUM</h5>
                            </div>
                            <div className="item">
                                <img src={emphaty} alt="Image" />
                                <h5>Emphaty</h5>
                            </div>
                            <div className="item">
                                <img src={autodidact} alt="Image" />
                                <h5>Autodidact</h5>
                            </div>
                            <div className="item">
                                <img src={planning} alt="Image" />
                                <h5>Planning and Organization</h5>
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
