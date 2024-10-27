class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.maxValue = max;
        this.minValue = min;
    }

    guess() {
        this.result = Math.round((this.maxValue + this.minValue) / 2);
        return this.result;
    }

    lower() {
        this.maxValue = this.result;
    }

    greater() {
        this.minValue = this.result;
    }
}

module.exports = GuessingGame;
