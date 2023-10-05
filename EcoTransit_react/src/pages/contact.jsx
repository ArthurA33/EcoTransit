import './../style/contact.scss'
// import Head from './connexionPages/elements/head'
// import Container from './connexionPages/elements/container'
// import Valid from './connexionPages/elements/submit'
const Contact = ()=>{
    return(
        <main>
            <section>
                <div>
                    <h1>Contactez nous via ce formulaire</h1>
                </div>
                <div className='parent-form'>
                    <form action="/contact" method="post">
                        <h2>Contact</h2>
                        <div className='parent-content-form'>
                            <label htmlFor="">Adresse mail</label>
                            <input type="text" />
                        </div>
                        <div className='parent-content-form'>
                            <label htmlFor="">Objet du message</label>
                            <input type="text" />
                        </div>
                        <div className='parent-content-form'>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button className='button-from' type="submit">Envoyer votre message</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>     
    )
}

export default Contact