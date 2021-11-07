function Header(){

    return(
        <div className='header'>
            <nav className='header__nav'>
                <ul className='header__list'>
                <li className='header__list-item'><ReactRouterDOM.Link to="/registro">Sign Up</ReactRouterDOM.Link></li>
                    <li className='header__list-item'><ReactRouterDOM.Link to="/login">LogIn</ReactRouterDOM.Link></li>
                    <li className='header__list-item'><ReactRouterDOM.Link to="/mi-perfil">Private Zone</ReactRouterDOM.Link></li>
                </ul>
            </nav>
        </div>
    )
}