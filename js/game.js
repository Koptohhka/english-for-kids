(() => {
    const maincardContainer = document.getElementById('main-card-container');

    let currentAudioPathCounter = 1;
    let errorCounter = 0;

    let showResultPopup = () => {
        let playModeButton = document.getElementById('play-mode-button');
        let description = '';
        let mistakes = '';
        let parryImagePath = '';
        let audioPath = '';

        if (errorCounter === 0) {
            description = 'Excellent :)';
            parryImagePath = 'cool-parry';
            audioPath = 'succes';
        } else {
            mistakes = errorCounter;
            description = `You made ${mistakes} errors :(`;
            parryImagePath = 'cry-parry';
            audioPath = 'failure';
        }

        let resultMarckup = `<div class="card-list__game-result">
        <p class="game-result__description">${description}</p>
        <img src="assets/img/${parryImagePath}.jpg" alt="" class="game-result__image">
        </div>`;

        maincardContainer.innerHTML = resultMarckup;
        window.render.toPlayAudio(audioPath);

        currentAudioPathCounter = 1;
        errorCounter = 0;

        let showResultPopupEventFunc = (evt) => {
            if (evt.target.classList.contains('play-item__image--game-mode')) {

            } else {
                window.toRenderApp();
                document.removeEventListener('click', showResultPopupEventFunc);
            }
        }

        document.addEventListener('click', showResultPopupEventFunc);
    }

    let repeatButtonEventFunction = () => {
        window.render.toPlayAudio(window.gameArray[currentAudioPathCounter - 1].imageName);
    }

    let gameModeEventFunction = (evt) => {
        let targetElement = evt.target;
        if (targetElement.classList.contains('play-item__image--game-mode') && !targetElement.classList.contains('card-list__play-item--disabled')) {
            if (targetElement.dataset.image === gameArray[currentAudioPathCounter - 1].imageName) {
                window.render.toPlayAudio('correct');
                console.log(targetElement);
                window.render.toAddStatystics(targetElement.dataset.number, 'correctCounter');
                targetElement.classList.add('card-list__play-item--disabled');
                if (currentAudioPathCounter !== gameArray.length) {
                    setTimeout(window.render.toPlayAudio, 1000, gameArray[currentAudioPathCounter].imageName);
                } else {
                    showResultPopup();
                    return;
                }

                currentAudioPathCounter += 1;
            } else {
                window.render.toPlayAudio('error');
                errorCounter++;
                window.render.toAddStatystics(targetElement.dataset.number, 'wrongCounter');
            }
        }
    }

    let gameModeFunction = (currentDataCardsArray) => {
        currentAudioPathCounter = 1;
        let toShuffle = (arr) => {
            let copyARr = arr.slice();
            let j, temp;
            for (let i = copyARr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = copyARr[j];
                copyARr[j] = copyARr[i];
                copyARr[i] = temp;
            }
            return copyARr;
        }

        window.gameArray = toShuffle(currentDataCardsArray);
        window.render.toPlayAudio(gameArray[currentAudioPathCounter - 1].imageName);

        document.getElementById('main-card-container').addEventListener('click', gameModeEventFunction);

        document.getElementById('play-mode-button').addEventListener('click', repeatButtonEventFunction);
    }

    window.game = {
        gameModeFunction: gameModeFunction
    }
})()