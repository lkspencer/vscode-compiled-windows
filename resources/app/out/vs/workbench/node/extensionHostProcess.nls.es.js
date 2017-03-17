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
	"vs/editor/common/config/defaultConfig": [
		"Contenido del editor",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"La configuración predeterminada se reemplaza",
		"Establecer los valores de configuración que se reemplazarán para el lenguaje {0}.",
		"Establecer los valores de configuración que se reemplazarán para un lenguaje.",
		"Aporta opciones de configuración.",
		"Resumen de la configuración. Esta etiqueta se usará en el archivo de configuración como comentario divisor.",
		"Descripción de las propiedades de configuración.",
		"No se puede registrar \"{0}\". Coincide con el patrón de propiedad \"\\[.*\\]$\" para describir la configuración del editor específica del lenguaje. Utilice la contribución \"configurationDefaults\".",
		"No se puede registrar \"{0}\". Esta propiedad ya está registrada.",
		"configuration.properties debe ser un objeto",
		"si se establece, \"configuration.type\" debe establecerse en \"object\"",
		"configuration.title debe ser una cadena",
		"Contribuye a la configuración de los parámetros del editor predeterminados por lenguaje.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"La extensión `{1}` no se pudo activar. Motivo: dependencia `{0}` desconocida.",
		"La extensión `{1}` no se pudo activar. Motivo: La dependencia `{0}` no se pudo activar.",
		"La extensión `{0}` no se pudo activar. Motivo: más de 10 niveles de dependencias (probablemente sea un bucle de dependencias).",
		"Error al activar la extensión `{0}`: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Para las extensiones de VS Code, especifica la versión de VS Code con la que la extensión es compatible. No puede ser *. Por ejemplo: ^0.10.5 indica compatibilidad con una versión de VS Code mínima de 0.10.5.",
		"El publicador de la extensión VS Code.",
		"Nombre para mostrar de la extensión que se usa en la galería de VS Code.",
		"Categorías que usa la galería de VS Code para clasificar la extensión.",
		"Banner usado en VS Code Marketplace.",
		"Color del banner en el encabezado de página de VS Code Marketplace.",
		"Tema de color de la fuente que se usa en el banner.",
		"Todas las contribuciones de la extensión VS Code representadas por este paquete.",
		"Establece la extensión que debe marcarse como versión preliminar en Marketplace.",
		"Eventos de activación de la extensión VS Code.",
		"Matriz de distintivos que se muestran en la barra lateral de la página de extensiones de Marketplace.",
		"URL de la imagen del distintivo.",
		"Vínculo del distintivo.",
		"Descripción del distintivo.",
		"Dependencias a otras extensiones. El identificador de una extensión siempre es ${publisher}.${name}. Por ejemplo: vscode.csharp.",
		"Script que se ejecuta antes de publicar el paquete como extensión VS Code.",
		"Ruta de acceso a un icono de 128 x 128 píxeles.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"No se mostrarán {0} errores y advertencias adicionales.",
	],
	"vs/workbench/api/node/extHostTreeExplorers": [
		"No hay registrado ningún TreeExplorerNodeProvider con el identificador \"{0}\".",
		"TreeExplorerNodeProvider \"{0}\" no pudo proporcionar el nodo raíz.",
		"No hay registrado ningún TreeExplorerNodeProvider con el identificador \"{0}\".",
		"TreeExplorerNodeProvider \"{0}\" no pudo resolver los elementos secundarios.",
	],
	"vs/workbench/node/extensionHostMain": [
		"La ruta de acceso {0} no apunta a un ejecutor de pruebas de extensión.",
	]
});