// pages/template.js
import Head from "next/head";

export default function Template() {
  return (
    <>
      <Head>
        <title>Template Page</title>
        <meta name="description" content="Modern template page built with Next.js + TailwindCSS" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">

        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center px-6 pt-40 pb-28">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Build With <span className="text-purple-400">Style</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            A modern template page built with Next.js and TailwindCSS – fast, responsive, and beautiful.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Start Now
            </button>
            <button className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-6 bg-black/30">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Features</h2>
            <p className="text-slate-300">Everything you need to build modern apps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "⚡", title: "Fast", desc: "Optimized for speed and performance." },
              { icon: "🎨", title: "Beautiful", desc: "Modern design with smooth UI." },
              { icon: "🔒", title: "Secure", desc: "Best practices for reliability & safety." }
            ].map((f, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/50 transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We craft modern digital experiences that blend creativity with technology.
              Our templates are built with performance, design, and scalability in mind.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <form className="grid gap-4 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-purple-400"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t border-white/10 text-center text-slate-400">
          © {new Date().getFullYear()} Template. All rights reserved.
        </footer>
      </div>
    </>
  );
}
