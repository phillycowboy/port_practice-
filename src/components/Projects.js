import React, {Component} from 'react'
import projectsData from '../assests/data/projectsData.json'
class Projects extends Component{
    render(){
        return(
            projectsData.map((p) =>{

             return   <div id="projects">
                        <h1>{p.projectName}</h1>
                        <h4>Add an image here from the project</h4>
                        <a href={p.githubLink}><i class="fab fa-github"></i></a>|<a href={p.youtubeLink}><i class="fab fa-youtube"></i></a>
                        <h4>Built With: {p.languages}</h4>
                      </div>
            })
        )
    }
}
export default Projects 