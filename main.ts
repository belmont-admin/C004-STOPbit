input.onButtonPressed(Button.B, function () {
    ChangeDelay += 100
})
input.onButtonPressed(Button.A, function () {
    ChangeDelay += -100
})
let MovementDelay = 10000
let ChangeDelay = 2000
let delay = 500
// Pin 0 = Red
//
// Pin 1 = Yellow
//
// Pin 2 = Green
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(ChangeDelay)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . #
            . # . # .
            # # # . #
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . # #
            # # # . .
            . # . # #
            `)
    }
    basic.showLeds(`
        . # . # .
        # . # . #
        # . # . #
        # . # . #
        . # . # .
        `)
    basic.pause(delay)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . # . .
        # . . # .
        # . . . #
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . # .
        # . # . #
        . # # . #
        . . # . #
        . . . # .
        `)
    basic.pause(delay)
    basic.showLeds(`
        # . . # .
        # . # . #
        # . # . #
        # . # . #
        # # # . #
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . # .
        # # # # #
        # . . # .
        . # . # .
        . . # # .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        # # . # .
        # . # . #
        # . . . #
        # . . # .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . # . . #
        # . # . #
        # . # . #
        # . . # #
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . #
        # # # # #
        . # . . #
        . . . . .
        `)
    basic.pause(delay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # #
        # # # . .
        . # . # #
        `)
    basic.pause(ChangeDelay)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(ChangeDelay)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(MovementDelay)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(ChangeDelay)
})
