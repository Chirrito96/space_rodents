import leadership from "../assets/img/leadership.png";
import comunication from "../assets/img/comunication.png";
import proactive from "../assets/img/proactive.png";
import teamwork from "../assets/img/teamwork.png";
import scrum from "../assets/img/scrum.png";
import emphaty from "../assets/img/emphaty.png";
import autodidact from "../assets/img/autodidactic.png";
import planning from "../assets/img/planning.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
                        <p>The main soft skills in which I excel are:<br></br> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={leadership} alt="ls" />
                                <h5>LeaderShip</h5>
                            </div>
                            <div className="item">
                                <img src={comunication} alt="cm" />
                                <h5>Communicative</h5>
                            </div>
                            <div className="item">
                                <img src={proactive} alt="pa" />
                                <h5>Proactive</h5>
                            </div>
                            <div className="item">
                                <img src={teamwork} alt="tw" />
                                <h5>Teamwork</h5>
                            </div>
                            <div className="item">
                                <img src={scrum} alt="sc" />
                                <h5>SCRUM</h5>
                            </div>
                            <div className="item">
                                <img src={emphaty} alt="em" />
                                <h5>Emphaty</h5>
                            </div>
                            <div className="item">
                                <img src={autodidact} alt="ad" />
                                <h5>Autodidact</h5>
                            </div>
                            <div className="item">
                                <img src={planning} alt="pn" />
                                <h5>Planning and Organization</h5>
                            </div>
                                                  
                        
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="csp" />
    </section>
  )
}
