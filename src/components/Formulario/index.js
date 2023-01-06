import "./Formulario.css"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"

function Formulario(props) {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")
    const [nomeTime, setNomeTime] = useState("")
    const [corTime, setCorTime] = useState("#000000")

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
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
                <Campo 
                    type="text"
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={ (valor) => setNome(valor) }
                />
                <Campo 
                    type="text"
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo" 
                    valor={cargo}
                    aoAlterado={ (valor) => setCargo(valor) }
                />
                <Campo 
                    type="text"
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
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
                setNomeTime("")
                setCorTime("")
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                    type="text"
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={ (valor) => setNomeTime(valor) }
                />
                <Campo 
                    type="color"
                    obrigatorio
                    label="Cargo" 
                    placeholder="Escolha a cor do time" 
                    valor={corTime}
                    aoAlterado={ (valor) => setCorTime(valor) }
                />
                <Botao>
                    Criar um novo Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
