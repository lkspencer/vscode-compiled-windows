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
	"vs/platform/extensions/common/abstractExtensionService": [
		"Fehler beim Aktivieren der Extension \"{1}\". Ursache: unbekannte Abhängigkeit \"{0}\".",
		"Fehler beim Aktivieren der Extension \"{1}\". Ursache: Fehler beim Aktivieren der Extension \"{0}\".",
		"Fehler beim Aktivieren der Extension \"{0}\". Ursache: mehr als 10 Ebenen von Abhängigkeiten (wahrscheinlich eine Abhängigkeitsschleife).",
		"Fehler beim Aktivieren der Extension \"{0}\": {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Es wurde eine leere Extensionbeschreibung abgerufen.",
		"Die Eigenschaft \"{0}\" ist erforderlich. Sie muss vom Typ \"string\" sein.",
		"Die Eigenschaft \"{0}\" ist erforderlich. Sie muss vom Typ \"string\" sein.",
		"Die Eigenschaft \"{0}\" ist erforderlich. Sie muss vom Typ \"string\" sein.",
		"Die Eigenschaft \"{0}\" ist erforderlich und muss vom Typ \"object\" sein.",
		"Die Eigenschaft \"{0}\" ist erforderlich. Sie muss vom Typ \"string\" sein.",
		"Die Eigenschaft \"{0}\" kann ausgelassen werden oder muss vom Typ \"string[]\" sein.",
		"Die Eigenschaft \"{0}\" kann ausgelassen werden oder muss vom Typ \"string[]\" sein.",
		"Die Eigenschaften \"{0}\" und \"{1}\" müssen beide angegeben oder beide ausgelassen werden.",
		"Die Eigenschaft \"{0}\" kann ausgelassen werden oder muss vom Typ \"string\" sein.",
		"Es wurde erwartet, dass \"main\" ({0}) im Ordner ({1}) der Extension enthalten ist. Dies führt ggf. dazu, dass die Extension nicht portierbar ist.",
		"Die Eigenschaften \"{0}\" und \"{1}\" müssen beide angegeben oder beide ausgelassen werden.",
		"Der Anzeigename für die Extension, der im VS Code-Katalog verwendet wird.",
		"Die vom VS Code-Katalog zum Kategorisieren der Extension verwendeten Kategorien.",
		"Das in VS Code Marketplace verwendete Banner.",
		"Die Bannerfarbe für die Kopfzeile der VS Code Marketplace-Seite.",
		"Das Farbdesign für die Schriftart, die im Banner verwendet wird.",
		"Der Herausgeber der VS Code-Extension.",
		"Aktivierungsereignisse für die VS Code-Extension.",
		"Abhängigkeiten von anderen Erweiterungen. Der Bezeichner einer Erweiterung ist immer ${publisher}.${name}, beispielsweise \"vscode.csharp\".",
		"Ein Skript, das ausgeführt wird, bevor das Paket als VS Code-Extension veröffentlicht wird.",
		"Alle Beiträge der VS Code-Extension, die durch dieses Paket dargestellt werden.",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Der engines.vscode-Wert {0} konnte nicht analysiert werden. Verwenden Sie z. B. ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x usw.",
		"Die in \"engines.vscode\" ({0}) angegebene Version ist nicht spezifisch genug. Definieren Sie für VS Code-Versionen vor Version 1.0.0 bitte mindestens die gewünschte Haupt- und Nebenversion, z. B. ^0.10.0, 0.10.x, 0.11.0 usw.",
		"Die in \"engines.vscode\" ({0}) angegebene Version ist nicht spezifisch genug. Definieren Sie für VS Code-Versionen nach Version 1.0.0 bitte mindestens die gewünschte Hauptversion, z. B. ^1.10.0, 1.10.x, 1.x.x, 2.x.x usw.",
		"Die Extension ist nicht mit dem Code {0} kompatibel. Die Extension erfordert {1}.",
		"Die Extensionversion ist nicht mit \"semver\" kompatibel.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"{0} weitere Fehler und Warnungen werden nicht angezeigt.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Die Extension {0} wird mit {1} überschrieben.",
		"Die Entwicklungsextension unter {0} wird geladen.",
		"Die Extension {0} wird mit {1} überschrieben.",
		"Der Pfad \"{0}\" verweist nicht auf einen gültigen Test Runner für eine Extension.",
	],
	"vs/workbench/node/extensionPoints": [
		"Fehler beim Analysieren von {0}: {1}.",
		"Die Datei \"{0}\" kann nicht gelesen werden: {1}",
		"Fehler beim Analysieren von {0}: {1}.",
		"Die Datei \"{0}\" kann nicht gelesen werden: {1}",
		"Die Nachricht für den Schlüssel {0} wurde nicht gefunden.",
	]
});