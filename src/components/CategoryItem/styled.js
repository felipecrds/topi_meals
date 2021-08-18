import styled from 'styled-components';

export const Container = styled.div`
width:80px;
height: 80px;
background-color: ${props => props.active == props.id ? '#dbdbdb' : '#B0BAC3'};
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
margin-right: 10px;
cursor: pointer;
transition: all ease .5s;
&:hover{
  background-color: #dbdbdb;
  }
`;

export const CategoryImage = styled.img`
width: 53px;
height: 53px;
`;