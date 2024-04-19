import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Faucet } from "./components/Faucet";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { ethers } from "ethers";
import faucetContract from "../src/components/ethereum/faucet";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();
  const [fcContract, setFcContract] = useState();
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState("");
  const [transactionData, setTransactionData] = useState("");

   useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
         /* get provider */
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         /* get accounts */
         const accounts = await provider.send("eth_requestAccounts", []);
         /* get signer */
         setSigner(provider.getSigner());
         /* local contract instance */
         setFcContract(faucetContract(provider));
         /* set active wallet address */
         setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          /* get signer */
          setSigner(provider.getSigner());
          /* local contract instance */
          setFcContract(faucetContract(provider));
          /* set active wallet address */
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

   const getKOKOHandler = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    try {
      const fcContractWithSigner = fcContract.connect(signer);
      const resp = await fcContractWithSigner.requestTokens();
      setWithdrawSuccess("Operation succeeded - enjoy your KOKO tokens!");
      setTransactionData(resp.hash);
    } catch (err) {
      console.log(err.message);
      setWithdrawError("Error");
    }
  };


  return (
    <div className="App">
      <NavBar connectWallet={connectWallet} walletAddress={walletAddress}/>
      <Banner />
      <Faucet withdrawError={withdrawError} withdrawSuccess={withdrawSuccess} 
      walletAddress={walletAddress} getKOKOHandler={getKOKOHandler} transactionData={transactionData}/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
