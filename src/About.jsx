import profileImg from './assets/profile3.png';
import arrowimg from './assets/arrow.png';
function About()
{
    return(
       
            
        <div  className="aboutpage-div">
            <div className='aboutpage-contenido'>
            <div className="aboutpage-image-div">
            <img className='profileimage' src={profileImg} alt="Foto de perfil" />
            
            </div>
            
            <div className='about-content-card'>
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
                <button className='hireme-button'>Hire Me! <img className='arrow-image' src={arrowimg} alt="arrow image svg" /></button>
                
                </div>
                
                
            </div>
            </div>
        </div>
    
    );
}

export default About