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
	"vs/editor/common/config/defaultConfig": [
		"Contenuto editor",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Override configurazione predefinita",
		"Consente di configurare le impostazioni dell\'editor di cui eseguire l\'override per il linguaggio {0}.",
		"Consente di configurare le impostazioni dell\'editor di cui eseguire l\'override per un linguaggio.",
		"Impostazioni di configurazione di contributes.",
		"Riepilogo delle impostazioni. Questa etichetta verrà usata nel file di impostazioni come commento di separazione.",
		"Descrizione delle proprietà di configurazione.",
		"Non è possibile registrare \'{0}\'. Corrisponde al criterio di proprietà \'\\[.*\\]$\' per la descrizione delle impostazioni dell\'editor specifiche del linguaggio. Usare il contributo \'configurationDefaults\'.",
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
	"vs/workbench/api/node/extHostTreeExplorers": [
		"Non è stato registrato alcun elemento TreeExplorerNodeProvider con ID \'{0}\'.",
		"Con l\'elemento TreeExplorerNodeProvider \'{0}\' non è stato possibile fornire il nodo radice.",
		"Non è stato registrato alcun elemento TreeExplorerNodeProvider con ID \'{0}\'.",
		"Con l\'elemento TreeExplorerNodeProvider \'{0}\' non è stato possibile risolvere gli elementi figlio.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Il percorso {0} non punta a un Test Runner di estensioni valido.",
	]
});