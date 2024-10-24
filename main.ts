input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C G F A F G D C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    music.changeTempoBy(input.rotation(Rotation.Pitch))
})
