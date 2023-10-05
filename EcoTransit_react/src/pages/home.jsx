import './../style/home.scss'
import HomeCard from './../elements/card.jsx'
const Home = ()=>{
    return(
        <main>
        <section className='landing'>
            <h1>homePage</h1>
        </section>
        <section className='cardContainer'>
        <HomeCard/>
        </section>
        </main>

    )
}

export default Home