input.onGesture(Gesture.Shake, function () {
    Step += 1
})
let Step = 0
basic.forever(function () {
    basic.showNumber(Step)
    led.stopAnimation()
})
