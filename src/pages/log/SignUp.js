import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { signUp } from "../../database/database";
import off from "../../assets/eye-off.svg";
import on from "../../assets/eye-on.svg";

export default function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [pass, setPass] = useState({});
    const [send, setSend] = useState(false);
    const [passType, setPassType] = useState('password');
    const [passTypeConfirm, setPassTypeConfirm] = useState('password');

    function getUser(name, value) {
        setUser({
            ... user,
            [name]: value
        });
    }

    function confirmPass(name, value) {
        setPass({
            ... pass,
            [name]: value
        });
    }

    function save(event) {
        event.preventDefault();
        let case1 = false;
        let case2 = false;
        let case3 = false;

        if (user.name.length === 0 || user.password.length === 0 || user.email.length === 0) {
            alert('Todos os campos devem ser preenchidos');
        } else {
            case1 = true;
        }

        if (user.password.length < 6) {
            alert('A senha deve conter 6 caracteres ou mais');
        } else {
            case2 = true;
        }

        if (user.password !== pass.passwordConfirm) {
            alert('As senhas não coincidem');
        } else {
            case3 = true;
        }

        if (case1 && case2 && case3) {
            setSend(true);
        }
    }

    useEffect(() => {
        if (send) {
            signUp(user)
                .then(res => {
                    navigate('/sign-in');
                })
                .catch(err => {
                    console.log('catch');
                    console.log(err);
                    alert('Não foi possível realizar seu cadastro. Tente novamente');
                    document.location.reload();
                })
        }
    }, [send]);

    function togglePassword() {
        if (passType === 'password') {
            setPassType('text');
        } else {
            setPassType('password')
        }
    }

    function togglePasswordConfirm() {
        if (passTypeConfirm === 'password') {
            setPassTypeConfirm('text');
        } else {
            setPassTypeConfirm('password')
        }
    }

    return (
        <Container>
            <Title>TechShop.uu</Title>
            <Form onSubmit={save}>
                <Input>
                    <input type='text' alt="name" name="name" id="name" placeholder="" required onChange={e => {
                        getUser(
                            e.target.name,
                            e.target.value
                        )}}/>
                    <label htmlFor="name">Nome</label>
                </Input>
                <Input>
                    <input type='text' alt="login" name="email" id="email" placeholder="" required onChange={e => {
                        getUser(
                            e.target.name,
                            e.target.value
                        )}}/>
                    <label htmlFor="email">E-mail</label>
                </Input>
                <Password>
                    <input type={passType} alt="password" name="password" id="password" placeholder="" required onChange={e => {
                        getUser(
                            e.target.name,
                            e.target.value
                        )}}/>
                    <label htmlFor="password">Senha</label>
                    <img onClick={togglePassword} src={passType === 'password' ? off : on} alt='eye' />
                </Password>
                <Password>
                    <input type={passTypeConfirm} alt="passwordConfirm" name="passwordConfirm" id="passwordConfirm" placeholder="" required onChange={e => {
                        confirmPass(
                            e.target.name,
                            e.target.value
                        )}}/>
                    <label htmlFor="passwordConfirm">Confirme sua senha</label>
                    <img onClick={togglePasswordConfirm} src={passTypeConfirm === 'password' ? off : on} alt='eye' />
                </Password>
                <Button type={"submit"}>Entrar</Button>
            </Form>
            <Register onClick={() => navigate('/sign-in')}>Já tem uma conta? Entre</Register>
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

const Input = styled.div`
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

const Password = styled(Input)`
    & img {
        width: 20px;
        position: absolute;
        top: 25px;
        right: 20px;
        cursor: pointer;
        
    }
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
