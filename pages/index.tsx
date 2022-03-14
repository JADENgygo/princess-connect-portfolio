import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>プリコネツール</title>
        <meta name="description" content="プリコネRのツール一覧" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JADENgygo" />
        <meta
          property="og:url"
          content="https://priconne-portfolio.vercel.app"
        />
        <meta property="og:title" content="プリコネツール" />
        <meta property="og:description" content="プリコネRのツール一覧" />
        <meta
          property="og:image"
          content="https://priconne-portfolio.vercel.app/img/peko.png"
        />
        <link rel="icon" href="/img/peko.png" />
      </Head>
      <div className="container">
        <div className="row text-center mt-1 gy-5">
          <div className="col-6">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <div>
                <a href="https://priconne-stickers.vercel.app">
                  プリコネスタンプ
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Image
              src={"/img/priconne-stickers.jpg"}
              width={1214}
              height={468}
              alt={"stickers"}
            />
          </div>
          <div className="col-6">
            <Image
              src={"/img/priconne-good.jpg"}
              width={706}
              height={426}
              alt={"like_counter"}
            />
          </div>
          <div className="col-6">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <div>
                <a href="https://priconne-good.vercel.app">プリコネグッド</a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <a href="https://priconne-profile.vercel.app">プリコネプロフ</a>
            </div>
          </div>
          <div className="col-6">
            <Image
              src={"/img/priconne-profile.jpg"}
              width={1920}
              height={1080}
              alt={"clan_profile_card_generator"}
            />
          </div>
          <div className="col-6">
            <Image
              src={"/img/loot_box_announcement_image_generator.jpg"}
              width={900}
              height={500}
              alt={"loot_box_announcement_image_generator"}
            />
          </div>
          <div className="col-6">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <div>
                <a href="https://princess-connect-loot-box-announcement-image-generator.netlify.app">
                  ガチャ告知画像ジェネレーター
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100%" }}
            >
              <div>
                <a href="https://princess-connect-clan-matcher.netlify.app">
                  ぷりこねまっち
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <Image
              src={"/img/priconne_match.jpg"}
              width={1190}
              height={644}
              alt={"priconne_match"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;