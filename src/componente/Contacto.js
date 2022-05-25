import { Navigate } from 'react-router-dom';
function Contacto() {
    const token = sessionStorage.getItem('confirmacion');
    if (token!=='token1') {
        return(
            <Navigate to={'/'}/>
        )
    }
    return(
        <>
        <h1>Villafuerte</h1>
        <h2>3874951512</h2>
        </>
    )
}
export default Contacto