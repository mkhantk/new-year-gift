import React, { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import giftbox from "./giftbox.svg";
import celebration from "./party-popper-svgrepo-com.svg";
import { Roboto, Playfair_Display } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

function GiftBox() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (opened) {
      audioRef.current.play();
    }
  }, [opened]);

  const handleOpen = () => {
    setOpened(true);
  };
  return (
    <div
      className={`${roboto.className} ${playfair.className} antialiased h-screen min-w-60 md:w-1/2 lg:w-1/3 p-4 flex flex-col justify-center items-center gap-5 `}
    >
      <audio ref={audioRef} hidden>
        <source src="/jingle-bells.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      {!opened && (
        <div
          onClick={handleOpen}
          className="w-40 h-40 flex items-center justify-center rounded-lg cursor-pointer transform hover:scale-105 transition-all animate-bounce"
        >
          {/* <span className="text-5xl font-bold">🎁</span> */}
          <Image src={giftbox} alt="" />
        </div>
      )}

      {opened && (
        <>
          <Confetti />
          <h1 className="text-4xl mt-auto font-bold w-full px-3 animate-fadeIn">
            {/* <Image src={celebration} alt="" className="w-8" /> */}
            <div className="w-full">
              <p className="text-start font-playfair">Merry Christmas</p>
              <div className="text-center font-playfair">&</div>
              <p className="text-end font-playfair">Happy New Year!</p>
            </div>
            {/* <Image src={celebration} alt="" className="w-8" /> */}
          </h1>
          <p className="text-2xl my-2 animate-slideUp font-roboto">
            Here&#39;s my gift to you!
          </p>

          <div className="mt-8 p-6 bg-white text-black rounded-lg shadow-lg animate-slideIn">
            {/* this is for the heartfelt letter */}
            <p className="text-lg italic leading-relaxed">
              &ldquo; May this year bless you with love, health, and endless
              opportunities to grow and shine. Cherish every moment and make it
              beautiful. Forget about the problems, let it all work out by being
              the best version of yourself.&rdquo;
            </p>
            <br />
            <span className="font-bold text-xl my-5">Happy New Year ✨❤️</span>
          </div>
          <footer className="font-mono text-sm mt-auto animate-slideIn">
            made with ❤️ by em
          </footer>
        </>
      )}
    </div>
  );
}

export default GiftBox;
