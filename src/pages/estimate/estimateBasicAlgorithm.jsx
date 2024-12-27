import OneStoryHousePackage from "./OneStoryHousePackage";
import CityHousePackage from "./CityHousePackage";
import VillaPackage from "./VillaPackage";

function EstimatingBasic(diaDiem, loaiCongTrinh, formdata) {
  let total = 0;
  if (diaDiem === "Đà Nẵng") {
    if (loaiCongTrinh === "Nhà cấp 4") {
      total += basicPackageEs.foundationCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.structureCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.rawConstructionCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.finishingCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata);
    }
    if (loaiCongTrinh === "Nhà phố") {
      total += basicPackageEs.foundationCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.structureCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.demolitionCost(diaDiem, loaiCongTrinh);
      total += basicPackageEs.rawConstructionCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.finishingCost(diaDiem, loaiCongTrinh, formdata);
      if (formdata.thangMay) {
        total += basicPackageEs.elevatorCost(diaDiem, loaiCongTrinh, formdata);
      }
      if (formdata.tangHam) {
        total += basicPackageEs.basementCost(diaDiem, loaiCongTrinh, formdata);
      }
      if (formdata.hoBoi) {
        total += basicPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata);
      }
    }
    if (loaiCongTrinh === "Biệt thự") {
      total += basicPackageEs.foundationCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.structureCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.rawConstructionCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.finishingCost(diaDiem, loaiCongTrinh, formdata);
      total += basicPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata);
      if (formdata.thangMay) {
        total += basicPackageEs.elevatorCost(diaDiem, loaiCongTrinh, formdata);
      }
      if (formdata.tangHam) {
        total += basicPackageEs.basementCost(diaDiem, loaiCongTrinh, formdata);
      }
      if (formdata.hoBoi) {
        total += basicPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata);
      }
    }
  }
  return total;
}

function CaculateFoundationBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.basic.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.basic.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.basic.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.basic.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.basic.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.basic.foundationCost *
        1.15
      );
    }
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.basic.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.basic.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.basic.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.basic.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.basic.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.basic.foundationCost *
        1.15
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.basic.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.basic.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.basic.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.basic.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.basic.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.basic.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.basic.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.basic.foundationCost *
        1.15
      );
    }
  }
  return 0;
}

function CaculateRoofBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.daNangC4Package.basic.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.hoChiMinhC4Package.basic.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.haNoiC4Package.basic.roofCost
      );
    }
    return (
      formdata.dienTichGacLung *
      OneStoryHousePackage.quangNinhC4Package.basic.roofCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTumMai *
        CityHousePackage.daNangCHPackage.basic.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTumMai *
        CityHousePackage.hoChiMinhCHPackage.basic.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTumMai * CityHousePackage.haNoiCHPackage.basic.roofCost
      );
    }
    return (
      formdata.dienTichTumMai *
      CityHousePackage.quangNinhCHPackage.basic.roofCost
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTumMai * VillaPackage.daNangVillaPackage.basic.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTumMai *
        VillaPackage.hoChiMinhVillaPackage.basic.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTumMai * VillaPackage.haNoiVillaPackage.basic.roofCost
      );
    }
    return (
      formdata.dienTichTumMai *
      VillaPackage.quangNinhVillaPackage.basic.roofCost
    );
  }

  return 0;
}

function CaculateStructureBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.daNangC4Package.basic.foundationCost *
        0.8
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.hoChiMinhC4Package.basic.foundationCost *
        0.85
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.haNoiC4Package.basic.foundationCost *
        0.9
      );
    }
    return (
      formdata.dienTichGacLung *
      OneStoryHousePackage.quangNinhC4Package.basic.foundationCost *
      0.75
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.daNangCHPackage.basic.foundationCost *
        0.8 * formdata.soTang
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.hoChiMinhCHPackage.basic.foundationCost *
        0.85 * formdata.soTang
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.haNoiCHPackage.basic.foundationCost *
        0.9 * formdata.soTang
      );
    }
    return (
      formdata.dienTichXayDungTang1 *
      CityHousePackage.quangNinhCHPackage.basic.foundationCost *
      0.75 * formdata.soTang
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.daNangVillaPackage.basic.foundationCost *
        0.8 * formdata.soTang
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.hoChiMinhVillaPackage.basic.foundationCost *
        0.85 * formdata.soTang
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.haNoiVillaPackage.basic.foundationCost *
        0.9 * formdata.soTang
      );
    }
    return (
      formdata.dienTichXayDungTang1 *
      VillaPackage.quangNinhVillaPackage.basic.foundationCost *
      0.75 * formdata.soTang
    );
  }

  return 0;
}

function CaculateRawConstructionBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.daNangC4Package.basic.rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.daNangC4Package.basic.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.hoChiMinhC4Package.basic
          .rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.hoChiMinhC4Package.basic.rawConstructionCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.haNoiC4Package.basic.rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.haNoiC4Package.basic.rawConstructionCost * 0.8
        );
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return OneStoryHousePackage.quangNinhC4Package.basic.rawConstructionCost;
    } else {
      return (
        OneStoryHousePackage.quangNinhC4Package.basic.rawConstructionCost * 0.8
      );
    }
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.daNangCHPackage.basic.rawConstructionCost;
      } else {
        return CityHousePackage.daNangCHPackage.basic.rawConstructionCost * 0.8;
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.hoChiMinhCHPackage.basic.rawConstructionCost;
      } else {
        return (
          CityHousePackage.hoChiMinhCHPackage.basic.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.haNoiCHPackage.basic.rawConstructionCost;
      } else {
        return CityHousePackage.haNoiCHPackage.basic.rawConstructionCost * 0.8;
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return CityHousePackage.quangNinhCHPackage.basic.rawConstructionCost;
    } else {
      return (
        CityHousePackage.quangNinhCHPackage.basic.rawConstructionCost * 0.8
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.daNangVillaPackage.basic.rawConstructionCost;
      } else {
        return VillaPackage.daNangVillaPackage.basic.rawConstructionCost * 0.8;
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.hoChiMinhVillaPackage.basic.rawConstructionCost;
      } else {
        return (
          VillaPackage.hoChiMinhVillaPackage.basic.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.haNoiVillaPackage.basic.rawConstructionCost;
      } else {
        return VillaPackage.haNoiVillaPackage.basic.rawConstructionCost * 0.8;
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return VillaPackage.quangNinhVillaPackage.basic.rawConstructionCost;
    } else {
      return VillaPackage.quangNinhVillaPackage.basic.rawConstructionCost * 0.8;
    }
  }

  return 0;
}

function CaculateFinishingBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.daNangC4Package.basic.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.hoChiMinhC4Package.basic.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.haNoiC4Package.basic.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      OneStoryHousePackage.quangNinhC4Package.basic.finishingCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.daNangCHPackage.basic.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.hoChiMinhCHPackage.basic.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.haNoiCHPackage.basic.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      CityHousePackage.quangNinhCHPackage.basic.finishingCost
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.daNangVillaPackage.basic.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.hoChiMinhVillaPackage.basic.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.haNoiVillaPackage.basic.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      VillaPackage.quangNinhVillaPackage.basic.finishingCost
    );
  }
  return 0;
}

function CaculateGardenBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng ") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.daNangC4Package.basic.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.daNangC4Package.basic.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.hoChiMinhC4Package.basic.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.hoChiMinhC4Package.basic.gardenCost *
          0.8
        );
      }
    }

    if (diaDiem === "Hà Nội") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.haNoiC4Package.basic.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.haNoiC4Package.basic.gardenCost *
          0.8
        );
      }
    }
    if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        OneStoryHousePackage.quangNinhC4Package.basic.gardenCost
      );
    } else {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        OneStoryHousePackage.quangNinhC4Package.basic.gardenCost *
        0.8
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.daNangVillaPackage.basic.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.daNangVillaPackage.basic.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.hoChiMinhVillaPackage.basic.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.hoChiMinhVillaPackage.basic.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.haNoiVillaPackage.basic.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.haNoiVillaPackage.basic.gardenCost *
          0.8
        );
      }
    }
    if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        VillaPackage.quangNinhVillaPackage.basic.gardenCost
      );
    } else {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        VillaPackage.quangNinhVillaPackage.basic.gardenCost *
        0.8
      );
    }
  }
  return 0;
}

function CaculateBasementBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.tangHam) {
    return 0;
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.daNangVillaPackage.basic.basementCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.hoChiMinhVillaPackage.basic.basementCost
      );
    }
    if (diaDiem === " Hà Nội") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.haNoiVillaPackage.basic.basementCost
      );
    }
    return (
      formdata.dienTichTangHam *
      VillaPackage.quangNinhVillaPackage.basic.basementCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.daNangCHPackage.basic.basementCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.hoChiMinhCHPackage.basic.basementCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.haNoiCHPackage.basic.basementCost
      );
    }
    return (
      formdata.dienTichTangHam *
      CityHousePackage.quangNinhCHPackage.basic.basementCost
    );
  }
  return 0;
}

function CaculatePoolBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.hoBoi) {
    return 0;
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichHoBoi * VillaPackage.daNangVillaPackage.basic.poolCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichHoBoi *
        VillaPackage.hoChiMinhVillaPackage.basic.poolCost
      );
    }
    if (diaDiem === " Hà Nội") {
      return (
        formdata.dienTichHoBoi * VillaPackage.haNoiVillaPackage.basic.poolCost
      );
    }
    return (
      formdata.dienTichHoBoi * VillaPackage.quangNinhVillaPackage.basic.poolCost
    );
  }
  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichHoBoi * CityHousePackage.daNangCHPackage.basic.poolCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichHoBoi *
        CityHousePackage.hoChiMinhCHPackage.basic.poolCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichHoBoi * CityHousePackage.haNoiCHPackage.basic.poolCost
      );
    }
    return (
      formdata.dienTichHoBoi *
      CityHousePackage.quangNinhCHPackage.basic.poolCost
    );
  }
  return 0;
}

function CaculateElevatorBasic(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.thangMay) {
    return 0;
  }
  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.daNangVillaPackage.basic.elevatorCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.hoChiMinhVillaPackage.basic.elevatorCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.haNoiVillaPackage.basic.elevatorCost
      );
    }
    return (
      formdata.soDiemDungThangMay *
      VillaPackage.quangNinhVillaPackage.basic.elevatorCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.daNangCHPackage.basic.elevatorCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.hoChiMinhCHPackage.basic.elevatorCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.haNoiCHPackage.basic.elevatorCost
      );
    }
    return (
      formdata.soDiemDungThangMay *
      CityHousePackage.quangNinhCHPackage.basic.elevatorCost
    );
  }
  return 0;
}

function CaculateDemolitionBasic(diaDiem, loaiCongTrinh){
  if(loaiCongTrinh === "Nhà phố"){
    if(diaDiem === "Đà Nẵng"){
      return CityHousePackage.daNangCHPackage.basic.demolitionCost;
    }
    if(diaDiem === "Hồ Chí Minh"){
      return CityHousePackage.hoChiMinhCHPackage.basic.demolitionCost;
    }
    if(diaDiem ==="Hà Nội"){
      return CityHousePackage.haNoiCHPackage.basic.demolitionCost;
    }
    return CityHousePackage.quangNinhCHPackage.basic.demolitionCost;
  }
  return 0;
}

const basicPackageEs = {
  foundationCost: CaculateFoundationBasic,
  roofCost: CaculateRoofBasic,
  structureCost: CaculateStructureBasic,
  rawConstructionCost: CaculateRawConstructionBasic,
  finishingCost: CaculateFinishingBasic,
  gardenCost: CaculateGardenBasic,
  basementCost: CaculateBasementBasic,
  poolCost: CaculatePoolBasic,
  elevatorCost: CaculateElevatorBasic,
  demolitionCost: CaculateDemolitionBasic,
  totalCost: EstimatingBasic,
};

export { basicPackageEs };
