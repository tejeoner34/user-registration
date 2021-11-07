function App() {

    return (

        <ReactRouterDOM.BrowserRouter>

            <Header></Header>
            <ReactRouterDOM.Switch>
                <ReactRouterDOM.Route path="/login">
                    <SignIn></SignIn>
                </ReactRouterDOM.Route>

                <ReactRouterDOM.Route path="/mi-perfil">
                    <Home></Home>
                </ReactRouterDOM.Route>
                <ReactRouterDOM.Route path="/">
                    <SignUp></SignUp>
                </ReactRouterDOM.Route>
            </ReactRouterDOM.Switch>

            <Footer></Footer>
        </ReactRouterDOM.BrowserRouter>
    )
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
)