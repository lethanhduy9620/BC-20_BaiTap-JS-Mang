/**
 * *- Giải thích các biến:
 * + Tham số array: là mảng lấy từ file main.js
 * + bienDem là biến chứa số lượng giá trị âm trong hàm demSoAm
 * + Hàm demSoDuong là hàm đếm số dương trong mảng và hàm gọi từ file baitap2.js
 * 
 */


function demSoAm(array1) {
    var bienDem = 0;
    for (var i = 0; i < array1.length; i++) {
        if (arr[i] < 0) {
            bienDem++;
        }
    }
    return bienDem;
}

function soSanhSoLuongSoAmVaSoDuong(array) {
    if (demSoDuong(array) > demSoAm(array)) {
        return "Số dương > Số âm";
    }
    else if (demSoDuong(array) < demSoAm(array)) {
        return "Số dương < Số âm";
    }
    else {
        return "Số dương = Số âm";
    }
}