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
const Page = styled.div``;
const StyledNav = styled.nav`
  max-width: 75rem;
  height: 6rem;
  position: sticky;
  top: 0;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.header`
  background-color: #fff8b5;
`;
const Title = styled.div`
  color: #797979;
  font-size: 3rem;
`;
const UserInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  color: #797979;
  font-weight: 700;
  font-size: 1rem;
`;
const StyledP = styled.p`
  cursor: pointer;
  width: fit-content;
  :hover {
    filter: brightness(1.2);
  }
`;
const StyledCart = styled(Cart)`
  width: 1.5rem;
  height: 1.5rem;
`;
const StyledCartFill = styled(CartFill)`
  width: 1.5rem;
  height: 1.5rem;
`;
const StyledLogOut = styled(LogOut)`
  width: 1.5rem;
  height: 1.5rem;
`;
const MyLink = styled(Link)`
  :hover {
    filter: brightness(1.2);
  }
`;

const MyForm = styled.form`
  min-width: 15rem;
  max-width: 20rem;
  width: 100%;
  display: flex;
`;
const MyInput = styled.div`
  width: 100%;
  position: relative;
  padding-top: 15px;
  padding-left: 5px;
  font-weight: 700;
  font-size: 1rem;

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

    &:focus + label,
    &:valid + label {
      font-size: 15px;
      margin-top: 0;
    }
  }
  & label {
    color: #797979;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 25px;
    margin-left: 5px;
    transition: all 0.3s ease-in-out;
  }
`;
const MyButton = styled.button`
  max-width: fit-content;
  width: 100%;
  border: 3px solid #797979;
  border-radius: 0 1rem 1rem 0;
  background-color: transparent;
  color: #797979;
  cursor: pointer;
`;
const StyledSearch = styled(Search)`
  width: 1.5rem;
  height: 1.5rem;
`;
const Main = styled.main`
  margin: auto;
  max-width: 75rem;
  padding: 2rem;
`;
const ProductsLit = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Status = styled.div`
  width: fit-content;
  margin: auto;
`;
