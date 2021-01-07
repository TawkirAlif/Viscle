import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";


function Login() {

        const history = useHistory();

        const appPage = (e) => {
                e.preventDefault();
                if ('submit')
                    history.push('/app')
              }


        return (
                <div>
                        <h1>This will be the Login Page !</h1>

                        <Button type="submit" onClick={appPage}>OK</Button>
                </div>
        )
}

export default Login
