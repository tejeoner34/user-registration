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
            <aside className='aside'> Esto es el aside</aside>
            <div>
                <h1>Hello {userToken}!!</h1>
                <button onClick={handleLogOut}>Log out</button>
            </div>

        </main>
    )
}

return <h1>Exclusive content, you must be logged</h1>

}