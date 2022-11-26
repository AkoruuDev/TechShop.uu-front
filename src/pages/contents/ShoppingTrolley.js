import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import { getItems } from "../../database/database";
import { AuthContext } from "../../provider/auth";
import back from "../../assets/back.svg";
import cart from "../../assets/cart.svg";
import { useNavigate } from "react-router-dom";

function ItemBox(item) {
    return(
        <Item>{item}</Item>
    )
}

export default function ShoppingTrolley() {
    const { user } = useContext(AuthContext);
    const log = JSON.parse(user);
    const [list, setList] = useState([]);
    const [price, setPrice] = useState(456);
    const navigate = useNavigate();
    let value = 0;

    useEffect(() => {
        getItems(log.token)
            .then(res => {
                setList(res.data);
                res.data.forEach(e => {
                    value = value + e.price;
                });
                setPrice(value);
            })
            .catch(err => {
                alert('Não foi possivel encontrar seus itens')
                navigate('/')
            })
    }, []);

    return (
        <Container>
            <Header>
                <img src={back} alt='back' />
                <h1>Shopping Trolley</h1>
            </Header>
            <>{list.length === 0 ?
            <Box>
                <span>Parece que você ainda não tem nenhum item para comprar, o que acha de começar agora?</span>
                <Button onClick={() => {navigate('/')}}>
                    <img src={cart} alt='cart' />
                    Back to Shopping
                </Button>
            </Box> :
            <Content>
                <>{list.map(item => {
                    return (
                        <Item>
                            <Background></Background>
                            <Name>{item.name}</Name>
                            <Price>R$ {item.price}</Price>
                            <Image src={item.image} alt="image" />
                        </Item>
                    )
                })}</>
                <Buy>
                    <h1>Finalizar pedido</h1>
                    <h1>R$ {price}</h1>
                </Buy>
            </Content>}</>
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

const Header = styled.header`
    width: 100vw;
    height: 80px;
    background-color: #FFF8B5;

    font-weight: 700;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    & img {
        width: 30px;
        position: fixed;
        top: 25px;
        left: 25px;
        cursor: pointer;
    }
`

const Box = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & span {
        width: 60vw;
        text-align: center;
        font-weight: 700;
        margin: 15px;
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

const Content = styled.div`
    width: 100vw;
    height: 100vh;

    padding: 60px 0;
    overflow-y: auto;
`

const Item = styled.div`
    width: 80vw;
    height: 80px;
    margin: 20px;
    border-radius: 20px;
    position: relative;
    border: 3px solid #555555;
`

const Image = styled.img`
    width: 120px;
    height: 90%;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 17px;
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 17px;
    background-color: #00000080;
    z-index: 1;
`

const Price = styled.div`
    position: absolute;
    color: black;
    z-index: 1;
    bottom: 8px;
    right: 8px;
`

const Name = styled.div`
    position: absolute;
    color: black;
    z-index: 1;
    top: 8px;
    left: 130px;
`

const Buy = styled.div`
    width: 100vw;
    height: 80px;
    background-color: #F1AD64;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 0;
    z-index: 1;
    cursor: pointer;

    & h1 {
        margin: 0 38px;
    }
`