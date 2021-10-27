/*** 
 * - Giải thích các biến dùng trong chương trình:
 * + Mảng arr là mảng global được dùng chung cho toàn bộ file js
 * + Hàm tinhTongCacSoDuong gọi từ file baitap1.js
 * + Hàm demSoDuong gọi từ file baitap2.js
 * + Hàm timSoNhoNhat gọi từ file baitap3.js
 * + Hàm timSoDuongNhoNhat gọi từ file baitap4.js
 * + Hàm timSoChanCuoiCung gọi từ file baitap5.js
 * + Hàm doiCho2ViTri gọi từ file baitap6.js
 * + Hàm sapXepTangDan gọi từ file baitap7.js
 * + Hàm timSoNguyenTo gọi từ file baitap8.js
 * + Hàm demSoNguyen gọi từ file baitap9.js
 * + Hàm soSanhSoLuongSoAmVaSoDuong gọi từ file baitap10.js 
 * 
 * */
// *GLOBAL 
var arr = [];
document.querySelector("#txtMang").value = arr;

function themVaoMang(array) {
    var n = document.querySelector("#txtSoN").value;
    array.push(n);
    return array;
}

//Sự kiện của nút "Thêm"
document.querySelector("#btnThem").onclick = function () {
    document.querySelector("#txtMang").value = themVaoMang(arr);
};

//Bài tập 1 - Tổng số dương || Sự kiện của nút "Tính tổng"
document.querySelector("#collapse-TongSoDuong #btnTinhTong").onclick = function () {
    document.querySelector("#collapse-TongSoDuong #txtKetQua").value = tinhTongCacSoDuong(arr);
};

//Bài tập 2 - Đếm số dương || Sự kiện của nút "Đếm số"
document.querySelector("#collapse-DemSoDuong #btnDemSo").onclick = function () {
    document.querySelector("#collapse-DemSoDuong #txtKetQua").value = "Số các số dương có trong mảng là " + demSoDuong(arr);
};

//Bài tập 3 - Tìm số nhỏ nhất trong mảng || Sự kiện của nút "Tìm số nhỏ nhất"
document.querySelector("#collapse-TimSoNhoNhat #btnTimSoNhoNhat").onclick = function () {
    document.querySelector("#collapse-TimSoNhoNhat #txtKetQua").value = timSoNhoNhat(arr);

};

//Bài tập 4 - Tìm số dương nhỏ nhất trong mảng || Sự kiện của nút "Tìm số dương nhỏ nhất"
document.querySelector("#collapse-TimSoDuongNhoNhat #btnTimSoDuongNhoNhat").onclick = function () {
    document.querySelector("#collapse-TimSoDuongNhoNhat #txtKetQua").value = timSoDuongNhoNhat(arr);
};

//Bài tập 5 - Tìm số chẵn cuối cùng trong mảng || Sự kiện của nút "Tìm số chẵn"
document.querySelector("#collapse-TimSoChanCuoiCung #btnTimSoChanCuoiCung").onclick = function () {
    document.querySelector("#collapse-TimSoChanCuoiCung #txtKetQua").value = timSoChanCuoiCung(arr);
};

//Bài tập 6 - Đổi chỗ 2 giá trị trong mảng theo vị trí || Sự kiện của nút "Đổi chỗ"
document.querySelector("#collapse-DoiCho #btnDoiCho").onclick = function () {
    document.querySelector("#collapse-DoiCho #txtKetQua").value = doiCho2ViTri(arr);;
};


//Bài tập 7 - Sắp xếp mảng theo thứ tự tăng dần || Sự kiện của nút "Sắp xếp"
document.querySelector("#collapse-SapXepTangDan #btnSapXep").onclick = function () {
    document.querySelector("#collapse-SapXepTangDan #txtKetQua").value = sapXepTangDan(arr);
};

//Bài tập 8 - Tìm số nguyên tố đầu tiên trong mảng || Sự kiện của nút "Tím số nguyên tố"
document.querySelector("#collapse-TimSoNguyenToDauTien #btnTimSoNguyenTo").onclick = function () {
    document.querySelector("#collapse-TimSoNguyenToDauTien #txtKetQua").value = timSoNguyenTo(arr);
};

//Bài tập 9 - Đếm số nguyên || Sự kiện của nút "Đếm số nguyên"
document.querySelector("#collapse-DemSoNguyen #btnDemSoNguyen").onclick = function () {
    document.querySelector("#collapse-DemSoNguyen #txtKetQua").value = demSoNguyen(arr);
};


//Bài tập 10 - So sánh số lượng âm và dương || Sự kiện của nút "So sánh"
document.querySelector("#collapse-SoSanhSoAmVaSoDuong #btnSoSanh").onclick = function () {
    document.querySelector("#collapse-SoSanhSoAmVaSoDuong #txtKetQua").value = soSanhSoLuongSoAmVaSoDuong(arr);
};
