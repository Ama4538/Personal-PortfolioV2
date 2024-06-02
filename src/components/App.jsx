import Nav from './Nav'
import HeadSection from './HeadSection'
import ProjectsSection from './ProjectsSection'
import AboutSection from './AboutSection'
import project from '../data.json'
import Footer from './Footer'

function App() {
    return (
        <>
            <Nav></Nav>
            <HeadSection projectAmount={project.projects.length}></HeadSection>
            <ProjectsSection projectArray={project.projects}></ProjectsSection>
            <AboutSection></AboutSection>
            <Footer></Footer>
        </>
    )
}

export default App;