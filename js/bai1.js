/**
 * *- Giải thích các biến:
 * + array: là mảng tham chiếu truyền vào hàm và mảng lấy từ file main.js 
 * + tong: chứa giá trị tổng của hàm tinhTongCacSoDuong 
 */

function tinhTongCacSoDuong(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (Number(array[i]) > 0) {
            tong += Number(array[i]);
        }
    }
    return "Tổng các số dương là " + tong;
}
