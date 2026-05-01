if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const CONFIG = {
  USE_VIDEO: true,
  USE_FRAMES_FALLBACK: false,
  AUTO_LOW_DATA_MODE: true,
  LOAD_VIDEO_ON_TOUCH_DEVICES: true,
  VIDEO_SRC: "./assets/video/brows-transition.mp4",
  MOBILE_VIDEO_SRC: "./assets/video/brows-transition.mp4",
  FRAME_PATH_PATTERN: "./assets/frames/frame-{index}.jpg",
  TOTAL_FRAMES: 180,
  PRELOAD_INITIAL_FRAMES: 24,
  LOADER_MIN_DURATION: 1800,
  LOADER_MAX_DURATION: 6200,
  LOADER_WORD_INTERVAL: 980,
  PROFILE_1_IMAGE:
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
  PROFILE_2_IMAGE:
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
  PROFILE_3_IMAGE:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80",
  APPOINTMENT_WHATSAPP_URL: "https://wa.me/573012046042",
  PRESENTIAL_COURSES_LINK: "#",
  ONLINE_COURSES_LINK: "#",
  SERVICES_LINK: "#",
  COURSE_LINK_1: "#",
  COURSE_LINK_2: "#",
  COURSE_LINK_3: "#",
  COURSE_LINK_4: "#",
  COURSE_LINK_5: "#",
  WHATSAPP_URL: "#",
  INSTAGRAM_URL: "#",
  TIKTOK_URL: "#",
};

const SECTION_ITEMS = [
  {
    type: "profile",
    menuLabel: "Perfil 1",
    eyebrow: "Especialistas Sally May Pro",
    professionals: [
      {
        name: "Ana Maria MAY",
        imageKey: "PROFILE_1_IMAGE",
        imageAlt: "Ana Maria MAY especialista en micropigmentacion",
      },
      {
        name: "Laura MAY",
        imageKey: "PROFILE_2_IMAGE",
        imageAlt: "Laura MAY especialista y formadora en pigmentologia",
      },
      {
        name: "Sally MAY",
        imageKey: "PROFILE_3_IMAGE",
        imageAlt: "Sally MAY especialista en estetica avanzada",
      },
    ],
  },
  {
    type: "courseExplore",
    menuLabel: "Presenciales",
    eyebrow: "Cursos Presenciales",
    title: "Explora la formacion presencial de Sally May Pro",
    description:
      "Entrenamientos practicos para aprender con acompanamiento directo, correccion en vivo y protocolos aplicables desde la primera sesion.",
    linkKey: "PRESENTIAL_COURSES_LINK",
    cta: "Explorar presenciales",
    featured: true,
  },
  {
    type: "courseExplore",
    menuLabel: "Online",
    eyebrow: "Curso Online",
    title: "Explora los cursos online de Sally May Pro",
    description:
      "Programas flexibles para estudiar a tu ritmo, reforzar tecnica y avanzar con una ruta clara desde cualquier lugar.",
    linkKey: "ONLINE_COURSES_LINK",
    cta: "Explorar online",
  },
  {
    type: "services",
    menuLabel: "Servicios",
    eyebrow: "Servicios Disponibles",
    title: "Tratamientos y servicios profesionales",
    description: "Ademas de la formacion, Sally May Pro ofrece servicios especializados de micropigmentacion, estetica avanzada y tratamientos de alta precision a cargo de nuestras expertas.",
    linkKey: "SERVICES_LINK",
    cta: "Explorar servicios",
    services: [
      "Micropigmentacion labial / cejas",
      "Remocion laser",
      "Hollywood Peel",
      "Depilacion laser",
    ],
  },
  {
    type: "course",
    menuLabel: "May Brows",
    eyebrow: "Curso Online",
    access: "1 ano de acceso",
    title: "Metodo MAY-BROWS",
    description:
      "Metodo especializado en diseno, estructura y ejecucion de cejas premium. Incluye criterios de simetria, neutralizacion estrategica y fidelizacion de clientas.",
    linkKey: "COURSE_LINK_2",
  },
  {
    type: "course",
    menuLabel: "Medellin",
    eyebrow: "Curso Presencial",
    title: "Curso presencial Medellin",
    description:
      "Inmersion tecnica intensiva con acompanamiento directo, correccion en vivo y protocolo de ejecucion para lograr resultados consistentes desde la primera practica guiada.",
    linkKey: "COURSE_LINK_3",
  },
  {
    type: "course",
    menuLabel: "May Lips",
    eyebrow: "Curso Online",
    access: "1 ano de acceso",
    title: "Metodo MAY-LIPS (Neutralizacion full color)",
    description:
      "Formacion avanzada para neutralizar labios oscuros y construir tonos limpios, estables y armonicos en multiples fototipos, con enfoque en seguridad del tejido.",
    linkKey: "COURSE_LINK_4",
  },
  {
    type: "course",
    menuLabel: "Cejas Pro",
    eyebrow: "Curso Online",
    access: "6 meses de acceso",
    title: "Diseno de cejas pro a mano alzada",
    description:
      "Entrenamiento especifico en lectura facial y trazado manual para construir disenos de alto impacto visual, con criterio anatomico y precision comercial.",
    linkKey: "COURSE_LINK_5",
  },
  {
    type: "contact",
    menuLabel: "Contacto",
    eyebrow: "Conecta con Sally May Pro",
    title: "Contacto y redes",
    description: "Agenda tu siguiente paso profesional o descubre contenido educativo en nuestras plataformas oficiales.",
    links: [
      { label: "WhatsApp", key: "WHATSAPP_URL" },
      { label: "Instagram", key: "INSTAGRAM_URL" },
      { label: "TikTok", key: "TIKTOK_URL" },
    ],
  },
];

