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
  const [currenAccount, setCurrenAccount] = useState('');
  const checkIfWalletConnected = async () => {
    if (!ethereum) return alert('Please install metamask');
    const accounts = await ethereum.request({method: 'eth_accounts'});
    console.log(accounts, "INI AKUN DARI METAMASK");
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install metamask');
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      setCurrenAccount(accounts[0]);
      console.log(currenAccount, "this account has been saved");
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
    <TransactionContext.Provider value={{ connectWallet, currenAccount }}>
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