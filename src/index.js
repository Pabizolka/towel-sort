// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let arr = [];

    matrix.forEach((value, index) => {
        arr = index % 2 === 0 ? arr.concat(value) : arr.concat(value.reverse());
    });

    return arr;
};
