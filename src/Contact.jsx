
import arrowimg from './assets/linkimg.png';
import profileimg from './assets/profile6.webp';
import { motion } from 'framer-motion';
function Contact()
{
    return(
        <div className="contact-info-container">
            <div className="contact-title" id='Contact'>
                <motion.h2
                initial={{opacity:0, x: -20}}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{duration: 0.8,ease: "easeOut" }}
                viewport={{ once: true }}
                
                >CONTACT.</motion.h2>
            </div>
            <motion.div className="contact-description"
             initial={{opacity:0, x: -20}}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{duration: 0.8,ease: "easeOut" }}
             viewport={{ once: true }}
            >
                <p>I'm open to opportunities and collaborations — let's connect!</p>
            </motion.div>
            <div className="social-div">
            <div className="social-title">
            <motion.h3
            initial={{opacity:0, x: -20}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.8,ease: "easeOut" }}
            viewport={{ once: true }}
            >Email:</motion.h3>
            
            </div>
            <motion.div className="social-click-container"
            initial={{opacity:0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.8,ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <a href='mailto:carlosintelwork@gmail.com'><p>Click here <img className='link-img' src={arrowimg} alt="arrow image" /></p></a>
           </motion.div>


            </div>

            <div className="social-div">
            <div className="social-title">
            <motion.h3
            initial={{opacity:0, x: -20}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.8,ease: "easeOut" }}
            viewport={{ once: true }}
            >Linkedin:</motion.h3>
            </div>

            <motion.div className="social-click-container"
            initial={{opacity:0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.8,ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <a href='https://www.linkedin.com/in/carlos-camacho-3353a5324/'><p>Click here <img className='link-img' src={arrowimg} alt="arrow image" /></p></a>
           </motion.div>


            </div>

            <div className="social-div">
            <div className="social-title">
            <motion.h3
            initial={{opacity:0, x: -20}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.8,ease: "easeOut" }}
            viewport={{ once: true }}
            >Github:</motion.h3>  
            </div>

            <motion.div className="social-click-container"
            initial={{opacity:0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.8,ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <a href='https://github.com/camachi'><p>Click here <img className='link-img' src={arrowimg} alt="arrow image" /></p></a>
           </motion.div>

            </div>
            <div className='contact-profile-img-container'>
            <img className='profile-img-contact' src={profileimg} alt="arrow image" />
            </div>
        </div>
    
    );

}

export default Contact