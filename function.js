var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickGood = function (e) {
        console.log('clicked');
    };
    return Handler;
}());
var h = new Handler();
uiElement.addClickListner(h.onClickGood);
