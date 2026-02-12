let contador = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) <= 4) {
        if (contador < 12) {
            contador += 1
            basic.showNumber(contador)
        } else {
            if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 4) {
                music.stopAllSounds()
                contador = 0
                basic.showIcon(IconNames.Yes)
            }
            music.ringTone(988)
            basic.showIcon(IconNames.No)
        }
    } else {
        contador = 0
        basic.showIcon(IconNames.Yes)
        music.stopAllSounds()
    }
})
