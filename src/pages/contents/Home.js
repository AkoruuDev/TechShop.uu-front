import styled from "styled-components"
import ProfileIcon from "../../components/ProfileIcon"
import cart from "../../assets/cart.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const log = JSON.parse(user)

    console.log(log);

    return (
        <Container>
            <Header>
                {user === null ?
                <Login>
                    <div onClick={() => {navigate('/sign-in')}}>Login</div>
                    <div onClick={() => {navigate('/sign-up')}}>Cadastro</div>
                </Login> :
                <div>
                    <ProfileIcon />
                    <Name>{log.name}</Name>
                </div>}
                <img onClick={() => navigate('/shopping-trolley')} src={cart} alt="" />
            </Header>
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
`

const Header = styled.div`
    width: 100vw;
    height: 80px;
    padding: 0 15vw;
    background-color: yellow;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
        height: 50px;
    }

    & div {
        display: flex;
        align-items: center;
    }
`

const Login = styled.div`

    & div {
        padding: 8px 16px;
        margin: 0 5px;
        border-radius: 50px;
        border: 2px solid gray;
        color: #737373;
        cursor: pointer;

        &:hover {
            color: black;
            border-color: black;
        }
    }
`

const Name = styled.h1`
    margin-left: 12px;
    font-weight: 700;
    font-size: 20px;
`
