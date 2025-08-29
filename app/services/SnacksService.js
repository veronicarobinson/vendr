import { AppState } from "../AppState.js";
import { SnackController } from "../controllers/SnacksController.js";

// 
class SnackService {
    setActiveSnack(snackName) {
        const selectedSnack = AppState.snacks.find((snack) => snack.name == snackName)
        AppState.activeSnack = selectedSnack
    }
}

class MoneyService {
    addQuarter() {
        AppState.money += .25
    }

    // setCurrentMoney() {
    //     let chosenSnack = AppState.snacks.find((snack) =>
    //         snack.price == )
    // }
}



export const snackService = new SnackService()
export const moneyService = new MoneyService()





// NOTE remember to draw in contoller after---------------------------------