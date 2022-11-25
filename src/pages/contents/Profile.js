import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/auth";
import { getUser } from "../../database/database";

export default function Profile() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const log = JSON.parse(user);
    const [info, setInfo] = useState();

    useEffect(() => {
        getUser(log.token)
        .then(res => {
            setInfo(res.data)
            console.log('Then')
            console.log(res)
        })
        .catch(err => {
            console.log('catch')
            console.log(err)
        })
    }, [])
    
    if (info === undefined) {
        return(<>Loading...</>)
    }

    return(
        <Container>
            <img src={profile} alt="profile" />
            <Info>
                <h1>Name</h1>
                <p>{info.name}</p>
            </Info>
            <Info>
                <h1>Email</h1>
                <p>{info.email}</p>
            </Info>
            <Divisor></Divisor>
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

    overflow-y: auto;

    & img {
        width: 30vw;
    }

    &::-webkit-scrollbar {
        display: none;
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

const Divisor = styled.div`
    height: 50px;
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