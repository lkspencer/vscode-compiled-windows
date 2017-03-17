/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/sharedProcessMain.nls.ko", {
	"vs/base/common/json": [
		"잘못된 기호",
		"잘못된 숫자 형식",
		"속성 이름 필요",
		"값 필요",
		"콜론이 필요합니다.",
		"쉼표가 필요합니다.",
		"닫는 괄호 필요",
		"닫는 대괄호 필요",
		"파일 끝 필요",
	],
	"vs/base/common/severity": [
		"오류",
		"경고",
		"정보",
	],
	"vs/base/node/zip": [
		"zip 파일 내에 {0}이(가) 없습니다.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"기본 구성 재정의",
		"{0} 언어에 대해 재정의할 편집기 설정을 구성합니다.",
		"언어에 대해 재정의할 편집기 설정을 구성합니다.",
		"구성 설정을 적용합니다.",
		"설정을 요약합니다. 이 레이블은 설정 파일에서 구분 주석으로 사용됩니다.",
		"구성 속성에 대한 설명입니다.",
		"{0}\'을(를) 등록할 수 없습니다. 이는 언어별 편집기 설정을 설명하는 속성 패턴인 \'\\[.*\\]$\'과(와) 일치합니다. \'configurationDefaults\' 기여를 사용하세요.",
		"\'{0}\'을(를) 등록할 수 없습니다. 이 속성은 이미 등록되어 있습니다.",
		"\'configuration.properties\'는 개체여야 합니다.",
		"설정된 경우 \'configuration.type\'을 \'개체\'로 설정해야 합니다.",
		"\'configuration.title\'은 문자열이어야 합니다.",
		"언어별로 기본 편집기 구성 설정을 적용합니다.",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"확장",
		"기본 설정",
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"확장을 찾을 수 없습니다.",
		"이 버전의 Code에서 {0}의 호환 버전을 찾을 수 없습니다.",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"잘못된 확장: package.json이 JSON 파일이 아닙니다.",
		"잘못된 확장: 매니페스트 이름이 일치하지 않습니다.",
		"잘못된 확장: 매니페스트 게시자가 일치하지 않습니다.",
		"잘못된 확장: 매니페스트 버전이 일치하지 않습니다.",
		"{0}을(를) 다시 설치하기 전에 Code를 다시 시작하세요.",
		"{0}을(를) 다시 설치하기 전에 Code를 다시 시작하세요.",
		"\'{0}\'을(를) 설치하면 종속성도 설치됩니다. 계속할까요?",
		"예",
		"아니요",
		"{0}을(를) 다시 설치하기 전에 Code를 다시 시작하세요.",
		"\'{0}\'만 제거할까요, 아니면 종속성도 제거할까요?",
		"만",
		"모두",
		"취소",
		"\'{0}\'을(를) 제거할까요?",
		"확인",
		"취소",
		"확장 \'{0}\'을(를) 제거할 수 없습니다. 확장 \'{1}\'이(가) 이 확장에 종속됩니다.",
		"확장 \'{0}\'을(를) 제거할 수 없습니다. 확장 \'{1}\' 및 \'{2}\'이(가) 이 확장에 종속됩니다.",
		"확장 \'{0}\'을(를) 제거할 수 없습니다. 확장 \'{1}\', \'{2}\' 등이 이 확장에 종속됩니다.",
		"확장을 찾을 수 없음",
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
	"vs/platform/extensions/node/extensionValidator": [
		"`engines.vscode` 값 {0}을(를) 구문 분석할 수 없습니다. ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x 등을 사용하세요.",
		"`engines.vscode`({0})에 지정된 버전이 명확하지 않습니다. vscode 버전이 1.0.0 이전이면 최소한 원하는 주 버전과 부 버전을 정의하세요( 예: ^0.10.0, 0.10.x, 0.11.0 등).",
		"`engines.vscode`({0})에 지정된 버전이 명확하지 않습니다. vscode 버전이 1.0.0 이후이면 최소한 원하는 주 버전을 정의하세요(예: ^1.10.0, 1.10.x, 1.x.x, 2.x.x 등).",
		"확장이 Code {0}과(와) 호환되지 않습니다. 확장에 {1}이(가) 필요합니다.",
		"가져온 확장 설명이 비어 있습니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `object` 형식이어야 합니다.",
		"속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.",
		"속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.",
		"속성 `{0}`은(는) 생략할 수 있으며 `string` 형식이어야 합니다.",
		"확장의 폴더({1}) 내에 포함할 `main`({0})이 필요합니다. 이로 인해 확장이 이식 불가능한 상태가 될 수 있습니다.",
		"속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.",
		"확장 버전이 semver와 호환되지 않습니다.",
	],
	"vs/platform/message/common/message": [
		"닫기",
		"나중에",
		"취소",
	],
	"vs/platform/request/node/request": [
		"HTTP",
		"사용할 프록시 설정입니다. 설정되지 않으면 http_proxy 및 https_proxy 환경 변수에서 가져옵니다.",
		"제공된 CA 목록에 대해 프록시 서버 인증서를 확인해야 하는지 여부를 나타냅니다.",
		"모든 네트워크 요청에 대해 \'Proxy-Authorization\' 헤더로 보낼 값입니다.",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"원격 분석",
		"사용 데이터와 오류를 Microsoft에 전송할 수 있습니다.",
	]
});