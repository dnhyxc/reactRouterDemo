## react-keep-alive

#### 1，官方中文网址：[react-keep-alive官网](https://github.com/StructureBuilder/react-keep-alive/blob/master/README.zh-CN.md)

#### 2，react-keep-alive概述

2.1，react-keep-alive是用于保存react中路由离开时状态的第三方库。

#### 3，react-keep-alive具体使用

``` js
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Provider,
  KeepAlive,
} from 'react-keep-alive';
 
class One extends React.Component {
  render() {
    return (
      // a real DOM tag
      <div>This is One.</div>
    );
  }
}
 
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/one">
            <KeepAlive name="One">
              <One />
            </KeepAlive>
          </Route>
        </Switch>
      </div>
    );
  }
}
 
ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
```