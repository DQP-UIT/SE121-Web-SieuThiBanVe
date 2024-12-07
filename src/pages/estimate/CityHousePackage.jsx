// Đà Nẵng
const basicPackageDN = {
  foundationCost: 510000, // Chi phí phần móng
  basementCost: 9500000, // Chi phí XD tầng hầm/bán hầm
  structureCost: 3400000, // Chi phí phần thân
  roofCost: 3910000, // Chi phí phần mái
  demolitionCost: 30000000, // Chi phí cưỡng chống đỡ nhà hàng xóm
  rawConstructionCost: 47320000, // Chi phí TC phần thô
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

const daNangPackage = {
  basic: basicPackageDN,
  standard: standardPackageDN,
  premium: premiumPackageDN,
}

//




export default {
  daNangPackage,
};
