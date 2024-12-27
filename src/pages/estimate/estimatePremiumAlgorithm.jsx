import OneStoryHousePackage from "./OneStoryHousePackage";
import CityHousePackage from "./CityHousePackage";
import VillaPackage from "./VillaPackage";

function EstimatingPremium(diaDiem, loaiCongTrinh, formdata) {
  let total = 0;
  if (diaDiem === "Đà Nẵng") {
    if (loaiCongTrinh === "Nhà cấp 4") {
      total += premiumPackageEs.foundationCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += premiumPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += premiumPackageEs.structureCost(diaDiem, loaiCongTrinh, formdata);
      total += premiumPackageEs.rawConstructionCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += premiumPackageEs.finishingCost(diaDiem, loaiCongTrinh, formdata);
      total += premiumPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata);
    }
    if (loaiCongTrinh === "Nhà phố") {
      total += premiumPackageEs.foundationCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += premiumPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += premiumPackageEs.structureCost(diaDiem, loaiCongTrinh, formdata);
      total += premiumPackageEs.demolitionCost(diaDiem, loaiCongTrinh);
      total += premiumPackageEs.rawConstructionCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += premiumPackageEs.finishingCost(diaDiem, loaiCongTrinh, formdata);
      if (formdata.thangMay) {
        total += premiumPackageEs.elevatorCost(
          diaDiem,
          loaiCongTrinh,
          formdata,
        );
      }
      if (formdata.tangHam) {
        total += premiumPackageEs.basementCost(
          diaDiem,
          loaiCongTrinh,
          formdata,
        );
      }
      if (formdata.hoBoi) {
        total += premiumPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata);
      }
    }
    if (loaiCongTrinh === "Biệt thự") {
      total += premiumPackageEs.foundationCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += premiumPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata);
      total += premiumPackageEs.structureCost(diaDiem, loaiCongTrinh, formdata);
      total += premiumPackageEs.rawConstructionCost(
        diaDiem,
        loaiCongTrinh,
        formdata,
      );
      total += premiumPackageEs.finishingCost(diaDiem, loaiCongTrinh, formdata);
      total += premiumPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata);
      if (formdata.thangMay) {
        total += premiumPackageEs.elevatorCost(
          diaDiem,
          loaiCongTrinh,
          formdata,
        );
      }
      if (formdata.tangHam) {
        total += premiumPackageEs.basementCost(
          diaDiem,
          loaiCongTrinh,
          formdata,
        );
      }
      if (formdata.hoBoi) {
        total += premiumPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata);
      }
    }
  }
  return total;
}

function CaculateFoundationPremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.daNangC4Package.premium.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.hoChiMinhC4Package.premium.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          OneStoryHousePackage.haNoiC4Package.premium.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.premium.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.premium.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        OneStoryHousePackage.quangNinhC4Package.premium.foundationCost *
        1.15
      );
    }
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.daNangCHPackage.premium.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.hoChiMinhCHPackage.premium.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          CityHousePackage.haNoiCHPackage.premium.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.premium.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.premium.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.quangNinhCHPackage.premium.foundationCost *
        1.15
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.daNangVillaPackage.premium.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.hoChiMinhVillaPackage.premium.foundationCost *
          1.15
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.ketCauMong === "móng đơn") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.premium.foundationCost
        );
      } else if (formdata.ketCauMong === "móng băng") {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.premium.foundationCost *
          1.3
        );
      } else {
        return (
          formdata.dienTichXayDungTang1 *
          VillaPackage.haNoiVillaPackage.premium.foundationCost *
          1.15
        );
      }
    }
    if (formdata.ketCauMong === "móng đơn") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.premium.foundationCost
      );
    } else if (formdata.ketCauMong === "móng băng") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.premium.foundationCost *
        1.3
      );
    } else {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.quangNinhVillaPackage.premium.foundationCost *
        1.15
      );
    }
  }
  return 0;
}

function CaculateRoofPremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.daNangC4Package.premium.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.hoChiMinhC4Package.premium.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.haNoiC4Package.premium.roofCost
      );
    }
    return (
      formdata.dienTichGacLung *
      OneStoryHousePackage.quangNinhC4Package.premium.roofCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTumMai *
        CityHousePackage.daNangCHPackage.premium.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTumMai *
        CityHousePackage.hoChiMinhCHPackage.premium.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTumMai *
        CityHousePackage.haNoiCHPackage.premium.roofCost
      );
    }
    return (
      formdata.dienTichTumMai *
      CityHousePackage.quangNinhCHPackage.premium.roofCost
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTumMai *
        VillaPackage.daNangVillaPackage.premium.roofCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTumMai *
        VillaPackage.hoChiMinhVillaPackage.premium.roofCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTumMai *
        VillaPackage.haNoiVillaPackage.premium.roofCost
      );
    }
    return (
      formdata.dienTichTumMai *
      VillaPackage.quangNinhVillaPackage.premium.roofCost
    );
  }

  return 0;
}

function CaculateStructurePremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.daNangC4Package.premium.foundationCost *
        0.8
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.hoChiMinhC4Package.premium.foundationCost *
        0.85
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichGacLung *
        OneStoryHousePackage.haNoiC4Package.premium.foundationCost *
        0.9
      );
    }
    return (
      formdata.dienTichGacLung *
      OneStoryHousePackage.quangNinhC4Package.premium.foundationCost *
      0.75
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.daNangCHPackage.premium.foundationCost *
        0.8 *
        formdata.soTang
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.hoChiMinhCHPackage.premium.foundationCost *
        0.85 *
        formdata.soTang
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichXayDungTang1 *
        CityHousePackage.haNoiCHPackage.premium.foundationCost *
        0.9 *
        formdata.soTang
      );
    }
    return (
      formdata.dienTichXayDungTang1 *
      CityHousePackage.quangNinhCHPackage.premium.foundationCost *
      0.75 *
      formdata.soTang
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.daNangVillaPackage.premium.foundationCost *
        0.8 *
        formdata.soTang
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.hoChiMinhVillaPackage.premium.foundationCost *
        0.85 *
        formdata.soTang
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichXayDungTang1 *
        VillaPackage.haNoiVillaPackage.premium.foundationCost *
        0.9 *
        formdata.soTang
      );
    }
    return (
      formdata.dienTichXayDungTang1 *
      VillaPackage.quangNinhVillaPackage.premium.foundationCost *
      0.75 *
      formdata.soTang
    );
  }

  return 0;
}

function CaculateRawConstructionPremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.daNangC4Package.premium.rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.daNangC4Package.premium.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.hoChiMinhC4Package.premium
          .rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.hoChiMinhC4Package.premium.rawConstructionCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return OneStoryHousePackage.haNoiC4Package.premium.rawConstructionCost;
      } else {
        return (
          OneStoryHousePackage.haNoiC4Package.premium.rawConstructionCost * 0.8
        );
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return OneStoryHousePackage.quangNinhC4Package.premium
        .rawConstructionCost;
    } else {
      return (
        OneStoryHousePackage.quangNinhC4Package.premium.rawConstructionCost *
        0.8
      );
    }
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.daNangCHPackage.premium.rawConstructionCost;
      } else {
        return (
          CityHousePackage.daNangCHPackage.premium.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.hoChiMinhCHPackage.premium.rawConstructionCost;
      } else {
        return (
          CityHousePackage.hoChiMinhCHPackage.premium.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return CityHousePackage.haNoiCHPackage.premium.rawConstructionCost;
      } else {
        return (
          CityHousePackage.haNoiCHPackage.premium.rawConstructionCost * 0.8
        );
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return CityHousePackage.quangNinhCHPackage.premium.rawConstructionCost;
    } else {
      return (
        CityHousePackage.quangNinhCHPackage.premium.rawConstructionCost * 0.8
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.daNangVillaPackage.premium.rawConstructionCost;
      } else {
        return (
          VillaPackage.daNangVillaPackage.premium.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.hoChiMinhVillaPackage.premium.rawConstructionCost;
      } else {
        return (
          VillaPackage.hoChiMinhVillaPackage.premium.rawConstructionCost * 0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.khuDat === "đường dưới 3m") {
        return VillaPackage.haNoiVillaPackage.premium.rawConstructionCost;
      } else {
        return VillaPackage.haNoiVillaPackage.premium.rawConstructionCost * 0.8;
      }
    }
    if (formdata.khuDat === "đường dưới 3m") {
      return VillaPackage.quangNinhVillaPackage.premium.rawConstructionCost;
    } else {
      return (
        VillaPackage.quangNinhVillaPackage.premium.rawConstructionCost * 0.8
      );
    }
  }

  return 0;
}

function CaculateFinishingPremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.daNangC4Package.premium.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.hoChiMinhC4Package.premium.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        OneStoryHousePackage.haNoiC4Package.premium.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      OneStoryHousePackage.quangNinhC4Package.premium.finishingCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.daNangCHPackage.premium.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.hoChiMinhCHPackage.premium.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        CityHousePackage.haNoiCHPackage.premium.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      CityHousePackage.quangNinhCHPackage.premium.finishingCost
    );
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.daNangVillaPackage.premium.finishingCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.hoChiMinhVillaPackage.premium.finishingCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        (formdata.dienTichXayDungTang1 * 0.1 + 1) *
        VillaPackage.haNoiVillaPackage.premium.finishingCost
      );
    }
    return (
      (formdata.dienTichXayDungTang1 * 0.1 + 1) *
      VillaPackage.quangNinhVillaPackage.premium.finishingCost
    );
  }
  return 0;
}

function CaculateGardenPremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4") {
    if (diaDiem === "Đà Nẵng ") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.daNangC4Package.premium.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.daNangC4Package.premium.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.hoChiMinhC4Package.premium.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.hoChiMinhC4Package.premium.gardenCost *
          0.8
        );
      }
    }

    if (diaDiem === "Hà Nội") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.haNoiC4Package.premium.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          OneStoryHousePackage.haNoiC4Package.premium.gardenCost *
          0.8
        );
      }
    }
    if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        OneStoryHousePackage.quangNinhC4Package.premium.gardenCost
      );
    } else {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        OneStoryHousePackage.quangNinhC4Package.premium.gardenCost *
        0.8
      );
    }
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.daNangVillaPackage.premium.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.daNangVillaPackage.premium.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hồ Chí Minh") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.hoChiMinhVillaPackage.premium.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.hoChiMinhVillaPackage.premium.gardenCost *
          0.8
        );
      }
    }
    if (diaDiem === "Hà Nội") {
      if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.haNoiVillaPackage.premium.gardenCost
        );
      } else {
        return (
          (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
          VillaPackage.haNoiVillaPackage.premium.gardenCost *
          0.8
        );
      }
    }
    if (formdata.sanVuon === "hơn 60% diện tích là cây xanh") {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        VillaPackage.quangNinhVillaPackage.premium.gardenCost
      );
    } else {
      return (
        (formdata.dienTichDat - formdata.dienTichXayDungTang1) *
        VillaPackage.quangNinhVillaPackage.premium.gardenCost *
        0.8
      );
    }
  }
  return 0;
}

function CaculateBasementPremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.tangHam) {
    return 0;
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.daNangVillaPackage.premium.basementCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.hoChiMinhVillaPackage.premium.basementCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTangHam *
        VillaPackage.haNoiVillaPackage.premium.basementCost
      );
    }
    return (
      formdata.dienTichTangHam *
      VillaPackage.quangNinhVillaPackage.premium.basementCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.daNangCHPackage.premium.basementCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.hoChiMinhCHPackage.premium.basementCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichTangHam *
        CityHousePackage.haNoiCHPackage.premium.basementCost
      );
    }
    return (
      formdata.dienTichTangHam *
      CityHousePackage.quangNinhCHPackage.premium.basementCost
    );
  }
  return 0;
}

function CaculatePoolPremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.hoBoi) {
    return 0;
  }

  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichHoBoi *
        VillaPackage.daNangVillaPackage.premium.poolCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichHoBoi *
        VillaPackage.hoChiMinhVillaPackage.premium.poolCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichHoBoi * VillaPackage.haNoiVillaPackage.premium.poolCost
      );
    }
    return (
      formdata.dienTichHoBoi *
      VillaPackage.quangNinhVillaPackage.premium.poolCost
    );
  }
  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.dienTichHoBoi *
        CityHousePackage.daNangCHPackage.premium.poolCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.dienTichHoBoi *
        CityHousePackage.hoChiMinhCHPackage.premium.poolCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.dienTichHoBoi *
        CityHousePackage.haNoiCHPackage.premium.poolCost
      );
    }
    return (
      formdata.dienTichHoBoi *
      CityHousePackage.quangNinhCHPackage.premium.poolCost
    );
  }
  return 0;
}

function CaculateElevatorPremium(diaDiem, loaiCongTrinh, formdata) {
  if (loaiCongTrinh === "Nhà cấp 4" || !formdata.thangMay) {
    return 0;
  }
  if (loaiCongTrinh === "Biệt thự") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.daNangVillaPackage.premium.elevatorCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.hoChiMinhVillaPackage.premium.elevatorCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.soDiemDungThangMay *
        VillaPackage.haNoiVillaPackage.premium.elevatorCost
      );
    }
    return (
      formdata.soDiemDungThangMay *
      VillaPackage.quangNinhVillaPackage.premium.elevatorCost
    );
  }

  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.daNangCHPackage.premium.elevatorCost
      );
    }
    if (diaDiem === "Hồ Chí Minh") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.hoChiMinhCHPackage.premium.elevatorCost
      );
    }
    if (diaDiem === "Hà Nội") {
      return (
        formdata.soDiemDungThangMay *
        CityHousePackage.haNoiCHPackage.premium.elevatorCost
      );
    }
    return (
      formdata.soDiemDungThangMay *
      CityHousePackage.quangNinhCHPackage.premium.elevatorCost
    );
  }
  return 0;
}

function CaculateDemolitionPremium(diaDiem, loaiCongTrinh) {
  if (loaiCongTrinh === "Nhà phố") {
    if (diaDiem === "Đà Nẵng") {
      return CityHousePackage.daNangCHPackage.premium.demolitionCost;
    }
    if (diaDiem === "Hồ Chí Minh") {
      return CityHousePackage.hoChiMinhCHPackage.premium.demolitionCost;
    }
    if (diaDiem === "Hà Nội") {
      return CityHousePackage.haNoiCHPackage.premium.demolitionCost;
    }
    return CityHousePackage.quangNinhCHPackage.premium.demolitionCost;
  }
  return 0;
}

const premiumPackageEs = {
  foundationCost: CaculateFoundationPremium,
  roofCost: CaculateRoofPremium,
  structureCost: CaculateStructurePremium,
  rawConstructionCost: CaculateRawConstructionPremium,
  finishingCost: CaculateFinishingPremium,
  gardenCost: CaculateGardenPremium,
  basementCost: CaculateBasementPremium,
  poolCost: CaculatePoolPremium,
  elevatorCost: CaculateElevatorPremium,
  demolitionCost: CaculateDemolitionPremium,
  totalCost: EstimatingPremium,
};

export { premiumPackageEs };
