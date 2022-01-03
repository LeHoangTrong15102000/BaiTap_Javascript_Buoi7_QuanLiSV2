
//Viết chức năng cho nút thêm sinh viên
document.querySelector('#btnThemSinhVien').onclick = function(){
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

    console.log('sinhVien',sinhVien);
    //Dom đến các phần tử trên giao diện để setup hiển thị
    //Tạo ra các thẻ trên giao diện
    //Mỗi sinh viên tạo ra 1 tr
    var trSinhVien = document.createElement('tr');

    var tdMaSinhVien = document.createElement('td');
    tdMaSinhVien.innerHTML = sinhVien.maSinhVien;

    var tdTenSinhVien = document.createElement('td');
    tdTenSinhVien.innerHTML = sinhVien.tenSinhVien;

    var tdEmail = document.createElement('td');
    tdEmail.innerHTML = sinhVien.email;

    var tdMatKhau = document.createElement('td');
    tdMatKhau.innerHTML = sinhVien.matKhau;

    var tdNgaySinh = document.createElement('td');
    tdNgaySinh.innerHTML = sinhVien.ngaySinh;

    var tdKhoaHoc = document.createElement('td');
    tdKhoaHoc.innerHTML = sinhVien.khoaHoc;

    var tdDiemTrungBinh = document.createElement('td');
    tdDiemTrungBinh.innerHTML = sinhVien.tinhDiemTrungBinh();
    //Td chức năng 
    var tdChucNang = document.createElement('td');
    var buttonXoa = document.createElement('button');
    buttonXoa.innerHTML = 'Xoá';
    buttonXoa.className = 'btn btn-danger';
    buttonXoa.onclick = function () {
        // console.log(buttonXoa)
        // console.log('Xoá nhé !');
        // var tdButton = buttonXoa.parentElement;
        // var trSV = tdButton.parentElement;
        // trSV.remove();
        var tr = buttonXoa.closest('tr');
        tr.remove();
        // buttonXoa.parentElement.parentElement.remove();
    }

    //Đưa button vào td chức năng
    tdChucNang.appendChild(buttonXoa);
    //Bỏ thẻ td vào thẻ tr
    trSinhVien.appendChild(tdMaSinhVien);
    trSinhVien.appendChild(tdTenSinhVien);
    trSinhVien.appendChild(tdEmail);
    trSinhVien.appendChild(tdNgaySinh);
    trSinhVien.appendChild(tdKhoaHoc);
    trSinhVien.appendChild(tdDiemTrungBinh);
    trSinhVien.appendChild(tdChucNang);

    //Bỏ thẻ tr vào tbody
    document.querySelector('tbody').appendChild(trSinhVien);

}





// var tenSinhVienA = 'Nguyễn Văn A';
// var tenSinhVienB = tenSinhVienA; 
// tenSinhVienB = 'Trần thị B';

// console.log('ten sinh vien A', tenSinhVienA);
// console.log('ten sinh vien B', tenSinhVienB);


// var sinhVienA = new SinhVien();
// sinhVienA.tenSinhVien = 'Nguyễn Văn A';

// var sinhVienB = sinhVienA;
// sinhVienB.tenSinhVien = 'Trần Thị B';

// console.log('SinhVienA',sinhVienA);
// console.log('SinhVienB',sinhVienB);