// ===== WHATSAPP CONFIG =====
// Replace this number with your real WhatsApp number (include country code, no + or spaces)
const WHATSAPP_NUMBER = '919167185555';
const WA_MESSAGE = encodeURIComponent('Hi, I want to start my fitness journey with SR Fitness!');
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`;

// ===== DATA =====
const galleryData = [
  // Individual weight loss
  { name: 'Geeta Gadade',       type: 'loss', badge: 'Weight Loss', before: '86 kg', after: '74 kg', kg: '-12 kg',   img1: 'Geeta Gadade Before- 86kg.jpeg',                                              img2: 'Greta Gadade After- 74kg.jpeg' },
  { name: 'Dipak Khandekar',    type: 'loss', badge: 'Weight Loss', before: '86 kg', after: '71 kg', kg: '-15 kg',   img1: 'Dipak khandekar before 86kg.jpeg',                                            img2: 'Dipak khandekar after 71kg.jpeg' },
  { name: 'Ramesh Sangvi',      type: 'loss', badge: 'Weight Loss', before: '99 kg', after: '87 kg', kg: '-12 kg',   img1: 'Ramesh Sangvi before 99kg.jpeg',                                              img2: 'Ramesh Sangvi After 87kg.jpeg' },
  { name: 'Kamaluddin Sutar',   type: 'loss', badge: 'Weight Loss', before: '98 kg', after: '75 kg', kg: '-23 kg',   img1: 'Kamaluddin Sutar Before - 98kg.jpeg',                                         img2: 'Kamaluddin Sutar After- 75kg.jpeg' },
  { name: 'Rohit Gadade',       type: 'loss', badge: 'Weight Loss', before: '85 kg', after: '70 kg', kg: '-15 kg',   img1: 'Rohit Gadade Before- 85kg.jpeg',                                              img2: 'Rohit Gadade After-70kg.jpeg' },
  { name: 'Neha Khandekar',     type: 'loss', badge: 'Weight Loss', before: '70 kg', after: '60 kg', kg: '-10 kg',   img1: 'Neha Khandekar Before-70kg.jpeg',                                             img2: 'Neha Khandekar  after 60kg.jpeg' },
  { name: 'Anil Madhukar',      type: 'loss', badge: 'Weight Loss', before: '89 kg', after: '76 kg', kg: '-13 kg',   img1: 'Anil Madhukar Before-89kg.jpeg',                                              img2: 'Anil Madhukar After- 76kg.jpeg' },
  { name: 'Gitanjali Mahes',    type: 'loss', badge: 'Weight Loss', before: '68 kg', after: '56 kg', kg: '-12 kg',   img1: 'Gitanjali mahes Before- 68kg.jpeg',                                           img2: 'Gitanjali mahes After- 56kg.jpeg' },
  { name: 'Pinku Lavate',       type: 'loss', badge: 'Weight Loss', before: '88 kg', after: '75 kg', kg: '-13 kg',   img1: 'Pinku lavate Before - 88kg.jpeg',                                             img2: 'Pinku lavate After - 75 kg.jpeg' },
  { name: 'Shreepriya Gadave',  type: 'loss', badge: 'Weight Loss', before: '72 kg', after: '59 kg', kg: '-13 kg',   img1: 'SHREEPRIYA GADAVE  Before- 72kg.jpeg',                                        img2: 'SHREEPRIYA GADAVE  after 59kg.jpeg' },
  { name: 'Supriya Mane',       type: 'loss', badge: 'Weight Loss', before: '75.5 kg', after: '60 kg', kg: '-15.5 kg', img1: 'Supriya mane Before - 75.5 kg.jpeg',                                       img2: 'Supriya mane After-60kg.jpeg' },
  { name: 'Supriya Patil',      type: 'loss', badge: 'Weight Loss', before: '66 kg', after: '58 kg', kg: '-8 kg',    img1: 'Supriya patil Before - 66kg.jpeg',                                            img2: 'Supriya patil After - 58kg.jpeg' },
  { name: 'Varsha Khandekar',   type: 'loss', badge: 'Weight Loss', before: '75 kg', after: '64 kg', kg: '-11 kg',   img1: 'Varsha Khandekar Before- 75kg.jpeg',                                          img2: 'Varsha Khandekar After- 64kg.jpeg' },
  // Couples weight loss
  { name: 'Aapsana & Aadil Shaikh',  type: 'loss', badge: 'Weight Loss', before: '60 & 65 kg', after: '50 & 60 kg', kg: '-10 & -5 kg',  img1: 'Aapsana Shaikh Before - 60kg & Aadil Shaikh Before - 65kg.jpeg',   img2: 'Aapsana Shaikh After- 50kg & Aadil Shaikh After- 60kg.jpeg' },
  { name: 'Prkash & Anjali Ghodake', type: 'loss', badge: 'Weight Loss', before: '84 & 62 kg', after: '70 & 52 kg', kg: '-14 & -10 kg', img1: 'Prkash Ghodake  Before- 84kg & Anjali Ghodake Before- 62 kg.jpeg', img2: 'Prkash Ghodake  After- 70kg & Anjali Ghodake After- 52 kg.jpeg' },
  { name: 'Sunil & Geeta Gadade',    type: 'loss', badge: 'Weight Loss', before: '75 & 86 kg', after: '60 & 74 kg', kg: '-15 & -12 kg', img1: 'Sunil Gadade Before - 75kg & Geeta Gadade Before - 86kg.jpeg',     img2: 'Sunil Gadade After - 60kg & Geeta Gadade After-74kg.jpeg' },
  // Weight gain
  { name: 'Poonam Pukale',  type: 'gain', badge: 'Weight Gain', before: '44 kg', after: '54 kg', kg: '+10 kg', img1: 'poonam pukale (weight gain) Before - 44kg.jpeg',       img2: 'poonam pukale (weight gain) After- 54kg.jpeg' },
  { name: 'Sanvi',          type: 'gain', badge: 'Weight Gain', before: '26 kg', after: '37 kg', kg: '+11 kg', img1: 'Sanvi (weight gain) Before- 26kg.jpeg',                 img2: 'Sanvi (weight gain) After- 37kg.jpeg' },
  { name: 'Suniket Bisale', type: 'gain', badge: 'Weight Gain', before: '45 kg', after: '55 kg', kg: '+10 kg', img1: 'Suniket Bisale (weight gain) Before- 45kg.jpeg',        img2: 'Suniket Bisale (weight gain) After- 55 kg.jpeg' },
];

const testimonialData = [
  { videoId: 'dQw4w9WgXcQ', name: 'Rohit Verma', rating: 5, quote: '"Lost 22 kg in 4 months. The diet plan was so easy to follow!"' },
  { videoId: 'dQw4w9WgXcQ', name: 'Kavya Nair', rating: 5, quote: '"Finally gained the muscle mass I always wanted. 100% recommend!"' },
  { videoId: 'dQw4w9WgXcQ', name: 'Arjun Kapoor', rating: 5, quote: '"Best investment I ever made. The coaches are incredibly supportive."' },
];

const blogData = [
  {
    tag: 'पोषण',
    title: 'मसल्स बनाने के लिए 5 जरूरी सप्लीमेंट्स',
    author: 'Neha Khandekar',
    excerpt: 'जिम जाना शुरू किया लेकिन मसल्स नहीं बन रहे? ये 5 सप्लीमेंट्स सच में काम करते हैं — बस सही तरीके से लो।',
    img: 'https://picsum.photos/seed/blog1/600/400',
    content: `
      <h2>मसल्स बनाने के लिए 5 जरूरी सप्लीमेंट्स</h2>
      <p>देखो, मैं खुद काफी समय तक जिम जाती रही बिना कोई खास नतीजे के। फिर समझ आया कि सिर्फ वर्कआउट काफी नहीं — खाने के साथ-साथ सही सप्लीमेंट्स भी जरूरी हैं। ये वो 5 चीज़ें हैं जो सच में फर्क डालती हैं:</p>
      <h3>1. क्रिएटिन मोनोहाइड्रेट</h3>
      <p>ये सबसे ज्यादा रिसर्च किया गया सप्लीमेंट है। इससे एक्सरसाइज के दौरान ज्यादा एनर्जी मिलती है और वज़न उठाने की ताकत बढ़ती है। रोज़ 3–5 ग्राम लो, बस इतना काफी है।</p>
      <h3>2. व्हे प्रोटीन</h3>
      <p>वर्कआउट के बाद मसल्स को प्रोटीन चाहिए — और व्हे सबसे तेज़ absorb होता है। अगर खाने से पूरा प्रोटीन नहीं मिल रहा तो एक scoop काफी काम आता है।</p>
      <h3>3. कैफीन</h3>
      <p>सुबह की चाय-कॉफी वाला कैफीन! वर्कआउट से पहले एक कप ब्लैक कॉफी लो — एनर्जी और फोकस दोनों बढ़ेगा। बस रात को मत लो नींद खराब होगी।</p>
      <h3>4. बीटा-अलानिन</h3>
      <p>जब एक्सरसाइज के दौरान जलन होती है ना — वो muscle fatigue है। बीटा-अलानिन उसे कम करता है। शुरू में थोड़ी झनझनाहट होगी शरीर में — घबराना नहीं, नॉर्मल है।</p>
      <h3>5. विटामिन D3 + मैग्नीशियम</h3>
      <p>हम भारतीयों में इन दोनों की कमी बहुत आम है। विटामिन D3 हड्डियां और hormones ठीक रखता है, मैग्नीशियम नींद और recovery बेहतर करता है। ये दोनों लेना शुरू करो — फर्क खुद महसूस होगा।</p>
      <h3>आखिरी बात</h3>
      <p>सप्लीमेंट्स जादू नहीं हैं — ये सिर्फ "सपोर्ट" हैं। पहले खाना, नींद और ट्रेनिंग ठीक करो, फिर ये चीज़ें add करो।</p>
      <p class="blog-author">— <strong>Neha Khandekar</strong></p>
    `
  },
  {
    tag: 'फैट लॉस',
    title: 'मसल्स खोए बिना चर्बी कैसे घटाएं',
    author: 'Neha Khandekar',
    excerpt: 'डाइट पर जाते ही डर लगता है कि मेहनत से बनाई मसल्स न चली जाए। यहाँ है वो तरीका जो सच में काम करता है।',
    img: 'https://picsum.photos/seed/blog2/600/400',
    content: `
      <h2>मसल्स खोए बिना चर्बी कैसे घटाएं</h2>
      <p>ये सवाल मुझसे हर कोई पूछता है — "Neha didi, weight kam karna hai but muscles nahi khoni." सच बताऊं तो ये बिल्कुल मुमकिन है, बस सही तरीका चाहिए।</p>
      <h3>1. ज्यादा कम मत खाओ</h3>
      <p>बहुत कम कैलोरी खाने से fat के साथ muscle भी जाने लगती है। रोज़ सिर्फ 300–500 कैलोरी कम करो — धीरे-धीरे लेकिन पक्का नतीजा मिलेगा।</p>
      <h3>2. प्रोटीन ज्यादा खाओ</h3>
      <p>डाइट में प्रोटीन सबसे ज्यादा ज़रूरी है — दाल, अंडे, पनीर, चिकन जो भी हो। प्रोटीन ज्यादा होगा तो muscle टूटेगी नहीं।</p>
      <h3>3. वज़न उठाना बंद मत करो</h3>
      <p>लोग सोचते हैं डाइट पर हैं तो बस cardio करो। गलत! वेट ट्रेनिंग जारी रखो — शरीर को reason दो muscle रखने का।</p>
      <h3>4. बहुत ज्यादा cardio मत करो</h3>
      <p>हफ्ते में 2–3 बार 30 मिनट की walk या light cardio काफी है। ज्यादा करने से body stress में आ जाती है और muscle जाने लगती है।</p>
      <h3>5. नींद पूरी लो</h3>
      <p>रात को 7–8 घंटे की नींद में body खुद को repair करती है। नींद कम हो तो चाहे कितनी भी मेहनत करो — नतीजा नहीं मिलेगा।</p>
      <p class="blog-author">— <strong>Neha Khandekar</strong></p>
    `
  },
  {
    tag: 'मानसिकता',
    title: '5 आदतें जो आपकी ज़िंदगी बदल देंगी',
    author: 'Neha Khandekar',
    excerpt: 'ट्रांसफॉर्मेशन 80% दिमाग की लड़ाई है। ये 5 आदतें अपना लो — बाकी सब अपने आप होगा।',
    img: 'https://picsum.photos/seed/blog3/600/400',
    content: `
      <h2>5 आदतें जो आपकी ज़िंदगी बदल देंगी</h2>
      <p>मैंने देखा है कि जो लोग transform नहीं हो पाते, उनमें knowledge की कमी नहीं होती — mindset की कमी होती है। ये 5 आदतें वो लोग रखते हैं जो सच में बदलते हैं।</p>
      <h3>1. खुद को अलग नज़र से देखो</h3>
      <p>"मुझे 10 किलो कम करना है" की जगह सोचो — "मैं एक healthy इंसान हूँ।" जब सोच बदलती है, तो आदतें अपने आप बदलती हैं।</p>
      <h3>2. हर चीज़ track करो</h3>
      <p>खाना, पानी, नींद, वर्कआउट — सब लिखो। जो दिखता है वो बदलता है। अंदाज़े से काम नहीं होता।</p>
      <h3>3. तकलीफ से डरो मत</h3>
      <p>जिम में जलन होती है — वो growth है। जब लगे "यार नहीं होगा" — तभी सबसे ज्यादा होता है। बस रुको मत।</p>
      <h3>4. छोटी जीत को celebrate करो</h3>
      <p>आज जिम गए? जीत। बाहर खाने की जगह घर पर खाया? जीत। ट्रांसफॉर्मेशन हज़ारों छोटे decisions से बनती है।</p>
      <h3>5. अपना "क्यों" ढूंढो</h3>
      <p>सिर्फ "अच्छा दिखना है" काफी नहीं होता। क्या बच्चों के लिए fit रहना है? 60 साल में healthy रहना है? जब कारण गहरा होता है, तो motivation खुद आता है।</p>
      <p class="blog-author">— <strong>Neha Khandekar</strong></p>
    `
  },
  {
    tag: 'डाइट',
    title: 'घर के खाने से वज़न कैसे घटाएं',
    author: 'Neha Khandekar',
    excerpt: 'वज़न घटाने के लिए boiled chicken और broccoli खाना जरूरी नहीं। हमारे घर का खाना ही काफी है — बस थोड़ा समझदारी से।',
    img: 'https://picsum.photos/seed/blog4/600/400',
    content: `
      <h2>घर के खाने से वज़न कैसे घटाएं</h2>
      <p>जब मैं पहली बार diet शुरू की थी तो लगा — अब सिर्फ bland खाना खाना पड़ेगा। लेकिन सच में ऐसा नहीं है! हमारा Indian घर का खाना बिल्कुल सही है — बस थोड़ा adjust करना होता है।</p>
      <h3>ये चीज़ें ज़रूर खाओ</h3>
      <ul>
        <li>दाल — सबसे सस्ता और बढ़िया protein source</li>
        <li>पनीर — भरपेट रखता है, protein भी देता है</li>
        <li>अंडे — सुबह के नाश्ते में बेस्ट</li>
        <li>रोटी (1–2) — चावल से बेहतर option</li>
        <li>दही — gut health और protein दोनों</li>
        <li>सब्ज़ियाँ — जितनी चाहो उतनी खाओ</li>
      </ul>
      <h3>इनसे बचो</h3>
      <ul>
        <li>समोसे, पकोड़े, चाट — ये सब बाहर का तला हुआ</li>
        <li>मैदे की रोटी, नान, बिस्किट</li>
        <li>दिन में 3–4 बार मीठी चाय</li>
        <li>रात को बहुत ज्यादा चावल</li>
      </ul>
      <h3>एक दिन का सैंपल खाना</h3>
      <p><strong>सुबह:</strong> 2–3 अंडे का ऑमलेट + 1 कप ग्रीन टी या ब्लैक कॉफी</p>
      <p><strong>दोपहर:</strong> 2 रोटी + दाल + सब्ज़ी + दही</p>
      <p><strong>रात:</strong> पनीर या चिकन + सलाद + 1 रोटी</p>
      <p>बस इतना करो — महीने भर में खुद फर्क दिखेगा। कोई fancy diet की ज़रूरत नहीं।</p>
      <p class="blog-author">— <strong>Neha Khandekar</strong></p>
    `
  },
];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  setWhatsAppLinks();
  renderGallery();
  renderTestimonials();
  renderBlog();
  initNavbar();
  initScrollAnimations();
  initCounters();
  initFilterBtns();
  initScrollTop();
  initHamburger();
  initSmoothScroll();
});

// ===== LOADER =====
function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 800);
  });
  // Fallback: hide after 2.5s regardless
  setTimeout(() => loader.classList.add('hidden'), 2500);
}

// ===== WHATSAPP LINKS =====
function setWhatsAppLinks() {
  const ids = ['floating-wa', 'hero-wa', 'nav-wa', 'contact-wa'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = WA_URL;
  });
  // Also set all .wa-link class links
  document.querySelectorAll('.wa-link').forEach(el => el.href = WA_URL);
}

// ===== RENDER GALLERY =====
function imgUrl(filename) {
  return '/images/' + encodeURIComponent(filename);
}

function renderGallery(filter = 'all') {
  const grid = document.getElementById('gallery-grid');
  const filtered = filter === 'all' ? galleryData : galleryData.filter(c => c.type === filter);

  grid.innerHTML = filtered.map(c => `
    <div class="gallery-card" data-type="${c.type}">
      <div class="gallery-img-wrap">
        <div class="gallery-imgs">
          <img src="${imgUrl(c.img1)}" alt="Before ${c.name}" loading="lazy" />
          <img src="${imgUrl(c.img2)}" alt="After ${c.name}" loading="lazy" />
        </div>
        <span class="img-label img-before">BEFORE</span>
        <span class="img-label img-after">AFTER</span>
      </div>
      <div class="gallery-info">
        <span class="gallery-badge ${c.type === 'loss' ? 'badge-loss' : 'badge-gain'}">${c.badge}</span>
        <h4>${c.name}</h4>
        <div class="gallery-weight-details">
          <div class="gallery-weight-row">
            <span class="weight-label">Before</span>
            <span class="weight-value">${c.before}</span>
          </div>
          <div class="gallery-weight-row">
            <span class="weight-label">After</span>
            <span class="weight-value">${c.after}</span>
          </div>
          <div class="gallery-weight-row total-row">
            <span class="weight-label">Total ${c.type === 'loss' ? 'Loss' : 'Gain'}</span>
            <span class="weight-value total-kg ${c.type === 'loss' ? 'loss-color' : 'gain-color'}">${c.kg}</span>
          </div>
        </div>
      </div>
      <div class="gallery-hover">
        <h3>${c.kg}</h3>
        <p>${c.badge}</p>
      </div>
    </div>
  `).join('');
}

// ===== RENDER TESTIMONIALS =====
function renderTestimonials() {
  const grid = document.querySelector('.video-grid');
  grid.innerHTML = testimonialData.map(t => `
    <div class="video-card">
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/${t.videoId}"
          title="${t.name} testimonial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <div class="video-info">
        <div class="stars">${'★'.repeat(t.rating)}</div>
        <h4>${t.name}</h4>
        <p>${t.quote}</p>
      </div>
    </div>
  `).join('');
}

// ===== RENDER BLOG =====
function renderBlog() {
  const grid = document.getElementById('blog-grid');
  grid.innerHTML = blogData.map((b, i) => `
    <div class="blog-card" onclick="openBlogModal(${i})">
      <div class="blog-img">
        <img src="${b.img}" alt="${b.title}" loading="lazy" />
      </div>
      <div class="blog-body">
        <p class="blog-tag">${b.tag}</p>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
        <div class="blog-meta">
          <span class="blog-author-name">✍️ ${b.author}</span>
        </div>
        <button class="read-more">और पढ़ें →</button>
      </div>
    </div>
  `).join('');
}

// ===== BLOG MODAL =====
function openBlogModal(index) {
  const modal = document.getElementById('blog-modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = blogData[index].content;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
  document.getElementById('blog-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeBlogModal();
});

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Active nav link on scroll
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

window.addEventListener('scroll', updateActiveNav);

// ===== HAMBURGER =====
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav-links');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });
  // Close on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===== ANIMATED COUNTERS =====
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// ===== FILTER BUTTONS =====
function initFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== BMI CALCULATOR =====
function calculateBMI() {
  const height = parseFloat(document.getElementById('bmi-height').value);
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const resultEl = document.getElementById('bmi-result');

  if (!height || !weight || height < 100 || weight < 20) {
    showError(resultEl, 'Please enter valid height and weight values.');
    return;
  }

  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let category, cssClass, message;

  if (bmi < 18.5) {
    category = 'Underweight'; cssClass = 'result-underweight';
    message = 'You are underweight. A structured weight gain plan can help you build healthy mass.';
  } else if (bmi < 25) {
    category = 'Normal Weight'; cssClass = 'result-normal';
    message = 'Great job! You are in the healthy weight range. Let\'s maintain and sculpt that physique.';
  } else if (bmi < 30) {
    category = 'Overweight'; cssClass = 'result-overweight';
    message = 'You are in the overweight range. A personalised fat loss plan can help you get back on track.';
  } else {
    category = 'Obese'; cssClass = 'result-obese';
    message = 'Your BMI indicates obesity. The good news — it is completely reversible with the right plan.';
  }

  resultEl.className = `calc-result ${cssClass}`;
  resultEl.innerHTML = `
    <div class="bmi-value">${bmi}</div>
    <div class="bmi-category">${category}</div>
    <p class="bmi-message">${message}</p>
    <p style="color:var(--muted);font-size:0.82rem;margin-bottom:1rem">Want to fix this? Let us create a personalised plan for you.</p>
    <a href="${WA_URL}" target="_blank" class="btn btn-wa">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Chat on WhatsApp
    </a>
  `;
}

// ===== CALORIE CALCULATOR (Mifflin-St Jeor) =====
function calculateCalories() {
  const age = parseFloat(document.getElementById('cal-age').value);
  const gender = document.getElementById('cal-gender').value;
  const height = parseFloat(document.getElementById('cal-height').value);
  const weight = parseFloat(document.getElementById('cal-weight').value);
  const activity = parseFloat(document.getElementById('cal-activity').value);
  const resultEl = document.getElementById('cal-result');

  if (!age || !height || !weight || height < 100 || weight < 20 || age < 10) {
    showError(resultEl, 'Please fill in all fields with valid values.');
    return;
  }

  let bmr;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  const maintenance = Math.round(bmr * activity);
  const lossCalories = maintenance - 500;
  const gainCalories = maintenance + 500;

  resultEl.className = 'calc-result result-normal';
  resultEl.innerHTML = `
    <p style="color:var(--muted);font-size:0.85rem;margin-bottom:1.2rem">Based on Mifflin-St Jeor formula — your daily calorie targets:</p>
    <div class="cal-cards">
      <div class="cal-card loss">
        <div class="cal-num">${lossCalories.toLocaleString()}</div>
        <div class="cal-label">Weight Loss<br/>(Deficit −500)</div>
      </div>
      <div class="cal-card maintenance">
        <div class="cal-num">${maintenance.toLocaleString()}</div>
        <div class="cal-label">Maintenance<br/>(TDEE)</div>
      </div>
      <div class="cal-card gain">
        <div class="cal-num">${gainCalories.toLocaleString()}</div>
        <div class="cal-label">Weight Gain<br/>(Surplus +500)</div>
      </div>
    </div>
    <p style="color:var(--muted);font-size:0.82rem;margin-bottom:1rem">Want a complete personalised nutrition plan? Chat with us now!</p>
    <a href="${WA_URL}" target="_blank" class="btn btn-wa">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Get My Plan on WhatsApp
    </a>
  `;
}

// ===== HELPERS =====
function showError(el, msg) {
  el.className = 'calc-result result-obese';
  el.innerHTML = `<p style="color:#ef4444;font-weight:600">${msg}</p>`;
}
