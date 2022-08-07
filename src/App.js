// import css file
import './App.css';

// importing AppBar
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

// import MenuIcon from '@mui/icons-material/Menu';
import ComputerIcon from '@mui/icons-material/Computer'

// banner photo
import BannerImage from './images/myDesk.jpg'

// skillsBar Images
import HTMLimage from './images/html.png'
import CSSimage from './images/css3.png'
import JSimage from './images/javascript1.png'
import REACTimage from './images/react.png'
import GITHUBimage from './images/github.png'

// importing Button, Button Group, and Icons
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';

// importing form/text field
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// importing form text response box
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MyFormHelperText from '@mui/material/FormHelperText';


// Button, Button Group, and Icons
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <AppBar color="secondary">
          <Toolbar>
          <ComputerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <IconButton>
            </IconButton>
            <Typography variant='h6'>
              Thomas Perez
            </Typography>
          </Toolbar>
        </AppBar>
          <div>
            <img src={BannerImage} alt="logo" className='BannerImage' />
          </div>

        <div className='skillsBar'>
          <div>
            <img src={HTMLimage} alt="HTML" className='skills'/>
          </div>
          <div>
            <img src={CSSimage} alt="HTML" className='skills'/>
          </div>
          <div>
            <img src={JSimage} alt="HTML" className='skills'/>
          </div>
          <div>
            <img src={REACTimage} alt="HTML" className='skills'/>
          </div>
          <div>
            <img src={GITHUBimage} alt="HTML" className='skills'/>
          </div>
        </div>

        <Typography variant='h2' component="div" className='MyName'>
          Thomas Perez
        </Typography>

        <p className="MyStory">
        My name is Thomas Perez. I am a front-end web developer. I enjoy building websites, widgets and web applications. The main technologies I use are: HTML, CSS, Javascript, and React. I also use WordPress, MaterialUI, and Bootstrap depending on the needs of my clients.
        </p>

        <ButtonGroup className='ButtonsToClick'>
          <Button
            startIcon={<YouTubeIcon/>}
            size='large'
            variant='contained' 
            color='primary'>
            YouTube
            </Button>

            <Button
            startIcon={<InstagramIcon/>}
            size='large'
            variant='contained' 
            color='secondary'>
            Instagram
            </Button>
          
        </ButtonGroup>



        {/* 1st Row of Apps */}
        <div className='tileContainer'>
          <Typography variant='h2' component="div" className='portfolioTitle'>
            Portfolio
          </Typography>
          <p className="portfolioDescription">
          Here are some of my favorite and most recent projects. I have altered the designs and removed all client info such as logos and company information. Click on the button below each description for more details.
          </p>
          <div className="tiles">        
            <div className="tileImage">
              <img src={BannerImage} alt="logo" className='BannerImage' />
            </div>
            <div className="tileImage">
              <img src={BannerImage} alt="logo" className='BannerImage' />
            </div>
            <div className="tileImage">
              <img src={BannerImage} alt="logo" className='BannerImage' />
            </div>
          </div>
          <div className="tiles">        
            <div className="tile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <div className='tileButton'>
              <Button
                endIcon={<WebIcon/>}
                size='large'
                variant='contained' 
                color='primary'>
                YouTube
              </Button>
              </div>
            </div>
            <div className="tile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <div className='tileButton'>
              <Button
                endIcon={<WebIcon/>}
                size='large'
                variant='contained' 
                color='primary'>
                YouTube
              </Button>
              </div>
            </div>          
            <div className="tile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <div className='tileButton'>
              <Button
                endIcon={<WebIcon/>}
                size='large'
                variant='contained' 
                color='primary'>
                YouTube
              </Button>
              </div>
            </div>
          </div>
          {/* 2nd Row of Apps */}
          <div className="tiles">        
            <div className="tileImage">
              <img src={BannerImage} alt="logo" className='BannerImage' />
            </div>
            <div className="tileImage">
              <img src={BannerImage} alt="logo" className='BannerImage' />
            </div>
            <div className="tileImage">
              <img src={BannerImage} alt="logo" className='BannerImage' />
            </div>
          </div>
          <div className="tiles">        
            <div className="tile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <div className='tileButton'>
              <Button
                endIcon={<WebIcon/>}
                size='large'
                variant='contained' 
                color='primary'>
                YouTube
              </Button>
              </div>
            </div>
            <div className="tile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <div className='tileButton'>
              <Button
                endIcon={<WebIcon/>}
                size='large'
                variant='contained' 
                color='primary'>
                YouTube
              </Button>
              </div>
            </div>          
            <div className="tile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <div className='tileButton'>
              <Button
                endIcon={<WebIcon/>}
                size='large'
                variant='contained' 
                color='primary'>
                YouTube
              </Button>
              </div>
            </div>
          </div>
          <div className='firstProject'>
          <div class="BannerImage">
            <img src={BannerImage} alt="logo" className='BannerImage' />
          </div>
          <div className='firstProjectDescription'>
            <div className='firstAppTitle'>Paystub Calculator</div>
            I made this app when I lived in New York to help family and friends calculate how much they were paying in taxes and benefits.
          </div>
        </div>
        </div>
        


        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Typography variant='h3'>
          About Me
        </Typography>
        <p className="MyInterests">
        I am a husband, a father, and I like to code. I also enjoy learning new things. Here are some of my interests and hobbies.
        </p>
        
        <div className='myInterestsDescriptions'>
          <div className='photography'> 
          <InstagramIcon/> Photography
           <p>I love capturing photos that remind me of where I am and where I've been.</p>
           <img src={BannerImage} alt="logo" className='BannerImage' />
          </div>
          <div className='videography'> 
          <YouTubeIcon/> Videography
          <p>Videos allow us to capture an experience like no other medium can.</p>
          <img src={BannerImage} alt="logo" className='BannerImage' />
          </div>

        </div>

        <Typography variant='h3'>
          Tell me about your business below.
        </Typography>
        <div class="signUpForm">
          <TextField className="formData" id="outlined-basic" label="First Name" variant="outlined" />
          <TextField className="formData" id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField className="formData" id="outlined-basic" label="Email Address" variant="outlined" />

          <FormControl sx={{ width: '25ch' }}>
            <OutlinedInput placeholder="What are your business needs?" />
            <MyFormHelperText />
          </FormControl>        

          <div className='formSubmitButton'>
              <Button
                size='large'
                variant='contained' 
                color='secondary'>
                Submit
              </Button>
          </div>
          
        </div>
        <div className='callToAction'>
        <p>Like what you see?</p>
        <p>Then shoot me an email or give me a call so we can discuss how I can build your app or website</p>
        <p>EMAIL: PerezWebDevelopment@gmail.com</p>
        <p>PHONE: 904-834-1399</p>
        {/* <p>115 Tidecrest Pkwy, Ponte Vedra, FL</p> */}
      </div>
      </header>

      <footer>

        <div className='footerBar'>

          <div></div>
          <div> 
            <p>© 2022 Perez Web Development, LLC</p>
            <p>"Where the client comes first."</p>
          </div>          
          <div></div>
        </div>
      </footer>
    </div>
  );
}

export default App;