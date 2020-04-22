(() => {
    function MockContructor(cardId) {
        this.cardId = cardId;
    }

    let arr = [];

    for (let i = 0; i < 8; i++) {
        let obj = new MockContructor('test');
        arr.push(obj);
    }
    console.log(arr);

    // код тут стартует

    const mainCardsData = [{
        "imageClass": "image-wrapper--emotion",
        "cardTitle": "emotions"
    }, {
        "imageClass": "image-wrapper--animal-one",
        "cardTitle": "animals (set A)"
    }, {
        "imageClass": "image-wrapper--clothes",
        "cardTitle": "clothes"
    }, {
        "imageClass": "image-wrapper--animal-two",
        "cardTitle": "animals (set B)"
    }, {
        "imageClass": "image-wrapper--action-one ",
        "cardTitle": "action(set A)"
    }, {
        "imageClass": "image-wrapper--action-two",
        "cardTitle": "action(set B)"
    }, {
        "imageClass": "image-wrapper--sing",
        "cardTitle": "action"
    }, {
        "imageClass": "test",
        "cardTitle": "test"
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
            "ruCaption": "улыбка"
        }, {
            "imageName": "chick",
            "ruCaption": "смех"
        }, {
            "imageName": "sad",
            "ruCaption": "грустный"
        }, {
            "imageName": "happy",
            "ruCaption": "счастливый"
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