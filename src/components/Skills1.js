import js from "../assets/img/js.png";
import typescript from "../assets/img/typescript.svg";
import react from "../assets/img/react.png";
import next from "../assets/img/next.svg";
import redux from "../assets/img/redux.svg";
import express from "../assets/img/express.png";
import sequelize from "../assets/img/sequelize.png";
import postgresql from "../assets/img/postgresql.png";
import figma from "../assets/img/figma.png";
import github from "../assets/img/github.png";
import css from "../assets/img/css.png";
import tailwind from "../assets/img/tailwind.svg";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills1 = () => {
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
                        <h2>Tech Skills</h2>
                        <p>The main technologies that I have used and know are: <br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={js} alt="js" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Ts" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="react" />
                                <h5>React js</h5>
                            </div>
                            <div className="item">
                                <img src={next} alt="next" />
                                <h5>Next js</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="redux" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="express" />
                                <h5>Express js</h5>
                            </div>
                            <div className="item">
                                <img src={sequelize} alt="sql" />
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="Psql" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="figma" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="gh" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="tw" />
                                <h5>Tailwind</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="BgImage" />
    </section>
  )
}
