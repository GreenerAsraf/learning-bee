import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import app from '../../../firebase/firebase.config';
import useTitle from '../../../Hooks/useTitle';
// import useTitle from '../../../hooks/useTitle';


const Login = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignin = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);

        }).catch(error =>{
            console.error(error.messeage)
        })

    }
    const handleGithubSignIn= () =>{
        signInWithPopup(auth, githubProvider)
        .then( result => {
          const user = result.user;
          setUser(user);
          console.log(user);
        })
        .catch( error =>{
          console.error ('error: ', error)
        })
      }
    

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
           
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
        <br />
        <small>If you want to log in using your Google Account</small> <br />
        <Button onClick={handleGoogleSignin} variant="primary" type="submit">
                Google Login
            </Button>
            <br />
            <br />
            <small>If you want to log in using your Github Account</small>
            <br />
        <Button onClick={handleGithubSignIn} variant="primary" type="submit">
                Github Login
            </Button>

            
        
        </>
    );
};

export default Login;