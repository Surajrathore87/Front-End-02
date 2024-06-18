import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { callAPI } from '_services/CallAPI';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isContextLoaded, setIsContextLoaded] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [configurations, setConfigurations] = useState(null);
  const [getDisclaimer, setGetDisclaimer] = useState(null);
  const [getCompanyInfo, setGetCompanyInfo] = useState(null);

  useEffect(() => {
    companyDetails()
  }, []);

  function companyDetails() {
    callAPI('POST', process.env.COMMON_API, {}, (res) => {
      if (res.status) {
        setConfigurations(res.data.configurations);
        setGetDisclaimer(res.data.getDisclaimer);
        setGetCompanyInfo(res.data.getCompanyInfo);
        //console.log(getCompanyInfo);
      }
    });
  }

  return (
    <>
      <AuthContext.Provider value={{
        isContextLoaded, setIsContextLoaded, showVerification, setShowVerification,
        showOtpModal, setShowOtpModal, isVerified, setIsVerified, configurations, setConfigurations, getDisclaimer, setGetDisclaimer, getCompanyInfo, setGetCompanyInfo
      }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};


AuthProvider.propTypes = {
  children: PropTypes.any,
};

export const useAuth = () => useContext(AuthContext);

// export const ProtectRoute = ({ children }) => {
//   const { isAuthenticated, isContextLoaded } = useAuth();
//   const router = useRouter();
//   if (isContextLoaded || (!isAuthenticated && router.pathname === '/my-profile')) {
//     return <></>;
//   }
//   return children;
// };
