import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function SignIn() {
    const navigate = useNavigate()

    return (
        <Container>
            <Title>TechShop.uu</Title>
            <Form>
                <Login>
                    <input type='text' alt="login" name="login" id="login" />
                    <label htmlFor="login">Login</label>
                </Login>
                <Password>
                    <input type='password' alt="password" name="password" id="password" />
                    <label htmlFor="password">Senha</label>
                </Password>
                <Button>Entrar</Button>
            </Form>
            <Register onClick={() => navigate('/sign-up')}>Não tem uma senha? Cadastre-se</Register>
        </Container>
    )
}

const Container = styled.section`
    width: 100vw;
    height: 100vh;

    background-color: #FFF8B5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    margin: 25px 0;
    font-size: 8vw;
    font-weight: 700;
`;

const Form = styled.form`
    width: 80vw;
    display: flex;
    flex-direction: column;
`;

const Login = styled.div`
    width: 100%;
    position: relative;
    margin: 5px 0;
    padding: 15px;

    & input {
        width: 100%;
        height: 40px;
        border: none;
        border-bottom: 2px solid #797979;
        border-radius: 0;
        background-color: transparent;
        display: inline-block;
        outline: none;
        font-size: 16px;
        transition: all .3s ease-in-out;

        &:focus {
            border-bottom: 2px solid #A9A9A9;
        }

        &:focus + label,
        &:valid + label {
            font-size: 15px;
            margin-top: 0;
            margin-left: 15px;
            color: #A9A9A9; 
        }
    }

    & label {
        color: #797979;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 25px;
        margin-left: 20px;
        transition: all .3s ease-in-out;
    }
`;

const Password = styled(Login)`
`;

const Button = styled.button`
    margin: 15px;
    height: 50px;
    border: 3px solid #797979;
    border-radius: 500px;
    background-color: transparent;
    font-weight: 700;
    color: #797979;
    font-size: 22px;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: #797979;
        color: #FFF8B5;
    }
`;

const Register = styled.span`
    margin-top: 15px;
    font-weight: 700;
    font-style: italic;
    color: #797979;

    &:hover {
        cursor: pointer;
        color: blue;
    }
`;
