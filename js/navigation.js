(function () {
  "use strict";
  const config = {
    KUNDE: [["start", "Start"], ["fahrzeuge", "Fahrzeuge"], ["anfragen", "Anfragen"], ["auftraege", "Aufträge"], ["nachrichten", "Nachrichten"], ["support", "Support"], ["profil", "Profil"]],
    WERKSTATT: [["dashboard", "Dashboard"], ["anfragen", "Neue Anfragen"], ["angebote", "Meine Angebote"], ["auftraege", "Aufträge"], ["nachrichten", "Nachrichten"], ["benachrichtigungen", "Benachrichtigungen"], ["profil", "Profil"]],
    GUTACHTER: [["dashboard", "Dashboard"], ["anfragen", "Gutachteranfragen"], ["angebote", "Meine Angebote"], ["auftraege", "Aufträge"], ["gutachten", "Gutachten"], ["nachrichten", "Nachrichten"], ["benachrichtigungen", "Benachrichtigungen"], ["profil", "Profil"]],
    KUNDENSUPPORT: [["dashboard", "Dashboard"], ["neu", "Neue Supportfälle"], ["bearbeitung", "In Bearbeitung"], ["eskaliert", "Eskalierte Fälle"], ["nachrichten", "Nachrichten"], ["benachrichtigungen", "Benachrichtigungen"]],
    ADMIN: [["dashboard", "Dashboard"], ["werkstaetten", "Werkstätten"], ["gutachter", "Gutachter"], ["kunden", "Kunden"], ["auftraege", "Aufträge"], ["support", "Support"], ["zahlungen", "Zahlungen"], ["bewertungen", "Bewertungen"], ["benachrichtigungen", "Benachrichtigungen"], ["einstellungen", "Einstellungen"]]
  };
  const portalNames = { KUNDE: "Kundenportal", WERKSTATT: "Werkstattportal", GUTACHTER: "Gutachterportal", KUNDENSUPPORT: "Supportportal", ADMIN: "Adminportal" };

  function render(role, active, locked) {
    const items = config[role];
    const activeLabel = items.find(([key]) => key === active)?.[1] || items[0][1];
    return `<div class="portal-nav-wrap"><button class="portal-nav-toggle" type="button" data-portal-nav-toggle aria-expanded="false"><span>Bereich: <strong>${activeLabel}</strong></span><span class="chevron" aria-hidden="true"></span></button><nav class="portal-navigation" aria-label="Navigation ${portalNames[role]}">${items.map(([key, label]) => { const disabled = locked.includes(key); return `<button type="button" data-section-target="${key}" class="${key === active ? "active" : ""}" ${disabled ? 'disabled title="Erst nach Freigabe verfügbar"' : ""}>${label}${disabled ? '<span class="nav-lock" aria-hidden="true"></span>' : ""}</button>`; }).join("")}</nav></div>`;
  }
  function defaultSection(role) { return config[role][0][0]; }
  function portalName(role) { return portalNames[role]; }
  window.AutoAnonymNavigation = { render, defaultSection, portalName };
}());
