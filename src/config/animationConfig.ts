export const animationConfig = {
  // Base durations
  baseDuration: 500, // ms - the standard animation duration

  // Derived timing values
  get cardTransfer() { return this.baseDuration },
  get cardReveal() { return this.baseDuration * 1.2 },
  get cardComplete() { return this.baseDuration * 1.5 },

  // Delays
  get staggerDelay() { return this.baseDuration * 0.4 }, // Delay between staggered animations
  get stateUpdateDelay() { return this.baseDuration + 100 }, // Wait for animation to complete before updating state

  // For initial card distribution
  get initialDealStagger() { return this.baseDuration * 0.4 }, // Time between each card being dealt

  // For AI thinking simulation
  get aiThinkingTime() { return this.baseDuration * 2 }, // How long the AI appears to "think"
};

