import OneStoryHousePackage from './OneStoryHousePackage';
import VillaPackage from './VillaPackage';
import CityHousePackage from './CityHousePackage';

const EstimatingBasis = (diaDiem, loaiCongTrinh, formdata) => {
  let total = 0;
  if (diaDiem === "Đà Nẵng") {
    if (loaiCongTrinh === "Nhà cấp 4") {
      if (formdata.ketCauMong === "móng đơn") {
        total += formdata.dienTichXayDungTang1 * OneStoryHousePackage.daNangC4Package.basic.foundationCost;
      }
      total += formdata.dienTichGacLung * OneStoryHousePackage.daNangC4Package.basic.foundationCost * 0.8;
      total += formdata.dienTichTumMai * OneStoryHousePackage.daNangC4Package.basic.roofCost;
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        total += (formdata.dienTichDat - formdata.dienTichXayDungTang1) * OneStoryHousePackage.daNangC4Package.basic.gardenCost;
      }
      if (formdata.khuDat === "đường dưới 3m") {
        total += OneStoryHousePackage.daNangC4Package.basic.rawConstructionCost;
      } else {
        total += OneStoryHousePackage.daNangC4Package.basic.rawConstructionCost * 0.8;
      }
    }
    if (loaiCongTrinh === "Nhà phố") {
      // Add logic for "Nhà phố" if needed
    }
    if (loaiCongTrinh === "Biệt thự") {
      // Add logic for "Biệt thự" if needed
    }
  }
  return total;
};

export default EstimatingBasis;