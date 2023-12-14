import MyCard from "./componentes/MyCards";
import Navbar from "./componentes/searcher"; 
import MiProvider  from "./context/MiProvider";

import "./App.css";
function App() {

    return (
        
        <div>
            <MiProvider> 
                <Navbar />
                <h1>Pokemons</h1>
                <MyCard />
           </MiProvider>
      </div>
  );
}

export default App;
