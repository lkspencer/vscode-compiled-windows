/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.fr", {
	"vs/base/common/processes": [
		"Erreur : les informations de l\'exécutable doivent définir une commande de type chaîne.",
		"Avertissement : isShellCommand doit être de type booléen. Valeur {0} ignorée.",
		"Avertissement : les arguments doivent être de type string[]. Valeur {0} ignorée.",
		"Avertissement : options.cwd doit être de type chaîne. Valeur {0} ignorée.",
	],
	"vs/base/common/severity": [
		"Erreur",
		"Avertissement",
		"Informations",
	],
	"vs/base/node/processes": [
		"Impossible d\'exécuter une commande d\'interpréteur de commandes sur un lecteur UNC.",
	],
	"vs/editor/common/config/editorOptions": [
		"L\'éditeur n\'est pas accessible pour le moment. Appuyez sur Alt+F1 pour connaître les options.",
		"Contenu d\'éditeur",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Texte brut",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Substitutions de configuration par défaut",
		"Configurez les paramètres d\'éditeur à remplacer pour le langage {0}.",
		"Configurez les paramètres d\'éditeur à remplacer pour un langage.",
		"Ajoute des paramètres de configuration.",
		"Résumé des paramètres. Cette étiquette va être utilisée dans le fichier de paramètres en tant que commentaire de séparation.",
		"Description des propriétés de configuration.",
		"Impossible d\'inscrire \'{0}\'. Ceci correspond au modèle de propriété \'\\\\[.*\\\\]$\' permettant de décrire les paramètres d\'éditeur spécifiques à un langage. Utilisez la contribution \'configurationDefaults\'.",
		"Impossible d\'inscrire \'{0}\'. Cette propriété est déjà inscrite.",
		"\'configuration.properties\' doit être un objet",
		"s\'il est défini, \'configuration.type\' doit avoir la valeur \'object",
		"\'configuration.title\' doit être une chaîne",
		"Contribue aux paramètres de configuration d\'éditeur par défaut en fonction du langage.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Échec de l\'activation de l\'extension \'{1}\'. Raison : dépendance \'{0}\' inconnue.",
		"Échec de l\'activation de l\'extension \'{1}\'. Raison : échec de l\'activation de la dépendance \'{0}\'.",
		"Échec de l\'activation de l\'extension \'{0}\'. Raison : plus de 10 niveaux de dépendances (probablement une boucle de dépendance).",
		"Échec de l\'activation de l\'extension \'{0}\' : {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Pour les extensions VS Code, spécifie la version de VS Code avec laquelle l\'extension est compatible. Ne peut pas être *. Exemple : ^0.10.5 indique une compatibilité avec la version minimale 0.10.5 de VS Code.",
		"Éditeur de l\'extension VS Code.",
		"Nom d\'affichage de l\'extension utilisée dans la galerie VS Code.",
		"Catégories utilisées par la galerie VS Code pour catégoriser l\'extension.",
		"Bannière utilisée dans le marketplace VS Code.",
		"Couleur de la bannière de l\'en-tête de page du marketplace VS Code.",
		"Thème de couleur de la police utilisée dans la bannière.",
		"Toutes les contributions de l\'extension VS Code représentées par ce package.",
		"Définit l\'extension à marquer en tant que préversion dans Marketplace.",
		"Événements d\'activation pour l\'extension VS Code.",
		"Événement d\'activation envoyé quand un fichier résolu dans le langage spécifié est ouvert.",
		"Événement d\'activation envoyé quand la commande spécifiée est appelée.",
		"Événement d\'activation envoyé quand une session de débogage du type spécifié est démarrée.",
		"Événement d\'activation envoyé quand un dossier ouvert contient au moins un fichier correspondant au modèle glob spécifié.",
		"Événement d\'activation envoyé quand la vue spécifiée est développée.",
		"Événement d\'activation envoyé au démarrage de VS Code. Pour garantir la qualité de l\'expérience utilisateur, utilisez cet événement d\'activation dans votre extension uniquement quand aucune autre combinaison d\'événements d\'activation ne fonctionne dans votre cas d\'utilisation.",
		"Ensemble de badges à afficher dans la barre latérale de la page d\'extensions de Marketplace.",
		"URL de l\'image du badge.",
		"Lien du badge.",
		"Description du badge.",
		"Dépendances envers d\'autres extensions. L\'identificateur d\'une extension est toujours ${publisher}.${name}. Exemple : vscode.csharp.",
		"Le script exécuté avant le package est publié en tant qu\'extension VS Code.",
		"Chemin d\'une icône de 128 x 128 pixels.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"Les {0} erreurs et avertissements supplémentaires ne sont pas affichés.",
	],
	"vs/workbench/api/node/extHostTask": [
		"{0} : {1}",
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"Aucune arborescence avec l\'ID \'{0}\' n\'est inscrite.",
		"Aucune arborescence avec l\'ID \'{0}\' n\'est inscrite.",
		"L\'élément d\'arborescence avec l\'ID \'{0}\' est introuvable.",
		"L\'élément \'{0}\' est déjà inscrit",
	],
	"vs/workbench/node/extensionHostMain": [
		"Le chemin {0} ne pointe pas vers un Test Runner d\'extension valide.",
	]
});