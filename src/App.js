import React from "react";

// import css file
import "./App.css";

// importing AppBar
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

// import MenuIcon from '@mui/icons-material/Menu';
import ComputerIcon from "@mui/icons-material/Computer";

// images
import BannerImage from "./images/myDesk.jpg";
import CultureScreenHomepage from "./images/0.culture-screen-homepage.jpg";
import AlgebraAppImg from "./images/1.algebra-app.jpg";
import RetroCornerImg from "./images/2.retro-corner.jpg";
import JacobsFitnessImg from "./images/3.jacobs-fitness-studio.jpg";
import PayStubCalculatorImg from "./images/4.paystub-calculator.jpg";
// import CultureScreenPhotosImg from "./images/5.culture-screen-photography.jpg";
import ToDoListAppImg from "./images/7.todolistapp.jpg";
import WeatherAppImg from "./images/8. weather-app.jpg";
import PokeAPIImg from "./images/9. pokedex - pokeAPI.jpg";
import Photography from "./images/photography.jpg";
import Videography from "./images/videography.jpg";
import Camera from "./images/camera.png";

// documents
// import Resume from "./documents/resumeThomasPerez.pdf";
// import CoverLetter from "./documents/coverLetterThomasPerez.pdf";

// skillsBar Images
import HTMLimage from "./images/html.png";
import CSSimage from "./images/css3.png";
import JSimage from "./images/javascript1.png";
import REACTimage from "./images/react.png";
import GITHUBimage from "./images/github.png";

// importing Button, Button Group, and Icons
import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// importing form/text field
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// importing form text response box
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import MyFormHelperText from "@mui/material/FormHelperText";

