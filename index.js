class CoffeeMachine {
  #waterAmount;
  #power;
  #capacity;

  constructor() {
    this.#power = 100;
    this.#capacity = 4200;
  }

  #getTimeToBoil() {
    return (this.#waterAmount * this.#capacity) / this.#power;
  }

  #onReady() {
    alert('Coffee is ready');
  }

  run() {
    alert(`Ваш кофе будет готов через ${this.#getTimeToBoil()}`);
    setTimeout(() => {
      this.#onReady();
    }, this.#getTimeToBoil());
  }
  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error('Значение должно быть положительным');
    if (value > this.#capacity)
      throw new Error('Нельзя залить воды больше, чем ' + this.#capacity);
    this.#waterAmount = value;
  }
}

const myCoffee = new CoffeeMachine();
myCoffee.waterAmount = 100;
myCoffee.run();
