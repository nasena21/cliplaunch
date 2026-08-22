window.CLIPLAUNCH_CONFIG = {
  // Replace this placeholder before publishing the site.
  contactEmail: 'contact@cliplaunch.net'
};

(function () {
  const config = window.CLIPLAUNCH_CONFIG;
  document.querySelectorAll('[data-contact-email]').forEach(function (element) {
    element.textContent = config.contactEmail;
    if (element.tagName === 'A') {
      element.href = 'mailto:' + config.contactEmail;
    }
  });
})();
