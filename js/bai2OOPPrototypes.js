let mangSinhVien = [];
let kiemTra = new Validation();

//Viết chức năng cho nút thêm sinh viên
document.querySelector('#btnThemSinhVien').onclick = () => {
  //   console.log('mangSinhVien', mangSinhVien);

  //Lấy thông tin người dùng nhập từ giao diện
  var sinhVien = new SinhVien();
  sinhVien.maSinhVien = document.querySelector('#txtMaSV').value;
  sinhVien.tenSinhVien = document.querySelector('#txtTenSV').value;
  sinhVien.email = document.querySelector('#txtEmail').value;
  sinhVien.matKhau = document.querySelector('#txtPass').value;
  sinhVien.ngaySinh = document.querySelector('#txtNgaySinh').value;
  sinhVien.khoaHoc = document.querySelector('#khSV').value;
  sinhVien.diemToan = document.querySelector('#txtDiemToan').value;
  sinhVien.diemLy = document.querySelector('#txtDiemLy').value;
  sinhVien.diemHoa = document.querySelector('#txtDiemHoa').value;
  // console.log('sinhVien', sinhVien);

  // Kỹ thuật đặt cờ hiệu
  // Kiểm tra hàm input người dùng nhập vào có bị rỗng hay không
  let valid = true;
  valid &=
    kiemTra.kiemTraRong(sinhVien.maSinhVien, '#spanMaSV') &
    kiemTra.kiemTraRong(sinhVien.tenSinhVien, '#spanTenSV') &
    kiemTra.kiemTraRong(sinhVien.email, '#spanEmailSV') &
    kiemTra.kiemTraRong(sinhVien.matKhau, '#spanMatKhau') &
    kiemTra.kiemTraRong(sinhVien.ngaySinh, '#spanNgaySinh') &
    kiemTra.kiemTraRong(sinhVien.khoaHoc, '#spanKhoaHoc') &
    kiemTra.kiemTraRong(sinhVien.diemToan, '#spanToan') &
    kiemTra.kiemTraRong(sinhVien.diemLy, '#spanLy') &
    kiemTra.kiemTraRong(sinhVien.diemHoa, '#spanHoa');

  // Kiểm tra tất cả là kí tự
  valid &= kiemTra.kiemTraTatCaKyTu(
    sinhVien.tenSinhVien,
    '#error_allLetter_tenSinhVien'
  );

  // kiểm tra tất cả là số
  valid &=
    kiemTra.kiemTraTatCaLaSo(sinhVien.diemToan, '#spanToan') &
    kiemTra.kiemTraTatCaLaSo(sinhVien.diemLy, '#spanLy') &
    kiemTra.kiemTraTatCaLaSo(sinhVien.diemHoa, '#spanHoa');

  // Kiểm tra giá trị truyền hợp lệ
  valid &=
    kiemTra.kiemTraGiaTri(
      sinhVien.diemToan,
      '#error_minMaxValue_diemToan',
      0,
      10
    ) &
    kiemTra.kiemTraGiaTri(sinhVien.diemLy, '#error_minMaxValue_diemLy', 0, 10) &
    kiemTra.kiemTraGiaTri(
      sinhVien.diemHoa,
      '#error_minMaxValue_diemHoa',
      0,
      10
    );

  // Kiểm tra độ dài mã sinh Viên
  valid &= kiemTra.kiemTraDoDai(
    sinhVien.maSinhVien,
    '#error_minMaxLength_maSV',
    6,
    8
  );

  if (!valid) {
    // Nếu valid không phải là true=> false => dừng chương trình lại
    return;
  }

  // Kiểm tra tất cả các kí tự đầu vào xem có phải là chữ hết hay không => Nếu là chữ hết thì hợp lệ

  //Lưu thông tin sinh viên vào mảng
  mangSinhVien.push(sinhVien);

  //Lưu mảng sinh viên vào localstorage
  luuStorage();

  // [sinhVien1,sinhVien2] => [{...},{...},{maSinhVien:'',tenSinhVien}]
  console.log('mangSinhVien', mangSinhVien);
  //Gọi hàm tạo table sinh viên từ mang sinh vien
  renderTable(mangSinhVien);
};
function renderTable(arrSinhVien) {
  //input là 1 mảng sinh viên  [{maSinhVien:'1',tenSinhVien:'...'},{maSinhVien:'2',tenSinhVien:'...'},{maSinhVien:'3',tenSinhVien:'...'}]
  //Duyệt qua mảng để tạo ra 1 chuỗi các thẻ tr
  var ketQua = '';
  for (var index = 0; index < arrSinhVien.length; index++) {
    //Mỗi lần duyệt lấy ra 1 sinh viên
    var sv = arrSinhVien[index];

    // Phải lấy ra các thuộc tính đã được định nghĩa sẵn trong class SinhVien
    // Khai báo lớp đối tượng sau đó truyền vào parameter trong lớp đối tượng

    // Vừa khởi tạo vừa truyền giá trị cho nó luôn, để mắc công mỗi lần phải gán giá trị cho mỗi thuộc tính của class
    var sinhVien = new SinhVien(
      sv.maSinhVien,
      sv.tenSinhVien,
      sv.email,
      sv.matKhau,
      sv.ngaySinh,
      sv.khoaHoc,
      sv.diemToan,
      sv.diemLy,
      sv.diemHoa
    );
    // sinhVien.maSinhVien = sv.maSinhVien;
    // sinhVien.tenSinhVien = sv.tenSinhVien;
    // sinhVien.email = sv.email;
    // sinhVien.diemHoa = sv.diemHoa;
    // sinhVien.diemLy = sv.diemLy;
    // sinhVien.diemToan = sv.diemToan;
    // sinhVien.khoaHoc = sv.khoaHoc;
    // sinhVien.matKhau = sv.matKhau;
    // sinhVien.ngaySinh = sv.ngaySinh;

    // console.log('sinhVien', sinhVien);

    //{maSinhVien:'1',tenSinhVien:'...',...}
    //Từ biến sinh viên => tạo ra các thẻ tr bằng chuỗi

    // Mỗi lần lặp thì ta sẽ thêm vào kết quả các thể thuộc tính của SinhVien lên trên table
    ketQua += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.ngaySinh}</td>
                <td>${sinhVien.khoaHoc}</td>
                <td>${sinhVien.tinhDiemTrungBinh().toFixed(2)}</td>

                <td>
                    <button class="btn btn-primary" onclick="chinhSua('${
                      sv.maSinhVien
                    }')">Chỉnh sửa</button>

                    <button class="btn btn-danger" onclick="xoaSinhVien('${
                      sv.maSinhVien
                    }')">Xoá</button>
                </td>
            </tr>`;
  }
  document.querySelector('tbody').innerHTML = ketQua;
  return ketQua; //output '<tr>...</tr><tr>....</tr>'
}

function xoaSinhVien(maSinhVienClick) {
  //2
  console.log('maSVClick', maSinhVienClick);
  for (var index = 0; index < mangSinhVien.length; index++) {
    //[{maSinhVien:'1',tenSinhVien:'...'},{maSinhVien:'2',tenSinhVien:'...'},{maSinhVien:'3',tenSinhVien:'...'}]
    //Mỗi lần duyệt lấy ra 1 sinh viên
    var sv = mangSinhVien[index];
    if (sv.maSinhVien === maSinhVienClick) {
      //Nếu sinhVien trong mảng có mã = với lại mã người dùng click nút xoá -> xoá thằng trong mảng dựa vào index
      mangSinhVien.splice(index, 1);
    }
  }
  //Sau khi xoá
  renderTable(mangSinhVien);

  // Mỗi là xóa một sinh viên ta xóa luôn ở trong localStorage, reset lại localStorage
  luuStorage(); // set lại cái localStorage
}

function chinhSua(maSinhVienClick) {
  console.log('maSinhVienClick', maSinhVienClick);
  for (var index = 0; index < mangSinhVien.length; index++) {
    //Mỗi lần duyệt dựa vào index lấy ra 1 object sinhVien trong mangSinhVien
    var sv = mangSinhVien[index];
    if (sv.maSinhVien === maSinhVienClick) {
      //Lấy thông tin sinh viên đó gán ngược lại các input phía trên
      document.querySelector('#txtMaSV').value = sv.maSinhVien;
      document.querySelector('#txtTenSV').value = sv.tenSinhVien;
      document.querySelector('#txtEmail').value = sv.email;
      document.querySelector('#txtPass').value = sv.matKhau;
      document.querySelector('#txtNgaySinh').value = sv.ngaySinh;
      document.querySelector('#khSV').value = sv.khoaHoc;
      document.querySelector('#txtDiemToan').value = sv.diemToan;
      document.querySelector('#txtDiemLy').value = sv.diemLy;
      document.querySelector('#txtDiemHoa').value = sv.diemHoa;

      //Khoá không cho người dùng sửa mã sinh viên
      document.querySelector('#txtMaSV').disabled = true;
    }
  }
}

//Viết hàm lưu thông tin mangNguoiDung (table Sinh viên ) vào storage
function luuStorage() {
  //Biến đổi mảng sinh viên thành chuỗi [] => '[]'
  var sMangSinhVien = JSON.stringify(mangSinhVien); // []
  //Lưu vào localstorage
  localStorage.setItem('mangSinhVien', sMangSinhVien);
}

//Lấy dữ liệu từ localstorage ra table
function layStorage() {
  //Trước khi lấy kiểm tra

  //  Nếu mà có cái kho lưu trữ này thì làm gì tiếp theo
  if (localStorage.getItem('mangSinhVien')) {
    //Lấy giá trị từ localstorage ra => chuỗi
    var sMangSinhVien = localStorage.getItem('mangSinhVien');
    //Biến chuỗi thành mảng gán cho biến mangSinhVien
    mangSinhVien = JSON.parse(sMangSinhVien);

    // console.log('mảng sinh viên',sMangSinhVien);
    // console.log('mảng sinh viên',mangSinhVien);

    //Gọi hàm tạo bảng từ mảng sinh viên
    renderTable(mangSinhVien);
  }
}

layStorage();

//Viết hàm cập nhật sinh viên
document.querySelector('#btnCapNhatSinhVien').onclick = function () {
  var sinhVienCapNhat = new SinhVien();
  //Lấy dữ liệu sau khi người dùng thay đổi và bấm vào nút btnCapNhatSinhVien
  sinhVienCapNhat.maSinhVien = document.querySelector('#txtMaSV').value;
  sinhVienCapNhat.tenSinhVien = document.querySelector('#txtTenSV').value;
  sinhVienCapNhat.email = document.querySelector('#txtEmail').value;
  sinhVienCapNhat.matKhau = document.querySelector('#txtPass').value;
  sinhVienCapNhat.ngaySinh = document.querySelector('#txtNgaySinh').value;
  sinhVienCapNhat.khoaHoc = document.querySelector('#khSV').value;
  sinhVienCapNhat.diemToan = document.querySelector('#txtDiemToan').value;
  sinhVienCapNhat.diemLy = document.querySelector('#txtDiemLy').value;
  sinhVienCapNhat.diemHoa = document.querySelector('#txtDiemHoa').value;

  console.log('sinhVienCapNhat', sinhVienCapNhat);
  //Tìm ra sinh viên cần cập nhật
  for (var index = 0; index < mangSinhVien.length; index++) {
    //Mỗi lần duyệt lấy ra 1 sinh viên
    var sv = mangSinhVien[index];
    if (sv.maSinhVien === sinhVienCapNhat.maSinhVien) {
      // sv = sinhVienCapNhat;
      sv.tenSinhVien = sinhVienCapNhat.tenSinhVien;
      sv.email = sinhVienCapNhat.email;
      sv.matKhau = sinhVienCapNhat.matKhau;
      sv.ngaySinh = sinhVienCapNhat.ngaySinh;
      sv.khoaHoc = sinhVienCapNhat.khoaHoc;
      sv.diemToan = sinhVienCapNhat.diemToan;
      sv.diemLy = sinhVienCapNhat.diemLy;
      sv.diemHoa = sinhVienCapNhat.diemHoa;
      //Lưu vào localstorage
      luuStorage();
      //Gọi hàm tạo lại bảng
      renderTable(mangSinhVien);
      //clear các input đi
      clearInput();
      // console.log('sinh vien thao tác', sv);
      // console.log('sinh viên 2', mangSinhVien[1]);
    }
  }
};

function clearInput() {
  document.querySelector('#txtMaSV').disabled = false;
  document.querySelector('#txtTenSV').value = '';
  document.querySelector('#txtEmail').value = '';
  document.querySelector('#txtMaSV').value = '';
  document.querySelector('#txtPass').value = '';
  document.querySelector('#txtDiemToan').value = '';
  document.querySelector('#txtDiemLy').value = '';
  document.querySelector('#txtDiemHoa').value = '';
}

//xử lý tìm kiếm
document.querySelector('#btnSearch').onclick = function () {
  // Tạo ra 1 mảng sv chứa kết quả tìm kiếm
  var mangSinhVienTimKiem = [];

  //Lấy từ khoá người dùng gõ vào
  var tuKhoa = document.querySelector('#txtSearch').value;
  for (var index = 0; index < mangSinhVien.length; index++) {
    ///Mỗi lần duyệt sẽ lấy ra sinh viên
    var sv = mangSinhVien[index];
    //.trim(): loại bỏ khoảng trống đầu và cuối của chuỗi       nguyen van teo      => nguyen van teo
    //.toLowerCase(): biến các chữ trong chuỗi thành chữ thường => tRan tHi lUA => tran thi lua
    if (
      sv.tenSinhVien
        .trim()
        .toLowerCase()
        .search(tuKhoa.trim().toLowerCase()) !== -1
    ) {
      //Lấy ra tên tìm coi có chứa cụm từ khoá hay k nếu có thì bỏ object sinhVien đó vào mangSinhVienTimKiem
      mangSinhVienTimKiem.push(sv);
    }
  }
  //renderTable => viết lại cái bảng
  renderTable(mangSinhVienTimKiem);
};

// svCapNhat = {...}
//[{...},{...},{...}]

// //Lưu 1 giá trị vào localstorage
// localStorage.setItem('abc','hello cybersoft');

// //Lấy ra 1 giá trị từ localstorage
// var result = localStorage.getItem('abc');

// document.querySelector('tbody').innerHTML = result;

// //Xoá 1 giá trị ra khỏi storage
// localStorage.removeItem('abc');
