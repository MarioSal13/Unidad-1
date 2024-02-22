
import './App.css';
import CartasCompontentes from './Componentecartas';

function App() {
  return (
    <div className="App">
      
    <header className="App_header">
      <img src= "https://1000marcas.net/wp-content/uploads/2022/07/Logo-KFC.png" className="img"/>
      <h1 className="titulo">
        KFC
      </h1>
    </header>

    <header className = "App_header_mid">

      
      <input type="text" className="buscador" placeholder="Busar Combo"/>
      <img src= "https://cdn.icon-icons.com/icons2/1192/PNG/512/1490820806-11_82396.png" className="img_lupa"/>

    </header>

    <header className = "App_header_end">
      
      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 1"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 2"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 3"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 4"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 5"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 6"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 7"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 8"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 9"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 10"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 11"}  buton={"pedir"}/>
      </p>

      <p className="componente_cartas">
      <CartasCompontentes  link={" https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/673ac5fe-d5c0-55e4-0cef-7744c2e0297a.jpeg?a=bef5faf9-e9a9-e98f-95fa-201bd080c056"} text={"combo 12"}  buton={"pedir"}/>
      </p>
      
      
    </header>


    </div>
  );
}

export default App;
