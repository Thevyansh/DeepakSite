import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { GlobalStyles } from './Styles/GlobalStyles';
import { lightTheme, darkTheme } from './Styles/Themes/Themes';
import PostDetails from './components/PostDetails/PostDetails';
import Admin from './components/Admin/Admin';
import Edit from './pages/Edit/Edit';
import 'react-toastify/dist/ReactToastify.css';
import { initializeGlass } from './store/ui/glass';
import { firstLoad } from './store/posts';
import { initializeTheme, selectTheme } from './store/ui/theme';
import Auth from './pages/Auth/Auth';
import { auth } from './firebase/firebase';
import { currentUserChanged } from './store/auth';
import Signup from './components/Auth/Signup/Signup';
import Signin from './components/Auth/Signin/Signin';
import PrivateRoute from './utils/PrivateRoute';
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword';
import CreatePost from './components/Admin/Post/CreatePost';
import EditPost from './components/Admin/Post/EditPost';

function App() {
  const location = useLocation();
  const { theme, isLoading } = useSelector(selectTheme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeGlass());
    dispatch(initializeTheme());
    dispatch(firstLoad());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) =>
      dispatch(currentUserChanged(user))
    );
    return unsubscribe;
  }, [dispatch]);

  if (isLoading) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />

        <div className="App">
          <Header />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/posts/:id" exact component={PostDetails} />
              <PrivateRoute path="/admin" component={Admin} />
              <PrivateRoute path="/createPost" component={CreatePost} />
              <PrivateRoute path="/posts/:id/edit" component={EditPost} />
              <Route path="/ edit" exact component={Edit} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/signin" exact component={Signin} />
              <Route path="/forgot-password" exact component={ForgotPassword} />
              <Route path="/" exact component={Home} />
            </Switch>
          </AnimatePresence>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
