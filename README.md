# AutoAnonym

AutoAnonym ist ein mobil zuerst gestalteter Frontend-Prototyp für anonyme Kfz-Reparaturanfragen, Werkstattangebote und Kfz-Gutachten. Der aktuelle Stand arbeitet ausschließlich mit Beispieldaten im Browser. Es gibt noch kein Backend, keine Datenbank, keine echte Anmeldung und keine Zahlungsanbindung.

## Rollen

- **Kunde:** Fahrzeuge verwalten, Reparatur- und Gutachteranfragen erstellen, Angebote annehmen, Nachrichten senden und Supportfälle eröffnen.
- **Werkstatt:** Registrierung einreichen, Freigabestatus sehen, Reparaturanfragen bearbeiten und Angebote abgeben.
- **Gutachter:** Registrierung einreichen, Gutachteranfragen bearbeiten, Angebote abgeben und einen späteren Gutachten-Upload simulieren.
- **Kundensupport:** Supportfälle bearbeiten, interne Notizen anlegen und Fälle eskalieren.
- **Admin:** Werkstätten und Gutachter freigeben, ablehnen, sperren oder erneut prüfen sowie Kunden, Aufträge und Supportfälle überblicken.

Jede Rolle besitzt ein eigenes Portal mit einer getrennten Bereichsnavigation. Der Rollenwechsel ist ausschließlich im deutlich gekennzeichneten **Demo- und Entwicklermodus** verfügbar und stellt keine echte Benutzerfunktion dar.

## Freigabestatus

Technisch werden ausschließlich ASCII-Bezeichner verwendet:

- `IN_PRUEFUNG`
- `FREIGEGEBEN`
- `ABGELEHNT`
- `GESPERRT`

In der Oberfläche erscheinen die deutschen Beschriftungen „In Prüfung“, „Freigegeben“, „Abgelehnt“ und „Gesperrt“.

## Projektstruktur

```text
autoanonym/
├─ index.html
├─ README.md
├─ css/styles.css
├─ js/
│  ├─ app.js
│  ├─ kunde.js
│  ├─ werkstatt.js
│  ├─ gutachter.js
│  ├─ support.js
│  ├─ admin.js
│  ├─ nachrichten.js
│  ├─ benachrichtigungen.js
│  ├─ navigation.js
│  ├─ dialoge.js
│  └─ status.js
├─ assets/images/
├─ assets/icons/
└─ docs/roadmap.md
```

## Lokal starten

Die Seite kann direkt über `index.html` geöffnet werden. Für realistischeres lokales Verhalten empfiehlt sich ein einfacher statischer Webserver, zum Beispiel:

```powershell
python -m http.server 8000
```

Danach ist der Prototyp unter `http://localhost:8000` erreichbar.

## Technische Hinweise

- Reines HTML, CSS und JavaScript ohne Framework oder Build-Schritt.
- Rollen- und Freigabewechsel sind Demo-Funktionen und keine echte Zugriffskontrolle.
- Nachrichten werden als getrennte Gesprächsverläufe für Anfragen, Aufträge und Supportfälle dargestellt.
- Kritische Aktionen erfordern Bestätigungsdialoge; Ablehnung und Sperrung können begründet werden.
- Sämtlicher Zustand liegt nur im Arbeitsspeicher und wird beim Neuladen zurückgesetzt.
- Dynamische Nutzereingaben werden vor der Ausgabe maskiert.
- Echte Identitäts-, Datei-, Zahlungs- und Auftragsdaten dürfen erst mit einer abgesicherten Backend-Architektur verarbeitet werden.

Die nächsten Entwicklungsschritte stehen in [docs/roadmap.md](docs/roadmap.md).
