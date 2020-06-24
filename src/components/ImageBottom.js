import React,{useState} from 'react';
import styled from 'styled-components';


const ImagenStyle= styled.div`
position: absolute;
bottom: 0;
img{
  width: 100%;
}

`
 
export default function ImageBottom() {

    const [desktop,setdesktop]=useState(true);

    window.onresize = function(event){
      if(window.screen.width >= 768)
      {
        setdesktop(true);
      }
      else {
        setdesktop(false);
      }
    }
    return (
        <>
        <ImagenStyle>
            {desktop ? <img src="./img/bg-desktop.png" alt="siquesi"/> : <></> }
        </ImagenStyle>
        </>
    )
}
