module.exports = function recursion(obj) {
    if(typeof obj == "object"){
    let arr = [];
    function f(lOrR, stage = 0) {
        
        (arr[stage]) ? arr[stage].push(lOrR.value) : arr[stage] = [lOrR.value];

        if (lOrR.left) {
            f(lOrR.left, stage + 1);
        }

        if (lOrR.right) {
            f(lOrR.right, stage + 1);
        }
    };
    f(obj);
    return arr;
}
else{
    return {
        error: "Not obj"
    }
}
};