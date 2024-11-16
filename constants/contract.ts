import { sepolia } from 'thirdweb/chains';
import { getContract } from 'thirdweb';
import { client } from '@/services/thirdweb';

const CONTRACT_ADDRESS = '0xd1386733b9406657a866e350d0Ad7e92Ebef1934';
export const contract = getContract({
  client: client,
  chain: sepolia,
  address: CONTRACT_ADDRESS,
});
