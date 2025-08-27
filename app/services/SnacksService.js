import { AppState } from "../AppState.js";

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
}

export const snackService = new SnackService()





// NOTE remember to draw in contoller after---------------------------------