const profileCard = (item) => {
  if (item.professionals) {
    return `
      <article class="professional-shell glass mx-auto w-full max-w-5xl rounded-3xl p-5 shadow-glass sm:p-10 lg:p-14">
        <h1 class="professional-title text-center font-display text-4xl leading-tight sm:text-5xl">${item.eyebrow}</h1>
        <div class="professional-grid mt-8">
          ${item.professionals
            .map((professional) => {
              const message = encodeURIComponent(`Hola, deseo solicitar una cita con ${professional.name}.`);
              const href = `${CONFIG.APPOINTMENT_WHATSAPP_URL}?text=${message}`;

              return `
                <section class="professional-card">
                  <img
                    src="${CONFIG[professional.imageKey]}"
                    alt="${professional.imageAlt}"
                    class="professional-avatar h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                    loading="${professional.imageKey === "PROFILE_1_IMAGE" ? "eager" : "lazy"}"
                  />
                  <h2 class="mt-5 font-display text-2xl leading-tight sm:text-3xl">${professional.name}</h2>
                  <a href="${href}" class="cta focus-ring mt-5 inline-flex rounded-xl px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] transition-all duration-500 ease-expoout" target="_blank" rel="noopener noreferrer">Solicitar cita</a>
                </section>`;
            })
            .join("")}
        </div>
      </article>`;
  }

  const image = `
    <img
      src="${CONFIG[item.imageKey]}"
      alt="${item.imageAlt}"
      class="h-56 w-full rounded-2xl object-cover sm:h-[28rem]"
      loading="${item.imageLoading}"
    />`;
  const content = `
    <div>
      <h${item.imageFirst ? "1" : "2"} class="font-display text-[clamp(2.35rem,10vw,3.75rem)] leading-tight">${item.title}</h${item.imageFirst ? "1" : "2"}>
      <p class="mt-4 max-w-[65ch] text-base leading-7 text-muted sm:text-lg sm:leading-8">${item.description}</p>
      ${
        item.cta
          ? `<a href="#" class="cta focus-ring mt-8 inline-flex items-center rounded-xl px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] transition-all duration-500 ease-expoout">${item.cta}</a>`
          : ""
      }
      ${
        item.tags
          ? `<div class="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em] text-muted">${item.tags
              .map((tag) => `<span class="rounded-full border border-glass-stroke px-3 py-1">${tag}</span>`)
              .join("")}</div>`
          : ""
      }
    </div>`;

  return `
    <article class="glass mx-auto w-full max-w-5xl rounded-3xl p-5 shadow-glass sm:p-10 lg:p-14">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-muted">${item.eyebrow}</p>
      <div class="mt-4 grid gap-8 lg:grid-cols-[${item.imageFirst ? "0.9fr_1.1fr" : "1.1fr_0.9fr"}] lg:items-center">
        ${item.imageFirst ? image + content : content + image}
      </div>
    </article>`;
};

