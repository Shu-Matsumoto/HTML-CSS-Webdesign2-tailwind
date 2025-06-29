import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Image
          src="/images/cover-home-s.webp"
          alt="home cover background"
          fill
          className="object-cover z-[-1]"
        />
        <div>
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
          <h2 className="heading-large mt-10">We'll Make Your Day</h2>
        </div>
        <section className="main-content">
          <h3 className="main-content-header heading-large">About Cafe</h3>
          <p className="mb-[10rem] text-[1rem]">
            WCB
            CAFEは無添加の源泉食材をおしゃれな店内が魅力のカフェです。心と体に優しい、それでいて飽きのこない空間をご用意しています。
            素材の本来の美味しさを引き出したメニューを楽しみながら、癒しの時間をお過ごしください。
          </p>
          <div className="flex justify-center">
            <button className="btn">
              <a href="/menu">メニューを見る</a>
            </button>
          </div>
        </section>
      </div>
      <div>
        <Image
          src="/images/footer-s.webp"
          alt="footer background"
          fill
          className="object-cover z-[-1]"
        />
        <footer className="text-center mt-10">
          <h3 className="heading-large info">Information</h3>
          <div className="flex justify-center mt-4">
            <table className="mx-auto flex flex-col items-start">
              <tr className="flex justify-between border-b w-full">
                <th className="py-2 w-32 text-left">住所</th>
                <td className="py-2">東京都港区六本木0-0-〇〇〇</td>
              </tr>
              <tr className="flex justify-between border-b w-full">
                <th className="py-2 w-32 text-left">電話</th>
                <td className="py-2">03-1111-XXXX</td>
              </tr>
              <tr className="flex justify-between border-b w-full">
                <th className="py-2 w-32 text-left">営業時間</th>
                <td className="py-2">10:00 - 20:00</td>
              </tr>
              <tr className="flex justify-between w-full">
                <th className="py-2 w-32 text-left">定休日</th>
                <td className="py-2">水曜</td>
              </tr>
            </table>
          </div>
        </footer>
      </div>
    </div>
  );
}
