(() => {

    const mainCardsData = [{
        "imageClass": "image-wrapper--emotion",
        "cardTitle": "emotions"
    }, {
        "imageClass": "image-wrapper--animal-one",
        "cardTitle": "animals (set A)"
    }, {
        "imageClass": "image-wrapper--animal-two",
        "cardTitle": "animals (set B)"
    },{
        "imageClass": "image-wrapper--clothes",
        "cardTitle": "clothes"
    }, {
        "imageClass": "image-wrapper--action-one ",
        "cardTitle": "action(set A)"
    }, {
        "imageClass": "image-wrapper--action-two",
        "cardTitle": "action(set B)"
    }]

    const playCardsData = {
        "emotions": [{
            "imageName": "angry",
            "ruCaption": "злой"
        }, {
            "imageName": "scared",
            "ruCaption": "испуганный"
        }, {
            "imageName": "tired",
            "ruCaption": "Уставший"
        }, {
            "imageName": "surprised",
            "ruCaption": "удивленный"
        }, {
            "imageName": "smile",
            "ruCaption": "улыбка"
        }, {
            "imageName": "laugh",
            "ruCaption": "смех"
        }, {
            "imageName": "sad",
            "ruCaption": "грустный"
        }, {
            "imageName": "happy",
            "ruCaption": "счастливый"
        }],
        "animals (set A)": [{
            "imageName": "bird",
            "ruCaption": "птица"
        }, {
            "imageName": "rabbit",
            "ruCaption": "кролик"
        }, {
            "imageName": "pig",
            "ruCaption": "свинья"
        }, {
            "imageName": "lion",
            "ruCaption": "лев"
        }, {
            "imageName": "mouse",
            "ruCaption": "мышь"
        }, {
            "imageName": "horse",
            "ruCaption": "лошадь"
        }, {
            "imageName": "dolphin",
            "ruCaption": "дельфин"
        }, {
            "imageName": "fish",
            "ruCaption": "рыба"
        }],
        "animals (set B)": [{
            "imageName": "cat",
            "ruCaption": "кот"
        }, {
            "imageName": "giraffe",
            "ruCaption": "жираф"
        }, {
            "imageName": "sheep",
            "ruCaption": "овца"
        }, {
            "imageName": "dog",
            "ruCaption": "собака"
        }, {
            "imageName": "chicken",
            "ruCaption": "курица"
        }, {
            "imageName": "chick",
            "ruCaption": "цыплёнок"
        }, {
            "imageName": "turtle",
            "ruCaption": "черепаха"
        }, {
            "imageName": "frog",
            "ruCaption": "лягушка"
        }],
        "clothes": [{
            "imageName": "blouse",
            "ruCaption": "блузка"
        }, {
            "imageName": "dress",
            "ruCaption": "платье"
        }, {
            "imageName": "coat",
            "ruCaption": "пальто"
        }, {
            "imageName": "pants",
            "ruCaption": "штаны"
        }, {
            "imageName": "shirt",
            "ruCaption": "рубашка"
        }, {
            "imageName": "skirt",
            "ruCaption": "юбка"
        }, {
            "imageName": "boot",
            "ruCaption": "ботинки"
        }, {
            "imageName": "shoe",
            "ruCaption": "туфли"
        }],
        "action(set A)": [{
            "imageName": "swim",
            "ruCaption": "плавать"
        }, {
            "imageName": "skip",
            "ruCaption": "пропускать"
        }, {
            "imageName": "sing",
            "ruCaption": "петь"
        }, {
            "imageName": "play",
            "ruCaption": "играть"
        }, {
            "imageName": "cry",
            "ruCaption": "плакать"
        }, {
            "imageName": "run",
            "ruCaption": "бегать"
        }, {
            "imageName": "open",
            "ruCaption": "открывать"
        }, {
            "imageName": "ride",
            "ruCaption": "ехать"
        }],
        "action(set B)": [{
            "imageName": "point",
            "ruCaption": "указывать"
        }, {
            "imageName": "draw",
            "ruCaption": "рисовать"
        }, {
            "imageName": "dance",
            "ruCaption": "танцевать"
        }, {
            "imageName": "fish",
            "ruCaption": "ловить рыбу"
        }, {
            "imageName": "hug",
            "ruCaption": "обнимать"
        }, {
            "imageName": "jump",
            "ruCaption": "прыгать"
        }, {
            "imageName": "fly",
            "ruCaption": "летать"
        }, {
            "imageName": "dive",
            "ruCaption": "нырять"
        }],
        "cardId": [{
            "imageName": "angry",
            "ruCaption": "злой"
        }, {
            "imageName": "scared",
            "ruCaption": "испуганный"
        }, {
            "imageName": "tired",
            "ruCaption": "Уставший"
        }, {
            "imageName": "surprised",
            "ruCaption": "удивленный"
        }, {
            "imageName": "smile",
            "ruCaption": "улыбка"
        }, {
            "imageName": "laugh",
            "ruCaption": "смех"
        }, {
            "imageName": "sad",
            "ruCaption": "грустный"
        }, {
            "imageName": "happy",
            "ruCaption": "счастливый"
        }],
        "cardId": [{
            "imageName": "angry",
            "ruCaption": "злой"
        }, {
            "imageName": "scared",
            "ruCaption": "испуганный"
        }, {
            "imageName": "tired",
            "ruCaption": "Уставший"
        }, {
            "imageName": "surprised",
            "ruCaption": "удивленный"
        }, {
            "imageName": "smile",
            "ruCaption": "улыбка"
        }, {
            "imageName": "laugh",
            "ruCaption": "смех"
        }, {
            "imageName": "sad",
            "ruCaption": "грустный"
        }, {
            "imageName": "happy",
            "ruCaption": "счастливый"
        }],
    }


    window.data = {
        mainCardsData: mainCardsData,
        playCardsData: playCardsData
    }
})()