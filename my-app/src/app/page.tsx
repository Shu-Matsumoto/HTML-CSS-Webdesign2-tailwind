import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/cover-home-s.webp"
        alt="Space background"
        fill
        className="object-cover z-[-1]"
      />
      <header className="">
        <div className="flex justify-center p-4">
          <a href="/" className="text-2xl font-bold">
            <Image
              src="./images/logo.svg"
              alt="WCBカフェホーム"
              width={210}
              height={210}
              className="inline-block mr-2"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/news" className="text-lg">
                  News
                </a>
              </li>
              <li>
                <a href="/menu" className="text-lg">
                  Menu
                </a>
              </li>
              <li>
                <a href="/contact" className="text-lg">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <h2 className="text-4xl font-[philosopher]">We'll Make Your Day</h2>
      </div>
    </div>
  );
}
