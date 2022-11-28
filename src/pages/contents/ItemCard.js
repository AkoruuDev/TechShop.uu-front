import { BagPlusFill } from '@styled-icons/bootstrap/BagPlusFill';
import { useContext } from 'react';
import styled from 'styled-components';
import { productsCartPost } from '../../database/database';
import { AuthContext } from '../../provider/auth';

export default function ItemCard({ product }) {
  const { name, picture, price, description } = product;
  const { user } = useContext(AuthContext);
  const userLogged = JSON.parse(user);

  const handleCart = async () => {
    try {
      await productsCartPost(product, userLogged.token);
      alert('Adicionado ao carrinho com sucesso!');
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <Card>
      <Name>{name}</Name>
      <Img src={picture} alt='product' />
      <Description>{description}</Description>
      <CardFooter>
        <Bag onClick={handleCart}>
          <StyledBagPlusFill />
        </Bag>
        <Price>R${price.toFixed(2)}</Price>
      </CardFooter>
    </Card>
  );
}
const Name = styled.span`
  margin-top: 0.5rem;
  font-weight: 700;
`;
const Card = styled.li`
  max-width: 13rem;
  width: 100%;
  height: 19.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.6rem;
  background: #fff;
  border: 0.1rem solid #000;
`;
const Img = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: scale-down;
  margin: 0.5rem 0;
`;
const Description = styled.span`
  text-overflow: ellipsis;
  margin-bottom: auto;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Bag = styled.div`
  cursor: pointer;
`;
const StyledBagPlusFill = styled(BagPlusFill)`
  width: 1.5rem;
  height: 1.5rem;
`;
const Price = styled.p`
  font-weight: 700;
  display: flex;
  justify-content: end;
`;
