const p1 = ['rock', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'paper', 'paper', 'rock', 'scissors']
const p2 = ['paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'rock']

const playGame = (p1_choice, p2_choice) => {
	// 작성해 주세요
	for (let i =0 ; i<p1.length ; i++){
		switch (p1_choice[i]) {
			case 'rock':{
				switch (p2_choice[i]) {
					case 'rock':{
						console.log(0)
						break
					}
					case 'paper':{
						console.log(2)
						break
					}
					case 'scissors':{
						console.log(1)
						break
					}
		
				}
				break
			}
			case 'paper':{
				switch (p2_choice[i]) {
					case 'rock':{
						console.log(1)
						break
					}
					case 'paper':{
						console.log(0)
						break
					}
					case 'scissors':{
						console.log(2)
						break
					}
		
				}
				break
			}
			case 'scissors':{
				switch (p2_choice[i]) {
					case 'rock':{
						console.log(2)
						break
					}
					case 'paper':{
						console.log(1)
						break
					}
					case 'scissors':{
						console.log(0)
						break
					}
		
				}
				break
			}

		}
	}
}
playGame(p1,p2)

// 2
// 0
// 2
// 0
// 2
// 1
// 2
// 1
// 0
// 2