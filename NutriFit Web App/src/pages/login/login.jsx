import React from 'react'
import "./login.css";
import { login } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    // const [isNavShowing, setIsNavShowing] = useState(false);
	const { loginWithRedirect } = useAuth0();
	const { logout } = useAuth0();
	const { user, isAuthenticated, isLoading, username } = useAuth0();
  return (
    <>
    <Header title="login  page">
    {isAuthenticated && <li><p>Hi,{user.name}</p></li>}
							
							{isAuthenticated ? (
								<li><button onClick={() => logout({ returnTo: window.location.origin })}>
								Log Out
							  </button></li>
							):<li><button onClick={() => loginWithRedirect()}>Log In</button>;</li>}

    </Header>
    </>
  )
}

export default Login