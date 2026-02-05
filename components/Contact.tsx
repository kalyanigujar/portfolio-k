
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Github, Linkedin, Twitter, Youtube, Instagram, User, MessageSquare, Tag, CheckCircle2, Loader2 } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, content, link }: any) => {
  const CardContent = (
    <div className="glass p-6 rounded-3xl text-center flex flex-col items-center group hover:border-yellow-500/50 transition-all cursor-pointer h-full">
      <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-yellow-500 mb-4 group-hover:bg-yellow-500 group-hover:text-black transition-all">
        <Icon size={20} />
      </div>
      <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-sm font-bold text-white group-hover:text-yellow-500 transition-colors break-all">{content}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return (
    <div className="h-full">
      {CardContent}
    </div>
  );
};

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulating a backend API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 pt-32 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-4">
            Available for Hire
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Whether you have a question or want to discuss a new project, I'm just a message away.
            I typically respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <ContactCard 
            icon={MapPin} 
            title="Location" 
            content="Nagpur, India" 
          />
          <ContactCard 
            icon={Phone} 
            title="Call Me" 
            content="+91 9730839467" 
            link="tel:+919730839467"
          />
          <ContactCard 
            icon={Mail} 
            title="Email" 
            content="kalyanigujar532@gmail.com" 
            link="mailto:kalyanigujar532@gmail.com"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-[40px] border-yellow-500/10 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            {status === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-yellow-500/20">
                  <CheckCircle2 size={40} className="text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-zinc-400 mb-8">Thank you for reaching out, Kalyani will get back to you soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 glass text-yellow-500 font-bold rounded-full hover:bg-zinc-900 transition-all border border-yellow-500/20"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-yellow-500 transition-colors">
                        <User size={18} />
                      </div>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/50 transition-all placeholder:text-zinc-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-yellow-500 transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/50 transition-all placeholder:text-zinc-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Subject</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-yellow-500 transition-colors">
                      <Tag size={18} />
                    </div>
                    <input 
                      required
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/50 transition-all placeholder:text-zinc-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                  <div className="relative group">
                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-zinc-600 group-focus-within:text-yellow-500 transition-colors">
                      <MessageSquare size={18} />
                    </div>
                    <textarea 
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Kalyani, I'd like to talk about..."
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500/50 transition-all placeholder:text-zinc-700 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-yellow-500 text-black font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-yellow-500/10"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="mt-16 text-center">
            <h5 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-8">Connect Via Professional Channels</h5>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://linkedin.com/in/kalyani-gujar" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 glass rounded-2xl text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-all group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/kalyanigujar" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 glass rounded-2xl text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-all group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">GitHub</span>
              </a>
              <a 
                href="https://www.instagram.com/kalyanigujar2003/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 glass rounded-2xl text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/50 transition-all group"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
