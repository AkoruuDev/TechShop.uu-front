import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/auth";

export default function Profile() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    console.log(user);
    
    return(
        <Container>
            <img src={profile} alt="profile" />
            <Info>
                <h1>Name</h1>
                <p>{'Name'}</p>
            </Info>
            <Info>
                <h1>Email</h1>
                <p>{'Email'}</p>
            </Info>
            <Button onClick={() => {navigate('/shopping-trolley')}}>
                <img src={cart} alt='cart' />
                Shopping Trolley
            </Button>
            <Button onClick={() => {navigate('/')}}>Back to shopping</Button>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFF8B5;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & img {
        width: 30vw;
    }
`

const Info = styled.div`
    width: 75vw;
    margin: 15px;

    & h1 {
        font-weight: 700;
    }

    & p {
        padding-top: 5px;
        padding-left: 15px;
    }
`

const Button = styled.div`
    width: 75vw;
    height: 35px;
    border-radius: 5px;
    background-color: #FFF544;
    margin: 5px 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & img {
        margin-right: 8px;
        width: 22px;
    }

    &:hover {
        font-weight: 700;
    }
`