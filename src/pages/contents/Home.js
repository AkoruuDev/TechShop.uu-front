import { Search } from '@styled-icons/evaicons-solid/Search';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { productsGet } from '../../database/database';
import ItemCard from './ItemCard';

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await productsGet();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
    setLoading(false);
  }, []);
  return (
    <Page>
      <Header>
        <Title> TechShop.uu</Title>
        <RightHeader>
          {
            
          }
          <UserInfo>
            teste
          </UserInfo>
        <MyForm>
          <MyInput>
            <input type='text' name='description' required />
            <label>Search</label>
          </MyInput>
          <MySelect name='category'>
            <option value='' defaultValue>
              Categories
            </option>
            <option value='cellphones'>Cellphones</option>
            <option value='computers'>Computers</option>
            <option value='peripherals'>Peripherals</option>
          </MySelect>
          <MyButton>
            <StyledSearch />
          </MyButton>
        </MyForm>
        </RightHeader>
      </Header>
      <Main>
        {!!error && <Status>Desculpe, mas tivemos um problema...</Status>}
        {loading && !error ? (
          <Status>Carregando...</Status>
        ) : (
          <ProductsLit>
            {products.map((product) => (
              <ItemCard key={product._id} product={product}></ItemCard>
            ))}
          </ProductsLit>
        )}
      </Main>
    </Page>
  );
}
const Page = styled.div``;

const Header = styled.header`
  background-color: #fff8b5;
  height: 10rem;
  position: sticky;
  top: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  color: #797979;
  font-size: 3rem;
`;
const UserInfo = styled.div`
  color: #797979;
  font-weight: 700;
  font-size: 1rem;
  `;
const RightHeader = styled.div`
  display: flex;
  height: 8rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
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
const MySelect = styled.select`
  width: fit-content;
  width: 100%;
  border: 3px solid #797979;
  background-color: transparent;
  font-weight: 700;
  font-size: 1rem;
  color: #797979;
`;
const MyButton = styled.button`
  max-width: fit-content;
  width: 100%;
  border: 3px solid #797979;
  border-left: 0px;
  border-radius: 0 1rem 1rem 0;
  background-color: transparent;
  color: #797979;
`;
const StyledSearch = styled(Search)`
  width: 1.5rem;
  height:1.5rem;
`;
const Main = styled.main`
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
