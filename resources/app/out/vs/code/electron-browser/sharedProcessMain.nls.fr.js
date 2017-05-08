/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-browser/sharedProcessMain.nls.fr", {
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
	"vs/base/node/zip": [
		"{0} introuvable dans le zip.",
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
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Extensions",
		"Préférences",
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"Extension introuvable",
		"Version compatible de {0} introuvable avec cette version de Code.",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"Extension non valide : package.json n\'est pas un fichier JSON.",
		"Redémarrez Code avant de réinstaller {0}.",
		"Redémarrez Code avant de réinstaller {0}.",
		"L\'installation de \'{0}\' entraîne également l\'installation de ses dépendances. Voulez-vous continuer ?",
		"Oui",
		"Non",
		"Redémarrez Code avant de réinstaller {0}.",
		"Voulez-vous désinstaller uniquement \'{0}\' ou également ses dépendances ?",
		"Uniquement",
		"Tout",
		"Annuler",
		"Voulez-vous vraiment désinstaller \'{0}\' ?",
		"OK",
		"Annuler",
		"Impossible de désinstaller l\'extension \'{0}\'. L\'extension \'{1}\' en dépend.",
		"Impossible de désinstaller l\'extension \'{0}\'. Les extensions \'{1}\' et \'{2}\' en dépendent.",
		"Impossible de désinstaller l\'extension \'{0}\'. Les extensions \'{1}\', \'{2}\' et d\'autres extensions en dépendent.",
		"Extension introuvable",
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
	"vs/platform/extensions/node/extensionValidator": [
		"Impossible d\'analyser la valeur {0} de \'engines.vscode\'. Utilisez, par exemple, ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x, etc.",
		"La version spécifiée dans \'engines.vscode\' ({0}) n\'est pas assez précise. Pour les versions de vscode antérieures à 1.0.0, définissez au minimum les versions majeure et mineure souhaitées. Par exemple : ^0.10.0, 0.10.x, 0.11.0, etc.",
		"La version spécifiée dans \'engines.vscode\' ({0}) n\'est pas assez précise. Pour les versions de vscode ultérieures à 1.0.0, définissez au minimum la version majeure souhaitée. Par exemple : ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.",
		"L\'extension n\'est pas compatible avec le code {0}. L\'extension nécessite {1}.",
		"Description d\'extension vide obtenue",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'object\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise ou doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise ou doit être de type \'string[]\'",
		"les propriétés \'{0}\' et \'{1}\' doivent être toutes les deux spécifiées ou toutes les deux omises",
		"La propriété \'{0}\' peut être omise ou doit être de type \'string\'",
		"\'main\' ({0}) est censé être inclus dans le dossier ({1}) de l\'extension. Cela risque de rendre l\'extension non portable.",
		"les propriétés \'{0}\' et \'{1}\' doivent être toutes les deux spécifiées ou toutes les deux omises",
		"La version de l\'extension n\'est pas compatible avec SemVer.",
	],
	"vs/platform/message/common/message": [
		"Fermer",
		"Plus tard",
		"Annuler",
	],
	"vs/platform/request/node/request": [
		"HTTP",
		"Paramètre de proxy à utiliser. S\'il n\'est pas défini, il est récupéré à partir des variables d\'environnement http_proxy et https_proxy",
		"Spécifie si le certificat de serveur proxy doit être vérifié par rapport à la liste des autorités de certification fournies.",
		"Valeur à envoyer en tant qu\'en-tête \'Proxy-Authorization\' pour chaque requête réseau.",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Télémétrie",
		"Activez l\'envoi des données d\'utilisation et d\'erreurs à Microsoft.",
	]
});