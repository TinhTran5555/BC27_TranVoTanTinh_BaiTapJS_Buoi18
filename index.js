
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
    if (nums[0] < min) {
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
  // B1 Tạo biến minSoDuong và gán cho giá trị đầu tiền của mảng soDuong
  var minSoDuong = soDuong[0];
  // b2 Duyệt và kiểm tra mảng từ vị trí thứ 2, nếu số đó nhỏ hơn minSoDuong thì ta sẽ gán lại cho minSoDuong
  for (var index = 1; index < soDuong.length; index++) {
    if (soDuong[0] < minSoDuong) {
      minSoDuong = soDuong[index];
    }
  }
  var divHienSoDuongNhoNhat = document.getElementById("divHienSoDuongNhoNhat");
  divHienSoDuongNhoNhat.style.display = "block";
  divHienSoDuongNhoNhat.innerHTML = `
      <p>Số nhỏ nhất: ${minSoDuong}</p>
    `;
}
// Bài 5
// B1 Viết hàm kiểm tra số chẵn để trả về hai kết quả khác nhau
   function kiemTraCoSoChan() {
// B2 Viết hàm tìm số chẵn cuối cùng bến dưới rồi gán vào biến số chẵn 
        var soChan = timSoChan()
        console.log(soChan);
        if (soChan == -1) {
            // B3 Hiện thị Kết quả
            var divHienSoChanCuoiCung = document.getElementById("divHienSoChanCuoiCung");
            divHienSoChanCuoiCung.style.display = "block";
            divHienSoChanCuoiCung.innerHTML = `
                <p>Không có số chẵn nào trong mãng</p>
              `;
        }
        else {
            var divHienSoChanCuoiCung = document.getElementById("divHienSoChanCuoiCung");
  divHienSoChanCuoiCung.style.display = "block";
  divHienSoChanCuoiCung.innerHTML = `
      <p>Số chẵn cuối cùng: ${soChan}</p>
    `;
        }
    }
// Viết hàm tìm số chẵn
    function timSoChan() {
    var soChan = -1;
    for (var index = 0; index < nums.length; index++) {
      if (nums[index] % 2 == 0) {
        soChan = nums[index];
      }
    }
    
    return soChan
   
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
   nums.sort(function(a,b) {
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
  //    Đặt biến soNguyenTo = 1 là số nguyên tố,
  //    soNguyenTo = -1 không phải số nguyên tố;
  var soNguyenTo = 1;
  // Bỏ qua số bé hơn 2 vì không phải số nguyên tố
  if (n < 2)
      return (soNguyenTo = -1);

  //   Viết vòng lặp kiểm tra có phải số nguyên tố không 
  var i = 3;
  while (i < n) {
      if (n % i == 0) {
          soNguyenTo = -1;
          break;
      }
      i++;
  }
  return soNguyenTo;
}
// B2 Viết hàm tìm số nguyên tốt
function timSoNguyenToDauTien(n) {
  // Tạo vòng lặp
  for (var i = 0; i < nums.length; i++){
    if (kiemTraSoNguyenTo(nums[i]) == 1) {
    
     
     console.log(nums[i]);
     break 
    //  Chỉ cần tìm được 1 kết quả ta cho dừng vòng lắp bằng brek 
    }
  }
  // B3 hiện thị
  var divTimSoNguyenToDauTien = document.getElementById("divTimSoNguyenToDauTien");
      divTimSoNguyenToDauTien.style.display = "block";
      divTimSoNguyenToDauTien.innerHTML = `
       <p>số nguyên tố tìm được là: ${nums[i]}</p>
     `;
  }
  // Bài 9
  // B1 Tạo hàm kiểm tra số nguyên
  function demSoNguyen() { 
    // Tạo biến số nguyên bằng 0 Để đếm
    var soNguyen = 0
    // B2 Tạo vòng lặp để đếm số nguyên 
    for (var i = 0; i < nums.length; i++) {
      if (Number.isInteger(nums[i]) == true) {
        soNguyen++
      }
    }
    // B3 Hiện thị
    var divDemSoNguyen = document.getElementById("divDemSoNguyen");
    divDemSoNguyen.style.display = "block";
    divDemSoNguyen.innerHTML = `
       <p>số nguyên tố tìm được là: ${soNguyen}</p>
     `;
  }
  // Bài 10
  function soSanhAmDuong() {
    // B1 Tạo biến soLuongSoDuong và soLuongSoAm
    var soLuongSoDuong = 0;
    var soLuongSoAm = 0
    // B2 Tạo vòng lặp để tính toán
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        soLuongSoDuong++;
      } else {
        soLuongSoAm++
      }
    }
    // B3 Hiện thị hai trường hợp 
    var divSoSanh = document.getElementById("divSoSanh");
    divSoSanh.style.display = "block";
    if (soLuongSoDuong > soLuongSoAm ) {
      divSoSanh.innerHTML = `
        <p>Số lượng số dương: ${soLuongSoDuong} > Số lượng số âm: ${soLuongSoAm} </p>
      `;
    } else if (soLuongSoDuong < soLuongSoAm ) {
      divSoSanh.innerHTML =
      `<p>Số lượng số dương: ${soLuongSoDuong} < Số lượng số âm: ${soLuongSoAm} </p>`
    } else {
      divSoSanh.innerHTML =
      `<p>Số lượng số dương: ${soLuongSoDuong} = Số lượng số âm: ${soLuongSoAm} </p>`
    }

   
  }
