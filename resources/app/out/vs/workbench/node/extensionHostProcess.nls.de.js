/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.de", {
	"vs/base/common/json": [
		"Ungültiges Symbol",
		"Ungültiges Zahlenformat.",
		"Ein Eigenschaftenname wurde erwartet.",
		"Ein Wert wurde erwartet.",
		"Ein Doppelpunkt wurde erwartet.",
		"Ein Komma wurde erwartet.",
		"Eine schließende geschweifte Klammer wurde erwartet.",
		"Eine schließende Klammer wurde erwartet.",
		"Das Dateiende wurde erwartet.",
	],
	"vs/base/common/severity": [
		"Fehler",
		"Warnung",
		"Info",
	],
	"vs/editor/common/config/defaultConfig": [
		"Editor-Inhalt",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Standard-Konfiguration überschreibt",
		"Zu überschreibende Einstellungen für Sprache {0} konfigurieren.",
		"Zu überschreibende Editor-Einstellungen für eine Sprache konfigurieren.",
		"Trägt Konfigurationseigenschaften bei.",
		"Eine Zusammenfassung der Einstellungen. Diese Bezeichnung wird in der Einstellungsdatei als trennender Kommentar verwendet.",
		"Die Beschreibung der Konfigurationseigenschaften.",
		"\"{0}\" kann nicht registriert werden. Die Eigenschaft stimmt mit dem Eigenschaftsmuster \'\\[.*\\]$\' zum Beschreiben sprachspezifischer Editor-Einstellungen überein. Verwenden Sie den Beitrag \"configurationDefaults\".",
		"\"{0}\" kann nicht registriert werden. Diese Eigenschaft ist bereits registriert.",
		"\"configuration.properties\" muss ein Objekt sein.",
		"Wenn eine Festlegung erfolgt, muss \"configuration.type\" auf \"object\" festgelegt werden.",
		"configuration.title muss eine Zeichenfolge sein.",
		"Trägt zu Konfigurationeinstellungen des Standard-Editors für die jeweilige Sprache bei.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Fehler beim Aktivieren der Extension \"{1}\". Ursache: unbekannte Abhängigkeit \"{0}\".",
		"Fehler beim Aktivieren der Extension \"{1}\". Ursache: Fehler beim Aktivieren der Extension \"{0}\".",
		"Fehler beim Aktivieren der Extension \"{0}\". Ursache: mehr als 10 Ebenen von Abhängigkeiten (wahrscheinlich eine Abhängigkeitsschleife).",
		"Fehler beim Aktivieren der Extension \"{0}\": {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Gibt für VS Code-Erweiterungen die VS Code-Version an, mit der die Erweiterung kompatibel ist. Darf nicht \"*\" sein. Beispiel: ^0.10.5 gibt die Kompatibilität mit mindestens VS Code-Version 0.10.5 an.",
		"Der Herausgeber der VS Code-Extension.",
		"Der Anzeigename für die Extension, der im VS Code-Katalog verwendet wird.",
		"Die vom VS Code-Katalog zum Kategorisieren der Extension verwendeten Kategorien.",
		"Das in VS Code Marketplace verwendete Banner.",
		"Die Bannerfarbe für die Kopfzeile der VS Code Marketplace-Seite.",
		"Das Farbdesign für die Schriftart, die im Banner verwendet wird.",
		"Alle Beiträge der VS Code-Extension, die durch dieses Paket dargestellt werden.",
		"Legt die Erweiterung fest, die im Marketplace als Vorschau gekennzeichnet werden soll.",
		"Aktivierungsereignisse für die VS Code-Extension.",
		"Array aus Badges, die im Marketplace in der Seitenleiste auf der Seite mit den Erweiterungen angezeigt werden.",
		"Die Bild-URL für den Badge.",
		"Der Link für den Badge.",
		"Eine Beschreibung für den Badge.",
		"Abhängigkeiten von anderen Erweiterungen. Der Bezeichner einer Erweiterung ist immer ${publisher}.${name}, beispielsweise \"vscode.csharp\".",
		"Ein Skript, das ausgeführt wird, bevor das Paket als VS Code-Extension veröffentlicht wird.",
		"Der Pfad zu einem 128x128-Pixel-Symbol.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"{0} weitere Fehler und Warnungen werden nicht angezeigt.",
	],
	"vs/workbench/api/node/extHostTreeExplorers": [
		"Es ist kein TreeExplorerNodeProvider mit ID \"{0}\" registriert.",
		"TreeExplorerNodeProvider \"{0}\" hat keinen Stammknoten bereitgestellt.",
		"Es ist kein TreeExplorerNodeProvider mit ID \"{0}\" registriert.",
		"TreeExplorerNodeProvider \"{0}\" hat \"resolveChildren\" nicht ausgeführt.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Der Pfad \"{0}\" verweist nicht auf einen gültigen Test Runner für eine Extension.",
	]
});