const courseModeTag = (label) => {
  const isPresential = label.toLowerCase().includes("presencial");
  const tone = isPresential
    ? "border-[color:color-mix(in_oklab,var(--accent)_72%,var(--text-primary)_28%)] bg-[color:color-mix(in_oklab,var(--accent)_24%,transparent)] text-primary"
    : "border-glass-stroke bg-[color:color-mix(in_oklab,var(--glass-fill)_82%,var(--text-primary)_10%)] text-muted";
  const dot = isPresential ? "bg-accent" : "bg-muted";

  return `<span class="course-tag inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] ${tone}"><span class="h-1.5 w-1.5 rounded-full ${dot}" aria-hidden="true"></span>${label}</span>`;
};

const courseAccessTag = (label) =>
  label
    ? `<span class="course-tag inline-flex w-fit items-center rounded-full border border-glass-stroke bg-[color:color-mix(in_oklab,var(--glass-fill)_76%,var(--accent)_10%)] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-muted">${label}</span>`
    : "";

const courseCard = (item) => `
  <article class="glass mx-auto w-full max-w-4xl rounded-3xl p-6 shadow-glass sm:p-12">
    <div class="flex flex-wrap items-center gap-3">
      ${courseModeTag(item.eyebrow)}
      ${courseAccessTag(item.access)}
    </div>
    <h2 class="mt-4 font-display text-[clamp(2rem,8vw,3rem)] leading-tight">${item.title}</h2>
    <p class="mt-6 max-w-[65ch] leading-7 text-muted sm:leading-8">${item.description}</p>
    <a href="${CONFIG[item.linkKey]}" class="cta focus-ring mt-8 inline-flex rounded-xl px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] transition-all duration-500 ease-expoout">Ver Curso</a>
  </article>`;

const servicesCard = (item) => `
  <article class="services-card glass mx-auto w-full max-w-4xl rounded-3xl p-6 shadow-glass sm:p-12">
    <p class="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">${item.eyebrow}</p>
    <h2 class="mt-4 font-display text-[clamp(2rem,8vw,3rem)] leading-tight">${item.title}</h2>
    <p class="mt-5 max-w-[65ch] leading-7 text-muted sm:leading-8">${item.description}</p>
    <div class="service-badges">
      ${item.services.map((s) => `<span class="service-badge">${s}</span>`).join("")}
    </div>
    <a href="${CONFIG[item.linkKey]}" class="cta focus-ring mt-8 inline-flex rounded-xl px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] transition-all duration-500 ease-expoout">${item.cta}</a>
  </article>`;

const courseExploreCard = (item) => `
  <article class="course-explore-card ${item.featured ? "course-explore-card-featured" : ""} glass mx-auto w-full max-w-4xl rounded-3xl p-6 shadow-glass sm:p-12">
    <div class="flex flex-wrap items-center gap-3">
      ${courseModeTag(item.eyebrow)}
    </div>
    <h2 class="mt-4 font-display text-[clamp(2rem,8vw,3rem)] leading-tight">${item.title}</h2>
    <p class="mt-6 max-w-[65ch] leading-7 text-muted sm:leading-8">${item.description}</p>
    <a href="${CONFIG[item.linkKey]}" class="cta focus-ring mt-8 inline-flex rounded-xl px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] transition-all duration-500 ease-expoout">${item.cta}</a>
  </article>`;

const contactCard = (item) => `
  <article class="glass mx-auto w-full max-w-5xl rounded-3xl p-6 shadow-glass sm:p-12">
    <p class="text-xs uppercase tracking-[0.18em] text-muted">${item.eyebrow}</p>
    <h2 class="mt-4 font-display text-[clamp(2rem,8vw,3rem)] leading-tight">${item.title}</h2>
    <p class="mt-5 max-w-[65ch] leading-7 text-muted sm:leading-8">${item.description}</p>
    <div class="mt-8 grid gap-4 sm:grid-cols-3">
      ${item.links
        .map(
          (link) =>
            `<a href="${CONFIG[link.key]}" class="focus-ring rounded-2xl border border-glass-stroke bg-glass-fill px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] transition-all duration-500 ease-expoout hover:bg-[color:color-mix(in_oklab,var(--glass-fill)_70%,var(--accent)_30%)]">${link.label}</a>`
        )
        .join("")}
    </div>
  </article>`;

const renderCard = (item) => {
  if (item.type === "profile") return profileCard(item);
  if (item.type === "courseExplore") return courseExploreCard(item);
  if (item.type === "services") return servicesCard(item);
  if (item.type === "contact") return contactCard(item);
  return courseCard(item);
};

const renderSections = () => {
  const scrollRoot = document.getElementById("scrollRoot");
  const sectionMenu = document.getElementById("sectionMenu");

  scrollRoot.innerHTML = SECTION_ITEMS.map((item) => {
    const card = renderCard(item);
    return `<section class="panel flex items-center px-4 py-12 sm:px-8 lg:px-16">${card}</section>`;
  }).join("");

  sectionMenu.innerHTML = SECTION_ITEMS.map(
    (item, index) =>
      `<button class="section-menu-button focus-ring" type="button" data-index="${index}" data-label="${item.menuLabel}" aria-label="Ir a ${item.menuLabel}"></button>`
  ).join("");
};

renderSections();

const prefersReducedMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
const urlParams = new URLSearchParams(globalThis.location.search);
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const isTouchFirstDevice = globalThis.matchMedia("(pointer: coarse)").matches;
const isConstrainedConnection = Boolean(
  connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType || "")
);
const forceLowDataMode = urlParams.has("lite") || urlParams.has("low-data");
const forceVideoMode = urlParams.has("video");
const shouldUseLowDataMode = Boolean(
  !forceVideoMode &&
    (forceLowDataMode ||
      (CONFIG.AUTO_LOW_DATA_MODE &&
        (prefersReducedMotion || isConstrainedConnection || (isTouchFirstDevice && !CONFIG.LOAD_VIDEO_ON_TOUCH_DEVICES))))
);
const root = document.documentElement;
const bgVideo = document.getElementById("bgVideo");
const frameLayer = document.getElementById("frameLayer");
const particleCanvas = document.getElementById("particleCanvas");
const scrollTopButton = document.getElementById("scrollTopButton");
const pageLoader = document.getElementById("pageLoader");
const loaderWord = document.getElementById("loaderWord");
const particleContext = particleCanvas.getContext("2d");
const sectionMenuButtons = Array.from(document.querySelectorAll(".section-menu-button"));
const panels = Array.from(document.querySelectorAll(".panel"));
const panelCards = panels.map((panel) => panel.querySelector("article")).filter(Boolean);
let isVideoEnabled = false;
let loaderWordTimer = 0;

const LOADER_WORDS = ["estilo", "glamour", "estética", "precisión", "belleza", "pigmento", "arte"];

const wait = (durationMs) => new Promise((resolve) => setTimeout(resolve, durationMs));

const withTimeout = (promise, durationMs) => Promise.race([promise, wait(durationMs)]);

const startLoaderWords = () => {
  if (!loaderWord) return;

  let wordIndex = 0;
  loaderWord.textContent = LOADER_WORDS[wordIndex];
  loaderWordTimer = globalThis.setInterval(() => {
    wordIndex = (wordIndex + 1) % LOADER_WORDS.length;
    loaderWord.textContent = LOADER_WORDS[wordIndex];
  }, CONFIG.LOADER_WORD_INTERVAL);
};

const hideLoader = () => {
  if (!pageLoader) return;

  clearInterval(loaderWordTimer);
  pageLoader.classList.add("is-hidden");
  pageLoader.setAttribute("aria-hidden", "true");
  setTimeout(() => pageLoader.remove(), 850);
};

const waitForImage = (src) => {
  if (!src) return Promise.resolve();

  const image = new Image();
  image.decoding = "async";
  image.src = src;

  if (image.decode) {
    return image.decode().catch(() => undefined);
  }

  return new Promise((resolve) => {
    image.onload = resolve;
    image.onerror = resolve;
  });
};

const waitForVideoReady = () => {
  if (!isVideoEnabled || bgVideo.readyState >= 2) return Promise.resolve();

  return new Promise((resolve) => {
    bgVideo.addEventListener("loadeddata", resolve, { once: true });
    bgVideo.addEventListener("canplay", resolve, { once: true });
    bgVideo.addEventListener("error", resolve, { once: true });
  });
};

const waitForInitialResources = () => {
  const fontReady = document.fonts ? document.fonts.ready : Promise.resolve();
  const firstImageReady = waitForImage(CONFIG.PROFILE_1_IMAGE);
  const videoReady = waitForVideoReady();

  return withTimeout(Promise.all([fontReady, firstImageReady, videoReady]), CONFIG.LOADER_MAX_DURATION);
};

const completeLoaderWhenReady = async () => {
  await Promise.all([wait(CONFIG.LOADER_MIN_DURATION), waitForInitialResources()]);
  hideLoader();
};

document.body.classList.toggle("is-low-data", shouldUseLowDataMode);
startLoaderWords();

bgVideo.autoplay = false;
bgVideo.pause();

panelCards.forEach((card) => card.classList.add("panel-card"));

let duration = 0;
let ticking = false;
let lastProgress = -1;
let activePanelIndex = -1;
let initialRevealTimer = 0;
let revealTimer = 0;
let transitionTimer = 0;
let scrollAnimationFrame = 0;
let isTransitioning = true;
let touchStartY = 0;
let particleAnimationFrame = 0;
const particles = [];
const frameCache = new Map();
const INITIAL_REVEAL_DELAY = 1500;
const PARTICLE_DISSOLVE_DELAY = 460;
const CARD_REVEAL_DELAY = 1850;
const SOFT_ENTER_DURATION = 2400;
const TRANSITION_LOCK_DURATION = CARD_REVEAL_DELAY + 1400;

const resizeParticleCanvas = () => {
  const ratio = Math.min(globalThis.devicePixelRatio || 1, 2);
  particleCanvas.width = Math.floor(globalThis.innerWidth * ratio);
  particleCanvas.height = Math.floor(globalThis.innerHeight * ratio);
  particleContext.setTransform(ratio, 0, 0, ratio, 0, 0);
};

const animateParticles = () => {
  particleContext.clearRect(0, 0, globalThis.innerWidth, globalThis.innerHeight);
  const now = performance.now();

  for (let index = particles.length - 1; index >= 0; index -= 1) {
    const particle = particles[index];
    const age = now - particle.createdAt;
    const progress = Math.min(age / particle.life, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const x = particle.x + particle.vx * age * 0.06;
    const y = particle.y + particle.vy * age * 0.06 - ease * 18;
    const alpha = (1 - progress) * particle.alpha;

    particleContext.globalAlpha = alpha;
    particleContext.fillStyle = particle.color;
    particleContext.beginPath();
    particleContext.arc(x, y, particle.size * (1 - progress * 0.35), 0, Math.PI * 2);
    particleContext.fill();

    if (progress >= 1) {
      particles.splice(index, 1);
    }
  }

  particleContext.globalAlpha = 1;

  if (particles.length) {
    particleAnimationFrame = globalThis.requestAnimationFrame(animateParticles);
  } else {
    particleAnimationFrame = 0;
  }
};

const dissolveCard = (card) => {
  if (prefersReducedMotion || !card) return;

  const rect = card.getBoundingClientRect();
  const particleCount = Math.min(220, Math.max(90, Math.round((rect.width * rect.height) / 4200)));
  const colors = ["rgba(246, 229, 188, 0.92)", "rgba(235, 225, 210, 0.78)", "rgba(214, 178, 94, 0.72)"];
  const createdAt = performance.now();

  for (let index = 0; index < particleCount; index += 1) {
    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + Math.random() * rect.height;
    const fromCenter = (x - (rect.left + rect.width / 2)) / rect.width;

    particles.push({
      x,
      y,
      vx: fromCenter * 3 + (Math.random() - 0.5) * 1.8,
      vy: -0.8 - Math.random() * 1.6,
      size: 0.9 + Math.random() * 2.2,
      alpha: 0.45 + Math.random() * 0.45,
      life: 1550 + Math.random() * 850,
      color: colors[index % colors.length],
      createdAt,
    });
  }

  if (!particleAnimationFrame) {
    particleAnimationFrame = globalThis.requestAnimationFrame(animateParticles);
  }
};

const materializeCard = (card) => {
  if (prefersReducedMotion || !card) return;

  const rect = card.getBoundingClientRect();
  const particleCount = Math.min(140, Math.max(56, Math.round((rect.width * rect.height) / 7000)));
  const colors = ["rgba(246, 229, 188, 0.42)", "rgba(235, 225, 210, 0.34)", "rgba(214, 178, 94, 0.3)"];
  const createdAt = performance.now();

  for (let index = 0; index < particleCount; index += 1) {
    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + Math.random() * rect.height;

    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -0.15 - Math.random() * 0.45,
      size: 0.55 + Math.random() * 1.35,
      alpha: 0.16 + Math.random() * 0.28,
      life: 1700 + Math.random() * 900,
      color: colors[index % colors.length],
      createdAt,
    });
  }

  if (!particleAnimationFrame) {
    particleAnimationFrame = globalThis.requestAnimationFrame(animateParticles);
  }
};

const getScrollProgress = () => {
  const scrollable = Math.max(root.scrollHeight - globalThis.innerHeight, 1);
  return Math.min(Math.max(globalThis.scrollY / scrollable, 0), 1);
};

const formatFramePath = (index) => {
  const padded = String(index).padStart(4, "0");
  return CONFIG.FRAME_PATH_PATTERN.replace("{index}", padded);
};

const preloadFrames = (start, end) => {
  for (let i = start; i <= end; i += 1) {
    if (frameCache.has(i)) continue;
    const img = new Image();
    img.src = formatFramePath(i);
    frameCache.set(i, img);
  }
};

const applyFrameAtProgress = (progress) => {
  const frameIndex = Math.min(
    CONFIG.TOTAL_FRAMES,
    Math.max(1, Math.round(progress * (CONFIG.TOTAL_FRAMES - 1) + 1))
  );

  if (!frameCache.has(frameIndex)) {
    const img = new Image();
    img.src = formatFramePath(frameIndex);
    frameCache.set(frameIndex, img);
  }

  frameLayer.src = frameCache.get(frameIndex).src;
};

const applyVideoAtProgress = (progress) => {
  if (!isVideoEnabled || !duration) return;
  const target = progress * duration;
  if (Math.abs(bgVideo.currentTime - target) > 0.016) {
    bgVideo.currentTime = target;
  }
};

const easeInOutQuart = (progress) => {
  return progress < 0.5 ? 8 * progress * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 4) / 2;
};

const animateScrollToPanel = (targetIndex) => {
  const startY = globalThis.scrollY;
  const targetY = Math.min(root.scrollHeight - globalThis.innerHeight, Math.max(0, targetIndex * globalThis.innerHeight));
  const startedAt = performance.now();
  const durationMs = prefersReducedMotion ? 0 : CARD_REVEAL_DELAY;

  if (scrollAnimationFrame) {
    cancelAnimationFrame(scrollAnimationFrame);
  }

  const step = (now) => {
    const progress = durationMs ? Math.min((now - startedAt) / durationMs, 1) : 1;
    const eased = easeInOutQuart(progress);
    globalThis.scrollTo(0, startY + (targetY - startY) * eased);

    if (progress < 1) {
      scrollAnimationFrame = globalThis.requestAnimationFrame(step);
    } else {
      scrollAnimationFrame = 0;
      globalThis.scrollTo(0, targetY);
    }
  };

  scrollAnimationFrame = globalThis.requestAnimationFrame(step);
};

const revealCardAtIndex = (index) => {
  panelCards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === index);
  });
};

const updateScrollTopButton = () => {
  scrollTopButton.classList.add("is-visible");
};

const resetExperience = () => {
  clearTimeout(initialRevealTimer);
  clearTimeout(revealTimer);
  clearTimeout(transitionTimer);

  if (scrollAnimationFrame) {
    cancelAnimationFrame(scrollAnimationFrame);
    scrollAnimationFrame = 0;
  }

  if (particleAnimationFrame) {
    cancelAnimationFrame(particleAnimationFrame);
    particleAnimationFrame = 0;
  }

  activePanelIndex = 0;
  lastProgress = -1;
  isTransitioning = true;
  particles.length = 0;
  particleContext.clearRect(0, 0, globalThis.innerWidth, globalThis.innerHeight);
  revealCardAtIndex(-1);
  updateSectionMenu();
  globalThis.scrollTo(0, 0);

  bgVideo.pause();
  if (duration || bgVideo.readyState >= 1) {
    bgVideo.currentTime = 0;
  }
};

const startInitialReveal = () => {
  if (!panelCards[0]) return;

  clearTimeout(initialRevealTimer);
  initialRevealTimer = setTimeout(() => {
    if (activePanelIndex === 0) {
      materializeCard(panelCards[0]);
      panelCards[0].classList.add("is-soft-enter", "is-active");
      setTimeout(() => {
        panelCards[0].classList.remove("is-soft-enter");
        isTransitioning = false;
        updateScrollTopButton();
        updateSectionMenu();
      }, SOFT_ENTER_DURATION);
    }
  }, INITIAL_REVEAL_DELAY);
};

const updateSectionMenu = () => {
  sectionMenuButtons.forEach((button, index) => {
    const isActive = index === activePanelIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });
};

const navigateToIndex = (targetIndex, options = {}) => {
  if (!panels.length || (isTransitioning && !options.force)) return;

  const maxIndex = panels.length - 1;
  const nextIndex = Math.min(maxIndex, Math.max(0, targetIndex));

  if (nextIndex === activePanelIndex) return;

  const previousIndex = activePanelIndex;
  activePanelIndex = nextIndex;
  isTransitioning = true;
  updateScrollTopButton();
  updateSectionMenu();

  clearTimeout(initialRevealTimer);
  clearTimeout(revealTimer);
  clearTimeout(transitionTimer);

  animateScrollToPanel(activePanelIndex);

  panelCards.forEach((card, index) => {
    card.classList.toggle("is-active", index === previousIndex && prefersReducedMotion);
  });

  if (previousIndex >= 0 && panelCards[previousIndex]) {
    setTimeout(() => dissolveCard(panelCards[previousIndex]), prefersReducedMotion ? 0 : PARTICLE_DISSOLVE_DELAY);
  }

  revealTimer = setTimeout(
    () => {
      revealCardAtIndex(activePanelIndex);
      updateScrollTopButton();
      updateSectionMenu();
    },
    prefersReducedMotion ? 0 : CARD_REVEAL_DELAY
  );

  transitionTimer = setTimeout(
    () => {
      isTransitioning = false;
      if (activePanelIndex === maxIndex) {
        revealCardAtIndex(maxIndex);
      }
      updateScrollTopButton();
      updateSectionMenu();
    },
    prefersReducedMotion ? 0 : TRANSITION_LOCK_DURATION
  );
};

const handleScrollIntent = (direction) => {
  if (!direction) return;
  navigateToIndex(activePanelIndex + direction);
};

const updateVisualByScroll = () => {
  ticking = false;

  const progress = getScrollProgress();
  if (Math.abs(progress - lastProgress) < 0.0009) return;
  lastProgress = progress;

  if (CONFIG.USE_FRAMES_FALLBACK) {
    applyFrameAtProgress(progress);
    return;
  }

  if (isVideoEnabled && !prefersReducedMotion) {
    applyVideoAtProgress(progress);
  }
};

const scheduleUpdate = () => {
  if (!ticking) {
    ticking = true;
    globalThis.requestAnimationFrame(updateVisualByScroll);
  }
};

const enableFramesFallback = () => {
  frameLayer.classList.remove("hidden");
  bgVideo.classList.add("hidden");

  preloadFrames(1, Math.min(CONFIG.PRELOAD_INITIAL_FRAMES, CONFIG.TOTAL_FRAMES));
  if ("requestIdleCallback" in globalThis) {
    requestIdleCallback(() => preloadFrames(CONFIG.PRELOAD_INITIAL_FRAMES + 1, CONFIG.TOTAL_FRAMES));
  } else {
    setTimeout(() => preloadFrames(CONFIG.PRELOAD_INITIAL_FRAMES + 1, CONFIG.TOTAL_FRAMES), 120);
  }
  scheduleUpdate();
};

const enableLowDataMode = () => {
  isVideoEnabled = false;
  duration = 0;
  bgVideo.pause();
  bgVideo.removeAttribute("src");
  bgVideo.load();
  bgVideo.classList.add("hidden");
  frameLayer.classList.add("hidden");
};

const enableVideoMode = () => {
  if (!CONFIG.USE_VIDEO || shouldUseLowDataMode) {
    enableLowDataMode();
    return;
  }

  isVideoEnabled = true;
  bgVideo.classList.remove("hidden");
  bgVideo.src = isTouchFirstDevice ? CONFIG.MOBILE_VIDEO_SRC || CONFIG.VIDEO_SRC : CONFIG.VIDEO_SRC;
  bgVideo.load();
};

if (shouldUseLowDataMode) {
  enableLowDataMode();
} else if (CONFIG.USE_FRAMES_FALLBACK) {
  enableFramesFallback();
} else {
  bgVideo.addEventListener(
    "loadedmetadata",
    () => {
      duration = bgVideo.duration || 0;
      bgVideo.pause();
      bgVideo.currentTime = 0;
      if (prefersReducedMotion) {
        bgVideo.pause();
        bgVideo.currentTime = 0;
      } else {
        bgVideo.pause();
        scheduleUpdate();
      }
    },
    { once: true }
  );
  enableVideoMode();
}

resizeParticleCanvas();

const initializeExperience = () => {
  if (!panelCards.length) return;

  resetExperience();
  startInitialReveal();
  scheduleUpdate();
};

initializeExperience();
completeLoaderWhenReady();
globalThis.addEventListener("beforeunload", () => {
  globalThis.scrollTo(0, 0);
  if (duration) {
    bgVideo.currentTime = 0;
  }
});
globalThis.addEventListener("pageshow", (event) => {
  initializeExperience();
});
scrollTopButton.addEventListener("click", () => navigateToIndex(0));
sectionMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navigateToIndex(Number(button.dataset.index), { force: true });
  });
});
updateSectionMenu();
globalThis.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    if (Math.abs(event.deltaY) < 8) return;
    handleScrollIntent(event.deltaY > 0 ? 1 : -1);
  },
  { passive: false }
);
globalThis.addEventListener(
  "touchstart",
  (event) => {
    touchStartY = event.touches[0]?.clientY || 0;
  },
  { passive: true }
);
globalThis.addEventListener(
  "touchmove",
  (event) => {
    const currentY = event.touches[0]?.clientY || 0;
    const deltaY = touchStartY - currentY;
    if (Math.abs(deltaY) < 28) return;
    event.preventDefault();
    handleScrollIntent(deltaY > 0 ? 1 : -1);
  },
  { passive: false }
);
globalThis.addEventListener(
  "keydown",
  (event) => {
    const nextKeys = ["ArrowDown", "PageDown", " "];
    const previousKeys = ["ArrowUp", "PageUp"];

    if (nextKeys.includes(event.key)) {
      event.preventDefault();
      handleScrollIntent(1);
    }

    if (previousKeys.includes(event.key)) {
      event.preventDefault();
      handleScrollIntent(-1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      navigateToIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      navigateToIndex(panels.length - 1);
    }
  },
  { passive: false }
);
globalThis.addEventListener("scroll", scheduleUpdate, { passive: true });
globalThis.addEventListener(
  "resize",
  () => {
    resizeParticleCanvas();
    scheduleUpdate();
  },
  { passive: true }
);
globalThis.addEventListener("load", initializeExperience, { passive: true });
