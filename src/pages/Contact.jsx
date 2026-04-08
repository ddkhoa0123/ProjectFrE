import { useState } from 'react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'feedback',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save feedback to localStorage
    const feedbacks = JSON.parse(localStorage.getItem('aura_feedbacks') || '[]');
    feedbacks.push({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString()
    });
    localStorage.setItem('aura_feedbacks', JSON.stringify(feedbacks));
    
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: 'feedback', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="font-headline text-4xl font-bold text-[#33210d] mb-2 text-center">Contact Us</h1>
      <p className="text-center text-[#33210d]/70 mb-10">We'd love to hear from you! Send us your feedback or request support.</p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-[#fbfbe2] p-6 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#33210d] mb-1">Call Us</h3>
            <p className="text-sm text-[#33210d]/70">+1 (555) 123-4567</p>
            <p className="text-sm text-[#33210d]/70">Mon-Fri, 8am-6pm</p>
          </div>

          <div className="bg-[#fbfbe2] p-6 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#33210d] mb-1">Email Us</h3>
            <p className="text-sm text-[#33210d]/70">support@aurabrew.com</p>
            <p className="text-sm text-[#33210d]/70">hello@aurabrew.com</p>
          </div>
        </div>

        <div className="md:col-span-2 bg-[#fbfbe2] p-8 rounded-3xl shadow-sm">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#33210d]">Message Sent!</h3>
              <p className="text-[#33210d]/70">Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-[#33210d]">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-[#33210d]">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-primary outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-[#33210d]">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="feedback">Feedback</option>
                  <option value="support">Support Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-[#33210d]">Message</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-none bg-white focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
