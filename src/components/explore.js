const cities = [
    {name : "Tunis", img : "https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240" , time : "Temps de trajet: 15min"},
    {name : "Marsa", img : "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240", time : "Temps de trajet: 30min"},
    {name : "Klebia", img : "https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240", time : "2 heures de route"},
    {name : "Yasmine Hammamet", img : "https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240", time : "1 heure de route"},
    {name : "Hammamet Sud", img : "https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240", time : "1 heure de route"},
    {name : "Hergla", img : "https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240", time : "1.5 heures de route"},
    {name : "Korba", img : "https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240", time : "1.5 heures de route"},
    {name : "Aghir", img : "https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240", time : "8 heures de route"}
 ]
 
 function City(props){
    return(
       <div className="city">
           <img className="explore-img" src={props.img}/>
           <div>
             <b>{props.name}</b>
             <p>{props.time}</p>
           </div>
       </div>
    )
 }
 
 function Cities() {
    return(
     <div className="container">
       <div className="cities">
          {cities.map(element =>
            <div>
               <City name = {element.name} img = {element.img} time = {element.time}/>     
            </div>
          )}
       </div>
     </div>
    )
 }
 export default Cities