import image1 from './assets/techimage1.png';
import image2 from './assets/techimage2.png';
import image3 from './assets/techimage3.png';
import { motion } from 'framer-motion';
function TechSkills()
{
    return(
        <div className="tech-skills-container">


            <motion.div className="tech-skills-card"
            initial={{ opacity: 0, x: -50 }}       
            whileInView={{ opacity: 1, x: 0 }}    
            transition={{ duration: 0.7, ease:"easeInOut"}}        
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0px 2px 17px 0px rgba(1, 225, 255, 0.75)"}} 
            >
            <div className="tech-logo-div">
            <img alt="tech-logo" src={image1} className='tech-images' />
            </div>
            <div className='tech-skills-title'>
            <h2>Full-Stack <span className='colorp'>Development.</span></h2>
            </div>

            <div className='tech-skills-description'>
            <p>I have experience building both the front-end and back-end of web applications. I enjoy creating complete solutions, from beautiful interfaces to robust server logic.</p>
            </div>

            </motion.div>

            <motion.div className="tech-skills-card"
            initial={{ opacity: 0, y: -50 }}       
            whileInView={{ opacity: 1, y: 0 }}    
            transition={{ duration: 0.7, ease:"easeInOut"}}        
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0px 2px 17px 0px rgba(1, 225, 255, 0.75)"}} 
            
            
            
            
            >
            <div className="tech-logo-div">
            <img alt="tech-logo" src={image2} className='tech-images' />
            </div>
            <div className='tech-skills-title'>
            <h2>Problem <span className='colorp'>Solver.</span></h2>
            </div>

            <div className='tech-skills-description'>
            <p>I love tackling challenges with creative and logical thinking. Whether debugging complex issues or designing scalable architectures, I always aim for clean and effective solutions.</p>
            </div>

            </motion.div>
            <motion.div className="tech-skills-card"
            initial={{ opacity: 0, x: 50 }}       
            whileInView={{ opacity: 1, x: 0 }}    
            transition={{ duration: 0.7, ease:"easeInOut"}}        
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: "0px 2px 17px 0px rgba(1, 225, 255, 0.75)"}} 
            
            
            
            
            >
            <div className="tech-logo-div">
            <img alt="tech-logo" src={image3} className='tech-images' />
            </div>
            <div className='tech-skills-title'>
            <h2>Attention to <span className='colorp'>Detail.</span></h2>
            </div>

            <div className='tech-skills-description'>
            <p>Small details make a big difference. I focus on writing clean code, designing intuitive user experiences, and delivering polished final products.</p>
            </div>

            </motion.div>
            
            
            
            </div>
    );
}


export default TechSkills