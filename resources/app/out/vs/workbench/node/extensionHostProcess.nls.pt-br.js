/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.pt-br", {
	"vs/base/common/processes": [
		"Erro: informações de executável devem definir um comando do tipo string",
		"Aviso: IsShellCommand deve ser to tipo booleano. Ignorando valor {0}",
		"Aviso: args deve ser do tipo string[]. Ignorando valor {0}.",
		"Aviso: options.cwd deve ser do tipo string. Ignorando valor {0}.",
	],
	"vs/base/common/severity": [
		"Erro",
		"Aviso",
		"Informações",
	],
	"vs/base/node/processes": [
		"Não é possível executar um comando shell em uma unidade UNC.",
	],
	"vs/editor/common/config/editorOptions": [
		"O editor não está acessível neste momento. Por favor pressione Alt+F1 para opções.",
		"Conteúdo do editor",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Texto sem formatação",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Sobreposições da Configuração Padrão",
		"Definir que configurações do editor sejam substituídas para idioma {0}.",
		"Definir que configurações do editor sejam substituídas para um idioma.",
		"Contribui às definições de configuração.",
		"Um resumo das configurações. Este rótulo será usado no arquivo de configurações como um comentário de separação.",
		"Descrição das propriedades de configuração.",
		"Não é possível registrar \'{0}\'. Isto corresponde a propriedade padrão \'\\\\[.*\\\\]$\' para descrever configurações do editor específico de linguagem. Use a contribuição \'configurationDefaults\'.",
		"Não é possível registrar \'{0}\'. Esta propriedade já está registrada.",
		"\'configuration.properties\' deve ser um objeto",
		"Se definido, \'configuration.type\' deve ser do tipo \'object\'",
		"\'configuration.title\' deve ser um string",
		"Contribui às definições de configuração padrão do editor por linguagem.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Extensão \'{1}\' falhou ao ativar. Motivo: dependência desconhecida \'{0}\'.",
		"Extensão \'{1}\' falhou ao ativar. Motivo: a dependência \'{0}\' falhou ao ativar.",
		"Extensão \'{0}\' falhou ao ativar. Motivo: mais de 10 níveis de dependências (provavelmente um laço de dependência).",
		"Ativação da extensão `{0}` falhou: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Para extensões do VS Code, especifica a versão do VS Code que a extensão é compatível. Não pode ser *. Por exemplo: ^0.10.5 indica compatibilidade com uma versão mínima de 0.10.5 para o VS Code.",
		"O editor da extensão do VS Code.",
		"O nome de exibição para a extensão do VS Code.",
		"As categorias usadas pela galeria do VS Code para categorizar a extensão.",
		"Banner usado na loja VS Code.",
		"A cor do banner usado no cabeçalho de página da loja VS Code.",
		"A cor do tema usada para o fonte usado no banner.",
		"Todas as contribuições da extensão VS Code representadas por este pacote.",
		"Configura a extensão para ser marcada como pré-visualização na Loja.",
		"Eventos de ativação para a extensão VS Code.",
		"Um evento de ativação emitido sempre que um arquivo que resolve para a linguagem especificada é aberto.",
		"Um evento de ativação emitido sempre que o comando especificado for invocado.",
		"Um evento de ativação emitido sempre que uma sessão de depuração do tipo especificado é iniciada.",
		"Um evento de ativação emitido quando uma pasta que contém pelo menos um arquivo correspondente ao padrão global especificado é aberta.",
		"Um evento de ativação emitido sempre que o modo de visualização especificado é expandido.",
		"Um evento de ativação emitido na inicialização do VS Code. Para garantir uma ótima experiência de usuário, por favor, use este evento de ativação em sua extensão somente quando nenhuma outra combinação de eventos de ativação funcionar em seu caso de uso.",
		"Matriz de emblemas a mostrar na barra lateral da página da extensão na Loja.",
		"URL da imagem do emblema.",
		"Link do emblema.",
		"Descrição do emblema.",
		"Dependências para outras extensões. O identificador de uma extensão sempre é ${publisher}. ${nome}. Por exemplo: vscode.csharp.",
		"Script a ser executado antes do pacote ser publicado como uma extensão VS Code.",
		"O caminho para um ícone de 128x128 pixels.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"Não apresentando {0} erros e avisos a mais.",
	],
	"vs/workbench/api/node/extHostTask": [
		"{0}: {1}",
	],
	"vs/workbench/api/node/extHostTreeViews": [
		"Nenhuma visualização de árvore com id \'{0}\' registrado.",
		"Nenhuma visualização de árvore com id \'{0}\' registrado.",
		"Nenhum item de árvore com id \'{0}\' encontrado.",
		"Elemento {0} já está registrado",
	],
	"vs/workbench/node/extensionHostMain": [
		"Caminho {0} não aponta para um executor de testes com extensão válida.",
	]
});