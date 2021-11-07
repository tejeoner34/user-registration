function SignIn(){

    const [loginError, setLoginError] = React.useState('');


 const history = ReactRouterDOM.useHistory();

    const handleSubmit = (e)=> {
        e.preventDefault();

        const nickNameData = e.target.nickname.value;
        const passwordData = e.target.password.value;
        let loginData = {nickNameData, passwordData}
        console.log(loginData)
        const allData = JSON.parse(localStorage.getItem('allData'));
        console.log(allData);
        if(allData.some(i=> i.nickNameData=== nickNameData)  && allData.some(i=> i.passwordData=== passwordData) ){
            localStorage.setItem('sessionToken', (nickNameData));
            history.push('/mi-perfil');
        }else{

            setLoginError('usuario/contraseña erroneos');

            setTimeout(()=>{
                history.push('/login')}, 2000);


        }

    }

    return(
        <div className='signin-container'>
            <h3>LOGIN</h3>
            <form onSubmit={(e)=> handleSubmit(e)} className='signin-container__input-div'>
                <input name='nickname' type="text" placeholder='nickname' />
                <input name='password' type="password" placeholder='password' />
                <button type='submit'>Enviar</button>
                <p className='login-error'>{loginError}</p>
            </form>

        </div>
    )
}