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

export { productos };
export { categorias };
export {paises};
