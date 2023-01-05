import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"

function Formulario(props) {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={ (valor) => setNome(valor) }
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo" 
                    valor={cargo}
                    aoAlterado={ (valor) => setCargo(valor) }
                />
                <CampoTexto 
                    obrigatorio={false} 
                    label="Imagem" 
                    placeholder="Digite o Endereço da Imagem"
                    valor={imagem}
                    aoAlterado={ (valor) => setImagem(valor) }
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={ (valor) => setTime(valor) }
                />
                <Botao>
                    Criar Botao
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
