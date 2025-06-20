'use client';

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black text-white text-center md:text-left rounded-t-2xl mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-2 font-bold text-lime-400 text-xl">DEVLOP.ME</div>
        </div>
        <div>
          <div className="font-bold mb-2">Say hello</div>
          <div>HELLO@DEVLOP.ME.COM<br />MAHBUBUL@ME.COM</div>
          <div className="mt-2">+784549 4981 00<br />+8845 0109 211</div>
        </div>
        <div>
          <div className="font-bold mb-2">Menu</div>
          <div>HOME<br />ABOUT<br />PORTFOLIO<br />BLOG</div>
        </div>
        <div>
          <div className="font-bold mb-2">Social</div>
          <div>TWITTER<br />INSTAGRAM<br />FACEBOOK<br />DRIBBBLE</div>
        </div>
      </div>
      <div className="mt-8 text-xs text-gray-400">© devlop.me 2022 &nbsp; &nbsp; PRIVACY – TERMS</div>
    </footer>
  );
} 