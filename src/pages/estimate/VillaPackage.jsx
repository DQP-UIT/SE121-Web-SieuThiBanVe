// Biệt thự ở Đà Nẵng
const basicVillaPackageDN = {
  foundationCost: 510000, // Chi phí phần móng
  basementCost: 9500000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3400000, // Chi phí phần thân
  roofCost: 3910000, // Chi phí phần mái
  rawConstructionCost: 18705000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 9072000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 27777600, // Tổng chi phí ngôi nhà
  poolCost: 5000000, // Chi phí thi công hồ bơi
  elevatorCost: 282000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const standardVillaPackageDN = {
  foundationCost: 540000, // Chi phí phần móng
  basementCost: 9500000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3600000, // Chi phí phần thân
  roofCost: 4140000, // Chi phí phần mái
  rawConstructionCost: 19202400, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 12432000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 31634400, // Tổng chi phí ngôi nhà
  poolCost: 5000000, // Chi phí thi công hồ bơi
  elevatorCost: 282000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const premiumVillaPackageDN = {
  foundationCost: 600000, // Chi phí phần móng
  basementCost: 9500000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 4000000, // Chi phí phần thân
  roofCost: 4600000, // Chi phí phần mái
  rawConstructionCost: 20196000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 22512000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 42708000, // Tổng chi phí ngôi nhà
  poolCost: 5000000, // Chi phí thi công hồ bơi
  elevatorCost: 282000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const daNangVillaPackage = {
  basic: basicVillaPackageDN,
  standard: standardVillaPackageDN,
  premium: premiumVillaPackageDN,
};

// Biệt thự ở Hà Nội
const basicVillaPackageHN = {
  foundationCost: 520000, // Chi phí phần móng
  basementCost: 9600000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3500000, // Chi phí phần thân
  roofCost: 4000000, // Chi phí phần mái
  rawConstructionCost: 18800000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 9100000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 27900000, // Tổng chi phí ngôi nhà
  poolCost: 5100000, // Chi phí thi công hồ bơi
  elevatorCost: 283000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const standardVillaPackageHN = {
  foundationCost: 550000, // Chi phí phần móng
  basementCost: 9600000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3700000, // Chi phí phần thân
  roofCost: 4200000, // Chi phí phần mái
  rawConstructionCost: 19300000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 12500000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 31800000, // Tổng chi phí ngôi nhà
  poolCost: 5100000, // Chi phí thi công hồ bơi
  elevatorCost: 283000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const premiumVillaPackageHN = {
  foundationCost: 610000, // Chi phí phần móng
  basementCost: 9600000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 4100000, // Chi phí phần thân
  roofCost: 4700000, // Chi phí phần mái
  rawConstructionCost: 20300000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 22600000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 42900000, // Tổng chi phí ngôi nhà
  poolCost: 5100000, // Chi phí thi công hồ bơi
  elevatorCost: 283000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const haNoiVillaPackage = {
  basic: basicVillaPackageHN,
  standard: standardVillaPackageHN,
  premium: premiumVillaPackageHN,
};

// Biệt thự ở Thành phố Hồ Chí Minh
const basicVillaPackageHCM = {
  foundationCost: 530000, // Chi phí phần móng
  basementCost: 9700000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3600000, // Chi phí phần thân
  roofCost: 4100000, // Chi phí phần mái
  rawConstructionCost: 18900000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 9200000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 28100000, // Tổng chi phí ngôi nhà
  poolCost: 5200000, // Chi phí thi công hồ bơi
  elevatorCost: 284000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const standardVillaPackageHCM = {
  foundationCost: 560000, // Chi phí phần móng
  basementCost: 9700000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3800000, // Chi phí phần thân
  roofCost: 4300000, // Chi phí phần mái
  rawConstructionCost: 19400000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 12600000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 32000000, // Tổng chi phí ngôi nhà
  poolCost: 5200000, // Chi phí thi công hồ bơi
  elevatorCost: 284000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const premiumVillaPackageHCM = {
  foundationCost: 620000, // Chi phí phần móng
  basementCost: 9700000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 4200000, // Chi phí phần thân
  roofCost: 4800000, // Chi phí phần mái
  rawConstructionCost: 20400000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 22700000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 43100000, // Tổng chi phí ngôi nhà
  poolCost: 5200000, // Chi phí thi công hồ bơi
  elevatorCost: 284000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const hoChiMinhVillaPackage = {
  basic: basicVillaPackageHCM,
  standard: standardVillaPackageHCM,
  premium: premiumVillaPackageHCM,
};

// Biệt thự ở Quảng Ninh
const basicVillaPackageQN = {
  foundationCost: 540000, // Chi phí phần móng
  basementCost: 9800000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3700000, // Chi phí phần thân
  roofCost: 4200000, // Chi phí phần mái
  rawConstructionCost: 19000000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 9300000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 28300000, // Tổng chi phí ngôi nhà
  poolCost: 5300000, // Chi phí thi công hồ bơi
  elevatorCost: 285000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const standardVillaPackageQN = {
  foundationCost: 570000, // Chi phí phần móng
  basementCost: 9800000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3900000, // Chi phí phần thân
  roofCost: 4400000, // Chi phí phần mái
  rawConstructionCost: 19500000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 12700000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 32200000, // Tổng chi phí ngôi nhà
  poolCost: 5300000, // Chi phí thi công hồ bơi
  elevatorCost: 285000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const premiumVillaPackageQN = {
  foundationCost: 630000, // Chi phí phần móng
  basementCost: 9800000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 4300000, // Chi phí phần thân
  roofCost: 4900000, // Chi phí phần mái
  rawConstructionCost: 20500000, // CHI PHÍ TC PHẦN THÔ
  finishingCost: 22800000, // CHI PHÍ TC HOÀN THIỆN
  totalHouseCost: 43300000, // Tổng chi phí ngôi nhà
  poolCost: 5300000, // Chi phí thi công hồ bơi
  elevatorCost: 285000000, // Chi phí thang máy
  gardenCost: 1400000, // Chi phí sân vườn
};

const quangNinhVillaPackage = {
  basic: basicVillaPackageQN,
  standard: standardVillaPackageQN,
  premium: premiumVillaPackageQN,
};

export default {
  daNangVillaPackage,
  haNoiVillaPackage,
  hoChiMinhVillaPackage,
  quangNinhVillaPackage,
};
