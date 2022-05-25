// import axios.....
// import { useLocation } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    
    // al hacer click !
    const submitHandler = e => {
        e.preventDefault();
        
        console.log('se va a enviar el formulario')
        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(email, password);
        sessionStorage.clear()

        
        
        // validation
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log('email: ' + regexEmail.test(email))
        if (email === "" || password === "") {
            alert('los campos no pueden estar vacios');
            return;
        }
        if (!regexEmail.test(email)) {
            alert('No se encontraron datos validos')
            return;
        }
        if (email!=='villafuerteantonio74@gmail.com' || password!=='react') {
            alert('credenciales invalidas')
            return;
        }
        
            const token='token1';
            sessionStorage.setItem('confirmacion', token);
            console.log('ok, validacion completa', token);
            console.log(sessionStorage);
            
        navigate('/listado', {replace: true });
            
            
            // peticion. NPM install axios. url Api
            // axios
            //     .post('http://challenge.....urlAPI' {email, password})
            //     .then(res => {
            //             console.log(res.data);
            //         const tokenRecibido= res.data.token;
            //         almacenamiento del navegador (localStorage);
            //         localStorage.setItem('token', tokenRecibido);
            //     })
            // catch(error => {
            //     switAlert(<h2>hubo error, intenta mas tarde</h2>);
            // })      
        }
        const token = sessionStorage.getItem('confirmacion');
        if (token=='token1') {
            return(
                <Navigate to={'/listado'}/>
            )
        }   
// form (formulario)
        return(
            <>
        <h2>Formulario</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo electronico</span><br/>
                <input type='email' placeholder="email" name="email"/><br/>
            </label>
            <label>
                <span>Contraseña</span><br/>
                <input type='text' placeholder="contraseña" name="password"/>
            </label>
            <label>
                <br/><button type="submit">Ingresar</button>
            </label>
        </form>
        </>
    )
}
export default Login