class Game {
    constructor(frames) {
        this.frames = frames || [];
    }   

    calculateScore() {
        let gameScore = 0;
        for (let index = 0; index < this.frames.length; index++) {
            const frame = this.frames[index];
            if(frame[0] == 10){
               if (index == this.frames.length - 1) {
                    gameScore += frame[2] 
                } else {
                    gameScore += this.frames[index+1][0] + this.frames[index+1][1]
                }
            }
            else if (frame[0] + frame[1] == 10) {
                if (index == this.frames.length - 1) {
                    gameScore += frame[2]
                } else {
                    gameScore += this.frames[index + 1][0]
                }
            }

            

            gameScore += frame[0] + frame[1]
        }
        return gameScore
    } 
}



test('it should be handle a zero game', () => {
    const game = new Game()
    expect(game.calculateScore()).toEqual(0);
});

test('it should be handle a non-zero game', () => {
    const frames = [
        [1, 2]
    ]
    const game = new Game(frames)
    expect(game.calculateScore()).toEqual(3);
});

test('it should handle multiple frames', () => {
    const frames = [
        [8,1], [7,1]
    ]
    const game = new Game(frames)
    expect(game.calculateScore()).toEqual(17);
})

test('it should handle a spare frame', () => {
    const frames = [
        [7,3] , [1,3]
    ]
    const game = new Game(frames)
    expect(game.calculateScore()).toEqual(15);
})

test('it should handle last frame as spare', () => {
    const frames = [
        [3, 5], [2, 8, 5]
    ]
    const game = new Game(frames)
    expect(game.calculateScore()).toEqual(23)
})

test('it should handle a strike frame', () => {
    const frames = [
        [10, 0], [2, 2]
    ]
    const game = new Game(frames)
    expect(game.calculateScore()).toEqual(18)
})

test('it should handle strike in the last frame', () => {
    const frames = [
        [2, 5], [10, 3, 4]
    ]
    const game = new Game(frames)
    expect(game.calculateScore()).toEqual(24)
})
