import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/chatbot.png";
import projImg1 from "../assets/img/hh.jpg";
import projImg2 from "../assets/img/openvino.jpg";
import projImg3 from "../assets/img/download.png";
import projImg5 from "../assets/img/farmer.jpg";
import projImg6 from "../assets/img/waste.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "IIT Bombay (FOSSEE)",
      description: "(Free/Libre and Open Source Software for Education) project promotes the use of FLOSS tools to improve the quality of education in our country",
      imgUrl: projImg1,
    },
    {
      title: "Intel® Distribution of OpenVINO™ Toolkit",
      description: "Optimize and deploy AI inference. Boost deep learning performance in computer vision, automatic speech recognition, NLP, and more.",
      imgUrl: projImg2,
    },
    {
      title: "VCET SOLECTHON (Autonomous Car)",
      description: "Here at VCET SOLECTHON we design and manufacture Solar Powered Electric vehicles, contributing to a sustainable and pollution free environment.",
      imgUrl: projImg3,
    },];

  const projects_2 = [
    {
      title: "Music Recommending Chatbot",
      description: "Deployed Using Anvil & Google Colab. Used NLP to make computer to communicate with humans in their own language and scales other language-related tasks",
      imgUrl: projImg4,
    },
    {
      title: "Metadata Farmer Assistance WebApp",
      description: "Deployed Using Flask",
      imgUrl: projImg5,
    },
    {
      title: "Waste Classification WebApp + Android App",
      description: "Image-Classification-App-with-Custom-TensorFlow-Model",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Organization</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <h1 style={{ textAlign: 'center' }}>Collaborator at these organizations</h1>
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                        <h1 style={{ textAlign: 'center' }}>MY ROLE</h1>
                        <p>1.) FOSSEE:- Analyzing and resolving software defects and inconsistencies
                          through meticulous debugging and error resolution techniques.
                          Implementing effective bug-fixing strategies to enhance the
                          stability and performance of the software system.</p>
                        <p>2.) OPENVINO:- Software Engineer  (Contributor) at OpenVINO (Open Source Project).
                          Resolved and removed test-generator extension, adopted unittest's subTest for Model Optimizer
                          Enhanced testing suite maintainability and reliability, ensuring better test isolation
                          Contributed to OpenVINO, showcasing Python, unittest, and open-source skills.</p>
                        <p>3.) VCET SOLECTHON(LEAD @ Controler system):-
                          <b>Developed App to control vehicle through Mobile (Android)</b>,
                          Used Micro-Controllers like Arduino & Raspberry pi and Jetson TX2,
                          Used critical thinking to break down problems, evaluate solutions and
                          make decisions.
                          Skilled at working independently and collaboratively in a team
                          environment.
                          Worked flexible hours across night, weekend and holiday shifts.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects_2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                        <p> 1.) Music Recommending Chatbot :- Jambot is a web app where user will converse with Jambot (Chatbot) and on the basis of the chats, the emotion of the user will be judged by IBM Tone Analyzer and songs will be recommended using Last.fm API on the basis of emotion predicted.

                          Resources
                        </p>
                        <p>2.) Metadata Farmer Assistance WebApp:-
                          Developed Flask-based farmer assistant with crop quality assessment, yield prediction, disease and weed detection features. Enabled farmers to optimize crop production, make informed decisions, and mitigate losses. Streamlined agricultural practices and improved crop management through user-friendly interface.</p>
                        <p>3.) Waste Classification WebApp + Android App:- To process the image, the system integrates a Tensorflow Lite model specifically designed for waste detection. This model consists of 28 layers that perform feature extraction on the resized image. Through this process, relevant features and characteristics of the waste material are extracted and analyzed, enabling accurate classification into appropriate waste categories. </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">

                        <p style={{ color: "#B8B8B8", fontsize: "30px", letterspacing: "0.8px", lineheight: "1.5em", width: "100%" }}>



                          <h1>Collaborator - IIT Bombay (FOSSEE)</h1>
                          May 2023 - Present<br></br>
                          I am currently involved in the FOSSEE project at IIT Bombay, where I work on improving open-source software tools for educational purposes.

                          <br></br>
                          <br></br>

                          <h1>Autonomous Engineer - VCET-SOLECTHON (Autonomous Car)</h1>
                          Mar 2021 - Present<br></br>
                          As a lead in the CONTROLLER SYSTEM, I contributed to the development of a mobile app that enables vehicle control using Arduino, Raspberry Pi, and Jetson TX2.
                          <br></br>
                          <br></br>

                          <h1>Full Stack Web Developer Intern - PEKA CONSULTANCY</h1>
                          Jan 2022 - Mar 2022<br></br>
                          During my internship, I gained proficiency in building scalable web applications using PHP Laravel and XAMPP.
                          <br></br>
                          <br></br>

                          <h1>Magazine Editor - BYTE COMMITTEE</h1>
                          Oct 2021 - Apr 2023<br></br>
                          I managed a team of writers and editors, ensuring high-quality and engaging content for the magazine.
                          <br></br>
                          <br></br>

                          <h1>* * * * * Community Involvement * * * * *</h1>


                          <b>NSS Committee</b><br></br>
                          As part of the NSS Committee, I have participated in Blood and Clothes donation camps and conducted surveys for the government.
                          <br></br>
                          <br></br>

                          <h1>* * * * * Education * * * * *</h1>


                          <b>Bachelor Of Engineering (Computer Engineering)</b>
                          Currently pursuing my degree at Vidyavardhini's College of Engineering & Technology.
                          <br></br>
                          <br></br>

                          <h1>* * * * * Skills * * * * *</h1>

                          Proficient in C/C++, Java, JavaScript, Python, Flutter, Arduino, Raspberry Pi, Jetson TX2, OpenCV, PHP, TypeScript, and AIML.

                          <br></br>
                          <br></br>
                          <h1>* * * * * Hobbies * * * * *</h1>

                          I enjoy computer and mobile repairing, as well as engaging in reverse engineering activities.

                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section >
  )
}
