import React from 'react'
// import projectsData from '../assests/data/projectsData.json'
import ReactCardFlip from 'react-card-flip';
const Projects = ({project}) =>{
    console.log(project)

    const [isFlipped, setIsFlipped] = React.useState(false)
        // this.state = {
        //     isFlipped: false
        // }
    

    // handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     this.setState((prevState) => ({
    //         isFlipped: !prevState.isFlipped
    //     }))
    // }

        return(
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div className="projects" >
                            <h1>{project.projectName}</h1>
                            <h4>Add an image here from the project</h4>
                            <h4>Built With: {project.languages}</h4>
                            <button onClick={() => setIsFlipped((prev) => !prev)}>Links</button>
                        </div>
                        <div className="projects-back" >
                            <a href={project.githubLink}><i class="fab fa-github"></i></a>|<a href={project.youtubeLink}><i class="fab fa-youtube"></i></a><br></br>
                            <button onClick={() => setIsFlipped((prev) => !prev)}>Back</button>
                        </div>
                </ReactCardFlip>
                // maybe add back in onMouseEnter and onMouseLeave
        )

}
export default Projects 