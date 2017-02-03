class TicTacToe {
    constructor() {
    this.matrix=[[0,0,0],[0,0,0],[0,0,0]];
    this.turn=1;
        return this;
    }
  getCurrentPlayerSymbol() {//should return `x` or `o`

if((this.turn%2)==0){return 'o';}
else {
return 'x';
}

    }

    nextTurn(rowIndex, columnIndex) {//should properly
      //update class state (change current player,
      // update marks storage etc.)
        this.row=rowIndex;this.col=columnIndex;
if (this.matrix[this.row][this.col]==0) {
  if((this.turn%2)==0){
  this.matrix[this.row][this.col]='o';
}
else {this.matrix[this.row][this.col]='x';}
this.turn++;
}
  else{return this;}
    }

    isFinished() {//should return true if game is finished
      // (e.g. there is a winner or it is a draw)

    }

    getWinner() {//should return winner symbol (`x` or `o`)
      // or null if there is no winner yet

    }

    noMoreTurns() {//should return true if there is no more
      //fields to place a `x` or `o`
      var count=0;
for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    if (this.matrix[i][j]==0){count++;}
  }
}
if (count==0) {return true;}
else {return false;}
    }

    isDraw() {//should return true if there is no more turns
      //and no winner

    }

    getFieldValue(rowIndex, colIndex) {//should return
      //`matrix[row][col]` value (if any) or `null`
      this.row=rowIndex;this.col=colIndex;
     if (this.matrix[this.row][this.col]=='x'){return 'x';}
      else if (this.matrix[this.row][this.col]=='o'){return 'o';}
      else {return null;}
    }
}

module.exports = TicTacToe;
