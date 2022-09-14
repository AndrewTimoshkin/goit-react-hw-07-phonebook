import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 20px;
  background-color: #97D3D3;
  border-radius: 5px;
  transition: ease-in 100ms;
  &:hover {
    background-color: #B3E0DF;
  }
  button {
    width: 90px;
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
    :disabled {
      border: 1px solid #000;
      background-color: #fff;
      color: #eee;
    }
  }
`;
