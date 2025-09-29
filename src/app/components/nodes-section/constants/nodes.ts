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
  staking?: {
    logo: string;
    title: string;
    href: string;
    height?: number;
    width?: number;
  }[];
};

export const projects: Array<NodeCard> = [
  {
    logo: './images/nodes/lava.svg',
    title: 'Lava',
    pageLink: '/lava',
    description:
      'Pairs Providers with DApps for scalable, private and uncensored access to Web3',
    staking: [
      {
        logo: './images/staking/keplr.svg',
        title: 'Keplr',
        href: 'https://wallet.keplr.app/chains/lava?modal=staking&chain=lava-mainnet-1&validator_address=lava%40valoper1486e3846ejg452ryve0l7sspmumzkv4htsku6c&step_id=2',
      },
      {
        logo: './images/staking/leap.png',
        title: 'Leap',
        href: 'https://cosmos.leapwallet.io/transact/stake/plain?chain=lava&validator=lava@valoper1486e3846ejg452ryve0l7sspmumzkv4htsku6c',
      },
      {
        logo: './images/staking/staking-rewards.png',
        title: 'StakingRewards',
        href: 'https://www.stakingrewards.com/stake-app?input=lava&type=dual-staking&providers=impulse;0&secondary-providers=impulse;0',
      },
    ],
  },
  {
    logo: './images/nodes/cardano_logo.png',
    title: 'Cardano',
    pageLink: '/cardano',
    description: 'One of the biggest cryptocurrencies by market cap',
    staking: [
      {
        logo: '/images/staking/cardanoscan.png',
        title: 'Cardano',
        href: 'https://cardanoscan.io/pool/06be20d0da5810fae2f0376dc0a01a31d459c0ca6da8e3ddf58a67d9',
      },
    ],
  },
  {
    logo: './images/nodes/hedera_logo.png',
    title: 'Hedera',
    link: 'https://hedera.com',
    description: 'The Trust Layer of the Digital Economy',
  },
  {
    logo: './images/nodes/union_logo.png',
    title: 'Union',
    link: 'https://union.build',
    description: 'The next generation of aggregation, interoperability, and chain abstraction',
  },
  {
    logo: './images/nodes/nexus_logo.png',
    title: 'NEXUS',
    link: 'https://nexus.xyz',
    description: 'Building a world supercomputer to enable the AI economy',
    invert: true,
  },
  {
    logo: './images/nodes/aro_logo.png',
    title: 'ARO',
    link: 'https://aro.network',
    description: 'The Decentralized Edge Cloud for the AI Era',
  },
  {
    logo: './images/nodes/axelar.jpg',
    title: 'Axelar',
    description: 'Delivers secure cross-chain communication for Web3',
  },
  {
    logo: './images/nodes/pathfinder.png',
    title: 'Starknet Pathfinder',
    link: 'https://www.starknet.io/en',
    description:
      'Starknet is the secure scaling technology bringing Ethereum’s benefits to the world',
  },
  {
    logo: './images/nodes/massa.jpg',
    title: 'Massa',
    link: 'https://massa.net/',
    description:
      'Truly decentralized blockchain controlled by thousands of people',
  },
  {
    logo: './images/nodes/near.svg',
    title: 'Near',
    link: 'https://near.org/',
    description: 'Blockchain Operating System for an  Open Web',
  },
  {
    logo: './images/nodes/islamicCoin.png',
    title: 'Islamic Coin',
    link: 'https://islamiccoin.net',
    description: 'Community-run network, which has a finite total supply',
    staking: [
      {
        logo: '/images/staking/haqq.svg',
        title: 'HAQQ',
        href: 'https://shell.haqq.network/staking/validator/haqqvaloper1zenrae0nqd0mclna6an3059z66tlrzar5xmkzp',
      },
    ],
  },
];

export const testnetNodes: Array<NodeCard> = [
  {
    logo: './images/nodes/lava.svg',
    title: 'Lava',
    pageLink: '/lava',
    description:
      'Pairs Providers with DApps for scalable, private and uncensored access to Web3',
    explorer:
      'https://lava.explorers.guru/validator/lava@valoper1q7jyftyahuf66jefc36254rldk6je9xkaaseh4',
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
    logo: './images/nodes/mantra.svg',
    title: 'Mantra',
    link: 'https://www.mantraomniverse.com/',
    explorer:
      'https://explorer.testnet.mantrachain.io/mantrachain/validators/mantravaloper1srul3v67t2szqc89me77e0xeagzxua2xzacpv9',
    description:
      'Vertically-integrated and regulatory compliant blockchain ecosystem',
  },
  {
    logo: './images/nodes/evmos.png',
    title: 'Evmos',
    link: 'https://evmos.org',
    description:
      'A one-stop, highly personalized access point to discover unique Web3 apps built on Evmos',
  },
  {
    logo: './images/nodes/artela.png',
    title: 'Artela',
    link: 'https://artela.network/',
    description:
      'Extensible blockchain network enabling developers to build feature rich dApps',
  },
  {
    logo: './images/nodes/juneo.svg',
    title: 'JUNEO',
    link: 'https://juneo.com/',
    description:
      'The platform for blockchain innovation through unlimited blockchain creation',
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
    logo: './images/nodes/near.svg',
    title: 'Near',
    link: 'https://near.org/',
    description: 'Blockchain Operating System for an  Open Web',
  },
  {
    logo: './images/nodes/masa-fin.png',
    title: 'Masa Finance',
    link: 'https://www.masa.finance/',
    description: 'The mission is to bring the next 1 billion people to Web3',
  },
];
