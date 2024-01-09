import Collapse from "../../components/collapse/collapse";
import Banner from "../../components/banner/banner";

function APropos() {
  const fiabilite = {title: 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'}
  const respect = {title:'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
  const service = {title:'Service', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
  const securite = {title:'Sécurité', text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
  
  return (
      <>
        <Banner />
        <Collapse title={fiabilite.title} text={fiabilite.text} />
        <Collapse title={respect.title} text={respect.text} />
        <Collapse title={service.title} text={service.text} />
        <Collapse title={securite.title} text={securite.text} />
      </>
    );
  }
  
  export default APropos; 
  