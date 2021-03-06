var nums = [];
var soDuong = [];
function themSoN() {
  // B1 DOM tới input và lấy value
  var numberN = +document.getElementById("numberN").value;
  // B2: Thêm value vừa lấy vào mảng nums
  nums.push(numberN);
  // B3 Hiển thị
  var hienSoN = document.getElementById("hienSoN");
  hienSoN.style.display = "block";
  hienSoN.innerHTML = "Các số được thêm: " + nums;
}
//  Bài 1
function tinhTongSoDuong() {
  // B1 Tạo biến tongSoDuong
  var tongSoDuong = 0;
  // B2 Tạo vòng lặp để tính toán
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      tongSoDuong += nums[i];
    }
  }

  // B3 Hiển thị
  var divHienTongSoDuong = document.getElementById("divHienTongSoDuong");
  divHienTongSoDuong.style.display = "block";
  divHienTongSoDuong.innerHTML = `<p>Tổng số dương: ${tongSoDuong}</p>`;
}
// Bài 2
function timSoLuongSoDuong() {
  // B1 Tạo biến soLuongSoDuong
  var soLuongSoDuong = 0;
  // B2 Tạo vòng lặp để tính toán
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      soLuongSoDuong++;
    }
  }
  // B3 Hiển thị
  var divHienSoLuongSoDuong = document.getElementById("divHienSoLuongSoDuong");
  divHienSoLuongSoDuong.style.display = "block";
  divHienSoLuongSoDuong.innerHTML = `
      <p>Số lượng số dương: ${soLuongSoDuong}</p>
    `;
}
// Bài 3
function timSoNhoNhat() {
  // B1 Tạo biến min và gán cho giá trị đầu tiền của mảng
  var min = nums[0];
  // B2 Duyệt và kiểm tra mảng từ vị trí thứ 2, nếu số đó nhỏ hơn min thì ta sẽ gán lại cho min
  for (var index = 1; index < nums.length; index++) {
    if (nums[index] < min) {
      min = nums[index];
    }
  }
  // B3 Hiển thị
  var divHienSoNhoNhat = document.getElementById("divHienSoNhoNhat");
  divHienSoNhoNhat.style.display = "block";
  divHienSoNhoNhat.innerHTML = `
      <p>Số nhỏ nhất: ${min}</p>
    `;
}
// Bài 4
function timSoDuongNhoNhat() {
  // B1 Tạo mảng các số dương
  var soDuong = [];
  // tạo vòng lặp để có được một mảng số dương mới từ mảng nums
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      soDuong.push(nums[i]);
    }
  }
  console.log(soDuong);
  // B1 Tạo biến soNhoNhat để xét cho trường hợp không có số dương nào trong mảng
  var soNhoNhat = -1
  // Tạo biến minSoDuong và gán cho giá trị cho giá trị đầu tiền trong mảng
  var minSoDuong = soDuong[0]
  // b2 Duyệt và kiểm tra mảng từ vị trí thứ 1, nếu số đó nhỏ hơn hoặc bằng minSoDuong thì ta sẽ gán lại cho minSoDuong
 
  for (var index = 0; index < soDuong.length; index++) {
    if (minSoDuong >= soDuong[index]) {
      minSoDuong = soDuong[index];
      soNhoNhat = minSoDuong
    }
  }
  console.log(minSoDuong);
  console.log(soNhoNhat);
  if (soNhoNhat === -1 ) {
    var divHienSoDuongNhoNhat = document.getElementById("divHienSoDuongNhoNhat");
  divHienSoDuongNhoNhat.style.display = "block";
  divHienSoDuongNhoNhat.innerHTML = `
      <p>Không có số dương nào trong mảng</p>
    `;
  } else {
  var divHienSoDuongNhoNhat = document.getElementById("divHienSoDuongNhoNhat");
  divHienSoDuongNhoNhat.style.display = "block";
  divHienSoDuongNhoNhat.innerHTML = `
      <p>Số dương nhỏ nhất: ${minSoDuong}</p>
    `;
}}
// Bài 5
// B1 Viết hàm kiểm tra số chẵn để trả về hai kết quả khác nhau
function kiemTraCoSoChan() {
  // B2 Viết hàm tìm số chẵn cuối cùng bến dưới rồi gán vào biến số chẵn
  var soChan = timSoChan();
  // Xét trường hợp khi không có bất kì số chẵn nào trong mảng
  if (soChan === -1 || soChan===0) {
    // B3 Hiện thị Kết quả
    var divHienSoChanCuoiCung = document.getElementById(
      "divHienSoChanCuoiCung"
    );
    divHienSoChanCuoiCung.style.display = "block";
    divHienSoChanCuoiCung.innerHTML = `
                <p>Không có số chẵn nào trong mãng</p>
              `;
  } else {
    var divHienSoChanCuoiCung = document.getElementById(
      "divHienSoChanCuoiCung"
    );
    divHienSoChanCuoiCung.style.display = "block";
    divHienSoChanCuoiCung.innerHTML = `
      <p>Số chẵn cuối cùng: ${soChan}</p>
    `;
  }
}
// Viết hàm tìm số chẵn
function timSoChan() {
  // B1 Tạo biến soChan
  var soChan = -1;
  // Tạo vòng lặp
  for (var index = 0; index < nums.length; index++) {
    if (nums[index] % 2 == 0) {
      soChan = nums[index];
    }
  }

  return soChan;
}
// Bài 6
function doiViTri() {
  //   B1 Dom tới các input để lấy giá trị, đồng thời tạo một biến tạm thời.
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var bienTamThoi = 0;
  //   B2 Viết logic đổi vị trí các giá trị
  bienTamThoi = nums[number1];
  nums[number1] = nums[number2];
  nums[number2] = bienTamThoi;
  //  B3 Hiện thị
  var divDoiViTri = document.getElementById("divDoiViTri");
  divDoiViTri.style.display = "block";
  divDoiViTri.innerHTML = `
      <p>Mảng sau khi đổi vị trí: ${nums}</p>
    `;
}
// Bài 7

