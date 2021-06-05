import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  padding: 0.625rem 1.25rem 0.625rem 0.9375rem;
  border: 0.5px solid #c4c4c4;
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
    color: #8f8b8b;
  }

  & .select-dropdown {
    border: none;
    width: 100%;
    display: block;
    outline: none;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0.625rem 0;
  }

  &:focus {
    border-color: '#343434';
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  }
`;
const Select = ({ label, options = [], onChange }) => {
  return (
    <InputContainer>
      <label className="label">{label}</label>
      <select
        onChange={onChange}
        className="select-dropdown"
        placeholder="select item"
      >
        {options.map((childOption, index) => {
          return (
            <option
              value={childOption.value}
              data-cy={childOption.value}
              key={index}
            >
              {childOption.label}
            </option>
          );
        })}
      </select>
    </InputContainer>
  );
};

export default Select;
