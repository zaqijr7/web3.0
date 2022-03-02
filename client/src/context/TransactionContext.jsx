import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from "../utils/constants";
export const TransactionContext = React.createContext();

const { ethereum } = window;


const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({
      provider,
      signer,
      transactionContract
  });
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
  const handleChange = (e, name) => {
    setFormData((prevState) => ({...prevState, [name]: e.target.value}))
  }

  const checkIfWalletConnected = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({method: 'eth_accounts'});
      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log('No Accounts Found');
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum Object");
    }
  }


  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      setCurrentAccount(accounts[0]);
      console.log(currentAccount, "this account has been saved");
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum Object");
    }
  }

  const sendTransaction = () => {
    try {
      if (!ethereum) return alert('Please install metamask');

    } catch (error) {
      console.error(error);
      throw new Error("No ethereum Object");
    }
  }

  useEffect(() => {
    checkIfWalletConnected();
    // getEthereumContract();
  }, [])
  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
// function TransactionContext() {
//   return ( 
//     <div>TransactionContext</div>
//   )
// }

// export default TransactionContext