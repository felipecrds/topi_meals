import styled from "styled-components";

export const Container = styled.div`
  background-color: #B0BAC3;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  background-color: #B0BAC3;
  border-radius: 10px;
  font-size: 55px;
  color: #000;
  font-style: oblique;
  font-weight: bold;
  margin-left: 10px;
  `;

export const SearchInput = styled.input`
border: 0;
border-radius: 25px;
width: ${props => props.active ? 300 : 0}px;
height: 50px;
color: #c7c7c7;
background-color: #7C838A;
background-image: url('/assets/loupe.png');
background-size: 30px;
background-repeat: no-repeat;
background-position: 10px center;
outline: 0;
padding-left: 50px;
transition: all ease .2s;
cursor: pointer;
font-size: 15px;

::placeholder {
  color: #c7c7c7;
}

&:focus{
  cursor:text;
}
`;