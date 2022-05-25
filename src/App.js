import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';


import Header from './componente/Header';
import Login from './componente/Login';
import Listado from './componente/Listado';
import Propiedades from './componente/Propiedades';
import Contacto from './componente/Contacto';
import Resultados from './componente/Resultados';
import Favoritos from './componente/Favoritos';

function App() {
  const [favorites, setfavorites] = useState([]);
  
  useEffect(() => {
    const favInLocal = localStorage.getItem('fav');
    if (favInLocal !== null) {
            const favArray = JSON.parse(favInLocal);
            setfavorites(favArray)
        }
        
      }, []);
      const favoritos = e => {
      
const favCard = localStorage.getItem('fav');
let tempCardFav;

if (favCard === null) {
  tempCardFav = [];
} else {
  console.log('tenemos');
  tempCardFav = JSON.parse(favCard);
}

console.log(tempCardFav);
// console.log(favCard);

  const btn = e.currentTarget;
  const padre = btn.parentElement;
  const titulo = padre.querySelector('span').innerText;
  //   const titulo = padre.querySelector('img').getAttribute('src');
  const subTitle = padre.querySelector('h1').innerText;
  const otroVal = padre.querySelector('h2').innerText;
  const id = padre.querySelector('h3').innerText;

  const dataFav ={
    titulo, subTitle, otroVal, id
    //, id: dtn.dataSet['dataCard']
  }
  // insertar una sola vez cada pelicula
  let cardArray = tempCardFav.find(oneCard => {
    return oneCard.id === dataFav.id
  })
  if (!cardArray) {
    tempCardFav.push(dataFav);
    localStorage.setItem('fav', JSON.stringify(tempCardFav));
    console.log('se agrego');
    setfavorites(tempCardFav)
  } else {
    let cardLeft = tempCardFav.filter( oneCard => {
      return oneCard.id !== dataFav.id;
      });
    localStorage.setItem('fav', JSON.stringify(cardLeft));
    console.log('se elmimino');
    setfavorites(cardLeft)
  }
  console.log(tempCardFav);
  // tempCardFav = [];
}

  return (
    <div>
      <Header favorites={favorites}></Header>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/listado' element={<Listado favoritos={favoritos}/>}/>
        <Route path='/propiedades' element={<Propiedades/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/resultados' element={<Resultados/>}/>
        <Route path='/favoritos' element={<Favoritos favoritos={favoritos} favorites={favorites}/>}/>
      </Routes>
    </div>
  );
}

export default App;
