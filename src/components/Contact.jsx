import React, { useState } from 'react';

function Contact({ data }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e, provider) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Validate form before opening link
    if (!name || !email || !message) {
      alert("Please fill out all fields before initializing connection.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nReturn Address: ${email}\nName: ${name}`);
    
    let url = '';
    if (provider === 'gmail') {
      url = `https://mail.google.com/mail/?view=cm&fs=1&to=maheshspt25@gmail.com&su=${subject}&body=${body}`;
    } else if (provider === 'outlook') {
      url = `https://outlook.live.com/mail/0/deeplink/compose?to=maheshspt25@gmail.com&subject=${subject}&body=${body}`;
    }
    
    window.open(url, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative" id="contact">
        <div className="absolute inset-0 primary-gradient-glow opacity-5 pointer-events-none"></div>
        <div className="grid grid-cols-12 gap-gutter relative z-10">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <span className="font-code-label text-code-label text-system-red uppercase mb-4 block">Connection Port</span>
            <h2 className="font-display-xl text-headline-lg md:text-display-xl text-on-surface mb-8">
              Let's build the <br/><span className="text-system-red">infrastructure.</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-surface-container border border-outline-variant flex items-center justify-center group-hover:border-system-red transition-all">
                  <span className="material-symbols-outlined text-system-red">mail</span>
                </div>
                <div>
                  <p className="font-code-label text-xs text-on-surface-variant uppercase">Email</p>
                  <p className="font-body-lg text-on-surface">{data.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-surface-container border border-outline-variant flex items-center justify-center group-hover:border-system-red transition-all">
                  <span className="material-symbols-outlined text-system-red">location_on</span>
                </div>
                <div>
                  <p className="font-code-label text-xs text-on-surface-variant uppercase">Base</p>
                  <p className="font-body-lg text-on-surface">{data.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-7 bg-surface-container p-8 md:p-12 border border-outline-variant mt-10 md:mt-0">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-code-label text-xs text-on-surface-variant uppercase tracking-widest">Identify Source</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border-0 border-b border-outline-variant focus:ring-0 focus:border-system-red text-on-surface py-3 transition-all placeholder:text-outline-variant/50 outline-none" 
                    placeholder="Full Name" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-code-label text-xs text-on-surface-variant uppercase tracking-widest">Return Address</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border-0 border-b border-outline-variant focus:ring-0 focus:border-system-red text-on-surface py-3 transition-all placeholder:text-outline-variant/50 outline-none" 
                    placeholder="email@server.com" 
                    type="email" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-code-label text-xs text-on-surface-variant uppercase tracking-widest">Project Payload</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-0 border-b border-outline-variant focus:ring-0 focus:border-system-red text-on-surface py-3 transition-all resize-none placeholder:text-outline-variant/50 outline-none" 
                  placeholder="How can we collaborate on your next system?" 
                  rows="4"
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={(e) => handleSubmit(e, 'gmail')}
                  className="flex-1 bg-system-red text-white px-8 py-4 font-code-label text-code-label uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all flex justify-center items-center gap-2" 
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">mail</span>
                  Via Gmail
                </button>
                <button 
                  onClick={(e) => handleSubmit(e, 'outlook')}
                  className="flex-1 bg-[#0078D4] text-white px-8 py-4 font-code-label text-code-label uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(0,120,212,0.3)] transition-all flex justify-center items-center gap-2" 
                  type="button"
                >
                  <span className="material-symbols-outlined text-sm">mark_email_read</span>
                  Via Outlook
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-base gap-gutter">
        <div className="font-headline-md text-headline-md text-primary uppercase">{data.name}</div>
        <p className="font-code-label text-code-label text-on-surface-variant uppercase opacity-80">© {new Date().getFullYear()} {data.name}. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a className="font-code-label text-code-label text-on-surface-variant hover:text-white transition-colors opacity-80 hover:opacity-100" href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="font-code-label text-code-label text-on-surface-variant hover:text-white transition-colors opacity-80 hover:opacity-100" href={data.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
