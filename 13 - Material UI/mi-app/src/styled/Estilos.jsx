import styled from "@emotion/styled";

export const Titulo = styled.h1`
  font-size: 40px;
  text-align: center;
  color: red;
`
export const Circulo = styled.div`
    background-color: red;
    color: white;
    text-align:center;
    padding: 80px 0px 10px 0px;
    width: 200px;
    height: 100px;
    border: 5px solid blue;
    border-radius: 50%;
`
export const Triangulo = styled.div`
    color: black;
    width: 0;
    height: 0;
    border-right: 100px solid transparent;
    border-top: 100px solid transparent;
    border-left: 100px solid transparent;
    border-bottom: 100px solid #f0ad4e;
    font-size: 30px;
    font-weight: bold;
`
export const Caja = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    background: ${props => props.color_custom || "green"};
    border: none;
    border-radius: 3px;
`