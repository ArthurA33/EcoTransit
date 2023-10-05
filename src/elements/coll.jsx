import './../style/collComp.scss'
const CollComponent =()=>{
    const data = [
        {
            nom:" clément koné",
            role: "conceptoion et intégration du frontend", 
            tache: "créer et intégrer la maquette en react.js",
            technos: [
                'react',
                'figma', 
                'javascript'
            ]
        }
    ]
    return(
        <div className="container">
            <div className="image">
            </div>
            <div className="content">
                
            </div>
        </div>
    )
}

export default CollComponent