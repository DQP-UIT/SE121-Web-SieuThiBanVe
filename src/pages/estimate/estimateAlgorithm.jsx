import "./CityHousePackage";
import './OneStoryHousePackage'
import "./VillaPackage";

const EstimatingBasis = ( diaDiem, loaiCongTrinh, formdata ) => {
  let total = 0;
  if (diaDiem == "Đà Nẵng") {
    if (loaiCongTrinh == "Nhà cấp 4") {
      if (formdata.ketCauMong === "móng đơn") {
        total = total + formdata.dienTichXayDungTang1 * daNangC4Package.basis.foundationCost;
      }
      total += formdata.dienTichGacLung * daNangC4Package.basis.foundationCost * 0.8;
      total += formdata.dienTichTumMai * daNangC4Package.basis.roofCost;
      if(formdata.sanVuon === "hơn 60% diện tích là cây xanh"){
        total += (formdata.dienTichDat - formdata.dienTichXayDungTang1)* daNangC4Package.basis.gardenCost;
      }
      if(formdata.khuDat === "đường dưới 3m"){
        total += daNangC4Package.basis.rawConstructionCost
      } else {
        total += daNangC4Package.basis.rawConstructionCost * 0.8;
      }
    }
    if (loaiCongTrinh === "Nhà phố") {
    }
    if (loaiCongTrinh === "Biệt thự") {
    }
  }
  return total;
};

export default EstimatingBasis;
