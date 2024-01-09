import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import jsonData from '../../Json/logements.json';

function App() {

  return (
    <>
      <Banner />
      <div className='content'>
        {jsonData.map((logement) => (
            <Card key={logement.id} data={logement} />
        ))}
      </div>
    </>
  );
}

export default App; 
