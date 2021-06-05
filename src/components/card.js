import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: 1.25rem;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  margin: ${(props) => props.margin};

  &:hover {
    box-shadow: 5px 15px 45px rgba(0, 0, 0, 0.14);
  }

  @media (max-width: 375px) {
    width: 20.75rem;
  }

  @media (max-width: 320px) {
    width: 18.75rem;
  }
`;

export default Card;
