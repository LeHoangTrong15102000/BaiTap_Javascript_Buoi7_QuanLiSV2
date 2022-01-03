// var hocSinh = {
//     maHS:'1',
//     tenHS:'Nguyễn Văn Tèo',
//     hienThiThongTin: function () { //Phương thức là hàm trong đối tượng
//         console.log('Mã học sinh 1',hocSinh.maHS);
//         console.log('Tên học sinh 1',hocSinh.tenHS);
//     }
// }
// var hocSinh2 = {
//     maHS:'2',
//     tenHS:'Nguyễn Văn Tí'
// }
// //Truy xuất đến biến trong đối tượng (Thuộc tính): [đối tượng].[tên thuộc tính]
// console.log('mã học sinh',hocSinh.maHS);
// console.log('tên học sinh',hocSinh['tenHS']);
// console.log('hocSinh2',hocSinh2);
// console.log('mã hs 2 ',hocSinh2.maHS);
// console.log('tên hs 2',hocSinh2.tenHS);
// //Gọi hàm trong đối tượng (Phương thức): [đối tượng].[tên phương thức ]();
// hocSinh.hienThiThongTin();
// hocSinh['hienThiThongTin']();

var sinhVien = {
  maSinhVien: '',
  tenSinhVien: '',
  loaiSinhVien: '',
  diemToan: '',
  diemVan: '',
  tinhDiemTrungBinh() {
    //this: trong đối tượng thì giúp chúng ta truy xuất được các thuộc tính trong đối tượng đó
    var diemTrungBinh = (Number(this.diemToan) + Number(this.diemVan)) / 2;
    return diemTrungBinh;
  },
  xepLoai() {
    var diemTrungBinh = this.tinhDiemTrungBinh();
    var ketQuaXepLoai = '';
    if (diemTrungBinh >= 5) {
      ketQuaXepLoai = 'Pass';
    } else {
      ketQuaXepLoai = 'Fail';
    }
    return ketQuaXepLoai;
  },
};

document.querySelector('button.btn').onclick = function () {
  //Lấy thông tin người dùng
  sinhVien.maSinhVien = document.querySelector('#txtMaSV').value;
  sinhVien.tenSinhVien = document.querySelector('#txtTenSV').value;
  sinhVien.loaiSinhVien = document.querySelector('#loaiSV').value;
  sinhVien.diemToan = document.querySelector('#txtDiemToan').value;
  sinhVien.diemVan = document.querySelector('#txtDiemVan').value;
  //Kiểm tra giá trị
  console.log('sinhVien', sinhVien);
  //Hiển thị thông tin lên giao  diện
  document.querySelector('#spanTenSV').innerHTML = sinhVien.tenSinhVien;
  document.querySelector('#spanMaSV').innerHTML = sinhVien.maSinhVien;
  document.querySelector('#spanLoaiSV').innerHTML = sinhVien.loaiSinhVien;
  var diemTrungBinh = sinhVien.tinhDiemTrungBinh();
  document.querySelector('#spanDTB').innerHTML = diemTrungBinh;
  var ketQuaXepLoai = sinhVien.xepLoai();
  document.querySelector('#spanXepLoai').innerHTML = ketQuaXepLoai;
};
