import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

// components
import ChatApp from "./components/chat-app";

// css
import 'antd/dist/antd.css'
import 'index.css'

import loadable from 'react-loadable'

const d3Sample = loadable({
  loader: () => import(""),
  loading: () => <div>loading...</div>
})

const styles = {
  fontFamily: 'sans-serif',
  paddingLeft: '250px'
}

const routeMap = {
  chat: ChatApp
}

class App extends PureComponent {
  handleLinkClick = key => {
    window.history.pushState(null, "", `/#/${key}`)
    this.forceUpdate()
  }

  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "")
    let CurrentPage = routeMap[currentPage] || Hello
    if (currentPage.match(/user\/\w+|list-page/)) {
      CurrentPage = () => import()
    } else if (currentPage.match(/wizard\/step\/\w+/)) {
      CurrentPage = () => import()
    }

    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(k => (
            <li key={k}
                className={k === currentPage ? "is-active" : ""}
                style={{listStyle: "none"}}
            >
              <span className="link" onClick={() => this.handleLinkClick(k)}>
                {k}
              </span>
            </li>
          ))}
        </ul>
        <div style={{padding: "30px 0"}}>
          <CurrentPage />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
