import profileImg from './assets/profile3.webp';
import arrowimg from './assets/arrow.png';
import { motion } from 'framer-motion';
function About()
{
    return(
       
            
        <div  className="aboutpage-div">
            <div className='aboutpage-contenido'>
            <div className="aboutpage-image-div">
            <img className='profileimage' src={profileImg} alt="Foto de perfil" />
            </div>
            </div>
            <div className='aboutcontent-fix-div'>
            <motion.div
            initial={{opacity:0, x: -100}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.8,ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.017, boxShadow: "0px 2px 17px 0px rgba(1, 225, 255, 0.75)"}}
            className='about-content-card'>
                <div className='about-card-title'>
                <h5>Hi, my name is</h5>
                </div>
                <div className='about-card-title'>
                <h1>Carlos Manuel.</h1>
                </div>
                <div className='about-card-title'>
                <h1><span className='colorp'>Software Developer</span>.</h1>
                </div>
                
                <p>
                 I'm a software developer with a strong passion for building web applications and interactive experiences.
                 I specialize in full-stack development using technologies like JavaScript, React, PHP, C#, and Sql.
                </p>
                <p>
                Outside of coding, I love gaming, collaborating on creative projects, and constantly learning new technologies that challenge me.
                </p>
                <p>
                I believe in clean, maintainable code and thoughtful UI/UX that enhances the user's journey.
                </p>
                <div className='about-card-title'>
                <a href="mailto:carlosintelwork@gmail.com"><button className='hireme-button'>Hire Me! <img className='arrow-image' src={arrowimg} alt="arrow image svg" /></button></a>
                
                </div>
                
                
            </motion.div>
            </div>
        </div>
    
    );
}

export default About