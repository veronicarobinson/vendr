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
            <div class="card ${this.type} shadow-sm" onlick="app.snackController.selectSnack('${this.name}')">
                <div class="card-body text-center">
                    <div class="fs-3">
                    <img src="${this.picture}" class="img-fluid card-img">
                    </div>
                    <div class="fw-bold">
                    ${this.name}
                    </div>
                    <div>
                    $${this.price}
                    </div>
                </div>
            </div>
        </article>
        
        `

    }


}