import React from "react";

export default class ComponenteDeClase extends React.Component {
  constructor(props) {
    console.log("El componente aun no esta montado");
    super();
    this.state = {
      contador: 0,
      nombre: "Antonio",
    };
  }

  componentDidMount() {
    console.log("El componente ya se encuentra en el DOM");
    setInterval(() => {
        this.setState({
            contador: this.state.contador ++
        })
    }, 1000);
  }

  componentWillUnmount() {
    console.log("El componente ha sido eliminado del DOM");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("El estado o las props del componente han cambiado");
  }

  render() {
    console.log("El componente se dibuja en el DOM")
    return (
      <>
        <h1>Hola de Componente de Clase</h1>
        <p>Contador = {this.state.contador}</p>
      </>
    );
  }
}
