import { getSigner } from './ethers.service';
import { LENS_HUB_ABI, LENS_HUB_CONTRACT_ADDRESS } from './config';
import { ethers } from 'ethers';

export const lensHub = new ethers.Contract(
  LENS_HUB_CONTRACT_ADDRESS,
  LENS_HUB_ABI,
  getSigner()
)
