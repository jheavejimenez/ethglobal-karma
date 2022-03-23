import { useWalletConnect } from "@walletconnect/react-native-dapp";

export const getAddress = async () => {
    const connector = useWalletConnect();
    return connector.accounts[0];
}
