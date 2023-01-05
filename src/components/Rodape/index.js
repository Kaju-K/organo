import "./Rodape.css"

function Rodape() {
    return (
        <footer className="footer">
            <div className="redes-sociais">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="img/fb.png" alt="facebook"></img></a>
                <a href="https://twitter.com" target="_blank"  rel="noopener noreferrer"><img src="img/tw.png" alt="twitter"></img></a>
                <a href="https://instagram.com" target="_blank"  rel="noopener noreferrer"><img src="img/ig.png" alt="instagram"></img></a>
            </div>
            <img src="img/logo.png" alt="logo"></img>
            <p>Desenvolvido por mim</p>
        </footer>
    )
}

export default Rodape
