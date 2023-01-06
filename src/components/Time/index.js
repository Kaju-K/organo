import hexToRgba from 'hex-to-rgba';
import Colaborador from "../Colaborador"
import "./Time.css"

function Time(props) {

    const cssTime = { backgroundColor: hexToRgba(props.cor, "0.5"), backgroundImage: "url(./img/fundo.png)" }
    const cssH3 = { borderColor: props.cor }

    return (
        (props.colaboradores.length > 0) ? <section className="time" style={cssTime}>
            <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.id)} type='color' className="input-cor"/>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map( (colaborador, indice) => {
                    return <Colaborador 
                        key={indice} 
                        id={colaborador.id}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        favorito={colaborador.favorito}
                        imagem={colaborador.imagem ? colaborador.imagem : "https://github.com/Kaju-K.png"} 
                        corDeFundo={props.cor}
                        aoDeletar={props.aoDeletar}
                        aoFavoritar={props.aoFavoritar}
                    />
                } )}
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
