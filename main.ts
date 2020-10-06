let mySpriteColor = 0
let myRandomColor = cuteColor.randomColor(2, 3, 4)
console.logValue("myRandomColor", myRandomColor)
console.log(cuteColor.colorNameFromNumber(cuteColor.colorIndexPicker(2)))
console.log(cuteColor.colorNumberFromName("red"))
let myRandomColorsList = cuteColor.randomColorsList(0, 1, 2)
let mySpriteList = cuteColor.colorsSpriteList(myRandomColorsList, 16, 16)
console.logValue("len", mySpriteList.length)
for (let value of mySpriteList) {
    value.setPosition(randint(20, 140), randint(20, 100))
    mySpriteColor = cuteColor.spriteColor(value)
    console.logValue("color of sprite", mySpriteColor)
    console.log(cuteColor.colorNameFromNumber(mySpriteColor))
}
