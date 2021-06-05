import styled, {css} from 'styled-components';

const Grid = styled.div`
  display: ${(props) => (props.inline ? 'inline-grid' : 'grid')};
  grid-template-columns: ${(props) => props.default};
  padding: ${(props) => props.pad ? props.pad :  '0'};

  ${(props) =>
    props.gap &&
    css`
      gap: ${(props) => props.gap};
    `
  }
 
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: 100%;
  }

`;

export default Grid;
