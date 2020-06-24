import React from 'react';
import styled from 'styled-components';
import Functions from './Functions'
import Storage from './Storage'
const ContentsStyled = styled.div`

 display: flex;
 position: relative;
 justify-content: space-between;
 width: 1000px;
 z-index: 1;
 bottom: 50px;

 @media screen and (max-width: 768px)
 {
    
     flex-direction: column;
     align-items: center;

 }
`

export default function Contents() {
    return (
        <ContentsStyled>
            <Functions/> 
              <Storage/>

        </ContentsStyled>
    )
}
