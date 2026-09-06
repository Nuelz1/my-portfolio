export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Dev Emmanuel</h1>
        <div className="flex gap-8">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[70vh] max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">
            React/Next.js Frontend Developer
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Building high-performance, SEO-optimized web applications. 
            Specializing in React, Next.js, and modern web technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-blue-500 hover:bg-blue-500 px-8 py-3 rounded-lg font-semibold transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-800/50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            I'm a frontend developer with experience building responsive, performant web applications 
            using React and Next.js. I focus on clean code, SEO optimization, and delivering excellent 
            user experiences.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Currently working on building innovative digital products and contributing to the web 
            development community.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
            <h4 className="text-xl font-bold mb-2">DevScope</h4>
            <p className="text-slate-300 mb-4">
              GitHub intelligence dashboard built with Next.js and React. 
              Features real-time data visualization and performance optimization.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition">
            <h4 className="text-xl font-bold mb-2">FOKiiS</h4>
            <p className="text-slate-300 mb-4">
              SaaS platform for photographers. Features booking management, 
              portfolio showcase, and responsive design.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-800/50 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-slate-300 mb-8">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <a 
            href="mailto:oshoemmanuel3@gmail.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-6 text-center text-slate-400">
        <p>&copy; 2026 Dev Emmanuel. All rights reserved.</p>
        <div className="mt-4 flex gap-6 justify-center">
          <a href="https://github.com/Nuelz1" target="_blank" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/osho-emmanuel" target="_blank" className="hover:text-white">LinkedIn</a>
          <a href="https://twitter.com/nuelz1007" target="_blank" className="hover:text-white">Twitter</a>
        </div>
      </footer>
    </main>
  );
}