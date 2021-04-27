const cards = [
    {title : "Collection à la une : Envies d'évasion", link : "https://www.airbnb.fr/s/all?refinement_paths%5B%5D=%2Fplaylists%2F46390&last_search_session_id=89d1f2a2-caa6-43ea-89ef-589ca6b5eaf7&search_type=section_navigation", img : "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320", description : "Voyagez depuis chez vous grâce aux expériences en ligne."},
    {title : "Expériences en ligne", link : "https://www.airbnb.fr/s/experiences/online", img : "https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320" , description : "Activités interactives en direct, animées par des hôtes."},
    {title : "Expériences", link : "https://www.airbnb.fr/s/experiences?location_search=NEARBY", img : "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320" , description : "Prenez part à des activités locales, où que vous soyez."}  
]

function Experience(props){
    return(
        <div className="mr-3">
        <img className=" my-2 experience-img" src={props.img}/>
        <a href={props.link} target="_blank"><p>{props.title}</p></a>
        <p className="exp-paragraph">{props.description}</p>
       
    </div>
     
    )
 }
 
 function Experiences() {
    return(
     <div className="container mb-5">
        <h1 className="mt-5 mb-3">Découvrez les expériences</h1>
        <h4  className="exp-paragraph" >Des activités uniques avec des experts locaux, en personne ou en ligne.</h4>
       <div className="d-flex">
          {cards.map(element =>
            <div>
               <Experience title = {element.title} link = {element.link} img = {element.img} description = {element.description}/>     
            </div>
          )}
       </div>
     </div>
    )
 }
 export default Experiences