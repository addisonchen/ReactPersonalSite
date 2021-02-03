import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'
import WorkExperience from './WorkExperience'

export default function Home() {

    return (
        <div className="pageContainer home">
            <section className="sectionContainer Home" id="heroSection">
                <Hero />
            </section>

            <section className="sectionContainer Home" id="aboutMe">
                <AboutMe />
            </section>

            <section className="sectionContainer Home" id="workExperience">
                <WorkExperience />
            </section>

            <section className="sectionContainer Home" id="projects">
                <AboutMe />
            </section>

            <section className="sectionContainer Home" id="contact">

            </section>
        </div>
    )
}
