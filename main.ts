cuteBot.forward()
basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
        cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x007fff)
    }
    basic.pause(1000)
})
