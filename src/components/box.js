import styled, { css } from 'styled-components';

const Box = styled.div`
  ${(props) =>
    props.display &&
    css`
      display: ${(props) => props.display};
    `}
  & input {
    width: 18.75rem;
    height: 2.5rem;
    border: 0.5px solid #bdbdbd;

    &::placeholder {
      padding-left: 30px;
    }
  }

  &.header {
    @media (max-width: 768px) {
      display: block;
    }
  }

  &.select {
    @media (max-width: 768px) {
      padding-top: 15px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }
    @media (max-width: 5000px) {
      padding-top: 15px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }

    @media (max-width: 375px) {
      display: grid;
      grid-template-columns: 100%;
    }
  }

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${(props) => props.maxWidth};
    `}

  padding: ${(props) => props.pad || '0'};
  background-color: ${(props) => props.bg || 'none'};
  height: ${(props) => props.height || 'inherit'};
  margin: ${(props) => props.margin || '0'};
  text-align: ${(props) => (props.align ? props.align : 'left')};
  font-size: ${(props) => props.fontSize};

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${(props) => props.justifyContent};
    `}
`;

export default Box;
