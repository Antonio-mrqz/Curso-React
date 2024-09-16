const categorias = [
  {
    id: 1,
    nombre: "Frutas",
  },
  {
    id: 2,
    nombre: "Verduras",
  },
];
const productos = [
  {
    id: 1,
    categorias_id: 1,
    nombre: "Manzana",
    precio: 1000,
  },
  {
    id: 2,
    categorias_id: 1,
    nombre: "Platano",
    precio: 123,
  },
  {
    id: 3,
    categorias_id: 1,
    nombre: "Uvas",
    precio: 256,
  },
  {
    id: 4,
    categorias_id: 2,
    nombre: "Lechuga",
    precio: 100,
  },
  {
    id: 5,
    categorias_id: 2,
    nombre: "Tomate",
    precio: 120,
  },
];
const paises = [
  {
    id: 1,
    nombre: "España",
    dominio: "es"
  },
  {
    id: 2,
    nombre: "Portugal",
    dominio: "pt"
  },
  {
    id: 3,
    nombre: "Francia",
    dominio: "fr"
  },
  {
    id: 4,
    nombre: "Alemania",
    dominio: "gr"
  },
  {
    id: 5,
    nombre: "Argentina",
    dominio: "ar"
  },
]
const categorias_productos = [
  {
    id: 1,
    nombre: "Muebles"
  },
  {
    id: 2,
    nombre: "Lácteos"
  },
  {
    id: 3,
    nombre: "Vegetales"
  },
  {
    id: 4,
    nombre: "Carnes"
  },
  {
    id: 5,
    nombre: "Licores"
  },
  {
    id: 6,
    nombre: "Perfumeria"
  }
];

const atributos = [
  {
    id: 1,
    nombre: "Montable"
  },
  {
    id: 2,
    nombre: "Perecible"
  },
  {
    id: 3,
    nombre: "Fragil"
  },
  {
    id: 4,
    nombre: "Multiuso"
  },
  {
    id: 5,
    nombre: "Edicion Limitada"
  }
];
const imagenes = [{
  id: 1,
  titulo: "JavaScript",
  nombre: '/images/JS.jpg'
},
{
  id: 2,
  titulo: "C++",
  nombre: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.profesionalonline.com%2Fblog%2Fprogramacion%2Fmejores-lenguajes-de-programacion-para-este-ano-2022%2F&psig=AOvVaw2tImiVME8_E3Ul4ExL9Umr&ust=1726504337745000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDR5oKwxYgDFQAAAAAdAAAAABAJ'
},
{
  id: 3,
  nombre: 'https://www.cesarcancino.com/asset/images/springb750x422.jpg'
},
{
  id: 4,
  titulo: "Curso FastAPI",
  nombre: 'https://www.cesarcancino.com/asset/images/sticker-fastapi-tamila2.png'
},
{
  id: 5,
  titulo: "Curso Node",
  nombre: 'https://www.cesarcancino.com/asset/images/node-750x422%20(1).jpg'
},
{
  id: 6,
  titulo:"Curso Angular",
  nombre: '/images/Angular.png'
}
];

export { productos };
export { categorias };
export {paises};
export { atributos };
export { categorias_productos };
export { imagenes };
