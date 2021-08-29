import React, {Component} from 'react'
import Projects from '../components/Projects'
// import ReactCardFlip from 'react-card-flip';
import projectsData from '../assests/data/projectsData.json' 

class ProjectsContainer extends Component{
    // constructor(){
    // super()
    //     this.state = {
    //         isFlipped: false
    //     }
    // }
    // handleClick = (e) => {
    //     e.preventDefault();
    //     this.setState((prevState) => ({
    //         isFlipped: !prevState.isFlipped
    //     }))
    //     console.log(e)
    // }
    render(){
        return(
            projectsData.map((project, index) => {
                // console.log(p)
                return <div id="projects-div">
                        <Projects key={index} project={project} /> 
                </div>


            }
          
            )

        )
    }
}

export default ProjectsContainer