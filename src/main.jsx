import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './NavBar.jsx'
import HomePage from './HomePage.jsx'
import SkillsPage from './SkillsPage.jsx'
import About from './About.jsx'
import Titulo from './title.jsx'
import BounceFooter from './BounceFooter.jsx'
import Projects from './Projects.jsx'
import Footer from "./Footer";
import Contact from './Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <HomePage></HomePage>
    <BounceFooter></BounceFooter>
    <Titulo title={"My Work"} id={"Projects"}/>
    <Projects></Projects>
    <Titulo title={"About."} id={"About"}/>
    <About></About>
    <Titulo title={"Skills."} id={"Skills"}/>
    <SkillsPage></SkillsPage>
    <Contact></Contact>
    <Footer></Footer>
  </StrictMode>

)
