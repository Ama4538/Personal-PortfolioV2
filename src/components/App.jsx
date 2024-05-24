import HeadSection from './HeadSection'
import ProjectsSection from './ProjectsSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import project from '../data.json'

function App() {


    return (
        <>
            <HeadSection projectAmount = {project.projects.length}></HeadSection>
            <ProjectsSection projectArray = {project.projects}></ProjectsSection>
            <AboutSection></AboutSection>
            <ContactSection></ContactSection>
        </>
    )
}

export default App;