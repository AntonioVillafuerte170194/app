function Resultados() {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');
    console.log(keyword);
    return(
        <>
        <h2>buscar: {keyword} </h2>
        { true && <h2>no hay resultados</h2> }
        <p>Resultados</p>
        </>
    )    
}
export default Resultados