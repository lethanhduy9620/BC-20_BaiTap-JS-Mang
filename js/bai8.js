/**
 * *- Giải thích các biến:
 * + Tham số array: là mảng lấy từ file main.js
 * 
 */
function is_SoNguyenTo(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true;
}

function timSoNguyenTo(array) {
    for (var i = 0; i < array.length; i++) {
        if (is_SoNguyenTo(array[i])) {
            return array[i];
        }
    }
    return "-1"
}

