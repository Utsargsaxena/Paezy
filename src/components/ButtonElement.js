import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background : ${({primary})=>(primary ?'#01BF71' : '#010606')};
white-space: nowrap;
padding : ${({big})=>(big ? '14 48px' : '12 30px')};
color : ${({dark})=>(dark ? '#010606' : '#fff')};
font-size : ${({fontBig})=>(fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;
dispay:flex; 
justify-content: center;
align-items:center;
transition:all 0.2s ease-in-out;
padding:10px;;

&:hover{
    Background : ${({Primary})=>(Primary ?'white' : 'white')};
}
`