function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
function $(selector) {
    if (selector === 'ID')
        return selector;
    return fail();
}
var id = $('ID');
console.log(id);
