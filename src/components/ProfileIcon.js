import profile from "../assets/profile.svg";
import logoff from "../assets/log-out.svg";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileIcon() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    return(
        <Container>
            <ProfileImage onClick={() => setShow(!show)} src={profile} alt='profile' />
            <Box show={show} onClick={() => setShow(!show)}></Box>
            <MenuList show={show}>
                <div onClick={() => navigate('/profile')}>Profile</div>
                <div onClick={() => navigate('/shopping-trolley')}>Shopping Trolley</div>
                <div onClick={() => navigate('/settings')}>Settings</div>
                <div><img src={logoff} alt="exit" />Logoff</div>
            </MenuList>
        </Container>
    )
}

const Container = styled.div`
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`

const ProfileImage = styled.img`
    width: 50px;
    cursor: pointer;
`

const Box = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF01;
    position: absolute;
    top: 0;
    left: 0;

    z-index: 10;
`

const MenuList = styled.nav`
    display: ${props => props.show ? 'block' : 'none'};
    background-color: #FFF544;
    width: 180px;

    position: absolute;
    top: 50px;
    left: 5px;
    z-index: 11;

    & div {
        width: 100%;
        height: 35px;
        padding: 4px;
        border: 1px solid #FFFCC1;

        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all .2s ease-in-out;

        &:hover {
            color: #001122;
            font-weight: 700;
        }
    }

    & img {
        width: 20px;
        margin-right: 8px;
    }
`