def on_up_pressed():
    info.change_score_by(10)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    info.change_score_by(5)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_score():
    game.game_over(True)
info.on_score(50000, on_on_score)

def on_on_score2():
    mySprite.say_text("press down")
info.on_score(1000, on_on_score2)

def on_a_pressed():
    info.change_score_by(1)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    info.change_score_by(100)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_countdown_end():
    info.change_life_by(-1)
    info.start_countdown(20)
info.on_countdown_end(on_countdown_end)

def on_on_score3():
    mySprite.say_text("press B")
info.on_score(100, on_on_score3)

def on_on_score4():
    mySprite.say_text("start pressing right")
info.on_score(10000, on_on_score4)

def on_right_pressed():
    info.change_score_by(500)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_score5():
    mySprite.say_text("press left")
info.on_score(2500, on_on_score5)

def on_down_pressed():
    info.change_score_by(50)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_life_zero():
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_on_score6():
    mySprite.say_text("press up")
info.on_score(500, on_on_score6)

mySprite: Sprite = None
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
info.set_score(0)
info.start_countdown(60)
info.set_life(3)