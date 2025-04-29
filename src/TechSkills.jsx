import image1 from './assets/techimage1.png';
import image2 from './assets/techimage2.png';
import image3 from './assets/techimage3.png';
function TechSkills()
{
    return(
        <div className="tech-skills-container">


            <div className="tech-skills-card">
            <div className="tech-logo-div">
            <img alt="tech-logo" src={image1} className='tech-images' />
            </div>
            <div className='tech-skills-title'>
            <h2>Full-Stack <span className='colorp'>Development.</span></h2>
            </div>

            <div className='tech-skills-description'>
            <p>I have experience building both the front-end and back-end of web applications. I enjoy creating complete solutions, from beautiful interfaces to robust server logic.</p>
            </div>

            </div>

            <div className="tech-skills-card">
            <div className="tech-logo-div">
            <img alt="tech-logo" src={image2} className='tech-images' />
            </div>
            <div className='tech-skills-title'>
            <h2>Problem <span className='colorp'>Solver.</span></h2>
            </div>

            <div className='tech-skills-description'>
            <p>I love tackling challenges with creative and logical thinking. Whether debugging complex issues or designing scalable architectures, I always aim for clean and effective solutions.</p>
            </div>

            </div>
            <div className="tech-skills-card">
            <div className="tech-logo-div">
            <img alt="tech-logo" src={image3} className='tech-images' />
            </div>
            <div className='tech-skills-title'>
            <h2>Attention to <span className='colorp'>Detail.</span></h2>
            </div>

            <div className='tech-skills-description'>
            <p>Small details make a big difference. I focus on writing clean code, designing intuitive user experiences, and delivering polished final products.</p>
            </div>

            </div>
            
            
            
            </div>
    );
}


export default TechSkills