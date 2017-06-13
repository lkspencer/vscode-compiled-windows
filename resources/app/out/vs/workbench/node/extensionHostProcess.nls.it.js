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
	"vs/editor/common/config/editorOptions": [
		"L\'editor non è accessibile in questo momento. Premere Alt+F1 per le opzioni.",
		"Contenuto editor",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Testo normale",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Override configurazione predefinita",
		"Consente di configurare le impostazioni dell\'editor di cui eseguire l\'override per il linguaggio {0}.",
		"Consente di configurare le impostazioni dell\'editor di cui eseguire l\'override per un linguaggio.",
		"Impostazioni di configurazione di contributes.",
		"Riepilogo delle impostazioni. Questa etichetta verrà usata nel file di impostazioni come commento di separazione.",
		"Descrizione delle proprietà di configurazione.",
		"Non è possibile registrare \'{0}\'. Corrisponde al criterio di proprietà \'\\\\[.*\\\\]$\' per la descrizione delle impostazioni dell\'editor specifiche del linguaggio. Usare il contributo \'configurationDefaults\'.",
		"Non è possibile registrare \'{0}\'. Questa proprietà è già registrata.",
		"\'configuration.properties\' deve essere un oggetto",
		"se impostato, \'configuration.type\' deve essere impostato su \'object",
		"\'configuration.title\' deve essere una stringa",
		"Aggiunge come contributo le impostazioni di configurazione predefinite dell\'editor in base al linguaggio.",
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
		"Un evento di attivazione emesso ogni volta che viene aperto un file che risolve nella lingua specificata.",
		"Un evento di attivazione emesso ogni volta che viene invocato il comando specificato.",
		"Un evento di attivazione emesso ogni volta che viene iniziata una sessione di debug del tipo specificato.",
		"Un evento di attivazione emesso ogni volta che si apre una cartella che contiene almeno un file corrispondente al criterio GLOB specificato.",
		"Un evento di attivazione emesso ogni volta che la visualizzazione specificata viene espansa.",
		"Un evento di attivazione emesso all\'avvio di VS Code. Per garantire la migliore esperienza per l\'utente finale, sei pregato di utilizzare questo evento di attivazione nella tua estensione solo quando nessun\'altra combinazione di eventi di attivazione funziona nel tuo caso.",
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
	"vs/workbench/api/node/extHostTask": [
		"{0}: {1}",
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"Nessuna visualizzazione di struttura ad albero con ID \'{0}\' registrata.",
		"Nessuna visualizzazione di struttura ad albero con ID \'{0}\' registrata.",
		"Nessun elemento di struttura ad albero con id \'{0}\' trovato.",
		"L\'elemento {0} è già registrato",
	],
	"vs/workbench/node/extensionHostMain": [
		"Il percorso {0} non punta a un Test Runner di estensioni valido.",
	]
});