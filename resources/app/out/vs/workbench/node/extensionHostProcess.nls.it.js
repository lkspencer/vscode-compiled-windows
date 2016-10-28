/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.it", {
	"vs/base/common/json": [
		"Simbolo non valido",
		"Formato di numero non valido",
		"È previsto un nome di proprietà",
		"È previsto un valore",
		"Sono previsti i due punti",
		"È prevista la virgola",
		"È prevista la parentesi graffa di chiusura",
		"È prevista la parentesi quadra di chiusura",
		"È prevista la fine del file",
	],
	"vs/base/common/severity": [
		"Errore",
		"Avviso",
		"Informazioni",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"L\'attivazione dell\'estensione `{1}` non è riuscita. Motivo: la dipendenza `{0}` è sconosciuta.",
		"L\'attivazione dell\'estensione `{1}` non è riuscita. Motivo: non è stato possibile attivare la dipendenza `{0}`.",
		"L\'attivazione dell\'estensione `{0}` non è riuscita. Motivo: sono presenti più di 10 livelli di dipendenze (molto probabilmente un ciclo di dipendenze).",
		"L\'attivazione dell\'estensione `{0}` non è riuscita: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"La descrizione dell\'estensione restituita è vuota",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `object`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string`",
		"Valore previsto di `main` ({0}) da includere nella cartella dell\'estensione ({1}). L\'estensione potrebbe non essere più portatile.",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"Nome visualizzato per l\'estensione usato nella raccolta di Visual Studio Code.",
		"Categorie usate dalla raccolta di Visual Studio Code per definire la categoria dell\'estensione.",
		"Banner usato nel marketplace di Visual Studio Code.",
		"Colore del banner nell\'intestazione pagina del marketplace di Visual Studio Code.",
		"Tema colori per il tipo di carattere usato nel banner.",
		"Editore dell\'estensione Visual Studio Code.",
		"Eventi di attivazione per l\'estensione Visual Studio Code.",
		"Dipendenze ad altre estensioni. L\'identificatore di un\'estensione è sempre ${publisher}.${name}. Ad esempio: vscode.csharp.",
		"Script eseguito prima che il pacchetto venga pubblicato come estensione Visual Studio Code.",
		"Tutti i contributi dell\'estensione Visual Studio Code rappresentati da questo pacchetto.",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Non è stato possibile analizzare il valore {0} di `engines.vscode`. Usare ad esempio: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x e così via.",
		"La versione specificata in `engines.vscode` ({0}) non è abbastanza specifica. Per le versioni di vscode precedenti alla 1.0.0, definire almeno le versioni principale e secondaria desiderate, ad esempio ^0.10.0, 0.10.x, 0.11.0 e così via.",
		"La versione specificata in `engines.vscode` ({0}) non è abbastanza specifica. Per le versioni di vscode successive alla 1.0.0, definire almeno la versione principale desiderata, ad esempio ^1.10.0, 1.10.x, 1.x.x, 2.x.x e così via.",
		"L\'estensione non è compatibile con Visual Studio Code {0}. Per l\'estensione è richiesto: {1}.",
		"La versione dell\'estensione non è compatibile con semver.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"Non verranno visualizzati altri {0} errori e avvisi.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Sovrascrittura dell\'estensione {0} con {1}.",
		"Caricamento dell\'estensione di sviluppo in {0}",
		"Sovrascrittura dell\'estensione {0} con {1}.",
		"Il percorso {0} non punta a un Test Runner di estensioni valido.",
	],
	"vs/workbench/node/extensionPoints": [
		"Non è stato possibile analizzare {0}: {1}.",
		"Non è possibile leggere il file {0}: {1}.",
		"Non è stato possibile analizzare {0}: {1}.",
		"Non è possibile leggere il file {0}: {1}.",
		"Il messaggio per la chiave {0} non è stato trovato.",
	]
});