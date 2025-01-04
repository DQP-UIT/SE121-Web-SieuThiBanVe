// Đà Nẵng
const basicPackageDN = {
  foundationCost: 510000, // Chi phí phần móng
  basementCost: 9500000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3400000, // Chi phí phần thân
  roofCost: 3910000, // Chi phí phần mái
  demolitionCost: 30000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 47520000, // Chi phí TC phần thô
  finishingCost: 4620000, // Chi phí TC hoàn thiện
  totalHouseCost: 51940000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5000000, // Chi phí thi công hồ bơi
  elevatorCost: 282000000, // Chi phí thang máy
};

const standardPackageDN = {
  foundationCost: 540000, // Chi phí phần móng
  basementCost: 9500000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3600000, // Chi phí phần thân
  roofCost: 4140000, // Chi phí phần mái
  demolitionCost: 30000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 47780000, // Chi phí TC phần thô
  finishingCost: 5544000, // Chi phí TC hoàn thiện
  totalHouseCost: 53324000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5000000, // Chi phí thi công hồ bơi
  elevatorCost: 282000000, // Chi phí thang máy
};

const premiumPackageDN = {
  foundationCost: 600000, // Chi phí phần móng
  basementCost: 9500000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 4000000, // Chi phí phần thân
  roofCost: 4600000, // Chi phí phần mái
  demolitionCost: 30000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 48700000, // Chi phí TC phần thô
  finishingCost: 7392000, // Chi phí TC hoàn thiện
  totalHouseCost: 56092000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5000000, // Chi phí thi công hồ bơi
  elevatorCost: 282000000, // Chi phí thang máy
};

const daNangCHPackage = {
  basic: basicPackageDN,
  standard: standardPackageDN,
  premium: premiumPackageDN,
};

// Hà Nội
const basicPackageHN = {
  foundationCost: 520000, // Chi phí phần móng
  basementCost: 9600000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3500000, // Chi phí phần thân
  roofCost: 4000000, // Chi phí phần mái
  demolitionCost: 31000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 48000000, // Chi phí TC phần thô
  finishingCost: 4700000, // Chi phí TC hoàn thiện
  totalHouseCost: 53000000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5100000, // Chi phí thi công hồ bơi
  elevatorCost: 285000000, // Chi phí thang máy
};

const standardPackageHN = {
  foundationCost: 550000, // Chi phí phần móng
  basementCost: 9600000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3700000, // Chi phí phần thân
  roofCost: 4200000, // Chi phí phần mái
  demolitionCost: 31000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 48500000, // Chi phí TC phần thô
  finishingCost: 5600000, // Chi phí TC hoàn thiện
  totalHouseCost: 54500000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5100000, // Chi phí thi công hồ bơi
  elevatorCost: 285000000, // Chi phí thang máy
};

const premiumPackageHN = {
  foundationCost: 610000, // Chi phí phần móng
  basementCost: 9600000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 4100000, // Chi phí phần thân
  roofCost: 4700000, // Chi phí phần mái
  demolitionCost: 31000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 49500000, // Chi phí TC phần thô
  finishingCost: 7500000, // Chi phí TC hoàn thiện
  totalHouseCost: 57500000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5100000, // Chi phí thi công hồ bơi
  elevatorCost: 285000000, // Chi phí thang máy
};

const haNoiCHPackage = {
  basic: basicPackageHN,
  standard: standardPackageHN,
  premium: premiumPackageHN,
};

// Thành phố Hồ Chí Minh
const basicPackageHCM = {
  foundationCost: 530000, // Chi phí phần móng
  basementCost: 9700000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3600000, // Chi phí phần thân
  roofCost: 4100000, // Chi phí phần mái
  demolitionCost: 32000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 49000000, // Chi phí TC phần thô
  finishingCost: 4800000, // Chi phí TC hoàn thiện
  totalHouseCost: 54000000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5200000, // Chi phí thi công hồ bơi
  elevatorCost: 290000000, // Chi phí thang máy
};

const standardPackageHCM = {
  foundationCost: 560000, // Chi phí phần móng
  basementCost: 9700000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3800000, // Chi phí phần thân
  roofCost: 4300000, // Chi phí phần mái
  demolitionCost: 32000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 49500000, // Chi phí TC phần thô
  finishingCost: 5700000, // Chi phí TC hoàn thiện
  totalHouseCost: 55500000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5200000, // Chi phí thi công hồ bơi
  elevatorCost: 290000000, // Chi phí thang máy
};

const premiumPackageHCM = {
  foundationCost: 620000, // Chi phí phần móng
  basementCost: 9700000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 4200000, // Chi phí phần thân
  roofCost: 4800000, // Chi phí phần mái
  demolitionCost: 32000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 50500000, // Chi phí TC phần thô
  finishingCost: 7600000, // Chi phí TC hoàn thiện
  totalHouseCost: 58500000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5200000, // Chi phí thi công hồ bơi
  elevatorCost: 290000000, // Chi phí thang máy
};

const hoChiMinhCHPackage = {
  basic: basicPackageHCM,
  standard: standardPackageHCM,
  premium: premiumPackageHCM,
};

// Quảng Ninh
const basicPackageQN = {
  foundationCost: 540000, // Chi phí phần móng
  basementCost: 9800000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3700000, // Chi phí phần thân
  roofCost: 4200000, // Chi phí phần mái
  demolitionCost: 33000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 50000000, // Chi phí TC phần thô
  finishingCost: 4900000, // Chi phí TC hoàn thiện
  totalHouseCost: 55000000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5300000, // Chi phí thi công hồ bơi
  elevatorCost: 295000000, // Chi phí thang máy
};

const standardPackageQN = {
  foundationCost: 570000, // Chi phí phần móng
  basementCost: 9800000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3900000, // Chi phí phần thân
  roofCost: 4400000, // Chi phí phần mái
  demolitionCost: 33000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 50500000, // Chi phí TC phần thô
  finishingCost: 5800000, // Chi phí TC hoàn thiện
  totalHouseCost: 56500000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5300000, // Chi phí thi công hồ bơi
  elevatorCost: 295000000, // Chi phí thang máy
};

const premiumPackageQN = {
  foundationCost: 630000, // Chi phí phần móng
  basementCost: 9800000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 4300000, // Chi phí phần thân
  roofCost: 4900000, // Chi phí phần mái
  demolitionCost: 33000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 51500000, // Chi phí TC phần thô
  finishingCost: 7700000, // Chi phí TC hoàn thiện
  totalHouseCost: 59500000, // Tổng chi phí ngôi nhà
  gardenCost: 0, // Chi phí thi công sân vườn
  poolCost: 5300000, // Chi phí thi công hồ bơi
  elevatorCost: 295000000, // Chi phí thang máy
};

const quangNinhCHPackage = {
  basic: basicPackageQN,
  standard: standardPackageQN,
  premium: premiumPackageQN,
};

export default {
  daNangCHPackage,
  haNoiCHPackage,
  hoChiMinhCHPackage,
  quangNinhCHPackage,
};
