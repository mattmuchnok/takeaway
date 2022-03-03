// const canWin = (n) => {
//   // none of the legal moves are under two
//   if (n < 2) {
//     return false
//   }

//   let legalMoves = [2, 3, 5]

//   // if canWin is false for the opponent, then we win
//   legalMoves.forEach(move => {
//     if (!canWin(n - move)) {
//       return true
//     }
//   })

//   //if we can't win from above, we lose
//   return false
// }

function canWin(stones) {
  if(stones <= 1) return false;
  if(stones === 2 || stones === 3) return true;

  const moves = [2, 3, 5];

  for(let i = 0; i < moves.length; i++) {
      if(!canWin(stones - moves[i])) return true;
  }
  return false;
}

// console.log(canWin(1))
// console.log(canWin(2))
// console.log(canWin(3))
// console.log(canWin(4))
console.log(canWin(5))
// console.log(canWin(6))
// console.log(canWin(7))
// console.log(canWin(8))
// console.log(canWin(9))
// console.log(canWin(10))