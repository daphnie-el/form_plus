import styled from 'styled-components';

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
const Select = ({label, options=[]}) => {
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

export default Select;