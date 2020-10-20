controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myColorNumbersList = cuteColor.colorList(0, 0, 0)
    mySpriteList = cuteColor.colorsSpriteList(myColorNumbersList, 20, 20)
    messageSprite.say("List length " + mySpriteList.length)
    pause(2000)
    outMySpriteList()
    pause(2000)
    messageSprite.say("randomized list")
    cuteColor.randomize(myColorNumbersList)
    mySpriteList = cuteColor.colorsSpriteList(myColorNumbersList, 20, 20)
    outMySpriteList()
})
function outMySpriteList () {
    for (let value of mySpriteList) {
        mySpriteColor = cuteColor.spriteColor(value)
        value.z = 1
        value.say("" + mySpriteColor + "  " + cuteColor.colorNameFromNumber(mySpriteColor))
        pause(2000)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myRandomColor = cuteColor.randomColor(cuteColor.colorIndexPicker(15), 0, 0)
    messageSprite.say(cuteColor.colorNameFromNumber(myRandomColor))
    mySpriteList = cuteColor.colorsSpriteList([myRandomColor], 40, 40)
})
let myRandomColor = 0
let mySpriteColor = 0
let mySpriteList: Sprite[] = []
let myColorNumbersList: number[] = []
let messageSprite: Sprite = null
messageSprite = sprites.create(img`
    . 
    `, SpriteKind.Player)
messageSprite.setPosition(80, 100)
