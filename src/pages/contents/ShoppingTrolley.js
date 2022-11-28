import { Cart } from '@styled-icons/bootstrap/Cart';
import { CartFill } from '@styled-icons/bootstrap/CartFill';
import { LogOut } from '@styled-icons/evaicons-solid/LogOut';
import { Search } from '@styled-icons/evaicons-solid/Search';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { productsCartGet } from '../../database/database';
import { AuthContext } from '../../provider/auth';
import ItemCart from './ItemCart';

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
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user } = useContext(AuthContext);
  const userLogged = JSON.parse(user);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await productsCartGet(userLogged.token);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
    setLoading(false);
  }, []);
  function handleLogout() {
    localStorage.removeItem('log');
    navigate('/');
  }
  return (
    <Page>
      <Header>
        <StyledNav>
          <Title> TechShop.uu</Title>
          <UserInfo>
            <MyLink to={'/'}>Produtos</MyLink>
            &emsp;|&emsp;
            <StyledP onClick={handleLogout}>
              <StyledLogOut />
            </StyledP>
          </UserInfo>
        </StyledNav>
      </Header>
      <Main>
        {!!error && <Status>Desculpe, mas tivemos um problema...</Status>}
        {products.length === 0 && <Status>seu carrinho está vazio</Status>}
        {loading && !error && products.length !== 0 ? (
          <Status>Carregando...</Status>
        ) : (
          <ProductsLit>
            {products.map((item) => (
              <ItemCart
                key={item.product._id}
                product={item.product}
                qty={item.qty}
              ></ItemCart>
            ))}
          </ProductsLit>
        )}
      </Main>
    </Page>
  );
}