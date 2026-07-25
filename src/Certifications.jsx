import React from 'react'

export default function Certifications(){
  const folderUrl = 'https://drive.google.com/drive/folders/1tp59AIdn8I03n1Ww4630Pa3BvccG6-7j?usp=sharing'
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2>Certifications</h2>
        <p className="muted">All certifications (except resume) are available in this folder:</p>
        <p><a className="btn outline" href={folderUrl} target="_blank" rel="noreferrer">Open certifications folder</a></p>
        <p className="muted small">If you want, I can list individual certificates here — grant public access or provide direct links.</p>
      </div>
    </section>
  )
}
