/**
 * *- Giải thích các biến:
 * + array: là mảng tham chiếu truyền vào hàm và mảng lấy từ file main.js 
 * + newArr: mảng mới chứa giá trị trả về từ hàm laySoDuong
 * + min: là giá trị nhỏ nhất của hàm timSoDuongNhoNhat
 * + Hàm laySoDuong dùng để lấy số giá trị dương của các phần tử trong mảng array1 được truyền vào
 * + newPosArr: mảng chứa các phần tử có giá trị dương từ mảng array1 truyền vào 
 */
function laySoDuong(array1) {
    var newPosArr = [];
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] > 0) {
            newPosArr.push(array1[i]);
        }
    }
    return newPosArr;
}


function timSoDuongNhoNhat(array) {
    var newArr = laySoDuong(array);
    var min = newArr[0];
    if (min == undefined) {
        return "Không có số dương trong mảng";
    }
    for (var j = 0; j < newArr.length; j++) {
        if (Number(min) > Number(newArr[j])) {
            min = newArr[j];
        }
    }
    return "Số dương nhỏ nhất là " + min;
}