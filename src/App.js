import React, {Component} from 'react';
import PlayerCard from './PlayerCard';
import './index.css';

class Game extends Component{
constructor(){
  super();
  this.signs=["rock","scissor","paper"]
  this.state={
    player1: "rock",
    player2: "scissor",
  }
}

playGame=()=>{
  this.setState(
    {
      player1:this.signs[Math.floor(Math.random()*3)],
      player2:this.signs[Math.floor(Math.random()*3)],
    }
  )

}
decideWinner=()=>{
const player1 = this.state.player1;
const player2 = this.state.player2;
if (player1===player2){
  return "Tie!"
}else if((player1==="rock"&&player2==="scissor")||
(player1==="paper"&& player2==="rock")||
(player1==="scissor"&& player2==="paper")){
  return "player1 Wins"
}
else{
  return "player2 Wins"
}

}


  render(){
    return(
      <div className ="style"> 
      <div>
        <PlayerCard sign={this.state.player1}/>
        <PlayerCard sign={this.state.player2}/>
      </div>
      <div className="winner"> {this.decideWinner()}</div>
      <button type="button" onClick={this.playGame}> play  game </button>
      </div>
    )
  }
}

export default Game;