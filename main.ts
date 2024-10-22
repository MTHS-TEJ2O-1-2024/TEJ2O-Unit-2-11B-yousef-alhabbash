/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: OCT 2024
 * This program generate random int from 0-99 and sees which one is bigger by shaking
*/

basic.showIcon(IconNames.Happy)

let firstNumber = randint(0,99)
let secondNumber = randint(0, 99)

input.onButtonPressed(Button.A, function () {
    basic.showString("#1:");
    basic.showNumber(firstNumber)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.showString("#2:");
    basic.showNumber(secondNumber);
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
    if (firstNumber < secondNumber) {
        basic.showString(firstNumber + " < " + secondNumber);
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showString(firstNumber + " > " + secondNumber);
        basic.showIcon(IconNames.Sad)
    }
    basic.showIcon(IconNames.Happy)
})
