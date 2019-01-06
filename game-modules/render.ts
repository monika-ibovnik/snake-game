import { IPosition } from './interfaces';
import { FIELD_SIZE } from './constants';

const addClass: { (positions: IPosition, className: string): void } = (position, className) => {
    let element = document.getElementsByClassName(`row${position.row} col${position.col}`);
    if (element && element.length > 0) {
        element[0].classList.add(className);
    }
}

export const renderCleanGameScreen: { (): void } = () => {
    let fieldHTML: string = '';
    for (let i: number = FIELD_SIZE - 1; i >= 0; i--) {
        let row = '';
        for (let j: number = 0; j < FIELD_SIZE; j++) {
            row += `<div class="field row${i} col${j}"></div>`
        }
        fieldHTML += `<div class="game-row">${row}</div>`;
    }
    const fieldElement = document.getElementById('snake-game');
    if (fieldElement) {
        fieldElement.innerHTML = `<div class="game-fields">${fieldHTML}</div>`
    }
};

export const renderGameState: { (postionArr: IPosition[], awardPoint: IPosition | null): void } = (positionArr, awardPoint) => {
    //map the snake's position
    positionArr.map((position) => {
        addClass(position, 'field--active');
    });
    //add awardPoint position
    if (awardPoint) {
        addClass(awardPoint, 'field--award');
    }
};

export const renderScore: { (score: number): void } = score => {
    let DOMElem = document.getElementById('score');
    if (DOMElem) {
        DOMElem.innerHTML = String(score);
    }
};