import {useNavigate} from 'react-router-dom';


function Buscador() {
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword= e.target.keyword.value.trim(); //elimina el espacio
        console.log(keyword);
        e.target.keyword.value= '';
        navigate(`/resultados?keyword=${keyword}`, {replace: true });
    }

    return(
        <form onSubmit={submitHandler}>
            <label>
                <input type='text' placeholder="ciudades..." name="keyword"/>
            </label>
            <label>
                <button type="submit">Buscar</button>
            </label>
        </form>
    )   
}
export default Buscador