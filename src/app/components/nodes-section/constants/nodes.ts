import { Url } from 'next/dist/shared/lib/router/router';

export type NodeCard = {
  logo: string;
  title: string;
  link?: Url;
  explorer?: Url;
  pageLink?: string;
  page?: string;
  invert?: boolean;
  description?: string;
};

export const mainnetNodes: Array<NodeCard> = [
  {
    logo: './images/nodes/cardano_logo.png',
    title: 'Cardano',
    pageLink: '/cardano',
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
    logo: './images/nodes/canto.svg',
    title: 'Canto',
    link: 'https://canto.io/',
    description: 'Canto: EVM-based, DeFi-focused blockchain with zero-fee DEX',
    explorer: 'https://www.mintscan.io/canto/validators/cantovaloper1cr7ulf0lwhgy7rdfvt08mg4w5hft2zggg5guwg',
    invert: true
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
    pageLink: '/lava',
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
    logo: './images/nodes/cascadia.png',
    title: 'Cascadia',
    link: 'https://www.cascadia.foundation/',
    explorer:
      'https://validator.cascadia.foundation/validators/cascadiavaloper1l5c34aap2p5rrvqyemhf03v0ztn0d8l39c05m6',
    description: 'A web3 platform driving consumer behavior through innovative technologies',
  },
  {
    logo: './images/nodes/artela.png',
    title: 'Artela',
    link: 'https://artela.network/',
    description: 'Extensible blockchain network enabling developers to build feature rich dApps',
  },
  {
    logo: './images/nodes/masa-fin.png',
    title: 'Masa Finance',
    link: 'https://www.masa.finance/',
    description: 'The mission is to bring the next 1 billion people to Web3',
  }
];
