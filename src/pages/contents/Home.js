import styled from 'styled-components';

export default function Home() {
  return (
    <Page>
      <Header>
        <Title> TechShop.uu</Title>
        <MyForm>
          <MyInput>
            <input type='text' name='description' required />
            <label htmlFor='Search'>Search</label>
          </MyInput>
          <MySelect name='category'>
            <option value='' defaultValue>
              Categories
            </option>
            <option value='cellphones'>cellphones</option>
            <option value='computers'>computers</option>
            <option value='peripherals'>peripherals</option>
          </MySelect>
        </MyForm>
      </Header>
      <Main></Main>
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
  font-size: 5rem;
`;
const Main = styled.main`
  display: grid;
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
    margin-left: 5px;
    transition: all 0.3s ease-in-out;
  }
`;
const MySelect = styled.select`
  max-width: fit-content;
  width: 100%;
  border: 3px solid #797979;
  border-radius: 0 1rem 1rem 0;
  background-color: transparent;
  font-weight: 700;
  color: #797979;
  font-size: 1rem;
`;
