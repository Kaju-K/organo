import Colaborador from "../Colaborador"
import "./Time.css"

function Time(props) {

    const cssTime = { backgroundColor: props.corSecundaria }
    const cssH3 = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) ? <section className="time" style={cssTime}>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map( colaborador => <Colaborador 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem ? colaborador.imagem : "https://github.com/Kaju-K.png"} 
                    corDeFundo={props.corPrimaria}
                /> )}
            </div>
        </section>
        : ""

        // ou
        // (props.colaboradores.length > 0) && (código a ser exibido) --- aqui não existe a opção do else
        // ou o bom e velho 
        // if(!props.colaboradores.length) { return "" } return codigo a ser exibido ----- para evitar o uso de else
        )
}

export default Time
