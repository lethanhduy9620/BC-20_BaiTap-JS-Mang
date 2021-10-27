/**
 * *- Giải thích các biến:
 * + array: là mảng tham chiếu truyền vào hàm và mảng lấy từ file main.js 
 * + bienDem: là biến đếm của số số dương của mảng array trong hàm tinhTongCacSoDuong 
 */


function demSoDuong(array) {
    var bienDem = 0;
    for (var i = 0; i < array.length; i++) {
        if (Number(array[i]) > 0) {
            bienDem++;
        }
    }
    return bienDem;
}