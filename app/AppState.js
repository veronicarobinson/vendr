import { Snack } from './models/Snacks.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  snacks = [
    new Snack("potato chips", "https://images.unsplash.com/photo-1694101493127-eca6dfef5011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 1.75, "food"),
    new Snack("granola bars", "https://images.unsplash.com/photo-1621057621391-7ed446a24b41?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 1.25, "food"),
    new Snack("kitkat", "https://images.unsplash.com/flagged/photo-1567708044252-66de978ef021?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 1.25, "candy"),
    new Snack("gummy worms", "https://images.unsplash.com/photo-1533602747409-1f3dea118ac8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 1.50, "candy"),
    new Snack("juggernaut", "https://plus.unsplash.com/premium_photo-1681487655849-f25f861ff78b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 3.50, "drink"),
    new Snack("water bottle", "https://images.unsplash.com/photo-1616118132534-381148898bb4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 2.00, "drink"),
  ]
  // @type {Snack}
  money = 0;
  activeSnack = null
  // /**@type {import('./models/Example.js').Example[]} */
  /**
   * @type {Snack}
   */
  mySnacks = []
}

export const AppState = createObservableProxy(new ObservableAppState())