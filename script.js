// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const href=this.getAttribute('href')
    if(href.length>1){
      e.preventDefault();document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'})
      history.replaceState(null,'',href)
    }
  })
})

// highlight nav when scrolling
const navLinks=document.querySelectorAll('.main-nav a')
const sections=[...document.querySelectorAll('section')]
function onScroll(){
  const y=window.scrollY
  let current=''
  sections.forEach(s=>{const top=s.offsetTop-160; if(y>=top) current=s.id})
  navLinks.forEach(a=>{a.classList.toggle('active', a.getAttribute('href')==('#'+current))})
}
window.addEventListener('scroll',onScroll)
onScroll()
