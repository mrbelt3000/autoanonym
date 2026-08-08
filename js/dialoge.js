(function () {
  "use strict";
  function confirmationContent(options) {
    return `<form class="form-grid" id="confirmation-form">
      <div class="confirmation-symbol confirmation-${options.tone || "primary"}" aria-hidden="true">!</div>
      <p>${options.text}</p>
      ${options.reason ? `<div class="field"><label for="confirmation-reason">Begründung (optional)</label><textarea id="confirmation-reason" name="reason" maxlength="500" placeholder="Begründung für die Entscheidung"></textarea></div>` : ""}
      <div class="dialog-actions"><button class="button button-secondary" type="button" data-close-modal>Abbrechen</button><button class="button ${options.tone === "danger" ? "button-danger" : options.tone === "success" ? "button-success" : "button-primary"}" type="submit">${options.confirmLabel}</button></div>
    </form>`;
  }
  window.AutoAnonymDialoge = { confirmationContent };
}());
