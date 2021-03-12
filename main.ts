function 正确 () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    数 += 1
    basic.showNumber(数)
    错过次数 = 0
}
function 错误 () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.No)
    basic.pause(1500)
}
let 数 = 0
let 错过次数 = 0
basic.showIcon(IconNames.Heart)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P1, 1)
let 按下值 = 0
错过次数 = 0
数 = randint(0, 5)
basic.showNumber(数)
basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P0)) || cbit_输入类.Button(DigitalPin.P5, cbit_输入类.enButton.Press)) {
        if (!(input.pinIsPressed(TouchPin.P0))) {
            按下值 = 1
        }
        if (cbit_输入类.Button(DigitalPin.P5, cbit_输入类.enButton.Press)) {
            按下值 = 2
        }
        if (按下值 == 2) {
            if (convertToText(数).includes("7") || 数 / 7 == 0) {
                正确()
            } else {
                错误()
            }
        } else {
            if (convertToText(数).includes("7") || 数 / 7 == 0) {
                错误()
            } else {
                正确()
            }
        }
    } else if (错过次数 < 5) {
        错过次数 += 1
        basic.pause(500)
    } else {
        错误()
    }
})
