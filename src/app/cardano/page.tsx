import { Metadata } from 'next';
import Cardano from './cardano';

export const metadata: Metadata = {
  title: 'Cardano Information Page',
  description: `The page provides main information about participation in Cardano Project (cardano.org)`,
};

export default function Page() {
  return <Cardano />;
}
