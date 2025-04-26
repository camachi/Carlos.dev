import profileImg from './assets/profile3.png';
function About()
{
    return(
       
            
        <div  className="aboutpage-div">
            <div className='aboutpage-contenido'>
            <div className="aboutpage-image-div">
            <img className='profileimage' src={profileImg} alt="Foto de perfil" />
            
            </div>
            
            <div className='about-content-card'>
                <h1>Hi!</h1>
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
            </div>
            </div>
        </div>
    
    );
}

export default About