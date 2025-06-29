import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="cover-home">
        <header className="page-header wrapper">
          <a href="/" className="text-2xl font-bold text-center py-4">
            <Image
              src="./images/logo.svg"
              alt="WCBカフェホーム"
              width={210}
              height={210}
              className="inline-block mr-2"
            />
          </a>
          <nav className="flex justify-center">
            <ul className="flex space-x-4">
              <li>
                <a href="/news" className="main-nav">
                  News
                </a>
              </li>
              <li>
                <a href="/menu" className="main-nav">
                  Menu
                </a>
              </li>
              <li>
                <a href="/contact" className="main-nav">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <h2 className="page-title mt-10">We'll Make Your Day</h2>
      </div>
      <section className="main-content">
        <h3 className="main-content-header heading-large">About Cafe</h3>
        <p className="mb-[3rem]">
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
      <div className="cover-footer">
        <footer className="text-center">
          <h3 className="heading-large info">Information</h3>
          <div className="flex justify-center mt-4">
            <table className="mx-auto flex flex-col items-start">
              <tbody>
                <tr className="flex border-b w-full text-left">
                  <th className="py-2 w-32">住所</th>
                  <td className="py-2 w-full">東京都港区六本木0-0-〇〇〇</td>
                </tr>
                <tr className="flex border-b w-full text-left">
                  <th className="py-2 w-32">電話</th>
                  <td className="py-2 w-full">03-1111-XXXX</td>
                </tr>
                <tr className="flex border-b w-full text-left">
                  <th className="py-2 w-32">営業時間</th>
                  <td className="py-2 w-full">10:00 - 20:00</td>
                </tr>
                <tr className="flex border-b w-full text-left">
                  <th className="py-2 w-32">定休日</th>
                  <td className="py-2 w-full">水曜</td>
                </tr>
              </tbody>
            </table>
          </div>
        </footer>
      </div>
    </div>
  );
}
