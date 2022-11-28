import { BagPlusFill } from '@styled-icons/bootstrap/BagPlusFill';
import { useContext } from 'react';
import styled from 'styled-components';
import { productsCartDelete } from '../../database/database';
import { AuthContext } from '../../provider/auth';

export default function ItemCart({ product, qty }) {
  const { name, picture, price, description } = product;
  const { user } = useContext(AuthContext);
  const userLogged = JSON.parse(user);

  const handleDeletion = async () => {
    try {
      console.log(
        '🚀 ~ file: ItemCart.js ~ line 15 ~ handleDeletion ~ userLogged.token',
        userLogged.token
      );
      await productsCartDelete(product, userLogged.token);
      alert('Removido com sucesso!');
    } catch (error) {
      alert(error.response.data);
    }
  };
  return (
    <Card>
      <Name>{name}</Name>
      <Img src={picture} alt='product' />
      <Description>{description}</Description>
      <Description>{qty}</Description>
      <Price>R${price.toFixed(2)}</Price>
      <Description onClick={handleDeletion}>X</Description>
    </Card>
  );
}
const Name = styled.span`
  margin-top: 0.5rem;
  font-weight: 700;
`;
const Card = styled.li`
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.6rem;
  background: #fff;
  border: 0.1rem solid #000;
`;
const Img = styled.img`
  width: fit-content;
  height: 10rem;
  object-fit: scale-down;
  margin: 0.5rem 0;
`;
const Description = styled.span`
  text-overflow: ellipsis;
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
`;
