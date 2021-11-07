function Header(){

    return(
        <div className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                <li className='header__list-item'><ReactRouterDOM.Link to="/registro">Registro</ReactRouterDOM.Link></li>
                    <li className='header__list-item'><ReactRouterDOM.Link to="/login">LogIn</ReactRouterDOM.Link></li>
                    <li className='header__list-item'><ReactRouterDOM.Link to="/mi-perfil">Area Privada</ReactRouterDOM.Link></li>
                </ul>
            </nav>
        </div>
    )
}