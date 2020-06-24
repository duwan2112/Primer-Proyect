import React from 'react'
import styled from 'styled-components'



const StorageStyled = styled.div`
background: #113c60;
position: relative;
margin: 70px 30px 30px 0px;
width: 50%;
padding: 15px 55px 0 35px;
border-radius: 10px 10px 10px 10px;
p{
 color: rgba(255,255,255,0.6);
 font-family: bold;
 font-size: 1.1em;
 
 span{
     color: white;
 }

}
 .descarga{
     position: relative;
     background: rgba(0,0,0,.5);
     border-radius: 10px; 
     height: 26px;
     color: transparent;
    
     display: flex;
     .internal{
         position: relative;
         background: linear-gradient(90deg,pink 30%,orange 70%);
         border-radius: 8px;
         width: 80%; 
         margin: 3px;
         }
     .punto{
         position: relative;
         background: white; 
         border-radius: 50%;
         margin: 5px;
         width: 16px;
         right: 25px;
     }
 }
 .data{
    
     display: flex;
     justify-content: space-between;
     p{
        margin-top: 5px ; 
        
       }
 }
 @media screen and (max-width: 768px)
 {
    
     width: 70%;
     margin: 0;
     margin-top: 30px;
     padding: 28px ;
     text-align: center;
 }
`


export default function Storage() {
    return (
        <StorageStyled>
              <p>You've used <span className="ff">  815 GB </span>  of you storage </p> 
              <div className="descarga"> <div className="internal">. </div> <div className="punto">.</div>   </div> 
              <div className="data">  <p> 0 GB </p ><p>1000 GB</p>  </div>
        </StorageStyled>
    )
}
