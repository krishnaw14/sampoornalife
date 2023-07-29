import Link from 'next/link';
import Image from 'next/image';

const Card = ({ imageUrl, title, slug }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <a className="block w-full max-w-xs mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
        <Image className="object-cover w-full h-72 rounded-t-lg" width={400} height={400} src={imageUrl} alt={title} />
        <div className="p-4">
          <h2 className="text-xl font-medium text-gray-800">{title}</h2>
        </div>
      </a>
    </Link>
  );
};

export default Card;
