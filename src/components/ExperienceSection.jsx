'use client';

export default function ExperienceSection() {
  return (
    <section className="relative py-20 px-4 md:px-16 text-center overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute -top-24 left-0 w-full h-[300px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lime-200 via-lime-100 to-transparent opacity-80 pointer-events-none z-0" />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          I&apos;ve been <span className="bg-black text-white px-3 py-1 rounded-md inline-block">Developing</span> <br />
          Websites since <span className="bg-black text-white px-3 py-1 rounded-md inline-block">2013</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300 text-base md:text-lg">
          We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* Placeholder logos */}
          <div className="bg-white rounded-full shadow px-6 py-2 text-black font-bold">awwwards.</div>
          <div className="bg-white rounded-full shadow px-6 py-2 text-black font-bold">facebook</div>
          <div className="bg-white rounded-full shadow px-6 py-2 text-black font-bold">CSSWINNER</div>
          <div className="bg-white rounded-full shadow px-6 py-2 text-black font-bold">thoughtworks</div>
          <div className="bg-white rounded-full shadow px-6 py-2 text-black font-bold">AUTODESK</div>
        </div>
      </div>
    </section>
  );
} 