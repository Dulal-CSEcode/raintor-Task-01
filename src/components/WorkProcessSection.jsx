'use client';

import Button from "./Button";

export default function WorkProcessSection() {
  const steps = [
    { title: "Discovery", desc: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.", link: true },
    { title: "Strategy", desc: "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.", highlight: true, link: true },
    { title: "Design", desc: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or app will be designed, reviewed, and given your stamp of approval.", link: true },
    { title: "Build", desc: "Whether you've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.", link: true },
  ];
  return (
    <section className="py-16 px-4 bg-black dark:bg-gray-900 text-white rounded-2xl mx-2 md:mx-8 mt-8 relative overflow-hidden">
      <div className="flex items-center mb-8">
        <Button className="border border-white text-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">Work Process</Button>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">My Work Process</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`relative p-6 rounded-lg shadow flex flex-col gap-2 transition-transform duration-300 focus-within:scale-105 hover:scale-105 ${step.highlight ? 'bg-lime-200 text-black dark:bg-lime-400' : 'bg-black/80 dark:bg-white/10 text-white dark:text-white'}`}
            tabIndex={0}
            aria-label={step.title}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              {step.link && <a href="#" className="text-xs underline ml-2">Read More</a>}
            </div>
            <p className="text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 