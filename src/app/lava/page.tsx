import { Metadata } from 'next';
import Lava from './lava';

export const metadata: Metadata = {
  title: 'Lava Information Page',
  description: `The page provides main information about participation in Lava Project (lavanext.xyz)`,
};

export default function Page() {
  return (
    <>
      <Lava />
    </>
  );
}
