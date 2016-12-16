/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.ko", {
	"vs/base/common/processes": [
		"오류: 실행 파일 정보에서는 문자열 형식의 명령을 정의해야 합니다.",
		"경고: isShellCommand는 boolean 형식이어야 합니다. {0} 값을 무시합니다.",
		"경고: args는 string[] 형식이어야 합니다. {0} 값을 무시합니다.",
		"경고: options.cwd는 string 형식이어야 합니다. {0} 값을 무시합니다.",
	],
	"vs/base/common/severity": [
		"오류",
		"경고",
		"정보",
	],
	"vs/base/node/processes": [
		"UNC 드라이브에서 셸 명령을 실행할 수 없습니다.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"구성 설정을 적용합니다.",
		"설정을 요약합니다. 이 레이블은 설정 파일에서 구분 주석으로 사용됩니다.",
		"구성 속성에 대한 설명입니다.",
		"설정된 경우 \'configuration.type\'을 \'개체\'로 설정해야 합니다.",
		"\'configuration.title\'은 문자열이어야 합니다.",
		"\'configuration.properties\'는 개체여야 합니다.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"확장 `{1}`을(를) 활성화하지 못했습니다. 이유: 알 수 없는 종속성 `{0}`.",
		"확장 `{1}`을(를) 활성화하지 못했습니다. 이유: 종속성 `{0}`이(가) 활성화되지 않았습니다.",
		"확장 `{0}`을(를) 활성화하지 못했습니다. 이유: 종속성 수준이 10개가 넘음(종속성 루프일 가능성이 높음).",
		"확장 `{0}` 활성화 실패: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"VS Code 확장의 경우, 확장이 호환되는 VS Code 버전을 지정합니다. *일 수 없습니다. 예를 들어 ^0.10.5는 최소 VS Code 버전인 0.10.5와 호환됨을 나타냅니다.",
		"VS Code 확장의 게시자입니다.",
		"VS Code 갤러리에 사용되는 확장의 표시 이름입니다.",
		"확장을 분류하기 위해 VS Code 갤러리에서 사용하는 범주입니다.",
		"VS Code 마켓플레이스에 사용되는 배너입니다.",
		"VS Code 마켓플레이스 페이지 머리글의 배너 색상입니다.",
		"배너에 사용되는 글꼴의 색상 테마입니다.",
		"이 패키지에 표시된 VS Code 확장의 전체 기여입니다.",
		"마켓플레이스에서 Preview로 플래그 지정할 확장을 설정합니다.",
		"VS Code 확장에 대한 활성화 이벤트입니다.",
		"마켓플레이스 확장 페이지의 사이드바에 표시할 배지의 배열입니다.",
		"배지 이미지 URL입니다.",
		"배지 링크입니다.",
		"배지 설명입니다.",
		"다른 확장에 대한 종속성입니다. 확장 식별자는 항상 ${publisher}.${name}입니다(예: vscode.csharp).",
		"패키지가 VS Code 확장 형태로 게시되기 전에 스크립트가 실행되었습니다.",
		"128x128 픽셀 아이콘의 경로입니다.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"{0}개의 추가 오류 및 경고를 표시하지 않습니다.",
	],
	"vs/workbench/api/node/extHostTreeExplorers": [
		"ID가 \'{0}\'인 등록된 TreeExplorerNodeProvider가 없습니다.",
		"TreeExplorerNodeProvider \'{0}\'에서 루트 노드를 제공하지 못했습니다.",
		"ID가 \'{0}\'인 등록된 TreeExplorerNodeProvider가 없습니다.",
		"TreeExplorerNodeProvider \'{0}\'에서 자식을 확인하지 못했습니다.",
	],
	"vs/workbench/node/extensionHostMain": [
		"경로 {0}이(가) 유효한 확장 Test Runner를 가리키지 않습니다.",
	]
});