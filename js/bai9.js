/**
 * *- Giải thích các biến:
 * + Tham số array: là mảng lấy từ file main.js
 * + bienDem là biến chứa giá trị số nguyên trong hàm demSoNguyen
 * 
 * 
 */

function demSoNguyen(array) {
    var bienDem = 0;
    for (var i = 0; i < array.length; i++) {
        if (Number.isInteger(Number(array[i]))) {
            bienDem++;
        }

    }
    return (bienDem != 0 ? bienDem : "-1");
}