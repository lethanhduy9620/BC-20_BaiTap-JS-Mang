/**
 * *- Giải thích các biến:
 * + array: là mảng tham chiếu truyền vào hàm và mảng lấy từ file main.js 
 * + min: là giá trị nhỏ nhất của hàm tinhTongCacSoDuong 
 */

function timSoNhoNhat(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (Number(min) > Number(array[i])) {
            min = array[i];
        }
    }
    return "Số nhỏ nhất là: " + min;
}