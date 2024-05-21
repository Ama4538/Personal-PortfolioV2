import Nav from './Nav'

function HeadSection() {
    return (
    <header>
        <div className = "header-content--primary">
            <h1 className = "header-content__title--primary">Kevin Ly</h1>
            <section className = "header-content__about--primary"></section>
            <div className= "header-content__wrapper--primary">
                <section className = "header-content__contact--primary"></section>
                <section className = "header-content__resume--primary"></section>
            </div>
        </div>

        <div className = "header-content--secondary">
            <section className = "header-content__projects--secondary"></section>
            <Nav></Nav>
        </div>
    
    </header>
    )
}

export default HeadSection;