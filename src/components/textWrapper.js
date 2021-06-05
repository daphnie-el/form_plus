import styled from 'styled-components';

const Text = styled.p`
  color: #3f3f3f;
  font-size: ${(props) => props.fontSize || '0.875rem'};
  font-family: ${(props) => (props.description ? 'Inter' : 'DM Sans')};
  padding: ${(props) => (props.pad ? props.pad : '0')};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  margin: ${(props) => props.margin || '0'};
  & a {
    color: #08bd37;
    text-decoration: none;
  }

  border: ${(props) => (props.borderText ? '1px solid #3F3F3' : 'none')};
`;

export default Text;
