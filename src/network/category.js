import {request} from "./request";

export function getClassify() {
  return request({
    url: '/category'
  })
}

// 商品缩略图
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

// 分类商品推荐
export function getSubcategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
