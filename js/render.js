(() => {
    window.toRenderApp = () => {
        const mainCardsContainer = document.getElementById('main-card-container');
        const popupList = document.getElementById('popup-list');
        const playModeHadler = document.getElementById('play-handler');
        const trainTitle = document.getElementById('train');
        const playTitle = document.getElementById('play');

        let playModeFlag = false;
        let alreadyRenderedcardsFlag = false;
        let currentCardId = '';

        if (playModeHadler.checked) {
            playModeHadler.checked = false;
        } else {
            playModeHadler.checked = false;
        }

        playModeHadler.addEventListener('change', () => {
            if (playModeHadler.checked) {
                playModeFlag = true;
                trainTitle.classList.remove('input-container__title--active');
                playTitle.classList.add('input-container__title--active');
            } else {
                playModeFlag = false;
                trainTitle.classList.add('input-container__title--active');
                playTitle.classList.remove('input-container__title--active');
            }

            if (alreadyRenderedcardsFlag) {
                if (!playModeFlag) {
                    renderPlayCards(window.data.playCardsData[currentCardId]);
                } else {
                    renderGameModePlayCards(window.data.playCardsData[currentCardId]);
                }
            }
        });

        let renderMainCardsEventFunction = (evt) => {
            let targetElement = evt.target;
            if (targetElement.classList.contains('card-list__item') || targetElement.classList.contains('image-wrapper') || targetElement.classList.contains('card-title')) {
                let targetId = targetElement.id;
                if (!targetId) {
                    targetId = targetElement.parentNode.id;
                }

                if (!playModeFlag) {
                    console.log('true');
                    renderPlayCards(window.data.playCardsData[targetId]);
                } else {
                    renderGameModePlayCards(window.data.playCardsData[targetId]);
                }
                currentCardId = targetId;
            }
        }

        let renderMainCards = (data) => {
            let cardItemsArr = [];

            data.forEach((it) => {
                let cardItem = `<li class="card-list__item" id="${it.cardTitle}">
                <div class="image-wrapper" style="background: url('./assets/img/${it.imageName}.jpg') no-repeat;
                background-size: cover;"></div>
                <p class="card-title">${it.cardTitle}</p>
                </li>`;
                cardItemsArr.push(cardItem);
            });

            mainCardsContainer.innerHTML = cardItemsArr.join('');

            mainCardsContainer.addEventListener('click', renderMainCardsEventFunction);
            mainCardsContainer.removeEventListener('click', window.renderPlayCardsEventFunction);

            alreadyRenderedcardsFlag = false;
        }
        renderMainCards(window.data.mainCardsData);

        let toRemoveActiveClass = (data, Class, targetElement) => {
            data.forEach((it) => {
                it.classList.remove(Class);
            });
            targetElement.classList.add(Class);
        }

        let renderPopupList = (data) => {
            let popupListItemsArr = [];
            popupListItemsArr.push(`<li class="popup-list-item popup-list-item--active">Main page</li>`);

            data.forEach((it) => {
                let popupListItem = `<li class="popup-list-item">${it.cardTitle}</li>`;
                popupListItemsArr.push(popupListItem);
            });

            popupListItemsArr.push(`<li class="popup-list-item">Statistics</li>`);
            popupList.innerHTML = popupListItemsArr.join('');

            popupList.addEventListener('click', (evt) => {
                let targetElement = evt.target;

                
                if (targetElement.classList.contains('popup-list-item')) {
                    toRemoveActiveClass(popupList.childNodes, 'popup-list-item--active', targetElement);

                    if (targetElement.textContent === 'Statistics') {
                        if (localStorage.getItem('data') === null) {
                            localStorage.setItem('data', JSON.stringify(window.data.playCardsData));
                        }

                        let dataObj = localStorage.getItem('data');
                        renderStatysticsTable(JSON.parse(dataObj));
                    } else if (targetElement.textContent !== 'Main page') {
                        if (!playModeFlag) {
                            renderPlayCards(window.data.playCardsData[targetElement.textContent]);
                        } else {
                            renderGameModePlayCards(window.data.playCardsData[targetElement.textContent]);
                        }
                        currentCardId = targetElement.textContent;
                    } else {
                        renderMainCards(window.data.mainCardsData);
                    }
                }
                //closePopup(); // это едрить ее функция из бургер модуля
                setTimeout(closePopup, 100)
            });
        }
        renderPopupList(window.data.mainCardsData);


        window.renderPlayCardsEventFunction = (evt) => {
            let targetElement = evt.target;
            if (targetElement.classList.contains('play-item__image') || targetElement.classList.contains('play-item__title')) {
                let elementAudioPath = targetElement.textContent;
                if (!elementAudioPath) {
                    elementAudioPath = targetElement.nextElementSibling.textContent;
                }
                toPlayAudio(elementAudioPath);
                toAddStatystics(targetElement.dataset.number, 'trainCounter');
            } else if (targetElement.classList.contains('play-item__repeat-arrow')) {
                toFlipPlayCard(targetElement.parentNode.parentNode);
            }
        }

        let renderPlayCards = (data) => {
            let playCardItemsArr = [];

            data.forEach((it, i) => {
                let playCardItem = `<li class="card-list__play-item">
                <div class="play-item__wrapper">
                    <div class="play-item__front">
                        <div class="play-item__image" data-number="${i}" style="background: url('./assets/img/${it.imageName}.jpg') no-repeat;
                        background-size: cover;"></div>
                        <p class="play-item__title" data-number="${i}">${it.imageName}<i class="play-item__repeat-arrow"></i></p>
                    </div>
                    <div class="play-item__back">
                        <div class="play-item__image" style="background: url('./assets/img/${it.imageName}.jpg') no-repeat;
                        background-size: cover;"></div>
                        <p class="play-item__title">${it.ruCaption}</p>
                    </div>
                </div>
            </li>`;
                playCardItemsArr.push(playCardItem);
            });
            mainCardsContainer.innerHTML = playCardItemsArr.join('');

            mainCardsContainer.removeEventListener('click', renderMainCardsEventFunction);
            mainCardsContainer.addEventListener('click', window.renderPlayCardsEventFunction);

            alreadyRenderedcardsFlag = true;
        }

        let resertButtonEventFunction = () => {
            localStorage.clear()
            renderStatysticsTable(window.data.playCardsData);
        }

        let renderStatysticsTable = (data) => {
            let tableRowsArray = [`<tr class="card-list__table-row">
            <th class="card-list__table-data card-list__table-data--title-data">Category</td>
            <th class="card-list__table-data card-list__table-data--title-data">Word</td>
            <th class="card-list__table-data card-list__table-data--title-data">Translation</td>
            <th class="card-list__table-data card-list__table-data--title-data">Train</td>
            <th class="card-list__table-data card-list__table-data--title-data">Correct</td>
            <th class="card-list__table-data card-list__table-data--title-data">Wrong</th>
            </tr>`];

            for (key in data) {
                let sectionRowsArray = [];
                data[key].forEach((it) => {
                    let rowItem = `<tr class="card-list__table-row">
                    <td class="card-list__table-data">${key}</td>
                    <td class="card-list__table-data">${it.imageName}</td>
                    <td class="card-list__table-data">${it.ruCaption}</td>
                    <td class="card-list__table-data">${it.trainCounter}</td>
                    <td class="card-list__table-data">${it.correctCounter}</td>
                    <td class="card-list__table-data">${it.wrongCounter}</td>
                    </tr>`;
                    sectionRowsArray.push(rowItem);
                });
                tableRowsArray.push(sectionRowsArray.join(''));
            }
            mainCardsContainer.innerHTML = `<button id="table-reset-button" class="card-list__table--reset-button">Reset</button>
            <table class="card-list__table">${tableRowsArray.join('')}</table>`;

            document.getElementById('table-reset-button').addEventListener('click', resertButtonEventFunction);
        }

        let renderGameModePlayCards = (data) => {
            let playCardItemsArr = [];

            data.forEach((it, i) => {
                let playCardItem = `<li class="card-list__play-item--game-mode">
                <div data-image="${it.imageName}" data-number="${i}" class="play-item__image--game-mode"
                    style="background: url('./assets/img/${it.imageName}.jpg') no-repeat;"></div>
                    <div></div>
                </li>`;
                playCardItemsArr.push(playCardItem);
            });

            mainCardsContainer.innerHTML = `<div class="play-cards-wrapper">${playCardItemsArr.join('')}</div>`;
            mainCardsContainer.insertAdjacentHTML('beforeend', `<button class="card-list__play-button" id="play-mode-button">Play!</button>`)

            alreadyRenderedcardsFlag = true;

            let playModeButton = document.getElementById('play-mode-button');

            window.playModeButtonEventFunction = () => {
                window.game.gameModeFunction(window.data.playCardsData[currentCardId]);
                playModeButton.textContent = '';
                playModeButton.innerHTML = '<svg class="repeat-arrow" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo-alt" class="svg-inline--fa fa-redo-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg>';
                playModeButton.classList.add('card-list__play-button--repeate-mode');

                playModeButton.removeEventListener('click', window.playModeButtonEventFunction);
            }

            playModeButton.addEventListener('click', window.playModeButtonEventFunction);
        }

        let toFlipPlayCard = (targetElement) => {
            targetElement.parentNode.classList.add('play-item__wrapper--active');
            mainCardsContainer.removeEventListener('click', renderPlayCardsEventFunction);

            let toRemoveActiveClass = (evt) => {
                console.log(evt.target);
                if (!evt.target.classList.contains('play-item__image') && !evt.target.classList.contains('play-item__title')) {
                    targetElement.parentNode.classList.remove('play-item__wrapper--active');
                    document.removeEventListener('mousemove', toRemoveActiveClass);
                    mainCardsContainer.addEventListener('click', renderPlayCardsEventFunction);
                }
            }

            document.addEventListener('mousemove', toRemoveActiveClass);
        }

        let toPlayAudio = (path) => {
            let audio = new Audio();
            audio.preload = 'auto';
            audio.src = `./assets/audio/${path}.mp3`;
            audio.play();
        }

        let toAddStatystics = (key, clickType) => {
            if (localStorage.getItem('data') === null) {
                localStorage.setItem('data', JSON.stringify(window.data.playCardsData));
            } 
            let dataObj = JSON.parse(localStorage.getItem('data'));
            dataObj[currentCardId][key][clickType] += 1;
            localStorage.setItem('data', JSON.stringify(dataObj)); //а тут я перепзаписываю
        }


        window.render = {
            toPlayAudio: toPlayAudio,
            renderMainCards: renderMainCards,
            toAddStatystics: toAddStatystics
        }
    }
    window.toRenderApp();
})()


/// атиквный класс для анимации card-list__play-item--active