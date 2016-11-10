/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.de",{"vs/base/common/json":["Ungültiges Symbol","Ungültiges Zahlenformat.","Ein Eigenschaftenname wurde erwartet.","Ein Wert wurde erwartet.","Ein Doppelpunkt wurde erwartet.","Ein Komma wurde erwartet.","Eine schließende geschweifte Klammer wurde erwartet.","Eine schließende Klammer wurde erwartet.","Das Dateiende wurde erwartet."],"vs/base/common/severity":["Fehler","Warnung","Info"],"vs/base/node/zip":["{0} wurde im ZIP nicht gefunden."],"vs/code/node/cliProcessMain":['Die Erweiterung "{0}" wurde nicht gefunden.','Die Erweiterung "{0}" ist nicht installiert.',"Stellen Sie sicher, dass Sie die vollständige Erweiterungs-ID (einschließlich des Herausgebers) verwenden. Beispiel: {0}",'Die Extension "{0}" wurde erfolgreich installiert.','Die Erweiterung "{0}" ist bereits installiert.','"{0}" wurde in Marketplace gefunden.',"Wird installiert...",'Die Erweiterung "{0}" v{1} wurde erfolgreich installiert.',"{0} wird deinstalliert...",'Die Erweiterung "{0}" wurde erfolgreich deinstalliert.'],"vs/platform/configuration/common/configurationRegistry":["Trägt Konfigurationseigenschaften bei.","Eine Zusammenfassung der Einstellungen. Diese Bezeichnung wird in der Einstellungsdatei als trennender Kommentar verwendet.","Die Beschreibung der Konfigurationseigenschaften.",'Wenn eine Festlegung erfolgt, muss "configuration.type" auf "object" festgelegt werden.',"configuration.title muss eine Zeichenfolge sein.",'"configuration.properties" muss ein Objekt sein.'],"vs/platform/extensionManagement/common/extensionManagement":["Erweiterungen"],"vs/platform/extensionManagement/node/extensionGalleryService":["Die Extension wurde nicht gefunden.","Eine kompatible Version von {0} mit dieser Version des Codes wurde nicht gefunden."],"vs/platform/extensionManagement/node/extensionManagementService":['Die Erweiterung ist ungültig: "package.json" ist keine JSON-Datei.',"Die Erweiterung ist ungültig: Manifestnamenkonflikt.","Die Erweiterung ist ungültig: Manifestherausgeberkonflikt.","Die Erweiterung ist ungültig: Manifestversionskonflikt.","Bitte starten Sie Code vor der Neuinstallation von {0} neu.","Bitte starten Sie Code vor der Neuinstallation von {0} neu.",'Durch das Installieren von "{0}" werden auch die abhängigen Komponenten installiert. Möchten Sie den Vorgang fortsetzen?',"Ja","Nein","Bitte starten Sie Code vor der Neuinstallation von {0} neu.","Would you like to uninstall '{0}' only or its dependencies also?","Only","All","Cancel","Are you sure you want to uninstall '{0}'?","Ok","Cancel","Cannot uninstall extension '{0}'. Extension '{1}' depends on this.","Cannot uninstall extension '{0}'. Extensions '{1}' and '{2}' depend on this.","Cannot uninstall extension '{0}'. Extensions '{1}', '{2}' and others depend on this.","Die Erweiterung wurde nicht gefunden."],"vs/platform/extensions/common/extensionsRegistry":["For VS Code extensions, specifies the VS Code version that the extension is compatible with. Cannot be *. For example: ^0.10.5 indicates compatibility with a minimum VS Code version of 0.10.5.","Der Herausgeber der VS Code-Extension.","Der Anzeigename für die Extension, der im VS Code-Katalog verwendet wird.","Die vom VS Code-Katalog zum Kategorisieren der Extension verwendeten Kategorien.","Das in VS Code Marketplace verwendete Banner.","Die Bannerfarbe für die Kopfzeile der VS Code Marketplace-Seite.","Das Farbdesign für die Schriftart, die im Banner verwendet wird.","Alle Beiträge der VS Code-Extension, die durch dieses Paket dargestellt werden.","Legt die Erweiterung fest, die im Marketplace als Vorschau gekennzeichnet werden soll.","Aktivierungsereignisse für die VS Code-Extension.","Array aus Badges, die im Marketplace in der Seitenleiste auf der Seite mit den Erweiterungen angezeigt werden.","Die Bild-URL für den Badge.","Der Link für den Badge.","Eine Beschreibung für den Badge.",'Abhängigkeiten von anderen Erweiterungen. Der Bezeichner einer Erweiterung ist immer ${publisher}.${name}, beispielsweise "vscode.csharp".',"Ein Skript, das ausgeführt wird, bevor das Paket als VS Code-Extension veröffentlicht wird.","Der Pfad zu einem 128x128-Pixel-Symbol."],"vs/platform/extensions/node/extensionValidator":["Der engines.vscode-Wert {0} konnte nicht analysiert werden. Verwenden Sie z. B. ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x usw.",'Die in "engines.vscode" ({0}) angegebene Version ist nicht spezifisch genug. Definieren Sie für VS Code-Versionen vor Version 1.0.0 bitte mindestens die gewünschte Haupt- und Nebenversion, z. B. ^0.10.0, 0.10.x, 0.11.0 usw.','Die in "engines.vscode" ({0}) angegebene Version ist nicht spezifisch genug. Definieren Sie für VS Code-Versionen nach Version 1.0.0 bitte mindestens die gewünschte Hauptversion, z. B. ^1.10.0, 1.10.x, 1.x.x, 2.x.x usw.',"Die Extension ist nicht mit dem Code {0} kompatibel. Die Extension erfordert {1}.","Got empty extension description","property `{0}` is mandatory and must be of type `string`","property `{0}` is mandatory and must be of type `string`","property `{0}` is mandatory and must be of type `string`","property `{0}` is mandatory and must be of type `object`","property `{0}` is mandatory and must be of type `string`","property `{0}` can be omitted or must be of type `string[]`","property `{0}` can be omitted or must be of type `string[]`","properties `{0}` and `{1}` must both be specified or must both be omitted","property `{0}` can be omitted or must be of type `string`","Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.","properties `{0}` and `{1}` must both be specified or must both be omitted",'Die Extensionversion ist nicht mit "semver" kompatibel.'],"vs/platform/message/common/message":["Schließen","Später","Abbrechen"],"vs/platform/request/common/request":["HTTP",'Die zu verwendende Proxyeinstellung. Wenn diese Option nicht festgelegt wird, wird der Wert aus den Umgebungsvariablen "http_proxy" und "https_proxy" übernommen.',"Gibt an, ob das Proxyserverzertifikat anhand der Liste der bereitgestellten Zertifizierungsstellen überprüft werden soll.","Der Wert, der als Proxy-Authorization-Header für jede Netzwerkanforderung gesendet werden soll."],"vs/platform/telemetry/common/telemetryService":["Telemetrie","Aktivieren Sie das Senden von Nutzungsdaten und Fehlern an Microsoft."]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/02611b40b24c9df2726ad8b33f5ef5f67ac30b44/core/vs\code\node\cliProcessMain.nls.de.js.map
