/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.es", {
	"vs/base/common/processes": [
		"Error: La información del ejecutable debe definir un comando de tipo cadena.",
		"Advertencia: isShellCommand debe ser de tipo booleano. Se ignora el valor {0}.",
		"Advertencia: Los argumentos deben ser de tipo \"string[]\". Se ignora el valor {0}.",
		"Advertencia: options.cwd debe ser de tipo cadena. Se ignora el valor {0}.",
	],
	"vs/base/common/severity": [
		"Error",
		"Advertencia",
		"Información",
	],
	"vs/base/node/processes": [
		"No se puede ejecutar un comando shell en una unidad UNC.",
	],
	"vs/editor/common/config/editorOptions": [
		"No se puede acceder al editor en este momento. Presione Alt+F1 para ver opciones.",
		"Contenido del editor",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Texto sin formato",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"La configuración predeterminada se reemplaza",
		"Establecer los valores de configuración que se reemplazarán para el lenguaje {0}.",
		"Establecer los valores de configuración que se reemplazarán para un lenguaje.",
		"Aporta opciones de configuración.",
		"Resumen de la configuración. Esta etiqueta se usará en el archivo de configuración como comentario divisor.",
		"Descripción de las propiedades de configuración.",
		"No se puede registrar \"{0}\". Coincide con el patrón de propiedad \'\\\\[.*\\\\]$\' para describir la configuración del editor específica del lenguaje. Utilice la contribución \"configurationDefaults\".",
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
		"Un evento de activación emitido cada vez que se abre un archivo que se resuelve en el idioma especificado.",
		"Un evento de activación emitido cada vez que se invoca el comando especificado.",
		"Un evento de activación emitido cada vez que se inicia una sesión de depuración del tipo especificado.",
		"Un evento de activación emitido cada vez que se abre una carpeta que contiene al menos un archivo que coincide con el patrón global especificado.",
		"Un evento de activación emitido cada vez que se expande la vista especificada.",
		"Un evento de activación emitido al inicio de VS Code. Para garantizar una buena experiencia para el usuario final, use este evento de activación en su extensión solo cuando no le sirva ninguna otra combinación de eventos de activación en su caso.",
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
	"vs/workbench/api/node/extHostTask": [
		"{0}: {1}",
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"No se ha registrado ninga vista del árbol con id \'{0}\'.",
		"No se ha registrado ninga vista del árbol con id \'{0}\'.",
		"No se encontró ningún item del árbol con id \'{0}\'.",
		"El elemento \'{0}\' ya está registrado",
	],
	"vs/workbench/node/extensionHostMain": [
		"La ruta de acceso {0} no apunta a un ejecutor de pruebas de extensión.",
	]
});