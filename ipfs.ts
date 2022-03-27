import ipfsClient, { create } from 'ipfs-http-client';
import { v4 as uuidv4 } from 'uuid';

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
});


export const uploadIpfs = async (uri: string,) => {

  const result = await client.add(
    JSON.stringify({
      version: '1.0.0',
      metadata_id: uuidv4(),
      description: 'Description',
      content: 'Content',
      external_url: null,
      image: null,
      imageMimeType: null,
      name: 'Name',
      attributes: [],
      media: [
        {
          item: uri,
          // item: 'https://assets-global.website-files.com/5c38aa850637d1e7198ea850/5f4e173f16b537984687e39e_AAVE%20ARTICLE%20website%20main%201600x800.png',
          type: 'image/jpeg',
        },
      ],
    })
  );

  console.log('upload result ipfs');
  return client.isOnline;
};

