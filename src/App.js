import './App.css';
import Landing from './Landing/Landing';
import Header from './Header/Header';
import * as constants from './Helper/Constants';
import { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Profile/Profile';
import Faq from './Faq/Faq';
import SignUpValidation from './Validation/SignUpValidation';
import { isNullEmptyUndefined } from './Helper/Helper';
import Settings from './Settings/Settings';

export const tgc = createContext();

function App() {
  const [loader, setLoader] = useState({
    loading: false,
    type: constants.EMPTY_STRING,
    target: null,
  });
  const [user, setUser] = useState({});

  const contextData = {
    loader,
    setLoader,
    user,
    setUser,
  };

  return (
    <>
      <tgc.Provider value={contextData}>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path={!isNullEmptyUndefined(localStorage.getItem('user')) ? `/profile` : "/"} element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/validation?" element={<SignUpValidation />} />
        </Routes>
      </tgc.Provider>
    </>
  );
}

export default App;
