import { AppState } from "../AppState.js";

export class SnackController {
    constructor() {
        console.log(AppState.snacks)
        console.table(AppState.snacks)
        this.drawSnackCards()
        // AppState.on('mySnacks', this.drawSnackCards)

    }
}


drawSnackCards() {
    console.log('✏️ drawing snacks')
    let snackCardsElm = document.getElementById('snack-cards')
    let snacksContent = ''
    AppState.snacks.forEach((snack) => {
        snacksContent += snack.listCard
    })
    snackCardsElm.innerHTML = snacksContent
}


