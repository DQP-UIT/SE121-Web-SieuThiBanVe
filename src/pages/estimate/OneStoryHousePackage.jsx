// Nhà cấp 4 ở Đà Nẵng
const basicPackageDN = {
  foundationCost: 487500, // Chi phí phần móng
  structureCost: 3900000, // Chi phí phần thân
  roofCost: 1350000, // Chi phí phần mái
  rawConstructionCost: 7171875, // Chi phí phần thô
  finishingCost: 4200000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const standardPackageDN = {
  foundationCost: 587500, // Chi phí phần móng
  structureCost: 4700000, // Chi phí phần thân
  roofCost: 1350000, // Chi phí phần mái
  rawConstructionCost: 8296875, // Chi phí phần thô
  finishingCost: 4920000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const premiumPackageDN = {
  foundationCost: 737500, // Chi phí phần móng
  structureCost: 5900000, // Chi phí phần thân
  roofCost: 1350000, // Chi phí phần mái
  rawConstructionCost: 9984375, // Chi phí phần thô
  finishingCost: 6120000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const daNangC4Package = {
  basic: basicPackageDN,
  standard: standardPackageDN,
  premium: premiumPackageDN,
};

// Nhà cấp 4 ở Hà Nội
const basicPackageHN = {
  foundationCost: 500000, // Chi phí phần móng
  structureCost: 4000000, // Chi phí phần thân
  roofCost: 1400000, // Chi phí phần mái
  rawConstructionCost: 7300000, // Chi phí phần thô
  finishingCost: 4300000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const standardPackageHN = {
  foundationCost: 600000, // Chi phí phần móng
  structureCost: 4800000, // Chi phí phần thân
  roofCost: 1400000, // Chi phí phần mái
  rawConstructionCost: 8500000, // Chi phí phần thô
  finishingCost: 5000000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const premiumPackageHN = {
  foundationCost: 750000, // Chi phí phần móng
  structureCost: 6000000, // Chi phí phần thân
  roofCost: 1400000, // Chi phí phần mái
  rawConstructionCost: 10200000, // Chi phí phần thô
  finishingCost: 6200000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const haNoiC4Package = {
  basic: basicPackageHN,
  standard: standardPackageHN,
  premium: premiumPackageHN,
};

// Nhà cấp 4 ở Thành phố Hồ Chí Minh
const basicPackageHCM = {
  foundationCost: 520000, // Chi phí phần móng
  structureCost: 4100000, // Chi phí phần thân
  roofCost: 1450000, // Chi phí phần mái
  rawConstructionCost: 7400000, // Chi phí phần thô
  finishingCost: 4400000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const standardPackageHCM = {
  foundationCost: 620000, // Chi phí phần móng
  structureCost: 4900000, // Chi phí phần thân
  roofCost: 1450000, // Chi phí phần mái
  rawConstructionCost: 8600000, // Chi phí phần thô
  finishingCost: 5100000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const premiumPackageHCM = {
  foundationCost: 770000, // Chi phí phần móng
  structureCost: 6100000, // Chi phí phần thân
  roofCost: 1450000, // Chi phí phần mái
  rawConstructionCost: 10300000, // Chi phí phần thô
  finishingCost: 6300000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const hoChiMinhC4Package = {
  basic: basicPackageHCM,
  standard: standardPackageHCM,
  premium: premiumPackageHCM,
};

// Nhà cấp 4 ở Quảng Ninh
const basicPackageQN = {
  foundationCost: 510000, // Chi phí phần móng
  structureCost: 4200000, // Chi phí phần thân
  roofCost: 1500000, // Chi phí phần mái
  rawConstructionCost: 7500000, // Chi phí phần thô
  finishingCost: 4500000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const standardPackageQN = {
  foundationCost: 630000, // Chi phí phần móng
  structureCost: 5000000, // Chi phí phần thân
  roofCost: 1500000, // Chi phí phần mái
  rawConstructionCost: 8700000, // Chi phí phần thô
  finishingCost: 5200000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const premiumPackageQN = {
  foundationCost: 780000, // Chi phí phần móng
  structureCost: 6200000, // Chi phí phần thân
  roofCost: 1500000, // Chi phí phần mái
  rawConstructionCost: 10400000, // Chi phí phần thô
  finishingCost: 6400000, // Chi phí hoàn thiện
  gardenCost: 350000, // Chi phí sân vườn
};

const quangNinhC4Package = {
  basic: basicPackageQN,
  standard: standardPackageQN,
  premium: premiumPackageQN,
};

export default {
  daNangC4Package,
  haNoiC4Package,
  hoChiMinhC4Package,
  quangNinhC4Package,
};
