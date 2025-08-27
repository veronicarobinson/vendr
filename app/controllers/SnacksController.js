import { AppState } from "../AppState.js";
import { snackService } from "../services/SnacksService.js";

export class SnackController {
    constructor() {
        console.log(AppState.snacks)
        console.table(AppState.snacks)
        this.drawSnackCards()
        AppState.on('money', this.drawMoney)

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


    addQuarter() {
        snackService.addQuarter()
    }

    drawMoney() {
        const snackMoney = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(AppState.money)
        setText('total-money', snackMoney)

        let addTFElm = document.getElementById('bank')
        let myMoney = ''

    }








}


