function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

const sectionStacked = document.querySelector('.stacked-images-section');
const imgTopRight = document.getElementById('image3');
const imgBottomRight = document.getElementById('image4');
const totalScrollStacked = sectionStacked ? sectionStacked.offsetHeight - window.innerHeight : 0;
const imageTopThresholdStart = 0.33, imageTopThresholdEnd = 0.50;
const imageBottomThresholdStart = 0.66, imageBottomThresholdEnd = 0.83;

function updatePinnedSection() {
  if (!sectionStacked) return;
  const rect = sectionStacked.getBoundingClientRect();
  let progress = clamp(-rect.top / totalScrollStacked, 0, 1);

  if (progress < imageTopThresholdStart) {
    imgTopRight.style.transform = 'translateX(100vw)';
  } else if (progress < imageTopThresholdEnd) {
    let norm = (progress - imageTopThresholdStart) / (imageTopThresholdEnd - imageTopThresholdStart);
    let offset = (1 - norm) * 100;
    imgTopRight.style.transform = `translateX(${offset}vw)`;
  } else {
    imgTopRight.style.transform = 'translateX(0)';
  }

  if (progress < imageBottomThresholdStart) {
    imgBottomRight.style.transform = 'translateX(100vw)';
  } else if (progress < imageBottomThresholdEnd) {
    let norm = (progress - imageBottomThresholdStart) / (imageBottomThresholdEnd - imageBottomThresholdStart);
    let offset = (1 - norm) * 100;
    imgBottomRight.style.transform = `translateX(${offset}vw)`;
  } else {
    imgBottomRight.style.transform = 'translateX(0)';
  }
}

const horizontalSection_910 = document.getElementById('horizontal9-10');
const horizontalWrapper_910 = horizontalSection_910 ? horizontalSection_910.querySelector('.horizontal-wrapper') : null;
const horizontalImage9 = document.getElementById('horizontalImage9');
const horizontalImage10 = document.getElementById('horizontalImage10');
const totalTranslate_910 = horizontalWrapper_910 ? horizontalWrapper_910.scrollWidth - window.innerWidth : 0;

function updateHorizontalTranslation() {
  if (!horizontalSection_910) return;
  const rect = horizontalSection_910.getBoundingClientRect();
  const totalScroll = horizontalSection_910.offsetHeight - window.innerHeight;
  const progress = clamp(-rect.top / totalScroll, 0, 1);
  if (horizontalWrapper_910) {
    horizontalWrapper_910.style.transform = `translateX(-${progress * totalTranslate_910}px)`;
  }
}

function updateHorizontalFade() {
  if (!horizontalSection_910) return;
  const rect = horizontalSection_910.getBoundingClientRect();
  const totalScroll = horizontalSection_910.offsetHeight - window.innerHeight;
  const progress = clamp(-rect.top / totalScroll, 0, 1);
  
  let opacity9 = (progress < 0.3) ? (progress / 0.3) : (progress < 0.7 ? 1 : (1 - (progress - 0.7) / 0.3));
  horizontalImage9.style.opacity = opacity9;
  
  let opacity10, src10;
  if (progress < 0.3) {
    opacity10 = 0;
    src10 = `img/panel10a.png`;
  } else if (progress < 0.5) {
    opacity10 = (progress - 0.3) / 0.2;
    src10 = `img/panel10a.png`;
  } else if (progress < 0.7) {
    opacity10 = 1;
    let frameProgress = (progress - 0.5) / 0.2;
    let frameIndex = Math.floor(frameProgress * 6);
    frameIndex = frameIndex > 5 ? 5 : frameIndex;
    let frameLetter = String.fromCharCode(97 + frameIndex);
    src10 = `img/panel10${frameLetter}.png`;
  } else {
    let fadeOut = (progress - 0.7) / 0.3;
    opacity10 = 1 - fadeOut;
    src10 = `img/panel10f.png`;
  }
  horizontalImage10.style.opacity = opacity10;
  horizontalImage10.src = src10;
}

function updateFade(sectionId, imgId) {
  const section = document.getElementById(sectionId);
  const img = document.getElementById(imgId);
  if (!section || !img) return;
  const rect = section.getBoundingClientRect();
  const totalScroll = section.offsetHeight - window.innerHeight;
  let progress = clamp(-rect.top / totalScroll, 0, 1);
  
  if (sectionId === "fade6") {
    let opacity, src;
    if (progress < 0.3) {
      opacity = progress / 0.3;
      src = `img/panel6a.png`;
    } else if (progress <= 0.7) {
      opacity = 1;
      let frameProgress = (progress - 0.3) / 0.4;
      let frameIndex = Math.floor(frameProgress * 8);
      frameIndex = frameIndex > 7 ? 7 : frameIndex;
      let frameLetter = String.fromCharCode(97 + frameIndex);
      src = `img/panel6${frameLetter}.png`;
    } else {
      opacity = (1 - progress) / 0.3;
      src = `img/panel6h.png`;
    }
    img.style.opacity = opacity;
    img.src = src;
  } else if (sectionId === "fade13") {
    let opacity, src;
    if (progress < 0.3) {
      opacity = progress / 0.3;
      src = `img/panel13a.png`;
    } else if (progress <= 0.7) {
      opacity = 1;
      let frameProgress = (progress - 0.3) / 0.4;
      let frameIndex = Math.floor(frameProgress * 2);
      frameIndex = frameIndex > 1 ? 1 : frameIndex;
      let frameLetter = String.fromCharCode(97 + frameIndex);
      src = `img/panel13${frameLetter}.png`;
    } else {
      opacity = (1 - progress) / 0.3;
      src = `img/panel13b.png`;
    }
    img.style.opacity = opacity;
    img.src = src;
  } else {
    let opacity = progress <= 0.5 ? (progress / 0.5) : ((1 - progress) / 0.5);
    img.style.opacity = opacity;
  }
}

