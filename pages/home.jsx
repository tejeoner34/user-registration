function Home(){

const userData = JSON.parse(localStorage.getItem('allData'));
const userToken = localStorage.getItem('sessionToken');

const history = ReactRouterDOM.useHistory();


const getFullName = ()=> {
   console.log(userData);
}

const handleLogOut = (e)=> {
    localStorage.removeItem('sessionToken');
    history.push('/login');

}


if(userData.some(i=> i.nickNameData === userToken)){

    return(
        <main className='main'>
            <aside className='aside'> 
            <ul className='aside__list'>
                <li className='aside__item'>Transacions</li>
                <li className='aside__item'>History</li>
                <li className='aside__item'>Cards</li>
                <li className='aside__item logout'><a onClick={handleLogOut} >Log Out</a></li>
            </ul>
            </aside>
            <div className='section'>
                <div className='title'>
                <h1>Hello {userToken}, welcome to your private area</h1>
                </div>
            </div>

        </main>
    )
}

return <h1>Exclusive content, you must be logged</h1>

}