/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.fr", {
	"vs/base/common/json": [
		"Symbole non valide",
		"Format de nombre non valide",
		"Nom de propriété attendu",
		"Valeur attendue",
		"Signe des deux points attendu",
		"Virgule attendue",
		"Accolade fermante attendue",
		"Crochet fermant attendu",
		"Fin de fichier attendue",
	],
	"vs/base/common/severity": [
		"Erreur",
		"Avertissement",
		"Informations",
	],
	"vs/editor/common/config/defaultConfig": [
		"Contenu d\'éditeur",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Substitutions de configuration par défaut",
		"Configurez les paramètres d\'éditeur à remplacer pour le langage {0}.",
		"Configurez les paramètres d\'éditeur à remplacer pour un langage.",
		"Ajoute des paramètres de configuration.",
		"Résumé des paramètres. Cette étiquette va être utilisée dans le fichier de paramètres en tant que commentaire de séparation.",
		"Description des propriétés de configuration.",
		"Impossible d\'inscrire \'{0}\'. Ceci correspond au modèle de propriété \'\\[.*\\]$\' permettant de décrire les paramètres d\'éditeur spécifiques à un langage. Utilisez la contribution \'configurationDefaults\'.",
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
	"vs/workbench/api/node/extHostTreeExplorers": [
		"Aucun TreeExplorerNodeProvider ayant l\'ID \'{0}\' n\'est inscrit.",
		"Le TreeExplorerNodeProvider \'{0}\' n\'a pas pu fournir le nœud racine.",
		"Aucun TreeExplorerNodeProvider ayant l\'ID \'{0}\' n\'est inscrit.",
		"Le TreeExplorerNodeProvider \'{0}\' n\'a pas pu résoudre resolveChildren.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Le chemin {0} ne pointe pas vers un Test Runner d\'extension valide.",
	]
});