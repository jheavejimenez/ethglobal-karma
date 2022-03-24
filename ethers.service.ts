import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { ethers, utils } from 'ethers';
import { omit } from './helpers';

// const connector = useWalletConnect();
// const provider = new WalletConnectProvider({
//         rpc: {
//           80001: 'https://rpc-mumbai.maticvigil.com/',
//         },
//         chainId: 80001,
//         connector: connector,
//         qrcode: false,
//     });
// provider.enable(); // should have await here
// const ethersProvider = new ethers.providers.Web3Provider(provider);
export const ethersProvider = new ethers.providers.Web3Provider((window as any).ethereum);

export const getSigner = () => {
  return ethersProvider.getSigner();
};

export const getAddressFromSigner = () => {
  return getSigner()._address;
};

export const signedTypeData = (
  domain: TypedDataDomain,
  types: Record<string, TypedDataField[]>,
  value: Record<string, any>
) => {
  const signer = getSigner();
  return signer._signTypedData(
    omit(domain, '__typename'),
    omit(types, '__typename'),
    omit(value, '__typename')
  );
};

export const splitSignature = (signature: string) => {
  return utils.splitSignature(signature);
};

export const sendTx = (
  transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>
) => {
  const signer = getSigner();
  return signer.sendTransaction(transaction);
};

export const signText = (text: string) => {
  return getSigner().signMessage(text);
};
