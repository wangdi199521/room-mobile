import React from 'react'
import House from './House'
import Index from './Index/index.js'
import News from './News'
import My from './My'
import { Route, Switch, NavLink } from 'react-router-dom'
import './index.scss'
class Home extends React.Component {
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
          <ul>
            <li>
              <NavLink exact to="/home">
                <i className="iconfont icon-ind" />
                <p>首页</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/house">
                <i className="iconfont icon-findHouse" />
                <p>找房</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/news">
                <i className="iconfont icon-infom" />
                <p>资讯</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home/my">
                <i className="iconfont icon-my" />
                <p>我的</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
