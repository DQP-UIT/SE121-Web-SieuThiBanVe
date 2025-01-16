export function checkTamTai(namSinh, namXayNha) {
  const conGiap = (namSinh - 4) % 12; // Tính con giáp dựa vào năm sinh
  const tamTai = {
    0: [6, 7, 8], // Tý (Thân, Dậu, Tuất)
    1: [9, 10, 11], // Sửu (Hợi, Tý, Sửu)
    2: [0, 1, 2], // Dần (Thân, Dậu, Tuất)
    3: [3, 4, 5], // Mão (Thân, Dậu, Tuất)
    4: [6, 7, 8], // Thìn (Dần, Mão, Thìn)
    5: [9, 10, 11], // Tỵ (Hợi, Tý, Sửu)
    6: [0, 1, 2], // Ngọ (Thân, Dậu, Tuất)
    7: [3, 4, 5], // Mùi (Thân, Dậu, Tuất)
    8: [6, 7, 8], // Thân (Dần, Mão, Thìn)
    9: [9, 10, 11], // Dậu (Hợi, Tý, Sửu)
    10: [0, 1, 2], // Tuất (Thân, Dậu, Tuất)
    11: [3, 4, 5], // Hợi (Tỵ, Ngọ, Mùi)
  };

  const namTamTai = tamTai[conGiap];
  const namXayNhaConGiap = (namXayNha - 4) % 12;

  return namTamTai.includes(namXayNhaConGiap)
    ? "Phạm tam tai"
    : "Không phạm tam tai";
}

// Tính toán Kim Lâu
export function checkKimLau(namSinh, namXayNha) {
  const tuoiAmLich = namXayNha - namSinh + 1;
  const du = tuoiAmLich % 9;

  if (du === 1) return "Phạm Kim lâu thân";
  if (du === 3) return "Phạm Kim lâu thê";
  if (du === 6) return "Phạm Kim lâu tử";
  if (du === 8) return "Phạm Kim lâu lục súc";

  return "Không phạm Kim lâu";
}

// Tính toán Hoang Ốc
export function checkHoangOc(namSinh, namXayNha) {
  const tuoiAmLich = namXayNha - namSinh + 1;
  const cung = (tuoiAmLich - 1) % 6;

  switch (cung) {
    case 0:
      return "Nhất Cát (Tốt)";
    case 1:
      return "Nhì Nghi (Tốt)";
    case 2:
      return "Tam Địa Sát (Xấu)";
    case 3:
      return "Tứ Tấn Tài (Tốt)";
    case 4:
      return "Ngũ Thọ Tử (Xấu)";
    case 5:
      return "Lục Hoang Ốc (Xấu)";
    default:
      return "Không xác định";
  }
}

export function chuyenDoiNamAmLich(namDuongLich) {
  // Bảng Thiên Can
  // prettier-ignore
  const thienCan = [
    "Giáp","Ất",
    "Bính","Đinh",
    "Mậu","Kỷ",
    "Canh","Tân",
    "Nhâm","Quý",
  ];
  // Bảng địa chi
  // prettier-ignore
  const diaChi = [
    "Tý","Sửu","Dần","Mão",
    "Thìn","Tỵ","Ngọ","Mùi",
    "Thân","Dậu","Tuất","Hợi",
  ];
  // Tính Thiên Can
  const can = thienCan[(namDuongLich - 4) % 10];
  // Tính Địa Chi
  const chi = diaChi[(namDuongLich - 4) % 12];

  // Trả về kết quả là năm âm lịch theo Thiên Can và Địa Chi
  return `${can} ${chi}`;
}

