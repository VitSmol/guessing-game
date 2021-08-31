class GuessingGame {

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
       return this.middle = Math.ceil((this.max + this.min) / 2) 
    }

    lower() {
        this.max = this.middle
    }

    greater() {
        this.min = this.middle
    }
}

module.exports = GuessingGame;
