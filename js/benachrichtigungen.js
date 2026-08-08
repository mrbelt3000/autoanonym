(function () {
  "use strict";

  const typeLabels = {
    NEUE_NACHRICHT: "Neue Nachricht",
    NEUES_ANGEBOT: "Neues Angebot",
    ANGEBOT_ANGENOMMEN: "Angebot angenommen",
    TERMIN_BESTAETIGT: "Termin bestätigt",
    TERMIN_GEAENDERT: "Termin geändert",
    FREIGABESTATUS: "Freigabestatus",
    AUFTRAG_ABGESCHLOSSEN: "Auftrag abgeschlossen",
    GUTACHTEN_HOCHGELADEN: "Gutachten hochgeladen",
    SUPPORTANTWORT: "Supportantwort",
    NEUE_ANFRAGE: "Neue Anfrage",
    NEUER_SUPPORTFALL: "Neuer Supportfall",
    SUPPORT_ESKALIERT: "Support eskaliert"
  };

  function create(state, type, text, targetRole) {
    state.notifications.unshift({ id: `NOT-${state.nextIds.notification++}`, type, text, targetRole, createdAt: new Date().toISOString(), read: false });
  }

  function render(state, escapeHtml) {
    const list = document.getElementById("notifications-list");
    const relevant = state.notifications.filter((item) => !item.targetRole || item.targetRole === state.currentRole);
    document.getElementById("notification-count").textContent = relevant.filter((item) => !item.read).length;
    list.innerHTML = relevant.length
      ? relevant.map((item) => `
        <article class="list-card notification ${item.read ? "" : "unread"}">
          <div class="split"><span class="badge badge-info">${escapeHtml(typeLabels[item.type] || "Aktualisierung")}</span><time class="hint">${new Date(item.createdAt).toLocaleString("de-DE")}</time></div>
          <p class="small">${escapeHtml(item.text)}</p>
        </article>`).join("")
      : '<div class="empty">Keine Benachrichtigungen für diesen Bereich.</div>';
  }

  function markAllRead(state) {
    state.notifications.forEach((item) => { if (!item.targetRole || item.targetRole === state.currentRole) item.read = true; });
  }

  function inline(state, escapeHtml, role) {
    const relevant = state.notifications.filter((item) => !item.targetRole || item.targetRole === role);
    return `<section><div class="section-heading"><div><p class="eyebrow">Aktuelles</p><h2>Benachrichtigungen</h2></div><button class="button button-secondary button-small" type="button" data-mark-notifications-read>Alle als gelesen markieren</button></div><div class="stack">${relevant.length ? relevant.map((item) => `<article class="list-card notification ${item.read ? "" : "unread"}"><div class="split"><span class="badge badge-info">${escapeHtml(typeLabels[item.type] || "Aktualisierung")}</span><time class="hint">${new Date(item.createdAt).toLocaleString("de-DE")}</time></div><p>${escapeHtml(item.text)}</p></article>`).join("") : '<div class="empty">Keine Benachrichtigungen vorhanden.</div>'}</div></section>`;
  }

  window.AutoAnonymBenachrichtigungen = { create, render, markAllRead, inline };
}());
