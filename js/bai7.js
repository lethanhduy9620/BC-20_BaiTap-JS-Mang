
/**
 * *- Giải thích các biến:
 * + array: là mảng tham chiếu truyền vào hàm và mảng lấy từ file main.js 
 * + newArr: mảng mới chứa giá trị trả về từ hàm copyMang
 * + Hàm copyMang gọi từ file bai6.js
 * 
 */

function sapXepTangDan(array) {
    var newArr = copyMang(array);
    for (var j = 0; j < newArr.length; j++) {
        for (var k = 0; k < newArr.length - 1; k++) {
            if (Number(newArr[k]) > Number(newArr[k + 1])) {
                var tempValue = newArr[k + 1];
                newArr[k + 1] = newArr[k];
                newArr[k] = tempValue;
            }
        }
    }
    return "Mảng sau khi được sắp xếp: " + newArr;
}
