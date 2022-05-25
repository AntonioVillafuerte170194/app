import { Link, Navigate } from 'react-router-dom';


function Listado(props){
    
    const token = sessionStorage.getItem('confirmacion');
    
    // console.log(token)
    // console.log(props)
    
    // {token && <Navigate to={'/'}/>}
    if (token!=='token1') {
        return(
            <Navigate to={'/'}/>
        )
    }
    return(
        <>
        <h2>soy listado</h2> 
        <Link to={'/propiedades'}>propiedades</Link> <br/>
        <div>
            <span>Titulo</span>
            <h1>sub titulo</h1>
            <h2>otro valor para agregar al objeto</h2>
            <h3> 1234</h3>
            <button 
            onClick={props.favoritos} 
            // dataCard = {card.id}
            >
            Agregar a favoritos 🤍</button>
        </div>
        </>
    )
}
export default Listado