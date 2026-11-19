const header = document.querySelector(".site-header");
const navigation = [...document.querySelectorAll("[data-section-link]")].map((link) => ({
  link,
  section: document.getElementById(link.hash.slice(1)),
}));

let activeLink = navigation[0].link;
let framePending = false;

function updateNavigation() {
  framePending = false;
  const headerBottom = header.getBoundingClientRect().bottom;
  const marker = headerBottom + 32;
  let active = navigation[0];

  for (const item of navigation) {
    if (item.section.getBoundingClientRect().top > marker) break;
    active = item;
  }

  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  if (atBottom) {
    // Several anchors can share the same scroll position near the end of a short page.
    const requested = navigation.find(({ link, section }) =>
      link.hash === window.location.hash && section.getBoundingClientRect().top >= headerBottom - 1,
    );
    active = requested ?? navigation.at(-1);
  }

  if (active.link !== activeLink) {
    activeLink.removeAttribute("aria-current");
    active.link.setAttribute("aria-current", "location");
    activeLink = active.link;
  }
}

function scheduleNavigationUpdate() {
  if (framePending) return;
  framePending = true;
  window.requestAnimationFrame(updateNavigation);
}

window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
window.addEventListener("resize", scheduleNavigationUpdate);
window.addEventListener("pageshow", scheduleNavigationUpdate);
window.addEventListener("hashchange", scheduleNavigationUpdate);
scheduleNavigationUpdate();
