class Handling {
    constructor(button, spanTime) {
        this.button = button;
        this.spanTime = spanTime;
        this.clicked = false;
        this.interval = null;
        this.timeout = null;
        this.time = 0;
    }
    start() {
        this.clicked = !this.clicked;
        this.button.textContent = "Wait...";
        this.button.style.backgroundColor = "gray";

        if (this.clicked) {
            const delay = Math.floor((Math.random() * 6) + 1) * 1000;
            console.log(delay);
            this.timeout = setTimeout(() => {
                this.button.style.backgroundColor = "green";
                this.button.textContent = "Now!";
                this.interval = setInterval(() => {
                    this.spanTime.textContent = `${(this.time/100).toFixed(2)}s`;
                    this.time++
                }, 10)
            }, delay);
        } else if (!this.clicked) {
            this.reset()

        }
    }

    reset() {
        clearInterval(this.interval);
        clearTimeout(this.timeout);
        this.button.style.backgroundColor = "rgb(134, 41, 146)";
        this.button.textContent = "Reset";
        this.time = 0;
    }
    fault() {
        this.button.style.backgroundColor = "red";
        this.button.textContent = "Too fast!";
        clearTimeout(this.timeout);
    }
}

class Game {
    constructor() {
        this.spanTime = document.querySelector("span");
        this.button = document.querySelector("button");
        this.button.addEventListener("click", this.startGame.bind(this))
        this.handler = new Handling(this.button, this.spanTime);

    }
    startGame() {
        this.handler.start();

    }
}

const game = new Game();