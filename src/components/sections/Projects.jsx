import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Portfolio */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
              <p className="text-gray-400 mb-4">
                Developed a modern, responsive personal portfolio website using React and TailwindCSS featuring sections like projects, skills, about, and
contact.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express", "React", "Node.js", "OpenAI API", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {/* <a
                  href="https://youtu.be/7ixDDpIWn1k?si=akdfBxceq-16y3-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a> */}
              </div>
            </div>

            {/* Other projects remain unchanged */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Indoor Navigation Using Augmented Reality</h3>
              <p className="text-gray-400 mb-4">
                Developed an AR-based indoor navigation system for real-time pathfinding in complex indoor spaces.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {/* <a
                  href="https://youtu.be/7ixDDpIWn1k?si=akdfBxceq-16y3-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a> */}
              </div>
            </div>
            {/* AI Analytics Dashboard */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Lane Detection and Assistance System</h3>
              <p className="text-gray-400 mb-4">
                Developed a Lane Detection System using Python and OpenCV to detect lane markings in real-time from images and video streams.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {/* <a
                  href="https://youtu.be/7ixDDpIWn1k?si=akdfBxceq-16y3-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a> */}
              </div>
            </div>
            {/* E-Commerce Web App */}
            {/* Real-Time Chat App */}
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
