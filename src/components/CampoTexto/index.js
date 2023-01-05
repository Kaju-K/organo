import "./CampoTexto.css"

function CampoTexto(props) {
    
    const placeholderModificada = `${props.placeholder}...`

    function aoDigitado(evento) {
        props.aoAlterado(evento.target.value)
        console.log(props.valor)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto
