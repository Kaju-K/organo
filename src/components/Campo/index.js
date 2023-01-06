import "./Campo.css"

function Campo(props) {
    
    const placeholderModificada = `${props.placeholder}...`

    function aoDigitado(evento) {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type} 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo
