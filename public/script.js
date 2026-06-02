// ===== WHATSAPP CONFIG =====
// Replace this number with your real WhatsApp number (include country code, no + or spaces)
const WHATSAPP_NUMBER = '919167185555';
const WA_MESSAGE = encodeURIComponent('Hi, I want to start my fitness journey with TransformX!');
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
    tag: 'NUTRITION',
    title: 'Top 5 Supplements for Muscle Gain in 2024',
    excerpt: 'Discover the science-backed supplements that can accelerate your muscle growth when combined with proper training.',
    img: 'https://picsum.photos/seed/blog1/600/400',
    content: `
      <h2>Top 5 Supplements for Muscle Gain in 2024</h2>
      <p>Building muscle requires more than just hitting the gym. The right supplements can bridge the gap between good and great results. Here are the top 5 that actually work:</p>
      <h3>1. Creatine Monohydrate</h3>
      <p>Creatine is the most researched supplement in sports science. It increases phosphocreatine stores in muscles, allowing you to produce more ATP energy during high-intensity exercise. Take 3–5g daily.</p>
      <h3>2. Whey Protein</h3>
      <p>A fast-digesting complete protein source that delivers all essential amino acids. Ideal post-workout to kickstart muscle protein synthesis. Aim for 0.8–1g of protein per pound of bodyweight daily.</p>
      <h3>3. Caffeine</h3>
      <p>A proven performance enhancer that improves strength, endurance, and focus. 200–400mg pre-workout is effective for most people.</p>
      <h3>4. Beta-Alanine</h3>
      <p>Reduces muscle fatigue by buffering acid buildup during exercise. Best for high-rep training. Expect a harmless tingling sensation (paresthesia) when you first take it.</p>
      <h3>5. Vitamin D3 + Magnesium</h3>
      <p>Most Indians are deficient in both. Vitamin D supports testosterone production and bone health. Magnesium improves sleep quality and muscle recovery.</p>
      <h3>Final Word</h3>
      <p>Supplements are just that — supplementary. Nail your nutrition, training, and sleep first. Then layer in these to optimise results.</p>
    `
  },
  {
    tag: 'FAT LOSS',
    title: 'How to Lose Fat Without Losing Muscle Mass',
    excerpt: 'The biggest fear during a cut — losing your hard-earned muscle. Here is the exact strategy to avoid it.',
    img: 'https://picsum.photos/seed/blog2/600/400',
    content: `
      <h2>How to Lose Fat Without Losing Muscle Mass</h2>
      <p>Muscle preservation during a caloric deficit is the holy grail of body recomposition. Here's a proven framework:</p>
      <h3>1. Eat at a Moderate Deficit</h3>
      <p>Aim for a 300–500 calorie deficit per day. Anything more aggressive accelerates muscle loss along with fat. Slow and steady wins this race.</p>
      <h3>2. Keep Protein High</h3>
      <p>Eat 1–1.2g of protein per pound of bodyweight. High protein intake is the single most effective strategy to prevent muscle breakdown in a deficit.</p>
      <h3>3. Don't Stop Lifting Heavy</h3>
      <p>Your body keeps muscle when it has a reason to. Resistance training signals the body to preserve muscle mass even when calories are low. Don't switch to light weights and high reps.</p>
      <h3>4. Minimize Cardio Volume</h3>
      <p>Excessive cardio elevates cortisol, which is catabolic (muscle-breaking). 2–3 sessions of 30-minute moderate cardio per week is sufficient.</p>
      <h3>5. Prioritize Sleep</h3>
      <p>Growth hormone — your primary muscle-preserving hormone — is released during deep sleep. Aim for 7–9 hours. Poor sleep will sabotage every other effort.</p>
    `
  },
  {
    tag: 'MINDSET',
    title: '5 Mental Habits That Will Transform Your Body',
    excerpt: 'Physical transformation is 80% mental. Master these habits and the physical results will follow automatically.',
    img: 'https://picsum.photos/seed/blog3/600/400',
    content: `
      <h2>5 Mental Habits That Will Transform Your Body</h2>
      <p>Most people fail not because of lack of knowledge, but because of mindset. Here are 5 habits that separate those who transform from those who try:</p>
      <h3>1. Identity-Based Goals</h3>
      <p>Instead of "I want to lose 10 kg," say "I am someone who exercises daily." When your identity changes, your habits follow automatically.</p>
      <h3>2. Track Everything</h3>
      <p>What gets measured gets managed. Track your food, workouts, and sleep. Data removes guesswork and keeps you accountable.</p>
      <h3>3. Embrace Discomfort</h3>
      <p>Progress lives outside comfort zones. Learn to distinguish between "this is hard" and "this is harmful." The burn in your muscles is growth, not damage.</p>
      <h3>4. Celebrate Small Wins</h3>
      <p>Did you hit the gym today? Win. Chose a salad over a samosa? Win. Transformation is built from thousands of small decisions, not one big event.</p>
      <h3>5. Find Your Why</h3>
      <p>Superficial motivation fades. Dig deep — is it for your kids? Your health at 60? Finding a deep, emotional reason creates lasting motivation.</p>
    `
  },
  {
    tag: 'DIET',
    title: 'The Indian Diet Guide for Weight Loss',
    excerpt: 'You do not need to eat bland chicken and broccoli to lose weight. Here is how to lose fat with Indian food.',
    img: 'https://picsum.photos/seed/blog4/600/400',
    content: `
      <h2>The Indian Diet Guide for Weight Loss</h2>
      <p>Good news: Indian food can absolutely support fat loss. The key is in the choices and portions, not abandoning your culture.</p>
      <h3>Best Indian Foods for Fat Loss</h3>
      <ul>
        <li>Dal (lentils) — high protein, high fiber, low fat</li>
        <li>Paneer — protein-rich, keeps you full</li>
        <li>Chicken/Fish — lean protein sources</li>
        <li>Roti (1–2) — complex carbs, better than white rice in volume</li>
        <li>Sabzis with minimal oil — micronutrient dense</li>
        <li>Curd/Dahi — probiotics + protein</li>
        <li>Eggs — complete protein, incredibly versatile</li>
      </ul>
      <h3>Foods to Limit</h3>
      <ul>
        <li>Maida-based items (naan, paratha, biscuits)</li>
        <li>Fried snacks (samosa, pakora)</li>
        <li>Sugary chai with milk (2+ cups/day adds up)</li>
        <li>White rice in large portions</li>
      </ul>
      <h3>Sample Day</h3>
      <p><strong>Breakfast:</strong> 3 egg whites + 1 whole egg omelette with veggies + 1 cup green tea</p>
      <p><strong>Lunch:</strong> 2 rotis + 1 cup dal + sabzi + curd</p>
      <p><strong>Dinner:</strong> Grilled chicken or paneer + salad + 1 roti</p>
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
        <button class="read-more">Read More →</button>
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
