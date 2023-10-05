import './../style/about.scss'
import { useEffect } from 'react';
const About = ()=>{
    useEffect(() => {
        document.title = "EcoTransit | Home"
    }, []);

    return(
        <main>
            <section className='parent-content'>
                <div className='parent-image-epsi'>
                    <img className='image-epsi' src="src/assets/epsi.jpg" alt="image" />
                </div>
                <div className='text'>
                    <p>Vos trajets plus Eco-Responsable est l'objectif de notre équipe !</p>
                </div>
                <div className='parent-profil'>
                    <div className='profil'>
                        <span className='name'>ANNARUMMA Arthur</span>
                        <span className='fonction'>Développeur Back-end</span>
                    </div>

                    <div className='profil'>
                        <span className='name'>BONNIN-JUNIOT Alexis</span>
                        <span className='fonction'>Développeur Front-end</span>
                    </div>

                    <div className='profil'>
                        <span className='name'>PIERRE Alexandre</span>
                        <span className='fonction'>Développeur Back-end</span>
                    </div>


                    <div className='profil'>
                        <span className='name'>DE MEULENEIRE Alexandre</span>
                        <span className='fonction'>Développeur Front-end</span>
                    </div>

                    <div className='profil'>
                        <span className='name'>LAFONTA Kévin</span>
                        <span className='fonction'>Développeur Back-end</span>
                    </div>

                    <div className='profil'>
                        <span className='name'>HUS Louis</span>
                        <span className='fonction'>Développeur Front-end</span>
                    </div>

                    <div className='profil'>
                        <span className='name'>DUMAS Léo</span>
                        <span className='fonction'>Développeur Back-end</span>
                    </div>

                    <div className='profil'>
                        <span className='name'>KONE Clément</span>
                        <span className='fonction'>Développeur Front-end</span>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default About