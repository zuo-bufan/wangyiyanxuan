// 这份文件我要导出每一份api的请求
import request from './request'

// 首页数据请求（按需导出）  /index/index
export const HomeApi = () => request.get('/index/index')
// export const HomeApi = function () {
//     return request.get('/index/index')
// }

// 搜索窗口数据  /search/index
export const PopupApi = () => request.get('/search/index')

// 实时搜索功能  /search/helper
// 如果是get请求，params要解构
// 如果是post请求则不需要
export const SearchHelperpApi = (params) => request.get('/search/helper', { params })

// 搜索框商品搜索  /goods/list
export const SearchGoodsListApi = (params) => request.get('/goods/list', { params })

// 清除历史记录  /search/clearhistory
export const SearchClearHistoryApi = () => request.post('/search/clearhistory')

// 专题页面数据请求  /topic/list
export const TopicListApi = (params) => request.get('topic/list', { params })

// 登录接口（没有账号自动注册）  /auth/loginByWeb
export const LoginApi = (params) => request.post('/auth/loginByWeb', params)

// 产品明细  /goods/detail
export const GoodsDetailApi = (params) => request.get('/goods/detail', { params })

// 相关产品  /goods/related
export const GoodsAboutApi = (params) => request.get('/goods/related', { params })

// 分类数据获取  /goods/category
export const GoodsCategoryApi = (params) => request.get('/goods/category', { params })

// 分类页面商品列表请求  /goods/list
export const GoodsListApi = (params) => request.get('/goods/list', { params })

// 获取购物车产品数量  /cart/goodscount(请求体)
export const CartGoodsNumApi = () => request.get('/cart/goodscount')

// 加入购物车  /cart/add
export const CartAddApi = (params) => request.post('/cart/add', params)

// 获取购物车数据（含完成编辑）  /cart/index(请求体)
export const GetCartDataApi = () => request.get('/cart/index')

// 点击切换商品选中状态（含全选）  /cart/checked
export const GoodsSelectApi = (params) => request.post('/cart/checked', params)

// 全部分类数据接口  /catalog/index
export const GetCategoryDataApi = () => request.get('/catalog/index')

// 获取当前分类数据  /catalog/current
export const CategoryCurrentDataApi = (params) => request.get('/catalog/current', { params })

// 删除商品  /cart/delete
export const DelGoodsApi = (params) => request.post('/cart/delete', params)

// 商品步进器  /cart/update
export const CartStepApi = (params) => request.post('/cart/update', params)

// 品牌详情  /brand/detail
export const BrandDetailApi = (params) => request.get('/brand/detail', { params })

