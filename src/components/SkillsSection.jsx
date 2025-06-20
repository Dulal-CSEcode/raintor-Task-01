'use client';

import Card from "./Card";
import Button from "./Button";

export default function SkillsSection() {
  return (
    <section className="py-16 px-4 bg-black dark:bg-gray-900 text-white rounded-2xl mx-2 md:mx-8 mt-8 relative overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <Button className="border border-white text-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">Why Choose me</Button>
        <p className="hidden md:block text-right text-gray-300 max-w-md">Building the worlds best marketing websites. Your trusted partner for strategy, design, and dev.</p>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">My Extensive<br />List of Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card title="HTML & CSS" icon="🌐">
          Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
        </Card>
        <Card title="Javascript" icon="⚛️">
          Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
        </Card>
        <Card title="Webflow" icon="🛠️">
          Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis
        </Card>
      </div>
    </section>
  );
} 