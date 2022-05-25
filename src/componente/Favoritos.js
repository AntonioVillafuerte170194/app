// import { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'

function Favoritos(props) {
    // const [favorites, setfavorites] = useState([]);

    // useEffect(() => {
    //     const favInLocal = localStorage.getItem('fav');
    //     if (favInLocal !== null) {
    //         const favArray = JSON.parse(favInLocal);
    //         setfavorites(favArray)
    //     }
    const token = sessionStorage.getItem('confirmacion');
    if (token!=='token1') {
        return(
            <Navigate to={'/'}/>
        )
    }
    // }, []);

    return(
        <>
        <h2>favoritos</h2>
        <div>
            {props.favorites.map(oneCard => {
                return(
                    <div>
                <span>{oneCard.titulo}</span>
                <h1>{oneCard.subTitle}</h1>
                <h2>{oneCard.otroVal}</h2>
                <h3>{oneCard.id}</h3>
                <button 
            onClick={props.favoritos} 
            // dataCard = {card.id}
            >Agregar a favoritos 🤍</button>
                    </div>
                )
            })
            }
        </div>
        </>
    )
}
export default Favoritos