import React, {Component} from 'react'
import Projects from '../components/Projects'
// import ReactCardFlip from 'react-card-flip';
import projectsData from '../assests/data/projectsData.json' 

class ProjectsContainer extends Component{
    constructor(){
    super()
        this.state = {
            isFlipped: false
        }
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            isFlipped: !prevState.isFlipped
        }))
        console.log(e)
    }
    render(){
        return(
            projectsData.map((p) => {
                console.log(p)
                return <div id="projects-div">
                        <Projects handleClick={this.handleClick} flipped={this.state.isFlipped} key={p.id} projectName={p.projectName} languages={p.languages} githubLink={p.githubLink} youtubeLink={p.youtubeLink}/> 
                </div>


            }
          
            )

        )
    }
}

export default ProjectsContainer