function updateGroup() {
  const section = document.getElementById('group11-12');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const totalScroll = section.offsetHeight - window.innerHeight;
  let progress = clamp(-rect.top / totalScroll, 0, 1);
  
  const img11 = document.getElementById('groupImage11');
  const img12 = document.getElementById('groupImage12');
  
  if (progress < 0.3) {
    let norm = progress / 0.3;
    img11.style.opacity = norm;
    img11.style.transform = `translateX(-${(1 - norm) * 100}vw)`;
  } else {
    img11.style.opacity = 1;
    img11.style.transform = 'translateX(0)';
  }
  
  if (progress < 0.3) {
    img12.style.opacity = 0;
    img12.style.transform = 'translateX(-100vw)';
  } else if (progress < 0.6) {
    let norm = (progress - 0.3) / 0.3;
    img12.style.opacity = norm;
    img12.style.transform = `translateX(-${(1 - norm) * 100}vw)`;
  } else {
    img12.style.opacity = 1;
    img12.style.transform = 'translateX(0)';
  }
}

const horizontalSection_1819 = document.getElementById('horizontal18-19');
const horizontalImage18 = document.getElementById('horizontalImage18');
const horizontalImage19 = document.getElementById('horizontalImage19');

function updateHorizontalFade2() {
  if (!horizontalSection_1819) return;
  const rect = horizontalSection_1819.getBoundingClientRect();
  const totalScroll = horizontalSection_1819.offsetHeight - window.innerHeight;
  let progress = clamp(-rect.top / totalScroll, 0, 1);
  
  let opacity18 = (progress < 0.3) ? (progress / 0.3) : (progress < 0.5 ? 1 : Math.max(1 - (progress - 0.5) / 0.5, 0));
  horizontalImage18.style.opacity = opacity18;
  
  let opacity19 = (progress < 0.3) ? 0 : (progress < 0.5 ? ((progress - 0.3) / 0.2) : (progress < 0.7 ? 1 : Math.max(1 - (progress - 0.7) / 0.3, 0)));
  horizontalImage19.style.opacity = opacity19;
}

const panel21_22Section = document.querySelector('.panel21-22-section');
const panel22 = document.getElementById('panel22');
function updatePanel21_22() {
  if (!panel21_22Section || !panel22) return;
  const rect = panel21_22Section.getBoundingClientRect();
  const totalScroll = panel21_22Section.offsetHeight - window.innerHeight;
  let progress = clamp(-rect.top / totalScroll, 0, 1);
  if (progress < 0.5) {
    let translateY = 100 * (1 - progress * 2);
    panel22.style.transform = `translateY(${translateY}vh)`;
  } else {
    panel22.style.transform = `translateY(0)`;
  }
}

const horizontalSection_2527 = document.getElementById('horizontal25-27');
const horizontalWrapper_2527 = horizontalSection_2527 ? horizontalSection_2527.querySelector('.horizontal-wrapper') : null;
function updateHorizontalIn2527() {
  if (!horizontalSection_2527 || !horizontalWrapper_2527) return;
  const rect = horizontalSection_2527.getBoundingClientRect();
  const totalScroll = horizontalSection_2527.offsetHeight - window.innerHeight;
  let progress = clamp(-rect.top / totalScroll, 0, 1);
  let translateX = 0;
  if (progress < 0.5) {
    translateX = 100 * (1 - progress * 2);
  }
  const panels = horizontalWrapper_2527.querySelectorAll('.three-panel img');
  panels.forEach(img => {
    img.style.transform = `translateX(${translateX}vw)`;
    img.style.opacity = 1;
  });
}

const horizontalSection_2829 = document.getElementById('horizontal28-29');
const horizontalWrapper_2829 = horizontalSection_2829 ? horizontalSection_2829.querySelector('.horizontal-wrapper') : null;
const totalTranslate_2829 = horizontalWrapper_2829 ? horizontalWrapper_2829.scrollWidth - window.innerWidth : 0;
function updateHorizontal28_29() {
  if (!horizontalSection_2829 || !horizontalWrapper_2829) return;
  const rect = horizontalSection_2829.getBoundingClientRect();
  const totalScroll = horizontalSection_2829.offsetHeight - window.innerHeight;
  let progress = clamp(-rect.top / totalScroll, 0, 1);
  horizontalWrapper_2829.style.transform = `translateX(-${progress * totalTranslate_2829}px)`;
}

