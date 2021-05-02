interface UIElement {
    addClickListner(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        console.log('clicked');
    }
}
let h = new Handler();
uiElement.addClickListner(h.onClickGood);