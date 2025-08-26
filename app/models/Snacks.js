export class Snack {
    constructor(name, picture, price, type) {
        this.name = name
        this.picture = picture
        this.price = price
        this.type = type
    }


    get listCard() {
        return `
        <article class="col-md-2">
            <div class="card ${this.type} shadow-sm" onlick="app.snackController.selectSnack('$this.name}')">
                <div class="card-body text-center">
                    <div class="fs-3">
                    ${this.picture}
                    </div>
                    <div class="fw-bold>
                    ${this.name}
                    </div>
                </div>
            </div>
        </article>
        
        `

    }

}