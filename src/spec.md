# Specification

## Summary
**Goal:** Build a client-side Rose Day greeting app with a tap-to-enter splash screen, a themed main greeting card, and continuous falling rose emoji animation.

**Planned changes:**
- Create a full-screen splash page with an English “Tap to enter” prompt that navigates to the main page on click/tap (and optionally Enter/Space).
- Implement the main greeting page UI with the specified radial pink-to-maroon gradient background, centered glassmorphism card, exact text content (“Happy Rose Day 🌹”, “Jayasri”, message, signature), and three gently floating rose emojis.
- Add a falling rose emoji effect that spawns roses at random x-positions with randomized fall durations (~4–7s), rotates while falling, and cleans up elements and timers on unmount.
- Apply a consistent warm/romantic Rose Day theme across both pages using Tailwind/scoped styles (no blue/purple primary palette).

**User-visible outcome:** Users land on a “Tap to enter” splash screen, then enter a Rose Day greeting page showing the specified message in a styled card with floating roses and a continuous falling rose animation.
