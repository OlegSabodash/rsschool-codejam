module.exports = function make(...numb) {
    if (typeof numb[0] == "number") {
        let arr = [...numb];
        function f(...args) {
            if (typeof args[0] == "function") return arr.reduce(args[0])
            else {
                arr.push(...args);
                return f;
            }
        }
        return f
    }
    else {
        return {
            error: "Not number"
        }
    }

}