// Reusable animation variants for framer-motion

export const fadeIn = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: false, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: false, margin: "-100px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Stagger container — wrap around a list of items
export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: false, margin: "-50px" },
  transition: {
    staggerChildren: 0.1,
    delayChildren: 0.2
  }
};

// Stagger item — use inside a staggerContainer
export const staggerItem = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerItemLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerItemRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerItemScale = {
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Floating animation for decorative elements
export const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Pulse glow for buttons / highlights
export const pulseGlow = {
  boxShadow: [
    "0 0 0 0 rgba(80, 68, 229, 0.4)",
    "0 0 0 15px rgba(80, 68, 229, 0)",
    "0 0 0 0 rgba(80, 68, 229, 0)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Navbar slide down
export const navbarSlide = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};