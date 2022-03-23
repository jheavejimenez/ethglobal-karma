import { generateChallenge } from './generate-challenge'
import { authenticate } from './authenticate'

export const login = async (walletAddress: string) => {
  // we request a challenge from the server
  const challengeResponse = await generateChallenge(walletAddress);
  
  // sign the text with the wallet
  const signature = `Welcome to Karma, ${challengeResponse.data.challenge.text}`;
  const accessTokens = await authenticate(walletAddress, signature);
  return accessTokens;
}
