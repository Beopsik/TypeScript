function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

function infiniteLoop(): never {
    while (true) {
    }
}

function $(selector: string) {
    if (selector === 'ID')
        return selector;

    return fail();
}

let id = $('ID');
console.log(id);