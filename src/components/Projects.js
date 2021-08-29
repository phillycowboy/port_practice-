import React from 'react'
// import projectsData from '../assests/data/projectsData.json'
import ReactCardFlip from 'react-card-flip';
const Projects = (props) =>{
    // console.log(props)
    // constructor(){
    //     super()
    //     this.state = {
    //         isFlipped: false
    //     }
    // }

    // handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     this.setState((prevState) => ({
    //         isFlipped: !prevState.isFlipped
    //     }))
    // }

        return(
            // projectsData.map(p => 
                // console.log(p)
                <ReactCardFlip isFlipped={props.flipped} flipDirection="horizontal">
                        <div className="projects">
                            <h1>{props.projectName}</h1>
                            <h4>Add an image here from the project</h4>
                            <h4>Built With: {props.languages}</h4>
                            <button onClick={props.handleClick}>Links</button>
                        </div>
                        <div className="projects-back">
                            <a href={props.githubLink}><i class="fab fa-github"></i></a>|<a href={props.youtubeLink}><i class="fab fa-youtube"></i></a>
                            <button onClick={props.handleClick}>Info</button>
                        </div>
                </ReactCardFlip>
            // )
        )

}
export default Projects 