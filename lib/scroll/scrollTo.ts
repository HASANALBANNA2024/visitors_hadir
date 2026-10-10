/** Smooth scroll to the element with this id (the sticky header offset is set in CSS) */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** Smooth scroll to the very top of the page */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
