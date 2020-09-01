import React, {useState, useEffect} from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import {Layout, notification, Icon} from "antd";

import umbrella from 'umbrella-storage';
import {useAlita} from 'redux-alita';
import Routes from './routes';
import {checkLogin} from "./utils";

const {Content, Footer} = Layout;

type AppProps = {}

const checkIsMobile = () => {
  return window.innerHeight <= 992;
}

let _resizeThrottle = false;
const resizeListener = (handler: (isMobile: boolean) => void) => {
  const delay = 250;
  if (!_resizeThrottle) {
    _resizeThrottle = true;
    const timer = setTimeout(() => {
      handler(checkIsMobile());
      _resizeThrottle = false;
      clearTimeout(timer);
    }, delay);
  }
}

const handleResize = (handler: (isMobile: boolean) => void) => {
  window.addEventListener("resize", resizeListener.bind(null, handler))
}

const openNotification = () => {
  const openNotification = () => {
    notification.open({
      message: '博主',
      description: (
        <div>
          <p>
            GitHub地址：
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/
            </a>
          </p>
          <p>
            博客地址：
            <a
              href="https://azusachino.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://azusachino.github.io/
            </a>
          </p>
        </div>
      ),
      icon: <Icon type="smile-circle" style={{color: 'red'}}/>,
      duration: 0,
    });
    umbrella.setLocalStorage('hideBlog', true);
  };

  if (!umbrella.getLocalStorage('hideBlog')) {
    openNotification();
  }
}

const fetchMenuAsync = (handler: any) => {
  const setAlitaMenu = (menus: any) => {
    handler(menus);
  }
  setAlitaMenu(umbrella.getLocalStorage('menus') || []);
  // fetchMenu().then((smenus) => {
  //   setAlitaMenu(smenus);
  //   umbrella.setLocalStorage('smenus', smenus);
  // });
}

// hooks
const App = (props: AppProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [auth, responsive, setAlita] = useAlita(
    {auth: {permissions: null}},
    {responsive: {isMobile: false}},
    {light: true}
  );

  useEffect(() => {
    let user = umbrella.getLocalStorage('user');
    user && setAlita('auth', user);
    setAlita('responsive', {isMobile: checkIsMobile()});

    handleResize((isMobile: boolean) => setAlita('responsive', {isMobile}));
    openNotification();
    fetchMenuAsync((smenus: any[]) => setAlita('smenus', smenus));
  }, [setAlita]);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <Layout>
      {/*      {!responsive.isMobile && checkLogin(auth.permissions) && (
        <SiderCustom collapsed={collapsed} />
      )}*/}
      {/*<ThemePicker />*/}
      <Layout className="app_layout">
        {/*<HeaderCustom toggle={toggle} collapsed={collapsed} user={auth || {}} />*/}
        <Content className="app_layout_content">
          {/*<Routes auth={auth} />*/}
        </Content>
        <Footer className="app_layout_foot">
          {/*<Copyright />*/}
        </Footer>
      </Layout>
    </Layout>
  );
}

const NotFound = (props: any) => {
  return (
    <div>
      404 Not found
    </div>
  )
}

const Login = (props: any) => {
  return (
    <div>
      <Icon type="smile-circle" />Login Page
    </div>
  )
}

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
      <Route path="/app" component={App} />
      <Route path="/404" component={NotFound} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

