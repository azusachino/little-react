import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

// components
import Hello from './hello';
import ChatApp from "./components/chat-app";
import CommentBox from "./components/comment-box";
import {TabSelectorSample} from "./components/tab-selector";
import {StatefulTabSelectSample} from "./components/tab-selector/StatefulTabSelector";

// css
import 'antd/dist/antd.css'
import './index.css'

/*import loadable from 'react-loadable'

const d3Sample = loadable({
  loader: () => import(""),
  loading: () => <div>loading...</div>
})*/

const styles = {
  fontFamily: 'sans-serif',
  paddingLeft: '250px'
}

const routeMap = {
  "chat": ChatApp,
  "comment-box": CommentBox,
  "tab-selector": TabSelectorSample,
  "stateful-tab-selector": StatefulTabSelectSample
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
      CurrentPage = () => {}
    } else if (currentPage.match(/wizard\/step\/\w+/)) {
      CurrentPage = () => {}
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
