/**
 * Created by PACHAURI on 30-Mar-17.
 */
class Greeter2 {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerText += `This time is :`;
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}

window.onload = () => {
    let el: HTMLElement = document.getElementById('content');
    let greeter = new Greeter2(el);
    greeter.start();
}