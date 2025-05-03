import { motion } from "framer-motion";

function Titulo ({title,id})
{
    return(
        <div className="title-div">
            <motion.div className="title-line" id={id}
            initial={{ width: "0%"}}       
            whileInView={{ width: "80%" }}    
            transition={{ duration: 0.5, ease:"easeInOut"}}        
            viewport={{ once: true }} 
            style={{ overflow: "hidden" }}   
            
            >
                <motion.h1
                initial={{ opacity: 0}}       
                whileInView={{ opacity: 1 }}    
                transition={{ duration: 1.4, ease:"easeInOut"}}        
                viewport={{ once: true }}   
                
                
                >{title}</motion.h1>
            </motion.div>
        </div>
    );
}
export default Titulo