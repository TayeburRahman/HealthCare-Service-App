import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase.init";


initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islooding, setIsLooding] = useState(true);
  const [error, setError] = useState('');
  const [fastName, setFastName] = useState('');
  const [secondName, setSecondFastName] = useState('');
  const [checkBox, setCheckBox] = useState(false);



  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLooding(true);
    const googlProvider = new GoogleAuthProvider();
    return(
        signInWithPopup(auth, googlProvider)
    .then(result => {
      setUser(result.user);
    })
    .finally(() => setIsLooding(false))
    );
   
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLooding(false);

    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLooding(true);
    window.location.reload(); 
    signOut(auth)
    .then(() => {})
    .finally(() => setIsLooding(false));
  };

  const handleEmailChang = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChang = (e) => {
    setPassword(e.target.value);
  };

  const handleFastNameChang = (e) => {
    setFastName(e.target.value);
  };
  
  const handleSecondNameChang = (e) => {
    setSecondFastName(e.target.value);
  };

  const toggoleLogin = (e) => {
    setCheckBox(e.target.checked);
    console.log(e.target.checked);
  };

  const handleRegistration = (e) => {
    console.log(email, password);
    e.preventDefault();
    if (password < 6) {
      setError("Password Must be at least 6 character long");
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setError("Password Must Contain 2 Upper Case");
      return;
    }
    if (checkBox) {
      processLogin(email, password);
    } else {
      createNewUser(email, password);
    }
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        window.location.reload(); 
        console.log(user);
        setError("Verification Sent Email");
        verifyEmail();
        registerName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(result => {
      console.log("email verify", result);
      if (result) {
        setError("Your Registration Successful");
      }
    });
  };

  const registerName = ()=>{
    updateProfile(auth.currentUser, {displayName: fastName + ' ' + secondName})
    .then(result => { });
  };

  const handelResetPassword =() =>{
    sendPasswordResetEmail(auth, email)
    .then(result => { });
};

  return{
    logOut,
    signInUsingGoogle,
    user,
    error,
    islooding,
    handleEmailChang,
    handlePasswordChang,
    handleFastNameChang,
    handleSecondNameChang,
    toggoleLogin,
    handleRegistration,
    handelResetPassword
    
    
  }
};
export default useFirebase;
