/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.es", {
	"vs/base/common/json": [
		"Símbolo no válido",
		"Formato de número no válido",
		"Se esperaba el nombre de la propiedad",
		"Se esperaba un valor",
		"Se esperaban dos puntos",
		"Se esperaba una coma",
		"Se esperaba una llave de cierre",
		"Se esperaba un corchete de cierre",
		"Se esperaba un fin de archivo",
	],
	"vs/base/common/severity": [
		"Error",
		"Advertencia",
		"Información",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"La extensión `{1}` no se pudo activar. Motivo: dependencia `{0}` desconocida.",
		"La extensión `{1}` no se pudo activar. Motivo: La dependencia `{0}` no se pudo activar.",
		"La extensión `{0}` no se pudo activar. Motivo: más de 10 niveles de dependencias (probablemente sea un bucle de dependencias).",
		"Error al activar la extensión `{0}`: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Se obtuvo una descripción vacía de la extensión.",
		"la propiedad `{0}` es obligatoria y debe ser de tipo \"string\"",
		"la propiedad `{0}` es obligatoria y debe ser de tipo \"string\"",
		"la propiedad `{0}` es obligatoria y debe ser de tipo \"string\"",
		"la propiedad `{0}` es obligatoria y debe ser de tipo \"object\"",
		"la propiedad `{0}` es obligatoria y debe ser de tipo \"string\"",
		"la propiedad `{0}` se puede omitir o debe ser de tipo \"string[]\"",
		"la propiedad `{0}` se puede omitir o debe ser de tipo \"string[]\"",
		"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente",
		"la propiedad `{0}` se puede omitir o debe ser de tipo \"string\"",
		"Se esperaba que \"main\" ({0}) se hubiera incluido en la carpeta de la extensión ({1}). Esto puede hacer que la extensión no sea portátil.",
		"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente",
		"Nombre para mostrar de la extensión que se usa en la galería de VS Code.",
		"Categorías que usa la galería de VS Code para clasificar la extensión.",
		"Banner usado en VS Code Marketplace.",
		"Color del banner en el encabezado de página de VS Code Marketplace.",
		"Tema de color de la fuente que se usa en el banner.",
		"El publicador de la extensión VS Code.",
		"Eventos de activación de la extensión VS Code.",
		"Dependencias a otras extensiones. El identificador de una extensión siempre es ${publisher}.${name}. Por ejemplo: vscode.csharp.",
		"Script que se ejecuta antes de publicar el paquete como extensión VS Code.",
		"Todas las contribuciones de la extensión VS Code representadas por este paquete.",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"No se pudo analizar el valor {0} de \"engines.vscode\". Por ejemplo, use: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x, etc.",
		"La versión indicada en \"engines.vscode\" ({0}) no es suficientemente específica. Para las versiones de vscode anteriores a la 1.0.0, defina como mínimo la versión principal y secundaria deseadas. Por ejemplo: ^0.10.0, 0.10.x, 0.11.0, etc.",
		"La versión indicada en \"engines.vscode\" ({0}) no es suficientemente específica. Para las versiones de vscode posteriores a la 1.0.0, defina como mínimo la versión principal deseada. Por ejemplo: ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.",
		"La extensión no es compatible con {0} de Code y requiere: {1}.",
		"La versión de la extensión no es compatible con semver.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"No se mostrarán {0} errores y advertencias adicionales.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Se va a sobrescribir la extensión {0} con {1}.",
		"Cargando la extensión de desarrollo en {0}",
		"Se va a sobrescribir la extensión {0} con {1}.",
		"La ruta de acceso {0} no apunta a un ejecutor de pruebas de extensión.",
	],
	"vs/workbench/node/extensionPoints": [
		"No se pudo analizar {0}: {1}.",
		"No se puede leer el archivo {0}: {1}.",
		"No se pudo analizar {0}: {1}.",
		"No se puede leer el archivo {0}: {1}.",
		"No se encontró un mensaje para la clave {0}.",
	]
});