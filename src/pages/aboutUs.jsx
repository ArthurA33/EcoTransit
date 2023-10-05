import Head from './../elements/nav'
import './../style/about.scss'


const About = ()=>{
    return(   
        <main>
    <h2> Notre équipe</h2>
        {/* <Head/> */}
        <section className="front">
              <h3>équipe Frontend</h3>        
        </section>
        <section className="back">
    <h3>équipe Backend</h3>
        </section>


        </main>
    )
}

export default About