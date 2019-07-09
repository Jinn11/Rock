import React from 'react';
const scissor = "";
const rock ="https://i.imgur.com/lghSkIw.png";
const paper ="";

const PlayerCard =(props)=>{
var sign= props.sign;
var image =""

if (sign==="rock"){
    image=rock;
}else if(sign==="paper"){
    image=paper;

}else{
    image=scissor
}
    return (
        <div className ="player-card">
            <img alt ="hello" src={rock}/>
        
        </div>
    )
}
export default PlayerCard;