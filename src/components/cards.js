const cards = [
    {title : "Escapades en pleine nature", link : "https://www.airbnb.fr/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A483&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=57&property_type_id%5B%5D=4&property_type_id%5B%5D=32&property_type_id%5B%5D=58&property_type_id%5B%5D=18&property_type_id%5B%5D=22&property_type_id%5B%5D=17&property_type_id%5B%5D=23&property_type_id%5B%5D=63&property_type_id%5B%5D=24&property_type_id%5B%5D=12&property_type_id%5B%5D=19&property_type_id%5B%5D=44&property_type_id%5B%5D=66&property_type_id%5B%5D=34&property_type_id%5B%5D=16&property_type_id%5B%5D=6&property_type_id%5B%5D=69&property_type_id%5B%5D=15&title_type=CURATED_PROPERTY_TYPE" , img : "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"},
    {title : "Des logements uniques", link : "https://www.airbnb.fr/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A2400&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=5&property_type_id%5B%5D=6&property_type_id%5B%5D=8&property_type_id%5B%5D=10&property_type_id%5B%5D=12&property_type_id%5B%5D=15&property_type_id%5B%5D=16&property_type_id%5B%5D=17&property_type_id%5B%5D=18&property_type_id%5B%5D=19&property_type_id%5B%5D=23&property_type_id%5B%5D=24&property_type_id%5B%5D=25&property_type_id%5B%5D=28&property_type_id%5B%5D=32&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=50&property_type_id%5B%5D=54&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=61&property_type_id%5B%5D=63&property_type_id%5B%5D=64&property_type_id%5B%5D=66&property_type_id%5B%5D=67&property_type_id%5B%5D=68&property_type_id%5B%5D=69&property_type_id%5B%5D=62&property_type_id%5B%5D=51&title_type=CURATED_PROPERTY_TYPE" , img : "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320"},
    {title : "Logements entiers", link : "https://www.airbnb.fr/s/homes?ne_lat=58.35927453041205&ne_lng=37.10447843634238&sw_lat=15.240725469587947&sw_lng=-16.744478436342384&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=2&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE" , img : "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320"},
    {title : "Animaux de compagnie accept??s", link : "https://www.airbnb.fr/s/homes?ne_lat=58.35927453041205&ne_lng=37.10447843634238&sw_lat=15.240725469587947&sw_lng=-16.744478436342384&room_types%5B%5D=Entire%20home%2Fapt&amenities%5B%5D=12&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE" , img : "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320"}
]

function Cart(props){
    return(
        <div className="mr-3">
        <img className=" my-2 card-img" src={props.img}/>
        <a href={props.link} target="_blank"><p>{props.title}</p></a>
       
    </div>
     
    )
 }
 
 function Cards() {
    return(
     <div className="container mb-5">
        <h3 className="mt-5 mb-3">Chez vous, partout</h3>
       <div className="d-flex">
          {cards.map(element =>
            <div>
               <Cart title = {element.title} link = {element.link} img = {element.img}/>     
            </div>
          )}
       </div>
     </div>
    )
 }
 export default Cards