const cities = [
    {name : "Tunis", img : "https://a0.muscache.com/im/pictures/31e445ed-8b69-477b-aefd-d04dae6d0bb1.jpg?im_q=medq&im_w=240" , time : "Temps de trajet : 15min", link : "https://www.airbnb.fr/s/Tunis/homes?place_id=ChIJQ_V-Xn8z_RIRdQJKcU6ScdY&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation"},
    {name : "Marsa", img : "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240", time : "Temps de trajet : 30min", link : "https://www.airbnb.fr/s/Marsa/homes?place_id=ChIJkdAn4-y04hIRof1TJXrwmkA&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation"},
    {name : "Klebia", img : "https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240", time : "2 heures de route", link : "https://www.airbnb.fr/s/Kelibia/homes?place_id=ChIJeZh74YwzHRMR83_2Le7iHDU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation"},
    {name : "Yasmine Hammamet", img : "https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240", time : "1 heure de route", link : "https://www.airbnb.fr/s/Yasmine-Hammamet/homes?place_id=ChIJ9R3ARZJj_RIRUEF6aUUIKIc&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation"},
    {name : "Hammamet Sud", img : "https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240", time : "1 heure de route", link : "https://www.airbnb.fr/s/Hammamet-Sud/homes?place_id=ChIJp4qMJ3th_RIRcv6FPGNi5Dk&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation"},
    {name : "Hergla", img : "https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240", time : "1.5 heures de route", link : "https://www.airbnb.fr/s/Hergla/homes?place_id=ChIJCz4LbjiE_RIRGaFsZysJa2w&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation"},
    {name : "Korba", img : "https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240", time : "1.5 heures de route", link : "https://www.airbnb.fr/s/Korba/homes?place_id=ChIJN_EIrbC7AhMRrAdzHaPD4q8&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation"},
    {name : "Aghir", img : "https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240", time : "8 heures de route", link : "https://www.airbnb.fr/s/Aghir/homes?place_id=ChIJCUMMcGSWqhMRKuqJpu7ayng&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation"}
 ]
 
 function City(props){
    return(
       <div className="city">
           <img className="explore-img my-2" src={props.img}/>
           <div className="my-auto ml-3">
             <a href={props.link} target="_blank"><b>{props.name}</b></a>
             <p>{props.time}</p>
           </div>
       </div>
    )
 }
 
 function Cities() {
    return(
     <div className="container mb-5">
        <h3 className="my-3">Explorer les environs</h3>
       <div className="cities">
          {cities.map(element =>
            <div>
               <City name = {element.name} link = {element.link} img = {element.img} time = {element.time}/>     
            </div>
          )}
       </div>
     </div>
    )
 }
 export default Cities