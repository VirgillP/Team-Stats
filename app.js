const team = {
  _players:[{firstName: "Pablo",
            lastName: "Sanchez",
            age: 11},
            {firstName: "Zaifullah",
            lastName: "Pinas",
            age: 10},
            {firstName:"Virgill",
            lastName: "Pinas",
            age: 12}],
  _games:[{opponent: "Broncos",
           teamPoints: 42,
           opponentPoints: 27},
          {opponent: "Falcons",
          teamPoints: 40,
          opponentPoints: 39},{
            opponent: "Bears",
            teamPoints: 40,
            opponentPoints: 45}
         ],//End of players and games
  get players (){
    return this._players;
  },
  get games (){
    return this._games;
  },//End of the getters
  
  addPlayer(firstName, lastName, age){
    let newPlayer = {firstName: firstName,
                     lastName: lastName,
                     age: age};
    this._players.push(newPlayer);
  },//End of addPlayer method
  
  addGame (opponent, teamPoints, opponentPoints){
    let newGame = {opponent: opponent,
                   teamPoints: teamPoints,
                    opponentPoints: opponentPoints};
    this._games.push(newGame);
  }//End of addGame method
  
}//End of the object team
team.addPlayer("Steph", "Curry",28),
team.addPlayer("Lisa", "Leslie", 44),
team.addPlayer("Bugs", "Bunny", 76)

team.addGame("Tiger", 50, 35),
team.addGame("Fish", 40, 39),
team.addGame("Horse", 28, 30)
console.log(team.players);
console.log(team.games);//The final results

