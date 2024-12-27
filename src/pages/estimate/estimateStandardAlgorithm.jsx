import OneStoryHousePackage from "./OneStoryHousePackage";
import CityHousePackage from "./CityHousePackage";
import VillaPackage from "./VillaPackage";

function EstimatingStandard(diaDiem, loaiCongTrinh, formdata) {
  let total = 0;
  if (diaDiem === "Đà Nẵng") {
    if (loaiCongTrinh === "Nhà cấp 4") {
      total += standardPackageEs.foundationCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += standardPackageEs.structureCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.rawConstructionCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.finishingCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata);
    }
    if (loaiCongTrinh === "Nhà phố") {
      total += standardPackageEs.foundationCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += standardPackageEs.structureCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.demolitionCost(diaDiem, loaiCongTrinh);
      total += standardPackageEs.rawConstructionCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.finishingCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      if (formdata.thangMay) {
        total += standardPackageEs.elevatorCost(
          diaDiem,
          loaiCongTrinh,
          formdata,
        );
      }
      if (formdata.tangHam) {
        total += standardPackageEs.basementCost(
          diaDiem,
          loaiCongTrinh,
          formdata,
        );
      }
      if (formdata.hoBoi) {
        total += standardPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata);
      }
    }
    if (loaiCongTrinh === "Biệt thự") {
      total += standardPackageEs.foundationCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += standardPackageEs.structureCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.rawConstructionCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.finishingCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += standardPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata);
      if (formdata.thangMay) {
        total += standardPackageEs.elevatorCost(
          diaDiem,
          loaiCongTrinh,
          formdata,
        );
      }
      if (formdata.tangHam) {
        total += standardPackageEs.basementCost(
          diaDiem,
          loaiCongTrinh,
          formdata,
        );
      }
      if (formdata.hoBoi) {
        total += standardPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata);
      }
    }
  }
  return total;
}

function CaculateFoundationStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.standard.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.standard.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.standard.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.standard.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.standard.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.standard.foundationCost *
        1.15
      );
    }
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.standard.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.standard.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.standard.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.standard.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.standard.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.standard.foundationCost *
        1.15
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.standard.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.standard.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.standard.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.standard.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.standard.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.standard.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.standard.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.standard.foundationCost *
        1.15
      );
    }
  }
  return 0;
}

function CaculateRoofStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.daNangC4Package.standard.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.hoChiMinhC4Package.standard.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.haNoiC4Package.standard.roofCost
      );
    }
    return (
      formdata.dienTichGacLung *
      OneStoryHousePackage.quangNinhC4Package.standard.roofCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTumMai *
        CityHousePackage.daNangCHPackage.standard.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTumMai *
        CityHousePackage.hoChiMinhCHPackage.standard.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTumMai *
        CityHousePackage.haNoiCHPackage.standard.roofCost
      );
    }
    return (
      formdata.dienTichTumMai *
      CityHousePackage.quangNinhCHPackage.standard.roofCost
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTumMai *
        VillaPackage.daNangVillaPackage.standard.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTumMai *
        VillaPackage.hoChiMinhVillaPackage.standard.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTumMai *
        VillaPackage.haNoiVillaPackage.standard.roofCost
      );
    }
    return (
      formdata.dienTichTumMai *
      VillaPackage.quangNinhVillaPackage.standard.roofCost
    );
  }

  return 0;
}

function CaculateStructureStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.daNangC4Package.standard.foundationCost *
        0.8
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.hoChiMinhC4Package.standard.foundationCost *
        0.85
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.haNoiC4Package.standard.foundationCost *
        0.9
      );
    }
    return (
      formdata.dienTichGacLung *
      OneStoryHousePackage.quangNinhC4Package.standard.foundationCost *
      0.75
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.daNangCHPackage.standard.foundationCost *
        0.8 *
        formdata.soTang
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.hoChiMinhCHPackage.standard.foundationCost *
        0.85 *
        formdata.soTang
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.haNoiCHPackage.standard.foundationCost *
        0.9 *
        formdata.soTang
      );
    }
    return (
      formdata.dienTichXayDungTang1 *
      CityHousePackage.quangNinhCHPackage.standard.foundationCost *
      0.75 *
      formdata.soTang
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.daNangVillaPackage.standard.foundationCost *
        0.8 *
        formdata.soTang
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.hoChiMinhVillaPackage.standard.foundationCost *
        0.85 *
        formdata.soTang
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.haNoiVillaPackage.standard.foundationCost *
        0.9 *
        formdata.soTang
      );
    }
    return (
      formdata.dienTichXayDungTang1 *
      VillaPackage.quangNinhVillaPackage.standard.foundationCost *
      0.75 *
      formdata.soTang
    );
  }

  return 0;
}

function CaculateRawConstructionStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.daNangC4Package.standard
          .rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.daNangC4Package.standard.rawConstructionCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.hoChiMinhC4Package.standard
          .rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.hoChiMinhC4Package.standard.rawConstructionCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.haNoiC4Package.standard.rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.haNoiC4Package.standard.rawConstructionCost * 0.8
        );
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return OneStoryHousePackage.quangNinhC4Package.standard
        .rawConstructionCost;
    } else {
      return (
        OneStoryHousePackage.quangNinhC4Package.standard.rawConstructionCost *
        0.8
      );
    }
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.daNangCHPackage.standard.rawConstructionCost;
      } else {
        return (
          CityHousePackage.daNangCHPackage.standard.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.hoChiMinhCHPackage.standard.rawConstructionCost;
      } else {
        return (
          CityHousePackage.hoChiMinhCHPackage.standard.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.haNoiCHPackage.standard.rawConstructionCost;
      } else {
        return (
          CityHousePackage.haNoiCHPackage.standard.rawConstructionCost * 0.8
        );
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return CityHousePackage.quangNinhCHPackage.standard.rawConstructionCost;
    } else {
      return (
        CityHousePackage.quangNinhCHPackage.standard.rawConstructionCost * 0.8
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.daNangVillaPackage.standard.rawConstructionCost;
      } else {
        return (
          VillaPackage.daNangVillaPackage.standard.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.hoChiMinhVillaPackage.standard.rawConstructionCost;
      } else {
        return (
          VillaPackage.hoChiMinhVillaPackage.standard.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.haNoiVillaPackage.standard.rawConstructionCost;
      } else {
        return (
          VillaPackage.haNoiVillaPackage.standard.rawConstructionCost * 0.8
        );
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return VillaPackage.quangNinhVillaPackage.standard.rawConstructionCost;
    } else {
      return (
        VillaPackage.quangNinhVillaPackage.standard.rawConstructionCost * 0.8
      );
    }
  }

  return 0;
}

function CaculateFinishingStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.daNangC4Package.standard.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.hoChiMinhC4Package.standard.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.haNoiC4Package.standard.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      OneStoryHousePackage.quangNinhC4Package.standard.finishingCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.daNangCHPackage.standard.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.hoChiMinhCHPackage.standard.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.haNoiCHPackage.standard.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      CityHousePackage.quangNinhCHPackage.standard.finishingCost
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.daNangVillaPackage.standard.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.hoChiMinhVillaPackage.standard.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.haNoiVillaPackage.standard.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      VillaPackage.quangNinhVillaPackage.standard.finishingCost
    );
  }
  return 0;
}

function CaculateGardenStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng ") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.daNangC4Package.standard.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.daNangC4Package.standard.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.hoChiMinhC4Package.standard.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.hoChiMinhC4Package.standard.gardenCost *
          0.8
        );
      }
    }

    if (diaDiem === "Hà Nội") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.haNoiC4Package.standard.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.haNoiC4Package.standard.gardenCost *
          0.8
        );
      }
    }
    if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        OneStoryHousePackage.quangNinhC4Package.standard.gardenCost
      );
    } else {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        OneStoryHousePackage.quangNinhC4Package.standard.gardenCost *
        0.8
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.daNangVillaPackage.standard.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.daNangVillaPackage.standard.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.hoChiMinhVillaPackage.standard.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.hoChiMinhVillaPackage.standard.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.haNoiVillaPackage.standard.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.haNoiVillaPackage.standard.gardenCost *
          0.8
        );
      }
    }
    if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        VillaPackage.quangNinhVillaPackage.standard.gardenCost
      );
    } else {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        VillaPackage.quangNinhVillaPackage.standard.gardenCost *
        0.8
      );
    }
  }
  return 0;
}

function CaculateBasementStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.tangHam) {
    return 0;
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.daNangVillaPackage.standard.basementCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.hoChiMinhVillaPackage.standard.basementCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.haNoiVillaPackage.standard.basementCost
      );
    }
    return (
      formdata.dienTichTangHam *
      VillaPackage.quangNinhVillaPackage.standard.basementCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.daNangCHPackage.standard.basementCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.hoChiMinhCHPackage.standard.basementCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.haNoiCHPackage.standard.basementCost
      );
    }
    return (
      formdata.dienTichTangHam *
      CityHousePackage.quangNinhCHPackage.standard.basementCost
    );
  }
  return 0;
}

function CaculatePoolStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.hoBoi) {
    return 0;
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichHoBoi *
        VillaPackage.daNangVillaPackage.standard.poolCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichHoBoi *
        VillaPackage.hoChiMinhVillaPackage.standard.poolCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichHoBoi *
        VillaPackage.haNoiVillaPackage.standard.poolCost
      );
    }
    return (
      formdata.dienTichHoBoi *
      VillaPackage.quangNinhVillaPackage.standard.poolCost
    );
  }
  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichHoBoi *
        CityHousePackage.daNangCHPackage.standard.poolCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichHoBoi *
        CityHousePackage.hoChiMinhCHPackage.standard.poolCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichHoBoi *
        CityHousePackage.haNoiCHPackage.standard.poolCost
      );
    }
    return (
      formdata.dienTichHoBoi *
      CityHousePackage.quangNinhCHPackage.standard.poolCost
    );
  }
  return 0;
}

function CaculateElevatorStandard(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.thangMay) {
    return 0;
  }
  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.daNangVillaPackage.standard.elevatorCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.hoChiMinhVillaPackage.standard.elevatorCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.haNoiVillaPackage.standard.elevatorCost
      );
    }
    return (
      formdata.soDiemDungThangMay *
      VillaPackage.quangNinhVillaPackage.standard.elevatorCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.daNangCHPackage.standard.elevatorCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.hoChiMinhCHPackage.standard.elevatorCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.haNoiCHPackage.standard.elevatorCost
      );
    }
    return (
      formdata.soDiemDungThangMay *
      CityHousePackage.quangNinhCHPackage.standard.elevatorCost
    );
  }
  return 0;
}

function CaculateDemolitionStandard(diaDiem, loaiCongTrinh) {
  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return CityHousePackage.daNangCHPackage.standard.demolitionCost;
    }
    if (diaDiem === "Hồ Chí Minh") {
      return CityHousePackage.hoChiMinhCHPackage.standard.demolitionCost;
    }
    if (diaDiem === "Hà Nội") {
      return CityHousePackage.haNoiCHPackage.standard.demolitionCost;
    }
    return CityHousePackage.quangNinhCHPackage.standard.demolitionCost;
  }
  return 0;
}

const standardPackageEs = {
  foundationCost: CaculateFoundationStandard,
  roofCost: CaculateRoofStandard,
  structureCost: CaculateStructureStandard,
  rawConstructionCost: CaculateRawConstructionStandard,
  finishingCost: CaculateFinishingStandard,
  gardenCost: CaculateGardenStandard,
  basementCost: CaculateBasementStandard,
  poolCost: CaculatePoolStandard,
  elevatorCost: CaculateElevatorStandard,
  demolitionCost: CaculateDemolitionStandard,
  totalCost: EstimatingStandard,
};

export { standardPackageEs };