// Button, Button Group, and Icons
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar color="secondary">
          <Toolbar>
            <ComputerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <IconButton></IconButton>
            <div className="navbar">
              <Typography variant="h5" align="center">
                PEREZ WEB DEVELOPMENT
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <img src={BannerImage} alt="logo" className="BannerImage" />
        </div>

        <div className="skillsBar">
          <div>
            <img src={HTMLimage} alt="HTML" className="skills" />
          </div>
          <div>
            <img src={CSSimage} alt="HTML" className="skills" />
          </div>
          <div>
            <img src={JSimage} alt="HTML" className="skills" />
          </div>
          <div>
            <img src={REACTimage} alt="HTML" className="skills" />
          </div>
          <div>
            <img src={GITHUBimage} alt="HTML" className="skills" />
          </div>
        </div>

        <div className="myIntro">
          <Typography variant="h2" component="div" className="MyName">
            Thomas Perez
          </Typography>

          <p className="MyStory">
            My name is Thomas Perez. I am a front-end web developer. I love
            building websites, widgets and web applications. The technologies I
            mainly use are: HTML, CSS, Javascript, and React. I also use
            WordPress, MaterialUI, Tailwind, and Bootstrap depending on the
            needs of my clients. I edit my own media files using Photoshop and
            Final Cut Pro.
          </p>
          <a
            className="LinkedInButton"
            href="https://www.linkedin.com/in/thomas-perez-18432812?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bv530ttlaSSCPJ6cD84wgpA%3D%3D"
          >
            <Button
              startIcon={<LinkedInIcon />}
              size="large"
              variant="contained"
              color="primary"
            >
              My LinkedIn
            </Button>
          </a>
        </div>

        {/* 
        <ButtonGroup className="ButtonsToClick">
          <a href="./documents/resumeThomasPerez.pdf" download={Resume}>
            <Button
              // <a href="path_to_file" download="proposed_file_name">Download</a>
              startIcon={<YouTubeIcon />}
              size="large"
              variant="contained"
              color="primary"
            >
              Resume
            </Button>
          </a>
          <a
            href="./documents/coverLetterThomasPerez.pdf"
            download={CoverLetter}
          >
            <Button
              startIcon={<InstagramIcon />}
              size="large"
              variant="contained"
              color="secondary"
            >
              Cover Letter
            </Button>
          </a>
        </ButtonGroup> */}

        {/* 3-2-1 Rows of Apps */}
        <div className="tileContainer">
          <Typography variant="h2" component="div" className="portfolioTitle">
            My Portfolio
          </Typography>
          <p className="portfolioDescription">
            Here are some of my favorite and most recent projects. I have
            altered the designs and removed all client info such as logos and
            company information. Click on the images below for more details.
          </p>
          <div className="portfolioDescription">
            <b>Business Websites & Student Apps</b>
          </div>
          <div className="tiles">
            <div className="tileImage">
              <a href="https://culturescreen.netlify.app">
                <img
                  src={CultureScreenHomepage}
                  alt=" showing culture screen website"
                  className="ProjectImage"
                />
              </a>
              <p>
                <p>
                  <b>Culture Screen Homepage:</b>
                </p>
                This is the homepage of the Culture Screen YouTube channel.
                Created using HTML, CSS, and Bootstrap. Outlines the products
                and services sold by Culture Screen.
              </p>
            </div>

            <div className="tileImage">
              <a href="https://jacobsfitnessstudio.netlify.app">
                <img
                  src={JacobsFitnessImg}
                  alt=" showing jacobs fitness studio website"
                  className="ProjectImage"
                />
              </a>
              <p>
                <p>
                  <b>Jacob's Fitness Studio:</b>
                </p>
                Website for a NYC based personal trainer. Constructed using
                HTML, CSS, Javascript, and Tailwind CSS. Animations such as the
                slide in, card rotation and fade in are directly from Tailwind.
              </p>
            </div>

            <div className="tileImage">
              <a href="https://retrogamecorner.netlify.app">
                <img
                  src={RetroCornerImg}
                  alt=" showing retro gaming corner website"
                  className="ProjectImage"
                />
              </a>
              <p>
                <p>
                  <b>Retro Gaming Corner:</b>
                </p>
                An online repository of retro gaming consoles. Here you will
                find all home gaming consoles. Each thumbnail works as a direct
                link to its Wikipedia article.
              </p>
            </div>

            <div className="tileImage">
              <a href="https://algebra-quiz-app.netlify.app/">
                <img
                  src={AlgebraAppImg}
                  href="default.asp"
                  alt=" showing algebra diagnostic website"
                  className="ProjectImage"
                />
              </a>
              <p>
                <b>Algebra Diagnostic App:</b>
              </p>
              <p>
                Students take a quick diagnostic exam that allows them to see
                what academic standards they are weak in. Then students can
                begin studying to improve on those weaknesses. Created using
                vanilla javascript.
              </p>
            </div>
            <div className="tileImage">
              <a href="https://newyork-paystub-calculator.netlify.app">
                <img
                  src={PayStubCalculatorImg}
                  alt=" showing new york paystub calculator website"
                  className="ProjectImage"
                />
              </a>
              <p>
                <p>
                  <b>New York City Paystub Calculator:</b>
                </p>
                Single page app that calculates the total dollar amount new
                yorkers pay in taxes, social security, and medical insurance.
                Created using vanilla javascript.
              </p>
            </div>
            <div className="tileImage">
              <a href="https://studenttodolist.netlify.app">
                <img
                  src={ToDoListAppImg}
                  alt=" showing student to do list app"
                  className="ProjectImage"
                />
              </a>
              <p>
                <p>
                  <b>Student To Do List:</b>
                </p>
                This is a basic to do list app I created for students. The app
                saves the to do list to the devices memory. Its also perfect for
                professionals who don't want a dedicated app. This app was
                created using html, css, and javascript.
              </p>
            </div>
          </div>
          {/*  */}

          <div className="portfolioDescription">
            <b>API Consuming Apps</b>
          </div>
          <div className="firstProject">
            <div class="BannerImage">
              <a href="https://weatherize-me.netlify.app">
                <img
                  src={WeatherAppImg}
                  alt=" showing weather api website"
                  className="ProjectImage"
                />
              </a>
            </div>
            <div className="firstProjectDescription">
              <div className="firstAppTitle">
                <b>Weather App:</b>
              </div>{" "}
              Enter the name of your city and receive the maximum, minimum, and
              current temperatures. App consumes the OpenWeatherMapAPI and
              returns its data.
            </div>
          </div>

          <div className="firstProject">
            <div class="BannerImage">
              <a href="https://pokedex-api-app.netlify.app">
                <img
                  src={PokeAPIImg}
                  alt=" showing pokemon api website"
                  className="ProjectImage"
                />
              </a>
            </div>
            <div className="firstProjectDescription">
              <div className="firstAppTitle">
                <b>Pokedex App:</b>
              </div>{" "}
              Enter the name of the Pokemon you are interested in learning more
              about. Once the form is submitted with the Pokemon's name you'll
              receive their: photo, identification number, body weight, and
              height. This app consumes the PokeAPI Restful API and returns its
              data.
            </div>
          </div>
          {/*  */}

          {/* 
          <div className="firstProject">
            <div class="BannerImage">
                <img src={BannerImage} alt="logo" className="ProjectImage" />
            </div>
            <div className="firstProjectDescription">
              <div className="firstAppTitle">Fitness Tracker</div> Enter the
              foods you ate in the day. The app utilizes the USDA Nutrition
              Facts API as a way of calculating the calories you have consumed.
              You then enter the number of steps you have taken, the calories
              you have burned through active exercise, and the total hours of
              sleep you had.
            </div>
          </div>
          <div className="firstProject">
            <div className="firstProjectDescription">
              <div className="firstAppTitle">Paystub Calculator</div>I made this
              app when I lived in New York to help family and friends calculate
              how much they were paying in taxes and benefits.
            </div>
            <div class="BannerImage">
                <img src={BannerImage} alt="logo" className="ProjectImage" />
            </div>
          </div>
          <div className="firstProject">
            <div class="BannerImage">
                <img src={BannerImage} alt="logo" className="ProjectImage" />
            </div>
            <div className="firstProjectDescription">
              <div className="firstAppTitle">Paystub Calculator</div>I made this
              app when I lived in New York to help family and friends calculate
              how much they were paying in taxes and benefits.
            </div>
          </div>
          <div className="firstProject">
            <div className="firstProjectDescription">
              <div className="firstAppTitle">Paystub Calculator</div>I made this
              app when I lived in New York to help family and friends calculate
              how much they were paying in taxes and benefits.
            </div>
            <div class="BannerImage">
              <a href="">
                <img src={BannerImage} alt="logo" className="ProjectImage" />
              </a>
            </div>
          </div> */}
        </div>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Typography variant="h3">About Me</Typography>
        <p className="MyInterests">
          I love to code. I also enjoy learning above all else. Here are some of
          my interests and hobbies.
        </p>
        <div>
          <img src={Camera} class="camera-picture" alt="camera-png" />
        </div>
        <div className="myInterestsDescriptions">
          <div className="photography">
            <InstagramIcon /> Photography
            <p>
              I love capturing photos and respect how powerful they can be at
              conveying a message. Images connect us in ways words cannot.
            </p>
            <img src={Photography} alt="logo" className="BannerImage" />
          </div>
          <div className="videography">
            <YouTubeIcon /> Videography
            <p>
              Videos allow us to capture an experience like no other medium can.
              Videos provide us the opportunity to live an experience.
            </p>
            <img src={Videography} alt="logo" className="BannerImage" />
          </div>
        </div>

        <Typography variant="h3">Tell me about your business below.</Typography>
        <div class="signUpForm">
          <TextField
            className="formData"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            className="formData"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            className="formData"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />

          <FormControl sx={{ width: "25ch" }}>
            <OutlinedInput placeholder="What are your business needs?" />
            <MyFormHelperText />
          </FormControl>

          <div className="formSubmitButton">
            <a href="mailto:perezwebdevelopment@gmail.com">
              <Button size="large" variant="contained" color="secondary">
                Submit
              </Button>
            </a>
          </div>
        </div>
        <div className="callToAction">
          <p>Lets work together</p>
          <p>
            Send me an email, lets discuss how I can build your app or website.
          </p>
          <p>EMAIL: PerezWebDevelopment@gmail.com</p>
          <p>PHONE: 904-834-1399</p>
        </div>
      </header>

      <footer>
        <div className="footerBar">
          <div></div>
          <div>
            <p>
              <b>?? 2022 Perez Web Development, LLC</b>
            </p>
            <p>"Where the client is first."</p>
          </div>
          <div></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
