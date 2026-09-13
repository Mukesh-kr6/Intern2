(() => {
  const help = document.querySelector("#help-dialog");
  const openHelp = document.querySelector("#open-help");
  const request = document.querySelector("#request-dialog");
  const openRequest = document.querySelector("#open-request");

  if (help && openHelp) openHelp.addEventListener("click", () => help.showModal());
  if (request && openRequest) openRequest.addEventListener("click", () => request.showModal());

  document.querySelectorAll("dialog").forEach(dialog => {
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
  });
})();