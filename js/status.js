(function () {
  "use strict";
  const labels = { IN_PRUEFUNG: "In Prüfung", FREIGEGEBEN: "Freigegeben", ABGELEHNT: "Abgelehnt", GESPERRT: "Gesperrt", OFFEN: "Offen", IN_BEARBEITUNG: "In Bearbeitung", ESKALIERT: "Eskaliert", ANGENOMMEN: "Angenommen", ABGESCHLOSSEN: "Abgeschlossen" };
  function label(status) { return labels[status] || status; }
  function tone(status) {
    if (["FREIGEGEBEN", "ANGENOMMEN", "ABGESCHLOSSEN"].includes(status)) return "success";
    if (["ABGELEHNT", "GESPERRT", "ESKALIERT"].includes(status)) return "danger";
    if (["IN_PRUEFUNG", "OFFEN", "IN_BEARBEITUNG"].includes(status)) return "warning";
    return "info";
  }
  function badge(status) { return `<span class="badge badge-${tone(status)}"><span class="status-dot" aria-hidden="true"></span>${label(status)}</span>`; }
  window.AutoAnonymStatus = { label, tone, badge };
}());
