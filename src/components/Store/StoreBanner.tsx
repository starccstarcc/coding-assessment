import Image from 'next/image';
import StroeBackground from '../../../public/images/store-banner-image.webp';

export const StoreBanner = () => {
  return (
    <div className="relative">
      <Image src={StroeBackground} alt="create" />
      <div className="absolute top-5 right-5 text-white font-bold text-2xl italic">
        Create Inc, Store
      </div>
    </div>
  );
};
