const loadFile = (jsonData) => {

    const ele = document.getElementById('run-canvas')
    while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
    }


    const data = JSON.parse(jsonData)

    const convertSpriteOption = JSON.parse(decodeURI(data.spriteOption));
    const convertSoundDetail = JSON.parse(decodeURI(data.soundDetail));

    console.log(convertSpriteOption)
    emojiau.soundDetail = {}
    spriteOption = {}

    Object.keys(convertSpriteOption).forEach((e) => {
        emojisp.createSprite(convertSpriteOption[e])
    })
    emojiau.detailAdd(convertSoundDetail)

    isBlockly = data.isBlockly;

    buildBlockly = decodeURI(data.buildBlockly);
    editorText = decodeURI(data.editorText);
}
