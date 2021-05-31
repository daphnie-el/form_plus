import styled, {css} from 'styled-components';

import PropTypes from 'prop-types';

//styles the basic layout of the app
export const Layout = styled.div`
  padding: 2.5rem 3.75rem;
  font-family: 'DM Sans', sans-serif;
  
  @media (max-width: 768px) {
    padding: 1.25rem 
  }

  @media (max-width: 320px) {
    padding: 0.625rem 
  }
`;

//Box is a regular customizable div, an ideal parent container.
export const Box = styled.div`
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
export const CardContainer = styled(Box)`
  maxWidth: 78.125rem;
  margin: 0 auto;
`

export const Text = styled.p`
    color: #3F3F3F;
    font-size:  ${(props) => props.fontSize || '0.875rem'};
    font-family: ${(props) => (props.description ? 'Inter' : 'DM Sans')};
    padding: ${(props) => props.pad ? props.pad :  '0'};
    text-align: ${(props) => props.align ? props.align :  'left'};
    margin: ${(props) => props.margin || '0'};
    & a {
      color: #08BD37;
      text-decoration: none;
    }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 14.3125rem;
  padding-top: 1.25rem; 
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 2px;

  &:hover {
     
    box-shadow: 2px 15px 45px  rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 375px) {
    width: 20.75rem;
  }

  @media (max-width: 320px) {
    width: 18.75rem;
  }
`;

export const Grid = styled.div`
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



//styles the simple select dropdown
const InputContainer = styled.div`
  position: relative;
  padding: 0.625rem 1.25rem 0.625rem 0.9375rem;
  border: 0.5px solid #C4C4C4;
  border-radius: 2px;
  display: inline-flex;
  width: 7.7rem;

  & .label {
    position: absolute;
    font-weight: 400;
    font-size: 0.9em;
    margin-top: -1.25rem;
    background-color: #fff;
    padding: 0 5px;
    color: #8F8B8B;
  }

  & .select-dropdown {
      border: none;
      width: 100%;
      display: block;
      outline: none;
  };

  &:focus {
    border-color: '#343434';
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  }
`
export const Select = ({label, options=[]}) => {
return (
    <InputContainer>
        <label className="label">{label}</label>
        <select className="select-dropdown" placeholder="select item">
            
            {
              options.map(childOption => {
                return (
                  <option value={childOption.value}>{childOption.label}</option>
                )
              })
            }


        </select>
    </InputContainer>
)
}