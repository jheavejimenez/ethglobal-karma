import { ethers } from 'ethers';

// This code will assume you are using MetaMask.
// It will also assume that you have already done all the connecting to metamask
// this is purely here to show you how the public API hooks together
const { ethereum } = window as any;

export const ethersProvider = new ethers.providers.Web3Provider(ethereum);

export const getAddress = async () => {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  return accounts[0];
}

export const signText = (text: string) => {
  return ethersProvider.sendTransaction(text);
}