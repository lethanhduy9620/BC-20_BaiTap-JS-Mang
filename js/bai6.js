/**
 * *- Giải thích các biến:
 * + array: là mảng tham chiếu truyền vào hàm và mảng lấy từ file main.js 
 * + newArr: mảng mới chứa giá trị trả về từ hàm copyMang
 * 
 */
function copyMang(array1) {
    var newArr = [];
    for (var i = 0; i < array1.length; i++) {
        newArr.push(array1[i]);
    }
    return newArr;
}

function doiCho2ViTri(array) {
    var newArr = copyMang(array);
    var viTri1 = document.querySelector("#collapse-DoiCho #txtViTri1").value;
    var viTri2 = document.querySelector("#collapse-DoiCho #txtViTri2").value;
    var tempValue = newArr[viTri1];
    newArr[viTri1] = newArr[viTri2];
    newArr[viTri2] = tempValue;
    return "Mảng sau khi đổi: " + newArr;
}