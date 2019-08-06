import React from 'react'
import House from './House'
import Index from './Index/index.js'
import News from './News'
import My from './My'
import { Route, Switch } from 'react-router-dom'
import './index.scss'
import { TabBar } from 'antd-mobile'
const itemList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/my' }
]
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 默认选中的tab
      selectedTab: props.location.pathname
    }
  }
  renderItem() {
    return itemList.map(item => (
      <TabBar.Item
        // 标题文字
        title={item.title}
        key={item.title}
        // 未选中图标
        icon={<i className={`iconfont ${item.icon}`} />}
        // 选中的图标
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        // 是否选中
        selected={this.state.selectedTab === item.path}
        // 点击事件
        onPress={() => {
          this.setState({
            selectedTab: item.path
          })
          this.props.history.push(item.path)
        }}
      />
    ))
  }
  render() {
    return (
      <div className="home">
        {/* 路由规则，出口 */}
        <Switch>
          <Route exact path="/home" component={Index} />
          <Route path="/home/house" component={House} />
          <Route path="/home/news" component={News} />
          <Route path="/home/my" component={My} />
        </Switch>

        {/* 导航组件 */}
        <div className="tabBar">
          <TabBar tintColor="#21b97a">{this.renderItem()}</TabBar>
        </div>
      </div>
    )
  }
}
export default Home
