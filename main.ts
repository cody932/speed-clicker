info.onScore(100000, function () {
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 500) {
        game.gameOver(false)
    } else {
        info.changeScoreBy(10)
    }
})
info.onScore(25000, function () {
    mySprite.sayText("Upgrade unlocked you can start pressing D on the keyboard.")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 100) {
        game.gameOver(false)
    } else {
        info.changeScoreBy(5)
    }
})
info.onScore(1000, function () {
    mySprite.sayText("Upgrade unlocked you can start pressing S on the keyboard.")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 5000) {
        game.gameOver(false)
    } else {
        info.changeScoreBy(500)
    }
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    info.startCountdown(20)
})
info.onScore(100, function () {
    mySprite.sayText("upgrade unlocked start pressing X on the key board. I'm trying to get to earth but the aliens are trying to catch me with there electric rope.", 5000, true)
    mySprite.y += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 25000) {
        game.gameOver(false)
    } else {
        info.changeScoreBy(1000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() < 1000) {
        game.gameOver(false)
    } else {
        info.changeScoreBy(50)
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
info.onScore(500, function () {
    mySprite.sayText("Upgrade unlocked you can start pressing W on the keyboard.")
})
info.onScore(5000, function () {
    mySprite.sayText("Upgrade unlocked you can start pressing A on the keyboard.")
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9fffffffffffffffffffffffffffffffff77fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9ffffffffffffffffffffffffffff777777777777fffffffffff
    fffffffffffffffffffffffffffffff3ffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcffffffffffffffffffffffffff77666666666667777ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9fffffffffffffffffffffff77666666666666666677fffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6fffffffffffffffffffff7776666666666666666667fffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869ffffffffffffffffffff7666666666666666666667fffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffff77666666666666666666667fffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffff76666666666666666666667fffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffff76666666666666666666667fffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866fffffffffffffffff7766666666666666666666667ffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869ffffffffffffffff76666666666666666666666667fffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869ffffffffffffffff76666666666666666666666667fffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889ffffffffffffffff76666666666666666666666667fffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffff7666666666666666666666667fffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffff7766666666666666666777777fffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869fffffffffffff777777777777777777777777777ffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffff7777777777777777777777777777777fffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffff77777777777777777777777777777777ffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffff77777777777777777777777777777777ffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffff777777777777777777777777777777777fff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffff777777777777777777777777777777777fff
    fffffffffffffffffffff3ffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffff777777777777777777777777777777777fff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffff777777777777777777777777777777777fff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffff777777777777777777777777777777ffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869fffffffffffffffff777777777777777777777777fffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffff777777777777777fffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff3ffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 f f f f 1 . . . . . 
    . . . . 1 f f f f f f 1 . . . . 
    . . . . 1 f f f f f f 1 . . . . 
    . . . . 1 f f f f f f 1 . . . . 
    . . . . . 1 f f f f 1 . . 1 1 1 
    . . . . . . 1 f f 1 . . . 1 1 1 
    . . . . . . 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f 1 1 f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f 1 1 f 1 . . . . . 
    1 1 1 . . 1 1 f f 1 1 . . . . . 
    1 1 1 . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    . . . . . 1 1 . . 1 1 . . . . f 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . . 7 7 7 7 7 7 7 
    . . . . . . . 7 7 7 7 7 7 7 7 . 
    . . . . . . 7 7 7 7 7 7 7 7 . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . 7 7 7 7 7 7 7 7 7 . . . . . 
    . 7 7 7 7 7 7 7 7 . . . . . . . 
    . 7 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(133, 57)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . 7 7 7 7 7 7 . 
    . . . . . . . . 7 7 7 7 7 7 . . 
    . . . . . . . 7 7 7 7 7 7 . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 7 . . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . . 7 7 7 7 7 7 7 
    . . . . . . . . 7 7 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . 7 7 7 7 7 . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . . 7 7 7 7 7 7 7 
    . . . . . . . . 7 7 7 7 7 7 7 7 
    . . . . . . . . 7 7 7 7 7 7 7 7 
    . . . . . . . 7 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 7 . 
    . . . . . . 7 7 7 7 7 7 7 7 . . 
    . . . . . . 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    7 7 7 7 7 7 7 7 7 7 7 . . . . . 
    7 7 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . . 7 7 7 7 . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 . . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    `],
500,
true
)
animation.runImageAnimation(
mySprite3,
[img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . . 7 7 7 7 . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 . . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    `],
500,
true
)
animation.runImageAnimation(
mySprite4,
[img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . . 7 7 7 7 . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 . . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    `],
500,
true
)
animation.runImageAnimation(
mySprite5,
[img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . . 7 7 7 7 . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 . . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . . 7 7 7 . . . . 
    . . . . . . . . 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . 7 7 7 7 7 . . 
    . . . . . . . . . 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 . . . . . . . . 
    . . 7 7 7 7 7 . . . . . . . . . 
    . 7 7 7 7 . . . . . . . . . . . 
    `],
500,
true
)
animation.runImageAnimation(
mySprite6,
[img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . 7 7 7 7 7 . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 7 . . 
    . . . . . . . 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . 7 7 7 7 7 7 7 7 7 . . . . . . 
    7 7 7 7 7 7 7 7 7 . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . 7 7 7 7 7 7 7 7 
    . . . . . . . 7 7 7 7 7 7 7 7 . 
    . . . . . 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 . 
    . . . . . . . . . . 7 7 7 7 . . 
    . . . . . . . . 7 7 7 7 7 7 . . 
    . . . . . . . 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . 7 7 7 7 7 7 7 7 7 . . . . . . 
    7 7 7 7 7 7 7 7 7 . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . 7 7 7 7 7 . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . . 7 7 7 7 7 7 7 
    . . . . . . . . 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 . . . . . . 
    . 7 7 7 7 7 7 7 . . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . 7 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . . 7 7 7 7 7 7 7 
    . . . . . . . 7 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 7 7 
    . . . . 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 . . . . . . 
    7 7 7 7 7 7 7 7 7 . . . . . . . 
    7 7 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 7 . . . . . . . . . . 
    7 7 . . . . . . . . . . . . . . 
    7 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . 7 7 7 7 7 7 
    . . . . . . . . . 7 7 7 7 7 7 7 
    . . . . . . . . 7 7 7 7 7 7 7 7 
    . . . . . . 7 7 7 7 7 7 7 7 7 . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 . . . . . 
    . 7 7 7 7 7 7 7 7 . . . . . . . 
    . 7 7 7 7 7 7 . . . . . . . . . 
    7 7 7 7 7 . . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . . . 7 7 7 7 
    . . . . . . . . . . . . 7 7 7 . 
    . . . . . . . . . . . 7 7 7 . . 
    . . . . . . . . . . 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 7 . . . 
    . . . . . . . 7 7 7 7 7 . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . 7 7 7 7 7 7 . . . . . . . . 
    7 7 7 7 7 7 . . . . . . . . . . 
    7 7 7 7 . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `],
500,
true
)
mySprite3.setPosition(127, 64)
mySprite4.setPosition(118, 73)
mySprite5.setPosition(110, 82)
mySprite6.setPosition(99, 90)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . 1 1 . 
    . 1 1 . . 1 f f f 1 . . 1 1 1 . 
    . 1 1 1 1 . 1 1 1 . . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . 1 1 . . 1 f f f 1 . . . . . . 
    . 1 1 1 1 . 1 1 1 . . . . 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 1 . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    1 1 1 . . 1 1 1 1 . . . 1 1 1 . 
    . . . . . . 1 1 1 . . . . 1 1 . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 . . 1 1 1 . . . 1 1 1 . 
    . 1 1 . . . 1 1 1 . . . . 1 1 . 
    . . . . . 1 1 1 1 1 . . . . 1 . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 . 1 1 1 . . 1 1 1 . . 
    . 1 1 1 . 1 1 1 1 1 . . 1 1 . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 . 1 1 1 1 . . 
    . 1 1 1 1 . 1 1 1 . 1 1 1 1 . . 
    . 1 1 1 . 1 1 1 1 1 . . 1 1 1 . 
    . . . . 1 1 1 . 1 1 1 . . 1 1 . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 . 1 1 1 . . 1 1 1 . . 
    . 1 1 1 . 1 1 1 1 1 . . 1 1 . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 . . 1 1 1 . . . 1 1 1 . 
    . 1 1 . . . 1 1 1 . . . . 1 1 . 
    . . . . . 1 1 1 1 1 . . . . 1 . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    1 1 1 . . 1 1 1 1 . . . 1 1 1 . 
    . . . . . . 1 1 1 . . . . 1 1 . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . . 1 1 . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . 1 1 . . 1 f f f 1 . . . . . . 
    . 1 1 1 1 . 1 1 1 . . . . 1 1 . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . 1 1 . 
    . 1 1 . . 1 f f f 1 . . 1 1 1 . 
    . 1 1 1 1 . 1 1 1 . . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    `],
200,
true
)
mySprite.setPosition(61, 90)
info.setScore(0)
info.setLife(3)
mySprite.sayText("Save the world by stopping the aliens get to 100000 score to stop themstart by pressing Z on the keyboard to gain score. You lose a life when the timer runs out don't run out of lives first get to 100 score. By the way DO NOT PRESS ANY OF  THE OTHER BUTTONS BEFORE I SAY SO or the aliens will blast earth and you will lose. The timer should start soon....", 15000, true)
pause(20000)
info.startCountdown(60)