window.addEventListener('scroll', () => {
  updatePinnedSection();
  updateFade('fade6', 'fadeImage6');
  updateFade('fade7', 'fadeImage7');
  updateFade('fade13', 'fadeImage13');
  updateFade('fade15', 'fadeImage15');
  updateFade('fade16', 'fadeImage16');
  updateHorizontalTranslation();
  updateHorizontalFade();
  updateGroup();
  updateHorizontalFade2();
  updatePanel21_22();
  updateHorizontalIn2527();
  updateHorizontal28_29();
  updateFade('fade23', 'fadeImage23');
});

const soundSections = document.querySelectorAll('[data-sound]');
let currentSound = "";
let soundPositions = {}; 
let currentAudio = new Audio();
currentAudio.loop = true;
currentAudio.volume = 0;
let standbyAudio = new Audio();
standbyAudio.loop = true;
standbyAudio.volume = 0;
document.body.appendChild(currentAudio);
document.body.appendChild(standbyAudio);

let masterVolume = 0;
const volumeSlider = document.getElementById('volumeSlider');
if (volumeSlider) {
  masterVolume = parseFloat(volumeSlider.value);
  volumeSlider.addEventListener('input', function(){
    masterVolume = parseFloat(this.value);
    currentAudio.volume = masterVolume;
  });
}

function crossFade(fromAudio, toAudio, duration = 1000) {
  const steps = 20;
  const stepTime = duration / steps;
  let currentStep = 0;
  const fromInitialVolume = fromAudio.volume;
  const targetVolume = masterVolume;
  const fadeInterval = setInterval(() => {
    currentStep++;
    fromAudio.volume = Math.max(fromInitialVolume * (1 - currentStep / steps), 0);
    toAudio.volume = Math.min(targetVolume * (currentStep / steps), targetVolume);
    if (currentStep >= steps) {
      clearInterval(fadeInterval);
      if (currentSound) {
        soundPositions[currentSound] = fromAudio.currentTime;
      }
      fromAudio.pause();
    }
  }, stepTime);
}

function playSound(soundFile) {
  if (soundFile === currentSound) return;
  
  standbyAudio.src = "sound/" + soundFile;
  standbyAudio.currentTime = soundPositions[soundFile] !== undefined ? soundPositions[soundFile] : 0;
  standbyAudio.volume = 0;
  standbyAudio.play();
  crossFade(currentAudio, standbyAudio, 1000);
  [currentAudio, standbyAudio] = [standbyAudio, currentAudio];
  currentSound = soundFile;
}

const soundObserverOptions = {
  root: null,
  threshold: 0.25
};

const soundObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const soundFile = entry.target.getAttribute('data-sound');
      if (soundFile && soundFile !== currentSound) {
        playSound(soundFile);
      }
    }
  });
}, soundObserverOptions);

soundSections.forEach(section => soundObserver.observe(section));

window.addEventListener('load', () => {
  if (!currentSound && soundSections.length > 0) {
    const firstSound = soundSections[0].getAttribute('data-sound');
    playSound(firstSound);
  }
});

window.addEventListener('load', () => {
  const titleCard = document.getElementById('titleCard');
  if (titleCard) {
    setTimeout(() => {
      titleCard.style.opacity = '0';
      setTimeout(() => {
        titleCard.style.display = 'none';
      }, 500);
    }, 2000);
  }
});

const scrollPrompt = document.getElementById('scrollPrompt');
let scrollTimer;
window.addEventListener('scroll', () => {
  scrollPrompt.style.opacity = '1';
  scrollPrompt.style.pointerEvents = 'auto';
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    scrollPrompt.style.opacity = '0';
    scrollPrompt.style.pointerEvents = 'none';
  }, 800);
});

const artistBubble = document.getElementById('artistStatementBubble');
const artistModal = document.getElementById('artistStatementModal');
const modalClose = document.getElementById('modalClose');

artistBubble.addEventListener('click', () => {
  artistModal.classList.add('show');
});

modalClose.addEventListener('click', () => {
  artistModal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === artistModal) {
    artistModal.classList.remove('show');
  }
});

const aboutBubble = document.getElementById('aboutArtistBubble');
const aboutModal = document.getElementById('aboutArtistModal');
if (aboutBubble && aboutModal) {
  aboutBubble.addEventListener('click', () => {
    console.log("About Artist Bubble clicked");
    aboutModal.classList.add('show');
  });
  aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal || e.target.classList.contains('modalClose')) {
      aboutModal.classList.remove('show');
    }
  });
} else {
  console.error("About Artist elements not found.");
}
