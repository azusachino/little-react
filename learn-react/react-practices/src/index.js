import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

// components
import Hello from './hello';
import ChatApp from "./components/chat-app";
import CommentBox from "./components/comment-box";
import {TabSelectorSample} from "./components/tab-selector";
import {StatefulTabSelectSample} from "./components/tab-selector/StatefulTabSelector";
import Locale from './components/locale'
import PureRedux from './components/pure-redux'
import CounterSample from "./components/counter";
import RouterSample from "./components/router";
import RouterParams from "./components/router/RouterParams";
import NestedRouter from "./components/router/NestedRouter";
import FormSubmit from "./components/form-builder/form-submit"
import FormSubmitAntd from "./components/form-builder/form-submit-antd";
import DynamicForm from "./components/dynamic-form";
import WizardSample from "./components/register-step";
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
  "stateful-tab-selector": StatefulTabSelectSample,
  "locale": Locale,
  "pure-redux": PureRedux,
  "counter-sample": CounterSample,
  "router-sample": RouterSample,
  "nested-router": NestedRouter,
  "router-params": RouterParams,
  "form-submit": FormSubmit,
  "form-submit-antd": FormSubmitAntd,
  "dynamic-form": DynamicForm,
  "wizard-sample": WizardSample
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
      CurrentPage = () => {
      }
    } else if (currentPage.match(/wizard\/step\/\w+/)) {
      CurrentPage = () => {
      }
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
          <CurrentPage/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
