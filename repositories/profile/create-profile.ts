import { gql } from '@apollo/client/core';
import { BigNumber, utils } from 'ethers';
import { apolloClient } from '../authentication/apollo-client';
import { login } from '../authentication/login';
import { getAddressFromSigner } from '../../ethers.service';
import { prettyJSON } from '../../helpers';
import { pollUntilIndexed } from '../../indexer/has-transaction-been-indexed';

const CREATE_PROFILE = `
  mutation($request: CreateProfileRequest!) { 
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
			__typename
    }
 }
`;

const createProfileRequest = (createProfileRequest: {
  handle: string;
  profilePictureUri?: string;
  followNFTURI?: string;
}) => {
  return apolloClient.mutate({
    mutation: gql(CREATE_PROFILE),
    variables: {
      request: createProfileRequest,
    },
  });
};

export const createProfile = async () => {
  const address = getAddressFromSigner();
  console.log('create profile: address', address);

  await login(address);

  const createProfileResult = await createProfileRequest({
    handle: new Date().getTime().toString(), // change it to user nickname
  });

  prettyJSON('create profile: result', createProfileResult.data);

};

(async () => {
  await createProfile(); // call this funcion to create profile
})();