export function getCungMenh(namSinh) {
  // prettier-ignore
  const canChi = [
    "Giáp Tý", "Ất Sửu", "Bính Dần", "Đinh Mão", "Mậu Thìn", "Kỷ Tỵ",
    "Canh Ngọ", "Tân Mùi", "Nhâm Thân", "Quý Dậu", "Giáp Tuất", "Ất Hợi",
    "Bính Tý", "Đinh Sửu", "Mậu Dần", "Kỷ Mão", "Canh Thìn", "Tân Tỵ",
    "Nhâm Ngọ", "Quý Mùi", "Giáp Thân", "Ất Dậu", "Bính Tuất", "Đinh Hợi",
    "Mậu Tý", "Kỷ Sửu", "Canh Dần", "Tân Mão", "Nhâm Thìn", "Quý Tỵ",
    "Giáp Ngọ", "Ất Mùi", "Bính Thân", "Đinh Dậu", "Mậu Tuất", "Kỷ Hợi",
    "Canh Tý", "Tân Sửu", "Nhâm Dần", "Quý Mão", "Giáp Thìn", "Ất Tỵ",
    "Bính Ngọ", "Đinh Mùi", "Mậu Thân", "Kỷ Dậu", "Canh Tuất", "Tân Hợi",
    "Nhâm Tý", "Quý Sửu", "Giáp Dần", "Ất Mão", "Bính Thìn", "Đinh Tỵ",
    "Mậu Ngọ", "Kỷ Mùi", "Canh Thân", "Tân Dậu", "Nhâm Tuất", "Quý Hợi"
  ];

  // prettier-ignore
  const nguHanh = [
    "Hải Trung Kim", "Hải Trung Kim", "Lư Trung Hỏa", "Lư Trung Hỏa", "Đại Lâm Mộc", "Đại Lâm Mộc",
    "Lộ Bàng Thổ", "Lộ Bàng Thổ", "Kiếm Phong Kim", "Kiếm Phong Kim", "Sơn Đầu Hỏa", "Sơn Đầu Hỏa",
    "Giản Hạ Thủy", "Giản Hạ Thủy", "Thành Đầu Thổ", "Thành Đầu Thổ", "Bạch Lạp Kim", "Bạch Lạp Kim",
    "Dương Liễu Mộc", "Dương Liễu Mộc", "Tuyền Trung Thủy", "Tuyền Trung Thủy", "Ốc Thượng Thổ", "Ốc Thượng Thổ",
    "Tích Lịch Hỏa", "Tích Lịch Hỏa", "Tùng Bách Mộc", "Tùng Bách Mộc", "Trường Lưu Thủy", "Trường Lưu Thủy",
    "Sa Trung Kim", "Sa Trung Kim", "Sơn Hạ Hỏa", "Sơn Hạ Hỏa", "Bình Địa Mộc", "Bình Địa Mộc",
    "Bích Thượng Thổ", "Bích Thượng Thổ", "Kim Bạch Kim", "Kim Bạch Kim", "Phú Đăng Hỏa", "Phú Đăng Hỏa",
    "Thiên Hà Thủy", "Thiên Hà Thủy", "Đại Trạch Thổ", "Đại Trạch Thổ", "Thoa Xuyến Kim", "Thoa Xuyến Kim",
    "Tang Đố Mộc", "Tang Đố Mộc", "Đại Khê Thủy", "Đại Khê Thủy", "Sa Trung Thổ", "Sa Trung Thổ",
    "Thiên Thượng Hỏa", "Thiên Thượng Hỏa", "Thạch Lựu Mộc", "Thạch Lựu Mộc", "Đại Hải Thủy", "Đại Hải Thủy"
  ];

  const index = (namSinh - 1924) % 60;
  const menh = nguHanh[index];
  return menh;
}

// Hàm kiểm tra tuổi hợp mạng
function isSuitableAge(namSinh, namXayNha) {
  const tamTai = checkTamTai(namSinh, namXayNha);
  const kimLau = checkKimLau(namSinh, namXayNha);
  const hoangOc = checkHoangOc(namSinh, namXayNha);

  return tamTai === "Không phạm tam tai" && kimLau === "Không phạm Kim lâu" && hoangOc.includes("Tốt");
}

// Hàm tìm tuổi hợp mạng trong khoảng -50 tuổi đến +5 tuổi
export function findSuitableAges(namSinh) {
  const suitableAges = [];
  for (let year = namSinh - 50; year <= namSinh + 5; year++) {
    if (isSuitableAge(namSinh, year)) {
      suitableAges.push(year);
    }
  }
  return suitableAges;
}

// Hàm tính tứ trạch theo mạng của gia chủ
function getQuaiSo(namSinh, gioiTinh) {
  // Bước 2: Cộng 2 con số cuối cùng của năm sinh và giản ước đến số có 1 chữ số
  const lastTwoDigits = namSinh % 100;
  const sumLastTwoDigits = Math.floor(lastTwoDigits / 10) + (lastTwoDigits % 10);
  const reducedSum = sumLastTwoDigits % 9 || 9; // Giản ước đến số có 1 chữ số

  let quaiSo;
  if (namSinh < 2000) {
    // Trước năm 2000
    if (gioiTinh === 'Nam') {
      quaiSo = 10 - reducedSum;
    } else {
      quaiSo = 5 + reducedSum;
    }
  } else {
    // Từ năm 2000 trở đi
    if (gioiTinh === 'Nam') {
      quaiSo = 9 - reducedSum;
    } else {
      quaiSo = 6 + reducedSum;
    }
  }

  // Bước 4: Giản ước số vừa tìm được ở bước 3
  quaiSo = quaiSo % 9 || 9;

  return quaiSo;
}

export function getHuongNha(namsinh, gioiTinh) {
  // Tính quái số tứ trạch gia chủ
  const quaiSo = getQuaiSo(namsinh,gioiTinh);
  // Bảng Hà Đồ với các hướng nhà tương ứng
  const huongNhaMap = {
    1: 'Bắc',
    2: 'Tây Nam',
    3: 'Đông',
    4: 'Đông Nam',
    5: gioiTinh === 'Nam' ? 'Đông Bắc' : 'Tây Nam', // Trung Cung
    6: 'Tây Bắc',
    7: 'Tây',
    8: 'Đông Bắc',
    9: 'Nam'
  };

  return huongNhaMap[quaiSo] || 'Không xác định';
}