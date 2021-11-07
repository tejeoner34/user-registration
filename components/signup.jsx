function SignUp(){

    const [errorMessage, setErrorMessage] = React.useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        let allData = JSON.parse(localStorage.getItem('allData'));
        if(allData === null) allData = [];
        const nameData = e.target.name.value;
        const nickNameData = e.target.nickname.value;
        const passwordData = e.target.password.value;
        let data = {nameData, nickNameData, passwordData};
        console.log(allData);
        if(allData.some(e=> e.nameData ===data.nameData)|| allData.some(e=> e.nickNameData===data.nickNameData)){
            alert('el usuario ya existe'); // hay que crear una variable de estado que nos de el error 
            setErrorMessage('Ese nombre de usuario ya existe');
        }else{
        allData.push(data);
        localStorage.setItem('allData', JSON.stringify(allData));
        console.log(allData)
        }


    }

    

    return(
        <div className='form-container'>
            <h3 className='form-container__h3'>REGISTRO</h3>
            <form onSubmit={(e)=>handleSubmit(e)} className='form-container__form'>
                <div className='form-container__input-container'>
                <label htmlFor="name">Name</label>
                <input name='name' type="text" placeholder='name' />
                </div>
                <div className='form-container__input-container'>
                <label htmlFor="nickname">Nickname</label>
                <input name='nickname' type="text" placeholder='nickname' />
                </div>
                <div className='form-container__input-container'>
                <label htmlFor="password">Password</label>
                <input name='password' type="password" placeholder='password' />
                </div>
                <button type='submit'>Enviar</button>
            </form>
            <div className='form-container__error-message'>{errorMessage}</div>

        </div>
    )
}