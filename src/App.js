import './App.css';
import tarifs from './components/tarifs.json';
import Tarif from './components/tarif';


function App() {
  return (
    <div className="App">
      {
        tarifs.map((tarif) => 
        <Tarif key={tarif.id} isSelected={tarif.isSelected} title={tarif.title} price={tarif.price} speed={tarif.speed}traffic={tarif.traffic}></Tarif>
        )
      }
    </div>
  );
}

export default App;
