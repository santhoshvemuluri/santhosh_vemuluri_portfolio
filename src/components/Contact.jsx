import React from 'react'
import { Phone, Mail, MapPin, Share2 } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-display font-bold">GET IN <span className="text-cyan-400">TOUCH</span></h2>
        <p className="text-slate-300">Let's Work Together</p>
        <div className="mt-8 grid sm:grid-cols-4 gap-4">
          <div className="card flex flex-col items-start gap-2">
            <Phone />
            <div className="font-semibold">Phone</div>
            <div className="text-sm">+91 9182446518</div>
          </div>
          <div className="card flex flex-col items-start gap-2">
            <Mail />
            <div className="font-semibold">Email</div>
            <div className="text-sm">santhoshvemuluri9@gmail.com</div>
          </div>
          <div className="card flex flex-col items-start gap-2">
            <MapPin />
            <div className="font-semibold">Address</div>
            <div className="text-sm">Kakinada, India 533006</div>
          </div>
          <div className="card flex flex-col items-start gap-2">
            <Share2 />
            <div className="font-semibold">Social</div>
            <div className="text-sm flex gap-2"><a href="https://linkedin.com/in/santhosh-vemuluri-17413a372" target="_blank" rel="noreferrer">LinkedIn</a> • <a href="https://github.com/santhoshvemuluri" target="_blank" rel="noreferrer">GitHub</a></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://drive.google.com/file/d/1qK2K4hrnhtqysoHf36QkwZ4Fo1HFfoBK/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 rounded-md bg-cyanAccent text-black font-bold">DOWNLOAD RESUME</a>
        </div>
      </div>
    </section>
  )
}
