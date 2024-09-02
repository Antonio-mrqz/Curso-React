import Parser from "html-react-parser";

function App() {
  let ejemplo = `<h2>Titulo desde JSX con Interpolacion</h2>`;
  let ejemplo2 = `<h2 className="azul">Titulo desde JSX con Interpolacion</h2>`;

  return (
    <>
      <h1 className="rojo">Hola Mundo desde React con Vite</h1>

      <div className="azul" dangerouslySetInnerHTML={{ __html: ejemplo }}></div>
      
      <p>
        Al renderizar la variable ejemplo entre comillas hay que hacerlo dentro
        de un Div con <b>dangerouslySetInnerHTML</b> y la clase azul la
        cambiamos de ejemplo al Div
      </p>

      <hr />

      {Parser(ejemplo2)}

      <p>
        Instalando html-react-parser es mucho mas limpio ya que podemos poner
        los estilos directamente a la variable y luego para mostrarla solo
        tenemos que poner entre llaves <b>Parser(ejemplo)</b>
      </p>
    </>
  );
}

export default App;
