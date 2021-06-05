import styled from 'styled-components';

const Button = styled.div`
  padding: 5px 10px;
  border: ${(props) => (props.clear ? 'none' : '1px solid #3F3F3')};
  border-radius: 3px;
  cursor: pointer;
`;

export default Button;
