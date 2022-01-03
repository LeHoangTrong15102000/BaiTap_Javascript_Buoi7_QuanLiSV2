/*
    Viết chương trình lấy thông tin sinh viên từ người dùng -> hiển ra các span#maNhanVien span#spanLoaiSV span#spanDTB
*/
document.querySelector('button.btn').onclick = function() {
    //Lấy thông tin người dùng nhập từ giao diện
    var maSinhVien = document.querySelector('#txtMaSV').value;
    var tenSinhVien = document.querySelector('#txtTenSV').value;
    var loaiSV = document.querySelector('#loaiSV').value;
    // console.log('maSinhVien',maSinhVien)
    // console.log('tenSinhVien',tenSinhVien)
    // console.log('loaiSV',loaiSV)
    //Hiển thị nội dung ra giao diện
    document.querySelector('#spanMaSV').innerHTML = maSinhVien;
    document.querySelector('#spanTenSV').innerHTML = tenSinhVien;
    document.querySelector('#spanLoaiSV').innerHTML = loaiSV;
    //Xử lý điểm trung bình 
    var diemToan = document.querySelector('#txtDiemToan').value;
    var diemVan = document.querySelector('#txtDiemVan').value;
    var diemTrungBinh = tinhDiemTrungBinh(diemToan,diemVan);
    document.querySelector('#spanDTB').innerHTML = diemTrungBinh;
    //Xếp loại
    var xepLoaiSinhVien = xepLoai(diemTrungBinh);
    document.querySelector('#spanXepLoai').innerHTML = xepLoaiSinhVien;
}

function tinhDiemTrungBinh (dToan,dVan) { //Input

    var dtb = 0;
    dtb = (Number(dToan) + Number(dVan))/2;
    return dtb; //output
}

function xepLoai (diemTB) { //input 
    var loai = '';
    if(Number(diemTB) >= 5) {
        loai = 'Đậu';
    }else {
        loai = 'Rớt';
    }

    return loai;
}