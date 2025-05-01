import profileImg from './assets/profile2.png';
import {easeIn, motion,useScroll,useTransform} from "framer-motion";

function HomePage()
{               

  return(
    <div className="homepage-div">
      <div className='homepage-text'>
            <motion.h1
            initial={{ opacity: 0, y: -50 }}       
            whileInView={{ opacity: 1, y: 0 }}    
            transition={{ duration: 1.0, ease:"easeInOut"}}        
            viewport={{ once: true }}            
            >Carlos <span className='colorp'>Manuel</span>.</motion.h1>
  
        </div>
        <div className="homepage-contenido">
           <div className='homepage-imagen'>
            <img className='profileimage0' src={profileImg} alt="Foto de perfil" />
            </div>
        </div>
        <motion.div className='homepage-text-footer'
        initial={{ opacity: 0, y: 100 }}       
        whileInView={{ opacity: 1, y: 0 }}    
        transition={{ duration: 1.0, ease:"easeInOut"}}        
        viewport={{ once: true }}  
        >
            <h1><span className='colorp'>Software</span> Developer.</h1>
        </motion.div>
    </div>
  );  
}

export default HomePage