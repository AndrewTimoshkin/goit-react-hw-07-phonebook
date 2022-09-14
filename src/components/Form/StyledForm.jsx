import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: #97D3D3;
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-basis: 33%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 20px;
  /* border: 2px solid grey;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 15px; */
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    display: block;
    height: 25px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid darkblue;
    outline: none;
    &:focus {
      border: 1px solid blue;
    }
  }
  button {
    display: block;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid darkblue;
    background-color: darkblue;
    color: #e5dcc3;
    cursor: pointer;
    transition: ease-in 200ms;
    :hover {
      border: 1px solid darkblue;
      background-color: #B7AFEF;
      color: darkblue;
    }
  }
`;
