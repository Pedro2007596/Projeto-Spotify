function Header(){
    return(
        <header>
            <a href="#"><img className="header-logo" src="/public/logo/logoMenor.png" alt="" /></a>

            <div className="header-pesquisa">
                <a href="#"><img className="header-casa" src="/public/icones/casa.png" alt="" /></a>
                <div className="pesquisa">
                    <img src="/public/icones/lupa.png" alt="" />
                    <input type="text" />
                </div>
            </div>

            <div>
                <button className="btn-preto">Regista-se</button>
                <button className="btn-branco">Iniciar sessão</button>
            </div>
        </header>
    )
}
export default Header