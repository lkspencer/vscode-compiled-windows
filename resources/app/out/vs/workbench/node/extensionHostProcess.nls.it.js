/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.it", {
	"vs/base/common/processes": [
		"Errore: nelle informazioni sull\'eseguibile deve essere definito un comando di tipo string.",
		"Avviso: isShellCommand deve essere di tipo boolean. Il valore {0} verrà ignorato.",
		"Avviso: gli argomenti devono essere di tipo string[]. Il valore {0} verrà ignorato.",
		"Avviso: options.cwd deve essere di tipo string. Il valore {0} verrà ignorato.",
	],
	"vs/base/common/severity": [
		"Errore",
		"Avviso",
		"Informazioni",
	],
	"vs/base/node/processes": [
		"Non è possibile eseguire un comando della shell su un\'unità UNC.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"L\'attivazione dell\'estensione `{1}` non è riuscita. Motivo: la dipendenza `{0}` è sconosciuta.",
		"L\'attivazione dell\'estensione `{1}` non è riuscita. Motivo: non è stato possibile attivare la dipendenza `{0}`.",
		"L\'attivazione dell\'estensione `{0}` non è riuscita. Motivo: sono presenti più di 10 livelli di dipendenze (molto probabilmente un ciclo di dipendenze).",
		"L\'attivazione dell\'estensione `{0}` non è riuscita: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Per le estensioni di Visual Studio Code consente di specificare la versione di Visual Studio Code con cui è compatibile l\'estensione. Non può essere *. Ad esempio: ^0.10.5 indica la compatibilità con la versione minima 0.10.5 di Visual Studio Code.",
		"Editore dell\'estensione Visual Studio Code.",
		"Nome visualizzato per l\'estensione usato nella raccolta di Visual Studio Code.",
		"Categorie usate dalla raccolta di Visual Studio Code per definire la categoria dell\'estensione.",
		"Banner usato nel marketplace di Visual Studio Code.",
		"Colore del banner nell\'intestazione pagina del marketplace di Visual Studio Code.",
		"Tema colori per il tipo di carattere usato nel banner.",
		"Tutti i contributi dell\'estensione Visual Studio Code rappresentati da questo pacchetto.",
		"Imposta l\'estensione in modo che venga contrassegnata come Anteprima nel Marketplace.",
		"Eventi di attivazione per l\'estensione Visual Studio Code.",
		"Matrice di notifiche da visualizzare nella barra laterale della pagina delle estensioni del Marketplace.",
		"URL di immagine della notifica.",
		"Collegamento della notifica.",
		"Descrizione della notifica.",
		"Dipendenze ad altre estensioni. L\'identificatore di un\'estensione è sempre ${publisher}.${name}. Ad esempio: vscode.csharp.",
		"Script eseguito prima che il pacchetto venga pubblicato come estensione Visual Studio Code.",
		"Percorso di un\'icona da 128x128 pixel.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"Non verranno visualizzati altri {0} errori e avvisi.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Il percorso {0} non punta a un Test Runner di estensioni valido.",
	]
});