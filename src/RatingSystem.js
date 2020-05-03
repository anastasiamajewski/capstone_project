import React,{useState} from 'react'
import styled from 'styled-components/macro'
import {FaSquare} from 'react-icons/fa'

export default function RatingSystem(){
    const [rating, setRating] = useState(null)
    
    
    return(
    <ButtonsStyled>
     {[...Array(5)].map((buttons,i) => {
         const ratingValue = i + 1;
         return ( 
         <LabelStyled>
             <RadioButtonHidden 
             type="radio" 
             name="rating" 
             value={ratingValue} 
             onClick={()=>setRating(ratingValue)}/>
             <FaSquare
             size={30}
             color={ratingValue <= rating ? "var(--drei)" : "var(--vier)"}/>
             
         </LabelStyled>
        
         )
     })}
    
    
    </ButtonsStyled>
    )
    }
    

const ButtonsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border:solid white 3px; 
  border-radius:24px;
  background:white;
`

const RadioButtonHidden = styled.input.attrs({type: 'radio'})`
display:none;
`
const LabelStyled = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`