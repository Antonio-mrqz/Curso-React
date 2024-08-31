import { formatearFecha, formatearNumero, acortarTexto } from "./helpers/helpers";
function App() {
  let fecha = new Date();
  let cantidad = 34343;
  let texto = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojasLetraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
  let edad = 17;
  let numero = 12;
  let paises = [
    {
      nombre: "España",
      dominio: "es",
    },
    {
      nombre: "Portugal",
      dominio: "pt",
    },
    {
      nombre: "Francia",
      dominio: "fr",
    },
  ];
  return (
    <>
      <h1>Renderizado Condicional (If/Else)</h1>

      <p>
        Metodo: entre llaves <b> (condicion) && (resultado) || (else) </b>
      </p>
      {(edad >= 18 && (
        <div>
          La persona es MAYOR de edad
          <hr />
        </div>
      )) || (
        <div>
          La persona es MENOR de edad
          <hr />
        </div>
      )}

      <p>
        Metodo: entre llaves <b> (condicion) ? (resultado):(else) </b>
      </p>
      {edad > 18 ? (
        <div>
          La persona es MAYOR de edad
          <hr />
        </div>
      ) : (
        <div>
          La persona es MENOR de edad
          <hr />
        </div>
      )}

      <h1>Renderizado Switch Case</h1>

      {(() => {
        switch (numero) {
          case 12:
            return <div>Número es 12</div>;
            break;
          case 13:
            return <div>Número es 13</div>;
            break;
          default:
            return <div>No es ninguno de los casos</div>;
            break;
        }
      })()}

      <hr />

      <h1>Ejemplos de Loop</h1>

      <h3>Loop normal con ES6</h3>
      <ul>
        {[...Array(11)].map((x, i) => (
          <li key={i}> {i} </li>
        ))}
      </ul>

      <h3>Inline IIFE</h3>
      <ul>
        {(function (rows, i, len) {
          while (++i <= len) {
            rows.push(<li key={i}> {i} </li>);
          }
          return rows;
        })([], 0, 10)}
      </ul>

      <h3>Con ES2015 syntax y Array methods</h3>
      <ul>
        {Array(11)
          .fill(1)
          .map((el, i) => (
            <li key={i}> {i} </li>
          ))}
      </ul>

      <h3>Ciclo for sencillo</h3>
      <ul>
        {(() => {
          let rows = [];
          for (let i = 1; i <= 10; i++) {
            rows.push(<li key={i}> {i} </li>);
          }
          return rows;
        })()}
      </ul>

      <hr />

      <h1>Recorrer elementos con map</h1>
      <ul>
        {paises.map((pais, i)=>(
          <li key={pais.dominio}>
          {i} - {pais.nombre} | (Dominio: {pais.dominio})
          </li>
        ))}
      </ul>

      <hr />

      <h1>Helpers personalizados</h1>
      <ul>
        <li>Fecha: {formatearFecha(fecha)}</li>
        <li>Cantidad: {formatearNumero(cantidad)}</li>
        <li>texto: {acortarTexto(texto,0,100)}.....</li>
      </ul>
    </>
  );
}

export default App;
