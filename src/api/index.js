 const HOST = "http://129.204.72.71:8000";
 //首页菜单
 const  HOST_MENU_LIST=HOST+"/api/catelist";
 //首页轮播图
 const HOST_BANNER_LIST = HOST + "/api/home/bannerlist";
 //首页菜单列表
const HOST_CATE_LIST = HOST + "/api/home/catelist/itemlist";
//首页品牌制造商直供
const HOST_TAG_LIST = HOST + "/api/home/tagList";
//商品详情接口
const HOST_DETAIL_LIST = HOST + "/api/item/detail";

//分类页面接口
const CATE_MENU_LIST = HOST + "/api/category/listmap";
export  default {
    HOST_MENU_LIST,
    HOST_BANNER_LIST,
    HOST_CATE_LIST,
    HOST_TAG_LIST,
    HOST_DETAIL_LIST,
    CATE_MENU_LIST

}
