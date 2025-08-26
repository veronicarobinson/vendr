// import { ExampleController } from './controllers/ExampleController.js';
import { SnackController } from './controllers/SnacksController.js';

class App {

  // ExampleController = new ExampleController() // ☑️ you can remove this - example only
  snackController = new SnackController()
}

window['app'] = new App()


