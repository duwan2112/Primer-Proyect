import React, { Component } from 'react';
import styled from 'styled-components';
import Contents from './components/Contents';
import ImageBottom from './components/ImageBottom';
const BodyStyled = styled.div`
min-height: 100vh; 
background : #010129;
color: white;
display: flex; 
justify-content: center;
align-items: center;


@media screen and (max-width: 768px)
{
  background: url('./img/bg-mobile.png') center center fixed;
  background-size: cover;
}
`


export default class App extends Component {
  render() {
    return (
      <BodyStyled>
        <Contents/>
        <ImageBottom /> 
      </BodyStyled>
    )
  }
}
