/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.pt-br", {
	"vs/base/common/severity": [
		"Erro",
		"Aviso",
		"Informações",
	],
	"vs/base/node/zip": [
		"{0} não encontrado dentro do zip.",
	],
	"vs/code/node/cliProcessMain": [
		"Extensão \'{0}\' não encontrada.",
		"Extensão \'{0}\' não está instalada.",
		"Certifique-se de usar a ID de extensão completa, incluindo o editor, por exemplo: {0}",
		"Extensão \'{0}\' foi instalada com sucesso!",
		"Extensão \'{0}\' já está instalada.",
		"Encontrado \'{0}\' na loja VS Code.",
		"Instalando...",
		"Extensão \'{0}\' v {1} foi instalada com sucesso!",
		"Desinstalando {0}...",
		"Extensão \'{0}\' foi desinstalada com sucesso!",
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
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Extensões",
		"Preferências",
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"Extensão não encontrada",
		"Não foi possível econtrar uma versão de {0} com esta versão do Code.",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"Extensão inválida: pacote.json nao é um arquivo JSON válido",
		"Por favor reinicie Code antes de reinstalar {0}.",
		"Por favor reinicie Code antes de reinstalar {0}.",
		"A instalação de \'{0}\' também inclui suas dependências. Gostaria de continuar?",
		"Sim",
		"Não",
		"Por favor reinicie Code antes de reinstalar {0}.",
		"Gostaria de desinstalar \'{0}\' somente, ou suas dependências também?",
		"Apenas",
		"Todos",
		"Cancelar",
		"Tem certeza que deseja desinstalar \'{0}\'?",
		"OK",
		"Cancelar",
		"Não foi possível desinstalar a extensão \'{0}\'. A extensão \'{1}\' depende dela.",
		"Não foi possível desinstalar a extensão \'{0}\'. As extensões \'{1}\' e \'{2}\' dependem dela.",
		"Não foi possível desinstalar a extensão \'{0}\'. As extensões \'{1}\' e \'{2}\' e outras dependem dela.",
		"Não foi possível encontrar a extensão",
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
	"vs/platform/extensions/node/extensionValidator": [
		"Não foi possível analisar o valor de \'engines.vscode\' {0}. Por favor, utilize, por exemplo: ^ 0.10.0, ^ 1.2.3, ^ 0.11.0, ^ 0.10.x, etc.",
		"Versão especificada em \'engines.vscode\' ({0}) não é específica o suficiente. Para versões do vscode anteriores a 1.0.0, por favor defina no mínimo a versão principal e secundária desejada. Por exemplo, ^ 0.10.0, 0.10.x, 0.11.0, etc.",
		"Versão especificada em \'engines.vscode\' ({0}) não é específica o suficiente. Para as versões do vscode posteriores a 1.0.0, por favor defina no mínimo a versão principal do desejado. Por exemplo, ^ 1.10.0, 1.10.x 1. XX, 2.x.x, etc.",
		"Extensão não é compatível com Code {0}. A extensão requer: {1}.",
		"Descrição de extensão vazia obtida",
		"a propriedade `{0}` é obrigatória e deve ser do tipo `string`",
		"a propriedade `{0}` é obrigatória e deve ser do tipo `string`",
		"a propriedade `{0}` é obrigatória e deve ser do tipo `string`",
		"a propriedade `{0}` é obrigatória e deve ser do tipo `object`",
		"a propriedade `{0}` é obrigatória e deve ser do tipo `string`",
		"a propriedade `{0}` pode ser omitida ou deve ser do tipo `string[]`",
		"a propriedade `{0}` pode ser omitida ou deve ser do tipo `string[]`",
		"Propriedades \'{0}\' e \'{1}\' devem ser especificadas ou devem ambas ser omitidas",
		"a propriedade `{0}` é opcional ou pode ser do tipo `string`",
		"Esperado \'main\' ({0}) ser incluído dentro da pasta da extensão ({1}). Isto pode fazer a extensão não-portável.",
		"propriedades \'{0}\' e \'{1}\' devem ser especificadas ou devem ambas ser omitidas",
		"Versão da extensão não é compatível a semver",
	],
	"vs/platform/message/common/message": [
		"Fechar",
		"Mais tarde",
		"Cancelar",
	],
	"vs/platform/request/node/request": [
		"HTTP",
		"As configurações de proxy a usar. Se não forem configuradas, serão obtidas das variáveis de ambiente http_proxy e https_proxy",
		"Se o certificado do servidor de proxy deve ser verificado contra a lista de autoridades de certificação fornecida.",
		"O valor para enviar como o cabeçalho de \'autorização Proxy\' para cada solicitação de rede.",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetria",
		"Permitir que os dados de uso e erros sejam enviados à Microsoft.",
	]
});