/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.ru", {
	"vs/base/common/processes": [
		"Ошибка: в исполняемых данных должна определяться команда типа string.",
		"Предупреждение: isShellCommand должен иметь тип boolean. Игнорируется значение {0}.",
		"Предупреждение: аргументы должны иметь тип string[]. Игнорируется значение {0}.",
		"Предупреждение: options.cwd должен иметь тип string. Игнорируется значение {0}.",
	],
	"vs/base/common/severity": [
		"Ошибка",
		"Предупреждение",
		"Сведения",
	],
	"vs/base/node/processes": [
		"Невозможно выполнить команду оболочки на диске UNC.",
	],
	"vs/editor/common/config/editorOptions": [
		"Редактор сейчас недоступен. Чтобы открыть список действий, нажмите ALT+F1.",
		"Содержимое редактора",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Обычный текст",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Переопределения конфигурации по умолчанию",
		"Настройка переопределяемых параметров редактора для языка {0}.",
		"Настройка параметров редактора, переопределяемых для языка.",
		"Добавляет параметры конфигурации.",
		"Краткая сводка параметров. Эта метка будет использоваться в файле параметров в качестве разделяющего комментария.",
		"Описание свойств конфигурации.",
		"Невозможно зарегистрировать \"{0}\". Оно соответствует шаблону свойства \'\\\\[.*\\\\]$\' для описания параметров редактора, определяемых языком. Используйте участие configurationDefaults.",
		"Невозможно зарегистрировать \"{0}\". Это свойство уже зарегистрировано.",
		"configuration.properties должно быть объектом",
		"Если тип configuration.type задан, то он должен иметь значение object",
		"configuration.title должно быть строкой",
		"Предоставляет параметры конфигурации редактора по умолчанию в соответствии с языком.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Не удалось активировать расширение \"{1}\". Причина: неизвестный зависимый компонент \"{0}\".",
		"Не удалось активировать расширение \"{1}\". Причина: ошибка активации зависимого компонента \"{0}\".",
		"Не удалось активировать расширение \"{0}\". Причина: более 10 уровней зависимостей (скорее всего, цикл зависимостей).",
		"Ошибка активации расширения \"{0}\": {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Для расширений VS Code указывает версию VS Code, с которой совместимо расширение. Она не может быть задана как \"*\". Например, ^0.10.5 сообщает о совместимости с минимальной версией VS Code 0.10.5.",
		"Издатель расширения VS Code.",
		"Отображаемое имя расширения, используемого в коллекции VS Code.",
		"Категории, используемые коллекцией VS Code для классификации расширения.",
		"Баннер, используемый в магазине VS Code.",
		"Цвет баннера в заголовке страницы магазина VS Code.",
		"Цветовая тема для шрифта, используемого в баннере.",
		"Все публикации расширения VS Code, представленные этим пакетом.",
		"Добавляет метку \"Предварительная версия\" для расширения в Marketplace.",
		"События активации для расширения кода VS Code.",
		"Событие активации выдается каждый раз, когда открывается файл, который разрешается к указанному языку.",
		"Событие активации выдается каждый раз при вызове указанной команды.",
		"Событие активации выдается каждый раз при запуске сеанса отладки указанного типа.",
		"Событие активации выдается каждый раз при открытии папки, содержащей по крайней мере один файл, который соответствует указанной стандартной маске.",
		"Событие активации выдается каждый раз при развертывании указанного окна.",
		"Событие активации выдается при запуске VS Code. Для удобства пользователя используйте это событие в своем расширении только в том случае, если другие сочетания событий не подходят.",
		"Массив эмблем, отображаемых на боковой панели страницы расширения Marketplace.",
		"URL-адрес изображения эмблемы.",
		"Ссылка на эмблему.",
		"Описание эмблемы.",
		"Зависимости от других расширений. Идентификатор расширения — всегда ${publisher}.${name}. Например: vscode.csharp.",
		"Скрипт, выполняемый перед публикацией пакета в качестве расширения VS Code.",
		"Путь к значку размером 128 x 128 пикселей.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"Не отображается еще несколько ошибок и предупреждений ({0}).",
	],
	"vs/workbench/api/node/extHostTask": [
		"{0}: {1}",
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"Отсутствует зарегистрированное представление в виде дерева с идентификатором \'{0}\'.",
		"Отсутствует зарегистрированное представление в виде дерева с идентификатором \'{0}\'.",
		"Отсутствует элемент дерева с идентификатором \'{0}\'.",
		"Элемент {0} уже зарегистрирован",
	],
	"vs/workbench/node/extensionHostMain": [
		"Путь \"{0}\" не указывает на допустимый модуль выполнения тестов расширения.",
	]
});