import './nodes-section.css';
import Link from 'next/link';
import { NodeCard, mainnetNodes, testnetNodes } from './constants/nodes';

export default function NodesSection() {
  return (
    <div className='pb-8 pt-8 bg-blue-50 '>
      {getNodesContainer('Our Mainnets', mainnetNodes)}
      {getNodesContainer('Our Testnets', testnetNodes)}
    </div>
  );
}

const getNodesContainer = (title: string, nodes: NodeCard[]) => {
  return (
    <div className='container max-w-[100%] flex flex-col w-full pb-8 pt-8'>
      <h3 className='text-center text-3xl font-semibold py-3 uppercase text-slate-600	'>
        {title}
      </h3>
      <div className='flex justify-center flex-wrap w-4/6'>
        {nodes.map((block, index) => (
          <div
            key={index}
            className='shadow-lg hover:shadow-2xl rounded-xl bg-white p-5 m-3 mb-3 flex flex-col items-center text-center w-64 h-auto'
          >
            <Link href={block.link} target='_blank'>
              <img
                className='w-full rounded-full'
                src={block.logo}
                alt={block.title}
              />
              <p className='mt-4 font-medium text-lg text-gray-900'>
                {block.title}
              </p>
              <p className='mt-2 text-sm text-gray-600'>{block.description}</p>
            </Link>
            {block.explorer && (
              <Link
                className='mt-4 inline-block bg-grey-50 border border-gray-400 text-slate-600 py-1 px-3 rounded'
                href={block.explorer}
                target='_blank'
              >
                Explorer
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
