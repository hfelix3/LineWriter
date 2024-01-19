const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // TODO: Add an event handler to the `beforeinstallprompt` event
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    // TODO: Implement a click event handler on the `butInstall` element
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // TODO: Add an handler for the `appinstalled` event
    window.deferredPrompt = null;
});
