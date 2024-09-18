input.onButtonPressed(Button.A, function () {
    shakeAllowed = true
    radio.sendString("A" + list)
})
function tärning () {
    list = randint(1, 6)
    if (list == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (list == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (list == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (list == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (list == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    radio.sendString("PLAYER")
    basic.showIcon(IconNames.Yes)
    shakeAllowed = true
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.substr(0, 5) == "POINT" && parseFloat(receivedString.substr(5, receivedString.length - 5)) == control.deviceSerialNumber()) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedString.substr(0, 8) == "NOTPOINT" && parseFloat(receivedString.substr(8, receivedString.length - 8)) == control.deviceSerialNumber()) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedString == "ROLL") {
        basic.showLeds(`
            # # . . .
            # . # . .
            # # . . .
            # . # . .
            # . . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    shakeAllowed = true
    radio.sendString("B" + list)
})
input.onGesture(Gesture.Shake, function () {
    if (shakeAllowed) {
        for (let index = 0; index < 7; index++) {
            tärning()
        }
        shakeAllowed = false
    }
})
let list = 0
let shakeAllowed = false
radio.setGroup(33)
radio.setTransmitSerialNumber(true)
