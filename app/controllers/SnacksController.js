import { AppState } from "../AppState.js";
import { snackService } from "../services/SnacksService.js";
import { moneyService } from "../services/SnacksService.js";

export class SnackController {
    constructor() {
        console.log(AppState.snacks)
        console.table(AppState.snacks)
        this.drawSnackCards()
        AppState.on('money', this.drawTotal)

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
        moneyService.addQuarter()
    }

    drawTotal() {
        let totalElm = document.getElementById('total-money')
        let totalMoneyContent = ''
        AppState.snacks.forEach((snack) => {
            totalMoneyContent += snack.price

        })
        totalElm.innerHTML = totalMoneyContent

    }








}


