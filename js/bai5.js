/**
 * *- Giải thích các biến:
 * + array: là mảng tham chiếu truyền vào hàm và mảng lấy từ file main.js 
 * + soChanCuoiCung: là biến chứa giá trị số chẵn ở vị trí cuối cùng mảng trong hàm tinhTongCacSoDuong 
 */

function timSoChanCuoiCung(array) {
    var soChanCuoiCung;
    for (var i = array.length - 1; i >= 0; i--) {
        if (Number(array[i]) % 2 == 0) {
            soChanCuoiCung = array[i];
            break;
        }
    }
    return (soChanCuoiCung != undefined ? soChanCuoiCung : "-1");
}