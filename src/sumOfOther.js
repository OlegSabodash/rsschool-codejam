module.exports = function sumOfOther(arr) {
    if (Array.isArray(arr)) {
        let array = [];
        let sumArr = arr.reduce(function (sum, item) {
            return sum + item
        }, 0);
        for (let i = 0; i < arr.length; i++) {
            array.push(sumArr - arr[i]);
        }
        return array
    }
    else {
        return {
            error: "Not array"
        }
    }
}

