import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import jsonData from '../../Json/logements.json';

function App() {

  return (
    <main>
      <Banner />
      <section className='content'>
        {jsonData.map((logement) => (
            <Card key={logement.id} data={logement} />
        ))}
      </section>
    </main>
  );
}

export default App; 
