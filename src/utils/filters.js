
export function setMainCss(idx){
  var classCss = ''
  if (idx) {
    classCss = 'm-auto main_card'
  } else {
    classCss = 'm-auto main_card_no'
  }
  return classCss
}

export function setCardDesign(idx) {
  var classCss = ''
  switch(idx) {
    case 0:
      classCss = 'm-auto shadow_eft mt-3'
      break
    case 1:
      classCss = 'm-auto shadow_eft card_angle mt-3'
      break
    case 2:
      classCss = 'm-auto shadow_eft'
      break
    case 3:
      classCss = 'm-auto shadow_eft mt-3'
      break
    case 4:
      classCss = 'm-auto shadow_eft mt-4'
      break
    case 5:
      classCss = 'm-auto shadow_eft mt-6'
      break
    case 6:
      classCss = 'm-auto shadow_eft mt-4'
      break
    case 7:
      classCss = 'm-auto shadow_eft card_angle mt-4'
      break
  }
  return classCss
}

export function setCardSrc(idx) {
  var imgUrl = ''
  switch(idx) {
    case 0:
      imgUrl = '@/assets/img/asset_4.png'
      break
    case 1:
      imgUrl = '@/assets/img/asset_3.png'
      break
    case 2:
      imgUrl = '@/assets/img/asset_2.png'
      break
    case 3:
      imgUrl = '@/assets/img/asset_1.png'
      break
    case 4:
      imgUrl = '@/assets/img/asset_1.png'
      break
    case 5:
      imgUrl = '@/assets/img/asset_2.png'
      break
    case 6:
      imgUrl = '@/assets/img/asset_4.png'
      break
    case 7:
      imgUrl = '@/assets/img/asset_3.png'
      break
  }
  return imgUrl
}