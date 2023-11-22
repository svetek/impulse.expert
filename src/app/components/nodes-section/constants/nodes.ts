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
      'https://adastat.net/pools/06be20d0da5810fae2f0376dc0a01a31d459c0ca6da8e3ddf58a67d9',
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
    logo: './images/nodes/evmos.png',
    title: 'Evmos',
    link: 'https://evmos.org',
    explorer:
      'https://www.mintscan.io/evmos/validators/evmosvaloper16d9wa7uzahhmr9ekahyaejr9sdpmj9glg4vurm',
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
];

export const testnetNodes: Array<NodeCard> = [
  {
    logo: './images/nodes/lava.svg',
    title: 'Lava',
    link: 'https://www.lavanet.xyz/',
    explorer:
      'https://lava.explorers.guru/validator/lava@valoper1q7jyftyahuf66jefc36254rldk6je9xkaaseh4',
    description:
      'Pairs Providers with DApps for scalable, private and uncensored access to Web3',
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
    explorer:
      'https://explorer.nibiru.fi/nibiru-itn-3/staking/nibivaloper1f20ayh6pr2yw4g9n9mr76acmj8cxv3jeeurwsc',
    description: 'Sovereign blockchain, Cosmos Ecosystem family member',
  },
  {
    logo: './images/nodes/mantra.svg',
    title: 'Mantra',
    link: 'https://www.mantraomniverse.com/',
    explorer:
      'https://explorer.testnet.mantrachain.io/mantrachain/validators/mantravaloper1srul3v67t2szqc89me77e0xeagzxua2xzacpv9',
    description:
      'Vertically-integrated and regulatory compliant blockchain ecosystem',
  },
  {
    logo: './images/nodes/islamicCoin.png',
    title: 'Islamic Coin',
    explorer:
      'https://testnet.ping.pub/haqq/staking/haqqvaloper1vzqw946xv3lgsvdyw08pkgkqhuennjv48rqdev',
    link: 'https://islamiccoin.net',
    description: 'Community-run network, which has a finite total supply',
  },
  {
    logo: './images/nodes/evmos.png',
    title: 'Evmos',
    link: 'https://evmos.org',
    description:
      'A one-stop, highly personalized access point to discover unique Web3 apps built on Evmos',
  },
  {
    logo: './images/nodes/massa.jpg',
    title: 'Massa',
    link: 'https://massa.net/',
    description:
      'Truly decentralized blockchain controlled by thousands of people',
  },
  {
    logo: './images/nodes/masa-fin.png',
    title: 'Masa Finance',
    link: 'https://www.masa.finance/',
    description:
      'The mission is to bring the next 1 billion people to Web3',
  },
];