function sapXepTangDan() {
  nums.sort(function (a, b) {
    return a - b;
  });
  var divHienSapXepTangDan = document.getElementById("divHienSapXepTangDan");
  divHienSapXepTangDan.style.display = "block";
  divHienSapXepTangDan.innerHTML = `
       <p>Mảng sau khi được sắp xếp: ${nums}</p>
     `;
}
// Bài 8
// B1 Viết hàm kiểm tra số nguyên tố
function kiemTraSoNguyenTo(n) {
  // true = số nguyên tố;
  // false =  không phải số nguyên tố
  if (n < 2) return false;

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// B2 Viết hàm tìm số nguyên tốt
function timSoNguyenToDauTien() {
  var soNguyenToDauTien = -1
  // Tạo vòng lặp
  for (var i = 0; i < nums.length; i++) {
    if (kiemTraSoNguyenTo(nums[i]) === true) {
      soNguyenToDauTien = nums[i]
      break;
      //  Chỉ cần tìm được 1 kết quả ta cho dừng vòng lắp bằng break
    } 
    console.log(soNguyenToDauTien);
  }
   if (soNguyenToDauTien == -1) {
    soNguyenToDauTien = "Không tìm thấy bất kì số nguyên tố nào trong mảng"}
  
  console.log(nums[i]);
  // B3 hiện thị
  var divTimSoNguyenToDauTien = document.getElementById(
    "divTimSoNguyenToDauTien"
  );
  divTimSoNguyenToDauTien.style.display = "block";
  divTimSoNguyenToDauTien.innerHTML = `
       <p>Số nguyên tố tìm được: ${soNguyenToDauTien}</p>
     `;
}
// Bài 9
// B1 Tạo hàm kiểm tra số nguyên
function demSoNguyen() {
  // Tạo biến số nguyên bằng 0 Để đếm
  var soNguyen = 0;
  // B2 Tạo vòng lặp để đếm số nguyên
  for (var i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i]) === true) {
      soNguyen++;
    }
  }
  // B3 Hiện thị
  var divDemSoNguyen = document.getElementById("divDemSoNguyen");
  divDemSoNguyen.style.display = "block";
  divDemSoNguyen.innerHTML = `
       <p>Số nguyên tìm được là: ${soNguyen}</p>
     `;
}
// Bài 10
function soSanhAmDuong() {
  // B1 Tạo biến soLuongSoDuong và soLuongSoAm
  var soLuongSoDuong = 0;
  var soLuongSoAm = 0;
  // B2 Tạo vòng lặp để tính toán
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      soLuongSoDuong++;
    } else if (nums[i] < 0){
      soLuongSoAm++;
    }
  }
  // B3 Hiện thị hai trường hợp
  var divSoSanh = document.getElementById("divSoSanh");
  divSoSanh.style.display = "block";
  if (soLuongSoDuong > soLuongSoAm) {
    divSoSanh.innerHTML = `
        <p>Số lượng số dương: ${soLuongSoDuong} > Số lượng số âm: ${soLuongSoAm} </p>
      `;
  } else if (soLuongSoDuong < soLuongSoAm) {
    divSoSanh.innerHTML = `<p>Số lượng số dương: ${soLuongSoDuong} < Số lượng số âm: ${soLuongSoAm} </p>`;
  } else {
    divSoSanh.innerHTML = `<p>Số lượng số dương: ${soLuongSoDuong} = Số lượng số âm: ${soLuongSoAm} </p>`;
  }
}
