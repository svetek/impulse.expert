import Link from 'next/link';

export default function NodesSection() {
  const blocks = [
    {
      img: 'next.svg',
      title: 'Title 1',
      link: '/link-1',
    },
    {
      img: 'next.svg',
      title: 'Title 2',
      link: '/link-2',
    },
    {
      img: 'next.svg',
      title: 'Title 2',
      link: '/link-2',
    },
    {
      img: 'next.svg',
      title: 'Title 2',
      link: '/link-2',
    },
        {
      img: 'next.svg',
      title: 'Title 2',
      link: '/link-2',
    },
    {
      img: 'next.svg',
      title: 'Title 2',
      link: '/link-2',
    },
    {
      img: 'next.svg',
      title: 'Title 2',
      link: '/link-2',
    },
    {
      img: 'next.svg',
      title: 'Title 2',
      link: '/link-2',
    },
    
    // Add more objects as needed
  ];

  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center gap-4'>
        {blocks.map((block, index) => (
          <div
            key={index}
            className='max-w-sm rounded overflow-hidden shadow-lg'
          >
            <img className='w-full' src={block.img} alt={block.title} />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{block.title}</div>
              <Link href={block.link}>
                <p className='text-blue-700 hover:text-blue-900'>Learn More</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
