const footer = [
    {title : "À propos", nav1 : "Fonctionnement d'Airbnb" , link1 : "https://www.airbnb.fr/d/howairbnbworks", nav2 : "Newsroom" , link2 : "https://www.airbnb.fr/press/news",nav3 : "Investisseurs" , link3 : "https://investors.airbnb.com/home/default.aspx", nav4 : "Airbnb Plus" , link4 : "https://www.airbnb.fr/plus",nav5 : "Airbnb Luxe" , link5 : "https://www.airbnb.fr/luxury",nav6 : "HotelTonight" , link6 : "https://www.hoteltonight.com/?utm_source_name=Airbnb&utm_campaign_name=Dr_Us_Desktop_Airbnb_Footer",nav7 : "Airbnb for Work" , link7 : "https://www.airbnb.fr/work?s=footer",nav8 : "C'est possible, grâce aux hôtes" , link8 : "https://www.airbnb.fr/d/video-stories-hub",nav9 : "Carrières" , link9 : "https://www.airbnb.fr/careers",nav10 : "Lettre des fondateurs" , link10 : "https://news.airbnb.com/what-makes-airbnb-airbnb?_ga=2.7372859.824692679.1619446389-126391276.1619446389", },
    {title : "Communauté", nav1 : "Diversité et intégration" , link1 : "https://www.airbnb.fr/diversity", nav2 : "Accessibilité" , link2 : "https://www.airbnb.fr/accessibility",nav3 : "Partenaires Airbnb" , link3 : "https://www.airbnb.fr/associates?from=footer", nav4 : "Logements d'urgence" , link4 : "https://www.airbnb.fr/d/covid19relief",nav5 : "Parrainage de voyageurs" , link5 : "https://www.airbnb.fr/invite?r=6",nav6 : "Airbnb.org" , link6 : "https://www.airbnb.org/?locale=fr&_ga=2.249030414.824692679.1619446389-126391276.1619446389",nav7 : "" , link7 : "",nav8 : "" , link8 : "",nav9 : "" , link9 : "",nav10 : "" , link10 : "", },
    {title : "Hôte", nav1 : "Héberger des voyageurs" , link1 : "https://www.airbnb.fr/host/homes?from_footer=1", nav2 : "Organiser une expérience en ligne" , link2 : "Centre d'aide",nav3 : "Organiser une expérience" , link3 : "https://www.airbnb.fr/host/experiences", nav4 : "Accueil responsable" , link4 : "https://www.airbnb.fr/help/responsible-hosting",nav5 : "Centre de ressources" , link5 : "https://www.airbnb.fr/resources",nav6 : "Community Center" , link6 : "https://www.airbnb.fr/help/community?s=footer",nav7 : "" , lin7 : "",nav8 : "" , link8 : "",nav9 : "" , link9 : "",nav10 : "" , link10 : "", },
    {title : "Assistance", nav1 : "Nos mesures face au COVID-19" , link1 : "https://www.airbnb.fr/d/covidsafety", nav2 : "Centre d'aide" , link2 : "https://www.airbnb.fr/help?from=footer",nav3 : "Options d'annulation" , link3 : "https://www.airbnb.fr/help/article/2701/politique-relative-aux-cas-de-force-majeure-et-coronavirus-covid19", nav4 : "Service d'aide aux voisins" , link4 : "https://www.airbnb.fr/neighbors",nav5 : "Confiance et sécurité" , link5 : "https://www.airbnb.fr/trust",nav6 : "" , link6 : "",nav7 : "" , lin7 : "",nav8 : "" , link8 : "",nav9 : "" , link9 : "",nav10 : "" , link10 : "", }
 ]

 function Footer(props){
    return(
        <div className="mr-5">
        <h6>{props.title}</h6>
        <a href={props.link1} target="_blank"><p className="footer-link">{props.nav1}</p></a>
        <a href={props.link2} target="_blank"><p className="footer-link">{props.nav2}</p></a>
        <a href={props.link3} target="_blank"><p className="footer-link">{props.nav3}</p></a>
        <a href={props.link4} target="_blank"><p className="footer-link">{props.nav4}</p></a>
        <a href={props.link5} target="_blank"><p className="footer-link">{props.nav5}</p></a>
        <a href={props.link6} target="_blank"><p className="footer-link">{props.nav6}</p></a>
        <a href={props.link7} target="_blank"><p className="footer-link">{props.nav7}</p></a>
        <a href={props.link8} target="_blank"><p className="footer-link">{props.nav8}</p></a>
        <a href={props.link9} target="_blank"><p className="footer-link">{props.nav9}</p></a>
        <a href={props.link10} target="_blank"><p className="footer-link">{props.nav10}</p></a> 
    </div> 
    )
 }
 
 function Items() {
    return(
     <div className="container mb-5">
       <div className="footer-section">
          {footer.map(element =>
            <div>
               <Footer title = {element.title} nav1 = {element.nav1} link1 = {element.link1} nav2 = {element.nav2} link2 = {element.link2} nav3 = {element.nav3} link3 = {element.link3} nav4 = {element.nav4} link4 = {element.link4} nav5 = {element.nav5} link5 = {element.link5} nav6 = {element.nav6} link6 = {element.link6} nav7 = {element.nav7} link7 = {element.link7} nav8 = {element.nav8} link8 = {element.link8} nav9 = {element.nav9} link9 = {element.link9} nav10 = {element.nav10} link10 = {element.link10}/>     
            </div>
          )}
       </div>
     </div>
    )
 }
 export default Items