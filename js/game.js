(() => {
    const maincardContainer = document.getElementById('main-card-container');

    let currentAudioPathCounter = 1;
    //let succesCounter = 0;
    let errorCounter = 0;

    let showResultPopup = () => {
        let playModeButton = document.getElementById('play-mode-button');

        let description = '';
        let mistakes = '';
        let parryImagePath = '';

        if (errorCounter === 0) {
            description = 'Excellent :)';
            parryImagePath = 'cool-parry';
        } else {
            mistakes = errorCounter;
            description = `You made ${mistakes} errors :(`;
            parryImagePath = 'cry-parry';
        }

        let resultMarckup = `<div class="card-list__game-result">
        <p class="game-result__description">${description}</p>
        <img src="assets/img/${parryImagePath}.jpg" alt="" class="game-result__image">
        </div>`;

        maincardContainer.insertAdjacentHTML('afterbegin', resultMarckup);
        //maincardContainer.childNodes[1].style.display = 'none';
        console.log(maincardContainer.childNodes);
        maincardContainer.childNodes[1].style.display = 'none';
        maincardContainer.childNodes[2].style.display = 'none';

        playModeButton.removeEventListener('click', repeatButtonEventFunction);
        playModeButton.innerHTML = '';
        playModeButton.textContent = 'Play!';
        playModeButton.classList.remove('card-list__play-button--repeate-mode');

        playModeButton.addEventListener('click', window.playModeButtonEventFunction);
        maincardContainer.removeEventListener('click', gameModeEventFunction);

        let toClearPlayCardsClasses = () => {
            let playCardsArray = document.querySelectorAll('.card-list__play-item--game-mode');
            console.log(playCardsArray);
            playCardsArray.forEach((it) => {
                it.querySelector('.card-list__play-item--disabled').classList.remove('card-list__play-item--disabled');
            });
        }
        toClearPlayCardsClasses();

        let closeResultPopupEventFunction = (evt) => {
            if (evt.target.classList.contains('play-item__image--game-mode')) {
                console.log(false);
            } else {
                maincardContainer.childNodes[1].style.display = 'flex';
                maincardContainer.childNodes[2].style.display = 'block';
                maincardContainer.childNodes[0].remove();

                document.removeEventListener('click', closeResultPopupEventFunction);
            }
        }

        document.addEventListener('click', closeResultPopupEventFunction);

        currentAudioPathCounter = 1;
        succesCounter = 0;
        errorCounter = 0;
    }

    let repeatButtonEventFunction = () => {
        window.render.toPlayAudio(window.gameArray[currentAudioPathCounter - 1].imageName);
    }

    let gameModeEventFunction = (evt) => {
        let targetElement = evt.target;

        if (targetElement.classList.contains('play-item__image--game-mode')) {
            if (targetElement.dataset.image === gameArray[currentAudioPathCounter - 1].imageName) {
                window.render.toPlayAudio('correct');
                targetElement.nextElementSibling.classList.add('card-list__play-item--disabled');
                if (currentAudioPathCounter !== gameArray.length) {
                    setTimeout(window.render.toPlayAudio, 1000, gameArray[currentAudioPathCounter].imageName);
                } else {
                    showResultPopup();
                    return;
                }

                currentAudioPathCounter += 1;
                succesCounter++;
            } else {
                window.render.toPlayAudio('error');
                errorCounter++;
            }
            console.log(gameArray[currentAudioPathCounter - 1]);
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