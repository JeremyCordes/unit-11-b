input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    basic.clearScreen()
    if (index < 0) {
        index += 1
    } else {
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (List[index]))
})
let index = 0
let List: string[] = []
List = ["Cat", "Guitar", "Flashlight", "Cupcake", "Tree", "Frisbee"]
index = 0
basic.showLeds(`
    . # # # .
    . . . # .
    . . # # .
    . . . . .
    . . # . .
    `)
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.showString("" + (List[index]))
