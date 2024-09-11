input.onButtonPressed(Button.A, function () {
    radio.sendString("B" + "A" + tärning())
})
function tärning () {
    siffra = "6"
    return siffra
}
input.onButtonPressed(Button.AB, function () {
    radio.sendString("PLAYER")
    basic.showIcon(IconNames.Yes)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.substr(0, 5) == "POINT" && parseFloat(receivedString.substr(5, receivedString.length - 5)) == control.deviceSerialNumber()) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedString.substr(0, 8) == "NOTPOINT" && parseFloat(receivedString.substr(8, receivedString.length - 8)) == control.deviceSerialNumber()) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B" + tärning())
})
let siffra = ""
radio.setGroup(33)
