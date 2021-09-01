import Vue from 'vue'
import { Button, Search, Swipe, SwipeItem, Lazyload, Grid, GridItem, Toast, Icon, Tag, List, Cell, Tabbar, TabbarItem, DropdownItem, DropdownMenu, Empty, Pagination, Form, Field, Col, Row, Popup, Tab, Tabs, GoodsAction, GoodsActionButton, GoodsActionIcon, Stepper, SubmitBar, Checkbox, Card, CheckboxGroup, Sidebar, SidebarItem, SwipeCell } from 'vant';
Vue.use(Button);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload, {
    lazyComponent: true,//设置懒加载
    loading: require("../assets/loading.gif")//懒加载加入的图片
});
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(List);
Vue.use(Cell);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem)
Vue.use(Empty)
Vue.use(Pagination)
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(Card);
Vue.use(CheckboxGroup);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(SwipeCell);
