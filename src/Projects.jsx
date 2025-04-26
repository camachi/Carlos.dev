import profileImg from './assets/profile5.png';
import p1 from './assets/M2.png';
import p2 from './assets/M5.png';
import p3 from './assets/M8.png';
import p4 from './assets/M4.png';
import p5 from './assets/M6.png';
import p6 from './assets/M7.png';
import ProjectsCard from './projects-card';
import ProjectsText from './projects-text';
function Projects()
{
    return(
        <div className="projects-div">
                <div className="projects-content">
                    <div className="projects-logo">
                    <img className='profileimage' src={profileImg} alt="logo" />
                    </div>
                    
                    <div className="projects-container-card">
                    <ProjectsCard image={p2}></ProjectsCard>
                    <ProjectsText title={"3D Intros - Freelance"} skills={['Hmtl','CSS','JavaScript','React','Api']} code={"https://github.com/camachi/3DIntros"} link={"https://camachi.github.io/3DIntros/"} description={"-Built an e-commerce site with React, HTML, CSS, and JavaScript. Integrated PayPal API to handle payments."}></ProjectsText>
                    <ProjectsCard image={p1}></ProjectsCard>
                    <ProjectsText title={"DB Libros - Intership"} skills={['Hmtl','CSS','JavaScript','Electron',"Sql"]} description={"-Developed a Windows app with Electron and SQL to help professors recommend books and generate reports."}></ProjectsText>
                    <ProjectsCard image={p3}></ProjectsCard>
                    <ProjectsText title={"Crypto Overwatch"} skills={['Hmtl','CSS','JavaScript','Api']} description={"-Developed a web page using HTML, CSS, and JavaScript to display the top cryptocurrencies by fetching live data from an API."}></ProjectsText>
                    <ProjectsCard image={p4}></ProjectsCard>
                    <ProjectsText title={"Key Exchange"} skills={['Hmtl','CSS','JavaScript','Sql','Php']} description={"-Built a web app with PHP, HTML, CSS, and SQL to manage company keys, featuring secure login and full admin controls."}></ProjectsText>
                    <ProjectsCard image={p5}></ProjectsCard>
                    <ProjectsText title={"Web Pokedex"} skills={['Hmtl','CSS','JavaScript','Api']} description={"-Built a web application with JavaScript that allows users to search for Pokémon and view their stats by fetching data from an API."}></ProjectsText>    
                    <ProjectsCard image={p6}></ProjectsCard>
                    <ProjectsText title={"Game Development"} skills={['UE5','C++','C#','Unity','Blender']} description={"-Game developer skilled in C#, C++, Blueprints, Unreal Engine 5, and Unity, with experience creating gameplay systems through code and visual scripting."}></ProjectsText>
                    </div>
                    
                </div>
        </div>
    );
}

export default Projects