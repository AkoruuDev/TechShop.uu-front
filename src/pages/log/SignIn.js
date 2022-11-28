import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import off from '../../assets/eye-off.svg';
import on from '../../assets/eye-on.svg';
import { signIn } from '../../database/database';
import { AuthContext } from '../../provider/auth';

export default function SignIn() {
  const navigate = useNavigate();
  const [login, setLogin] = useState();
  const [send, setSend] = useState(false);
  const [passType, setPassType] = useState('password');

  const { keepUserLogged } = useContext(AuthContext);

  function getUser(name, value) {
    setLogin({
      ...login,
      [name]: value,
    });
  }

  function save(event) {
    event.preventDefault();
    let case1 = false;
    let case2 = false;

    if (login.email.length === 0) {
      alert('Campo email deve ser preenchido');
    } else {
      case1 = true;
    }
    if (login.password.length < 6) {
      alert('A senha deve ter, no mínimo, 6 dígitos');
    } else {
      case2 = true;
    }

    if (case1 && case2) {
      setSend(true);
    }
  }

  useEffect(() => {
    if (send) {
      signIn(login)
        .then((res) => {
          keepUserLogged(
            JSON.stringify({
              name: res.data.name,
              email: res.data.email,
              token: res.data.token,
            })
          );
          console.log(res);
          navigate('/');
        })
        .catch((err) => {
          console.log('catch');
          console.log(err);
          alert(err.response.data);
          document.location.reload();
        });
    }
  }, [send]);

  function showPass() {
    if (passType === 'password') {
      setPassType('text');
    } else {
      setPassType('password');
    }
  }

  return (
    <Container>
      <Title>TechShop.uu</Title>
      <Form onSubmit={save}>
        <Login>
          <input
            type='text'
            alt='email'
            name='email'
            id='email'
            placeholder=''
            required
            onChange={(e) => {
              getUser(e.target.name, e.target.value);
            }}
          />
          <label htmlFor='email'>Email</label>
        </Login>
        <Password>
          <input
            type={passType}
            alt='password'
            name='password'
            id='password'
            placeholder=''
            required
            onChange={(e) => {
              getUser(e.target.name, e.target.value);
            }}
          />
          <label htmlFor='password'>Senha</label>
          <img
            onClick={showPass}
            src={passType === 'password' ? off : on}
            alt='eye'
          />
        </Password>
        <Button type={'submit'}>Entrar</Button>
      </Form>
      <Register onClick={() => navigate('/sign-up')}>
        Não tem uma senha? Cadastre-se
      </Register>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: #fff8b5;

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
    transition: all 0.3s ease-in-out;

    &:focus {
      border-bottom: 2px solid #a9a9a9;
    }

    &:focus + label,
    &:valid + label {
      font-size: 15px;
      margin-top: 0;
      margin-left: 15px;
      color: #a9a9a9;
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
    transition: all 0.3s ease-in-out;
  }
`;

const Password = styled(Login)`
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
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #797979;
    color: #fff8b5;
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
