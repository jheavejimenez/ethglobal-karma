// import { apolloClient } from '../authentication/apollo-client';
// import { gql } from '@apollo/client'
// import { prettyJSON } from '../../helpers';

// const CREATE_POST_TYPED_DATA = `
//   mutation($request: CreatePublicPostRequest!) { 
//     createPostTypedData(request: $request) {
//       id
//       expiresAt
//       typedData {
//         types {
//           PostWithSig {
//             name
//             type
//           }
//         }
//       domain {
//         name
//         chainId
//         version
//         verifyingContract
//       }
//       value {
//         nonce
//         deadline
//         profileId
//         contentURI
//         collectModule
//         collectModuleData
//         referenceModule
//         referenceModuleData
//       }
//      }
//    }
//  }
// `

// export const createPostTypedData = (createPostTypedDataRequest) => {
//     return apolloClient.mutate({
//         mutation: gql(CREATE_POST_TYPED_DATA),
//         variables: {
//             request: createPostTypedDataRequest
//         },
//     })
// }


// export const createPost = async (uri: string, description: string) => {
//     // hard coded to make the code example clear
//     const createPostRequest = {
//         profileId: "0x03",
//         contentURI: "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl.json",
//         collectModule: {
//             timedFeeCollectModule: {
//                 amount: {
//                     currency: "0xD40282e050723Ae26Aeb0F77022dB14470f4e011",
//                     value: "0.01"
//                 },
//                 recipient: "0xEEA0C1f5ab0159dba749Dc0BAee462E5e293daaF",
//                 referralFee: 10.5
//             }
//         },
//         referenceModule: {
//             followerOnlyReferenceModule: false
//         }
//     };

//     const result = await createPostTypedData(createPostRequest);
//     const typedData = result.data.createPostTypedData.typedData;

//     const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
//     const { v, r, s } = splitSignature(signature);

//     const tx = await lensHub.postWithSig({
//         profileId: typedData.value.profileId,
//         contentURI: typedData.value.contentURI,
//         collectModule: typedData.value.collectModule,
//         collectModuleData: typedData.value.collectModuleData,
//         referenceModule: typedData.value.referenceModule,
//         referenceModuleData: typedData.value.referenceModuleData,
//         sig: {
//             v,
//             r,
//             s,
//             deadline: typedData.value.deadline,
//         },
//     });
//     console.log(tx.hash);
//     // 0x64464dc0de5aac614a82dfd946fc0e17105ff6ed177b7d677ddb88ec772c52d3
//     // you can look at how to know when its been indexed here: 
//     //   - https://docs.lens.dev/docs/has-transaction-been-indexed
// }
