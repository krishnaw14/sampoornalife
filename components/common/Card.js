import Link from 'next/link';
import Image from 'next/image';

const Card = ({ imageUrl, title, slug }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <a className="p-4 bg-[#d7db8e] shadow-lg rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
        <Image className="object-cover w-full h-72 rounded-t-lg" width={400} height={400} src={imageUrl} alt={title} />
          <h2 className="lg:text-xl sm:text-sm font-medium text-gray-800 p-4">{title}</h2>
      </a>
    </Link>
  );
};

export default Card;
