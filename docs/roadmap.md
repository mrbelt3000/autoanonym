# Roadmap für AutoAnonym

## 1. Fachliches Datenmodell und API-Verträge

- Entitäten für Benutzer, Rollen, Fahrzeuge, Anfragen, Angebote, Aufträge, Gutachten, Nachrichten, Benachrichtigungen und Supportfälle definieren.
- Zulässige Statusübergänge dokumentieren und zentral validieren.
- Geldbeträge in Cent statt als Fließkommazahl modellieren.
- API-Verträge und einheitliche Fehlerantworten festlegen.

## 2. Backend, Datenbank und Zugriffsschutz

- Serverseitige Anwendung und relationale Datenbank einführen.
- Anmeldung, Sitzungsverwaltung und rollenbasierte Autorisierung implementieren.
- Admin- und Supportrechte strikt trennen.
- Werkstatt- und Gutachterfreigaben serverseitig erzwingen.

## 3. Datenschutz und anonyme Kommunikation

- Identitätsdaten getrennt von anonymen Vorgangsdaten speichern.
- Kontaktdaten erst nach zulässigem Auftragsstatus freigeben.
- Nachrichten auf unerlaubte Kontaktdaten prüfen, ohne berechtigte Kommunikation unnötig zu blockieren.
- Löschfristen, Auskunft, Einwilligungen und revisionssichere Protokolle definieren.

## 4. Dateien, Gutachten und Benachrichtigungen

- Sicheren Upload für Bilder, Nachweise und Gutachten mit Typ-, Größen- und Schadsoftwareprüfung implementieren.
- Zugriffsberechtigte Downloads mit zeitlich begrenzten Links bereitstellen.
- E-Mail- und Push-Benachrichtigungen über eine Warteschlange zustellen.
- Zustellstatus und Benachrichtigungseinstellungen ergänzen.

## 5. Buchung, Zahlung und Betrieb

- Verbindliche Buchungs- und Terminlogik inklusive Konfliktbehandlung ergänzen.
- Einen Zahlungsanbieter erst nach rechtlicher und technischer Prüfung im Testmodus anbinden.
- Provisionen, Storno, Erstattung und Rechnungen serverseitig berechnen.
- Automatisierte Tests, Sicherheitsprüfungen, Monitoring, Backups und einen kontrollierten Deploymentprozess etablieren.

## Qualitätsziele vor dem ersten Pilotbetrieb

- WCAG-2.2-AA-orientierte Bedienbarkeit.
- Tests für alle Rollen- und Statusgrenzen.
- Keine Klardaten in anonymen Ansichten oder Browser-Logs.
- Dokumentiertes Datenschutz-, Berechtigungs- und Notfallkonzept.
