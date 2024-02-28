import Collapse from "../../components/collapse/collapse";
import Banner from "../../components/banner/banner";
import JsonData from "../../Json/aPropos.json"

function APropos() {

  return (
      <main>
        <Banner />
        
        <div className='collapse'>
        {JsonData.map((aPropos) => (
        <Collapse key={aPropos.id} title={aPropos.title} text={aPropos.text} />
        ))}
        </div>
      </main>
    );
  }
  
  export default APropos; 
  