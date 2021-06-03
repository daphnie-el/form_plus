import styled, {css} from 'styled-components';

const Box = styled.div`
  ${(props) =>
    props.display &&
    css`
      display: ${(props) => props.display};
    `
  }

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${(props) => props.maxWidth};
    `
  }

  padding: ${(props) => props.pad || '0'};
  background-color: ${(props) => props.bg || 'none'};
  height: ${(props) => props.height || 'inherit'};
  margin: ${(props) => props.margin || '0'};
  text-align: ${(props) => props.align ? props.align : 'left'};

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${(props) => props.justifyContent};
    `
  }
`

export default Box;