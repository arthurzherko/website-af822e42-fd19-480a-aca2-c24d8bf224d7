export const fadeIn = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 20
  }
}

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(0,255,255,0.5)',
      '0 0 20px rgba(0,255,255,0.3)',
      '0 0 10px rgba(0,255,255,0.5)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}
