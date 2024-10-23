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
