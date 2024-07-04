import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 md:px-36 sm:px-8 px-4 gap-16 header bg-white nbm:bg-transparent">
      {/* Logo on the left */}
      <Link legacyBehavior href="#">
        <a>
          <Image src="/assets/images/logo.png" alt="Clarifion" width={192} height={36} />
        </a>
      </Link>

      {/* Images on the right */}
      <div className="flex items-center space-x-4">
        <Link legacyBehavior href="#">
          <a>
            <Image src="/assets/images/mcafee.png" alt="McAfee Secure" width={88} height={32} />
          </a>
        </Link>
        <Link legacyBehavior href="#">
          <a>
            <Image src="/assets/images/norton.png" alt="Norton" width={82} height={32} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;