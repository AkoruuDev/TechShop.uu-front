import styled from 'styled-components';

export default function ItemCard({ product }) {
  const { _id, name, picture, price, description } = product;
  return (
    <Card>
      <Name>{name}</Name>
      <Img src={picture} alt='product' />
      <Description>{description}</Description>
      <Price>R${price.toFixed(2)}</Price>
    </Card>
  );
}
const Name = styled.span`
  margin-top: 0.5rem;
  font-weight: 700;
`;
const Card = styled.li`
  max-width: 15rem;
  width: 100%;
  height: 22.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.6rem;
  background: #fff;
  box-shadow: 0.3rem 0.3rem 0.9rem #999999, -0.3rem -0.3rem 0.9rem #fff;
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

const Price = styled.p`
  font-weight: 700;
  display: flex;
  justify-content: end;
`;
