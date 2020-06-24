import React from 'react'
import styled from 'styled-components' 


const FunctionsStyled = styled.div`
background: #113c60;
margin: 30px;
width: 40%;
border-radius: 20px 100px 20px 20px;
padding: 30px 0 0 40px;
.folder{
    display: flex; 
    margin-top: 10px;
}
.images{
    background : #010129;
    margin-right: 20px;
    margin-top: 20px;
    border-radius: 9px;
    width: 40px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

}
@media screen and (max-width: 768px)
 {
     width: 70%;
     height: 200px;
     margin: 0;
     margin-top: 100px;
     padding: 50px 0 0 50px;
     border-radius: 20px 60px 20px 20px;
     .images{
         width: 60px;
        height: 55px;
     }
 }
`


function Icon(props) {
 
   const url2 = "./img/icon-"+props.type+".svg";
    return (<div className="images"> <img   src={url2} alt="prueba"></img>  </div> );
}


export default function Functions() {
    return (
        <FunctionsStyled>
             <img src="./img/logo.svg" alt="prueba"></img> 
             <div className="folder">  <Icon type="document"/>  <Icon type="folder"/> <Icon type="upload"/> </div>    
        </FunctionsStyled>
    )
}
