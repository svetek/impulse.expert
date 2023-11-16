import { Url } from 'next/dist/shared/lib/router/router';

export type NodeCard = {
  logo: string;
  title: string;
  link: Url;
  explorer?: Url;
  page?: string;
  description?: string;
};

export const mainnetNodes: Array<NodeCard> = [
  {
    logo: './images/nodes/cardano_logo.png',
    title: 'Cardano',
    explorer:
      'https://cexplorer.io/pool/pool1q6lzp5x6tqg04chsxakupgq6x829nsx2dk5w8h043fnajm8d3uj',
    link: 'https://cardano.org/',
    description: 'One of the biggest cryptocurrencies by market cap',
  },
  {
    logo: './images/nodes/axelar.jpg',
    title: 'Axelar',
    explorer:
      'https://axelarscan.io/validator/axelarvaloper1e89wchnra6shn5lr475xv6j85y3zga4ylc8aet',
    link: 'https://axelar.network',
    description: 'Delivers secure cross-chain communication for Web3',
  },
  {
    logo: './images/nodes/juno.png',
    title: 'Starknet Juno',
    link: 'https://www.starknet.io/en',
    description:
      'Starknet is the secure scaling technology bringing Ethereum’s benefits to the world',
  },

  {
    logo: './images/nodes/pathfinder.png',
    title: 'Starknet Pathfinder',
    link: 'https://www.starknet.io/en',
    description:
      'Starknet is the secure scaling technology bringing Ethereum’s benefits to the world',
  },
  {
    logo: './images/nodes/evmos.png',
    title: 'Evmos',
    link: 'https://evmos.org',
    description:
      'A one-stop, highly personalized access point to discover unique Web3 apps built on Evmos',
  },
  {
    logo: './images/nodes/islamicCoin.png',
    title: 'Islamic Coin',
    explorer:
      'https://shell.haqq.network/staking/validator/haqqvaloper1zenrae0nqd0mclna6an3059z66tlrzar5xmkzp',
    link: 'https://islamiccoin.net',
    description: 'Community-run network, which has a finite total supply',
  },
];

export const testnetNodes: Array<NodeCard> = [
  {
    logo: './images/nodes/lava.svg',
    title: 'Lava',
    link: 'https://www.lavanet.xyz/',
    explorer:
      'https://lava.explorers.guru/validator/lava@valoper1q7jyftyahuf66jefc36254rldk6je9xkaaseh4',
    description:
      'Lava pairs Providers with Applications for scalable, private and uncensored access to Web3',
  },
  {
    logo: './images/nodes/massa.jpg',
    title: 'Massa',
    link: 'https://massa.net/',
    description:
      'Truly decentralized blockchain controlled by thousands of people.',
  },
  {
    logo: './images/nodes/masa-fin.png',
    title: 'Masa Finance',
    link: 'https://www.masa.finance/',
    description:
      'Masa is on a mission to bring the next 1 billion people to web3',
  },
  {
    logo: './images/nodes/axelar.jpg',
    title: 'Axelar',
    explorer:
      'https://testnet.axelarscan.io/validator/axelarvaloper1xa34peh03j2mtm3jlwdyy9kx6npac3n0v3432u',
    link: 'https://axelar.network',
    description: 'Delivers secure cross-chain communication for Web3',
  },
  {
    logo: './images/nodes/nibi.png',
    title: 'Nibiru',
    link: 'https://nibiru.fi/',
    description: 'Sovereign blockchain, Cosmos Ecosystem family member',
  },
  {
    logo: './images/nodes/mantra.svg',
    title: 'Mantra',
    link: 'https://www.mantraomniverse.com/',
    description:
      'MANTRA is a first of its kind, vertically-integrated and regulatory compliant blockchain ecosystem',
  },
  {
    logo: './images/nodes/evmos.png',
    title: 'Evmos',
    link: 'https://evmos.org',
    description:
      'A one-stop, highly personalized access point to discover unique Web3 apps built on Evmos',
  },
  {
    logo: './images/nodes/islamicCoin.png',
    title: 'Islamic Coin',
    explorer:
      'https://testnet.ping.pub/haqq/staking/haqqvaloper1vzqw946xv3lgsvdyw08pkgkqhuennjv48rqdev',
    link: 'https://islamiccoin.net',
    description: 'Community-run network, which has a finite total supply',
  },
];
// testnet убрать: celectia, OKP4, добавить MANTRA, Evmos
