
import React from 'react';
import { Terminal, Code, Database, Palette, CheckCircle2, BarChart3, Search, ShieldCheck, User } from 'lucide-react';

const SkillBar = ({ name, percent }: { name: string; percent: number }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-zinc-300 font-medium text-sm uppercase tracking-wider">{name}</span>
      <span className="text-yellow-500 font-bold text-sm">{percent}%</span>
    </div>
    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
      <div 
        className="h-full bg-yellow-500 rounded-full transition-all duration-1000" 
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-24 pt-32 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            About <span className="text-yellow-500">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            I am a results-driven <strong>Full Stack Developer (MERN)</strong> and <strong>Software Quality Assurance professional</strong>. 
            Currently at <strong>Axiom Tech Guru LLC.</strong>, I bridge the gap between complex development and high-quality user experiences. 
            My approach combines technical rigor with a keen eye for detail, ensuring every product is scalable, performant, and bug-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Profile Card */}
          <div className="glass p-8 rounded-[40px] relative group overflow-hidden border border-zinc-800/50">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
               <ShieldCheck size={160} className="text-yellow-500" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10 relative z-10">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-yellow-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                {/* Professional Headshot */}
                <div className="w-56 h-72 rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl transition-all duration-500 group-hover:border-yellow-500/50">
                  <img 
                    src="components\src\assets\profile.jpg"
                    alt="Kalyani Gujar - Professional Developer" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 flex-1 text-center md:text-left">
                <div>
                  <h3 className="text-3xl font-black text-white mb-1 tracking-tight uppercase">Kalyani Gujar</h3>
                  <p className="text-yellow-500 font-bold uppercase tracking-widest text-xs">MERN Stack Developer & QA Specialist</p>
                </div>
                <div className="space-y-3 text-sm text-zinc-400 font-light">
                  <p className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 size={16} className="text-yellow-500" /> 
                    Full Stack Excellence (MERN)
                  </p>
                  <p className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 size={16} className="text-yellow-500" /> 
                    QA Testing (JIRA & HP ALM)
                  </p>
                  <p className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle2 size={16} className="text-yellow-500" /> 
                    Based in Nagpur, India
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {[
                { icon: ShieldCheck, label: "JIRA / ALM" },
                { icon: Code, label: "React / Node" },
                { icon: Database, label: "MongoDB" },
                { icon: BarChart3, label: "Power BI" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-zinc-900/60 rounded-2xl text-center border border-zinc-800/50 hover:border-yellow-500/30 transition-all">
                  <item.icon className="mx-auto text-yellow-500 mb-2" size={20} />
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                <Terminal size={20} className="text-yellow-500" />
              </div>
              Technical Arsenal
            </h3>
            
            <SkillBar name="Frontend (React.js, Bootstrap, HTML5/CSS3)" percent={95} />
            <SkillBar name="Backend (Node.js, Express, RESTful APIs)" percent={90} />
            <SkillBar name="Quality Assurance (JIRA, HP ALM, Regression)" percent={98} />
            <SkillBar name="Databases (MongoDB, MySQL)" percent={85} />
            <SkillBar name="Data Tools (Power BI, Tableau)" percent={80} />
            <SkillBar name="UI Tools (Figma, Git, Postman)" percent={88} />
          </div>
        </div>

        {/* Professional Summary/Bio */}
        <div className="mt-24 glass p-10 rounded-[40px] border border-zinc-900/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code size={20} className="text-yellow-500" /> Development
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                I build responsive, high-performance web applications using the MERN stack. My focus is on clean architecture, optimized database queries, and secure user authentication to deliver seamless digital experiences.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-yellow-500" /> Quality First
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Quality is at the heart of my workflow. With expertise in Agile, SDLC, and STLC, I ensure every feature is rigorously tested through manual and automated processes using JIRA and HP ALM.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BarChart3 size={20} className="text-yellow-500" /> Analytical Mind
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                I leverage Data Visualization tools like Power BI and Tableau to transform raw data into meaningful insights, helping businesses make data-driven decisions while maintaining a strong UI/UX perspective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
