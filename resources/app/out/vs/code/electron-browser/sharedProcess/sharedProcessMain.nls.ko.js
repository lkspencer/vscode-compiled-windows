/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-browser/sharedProcess/sharedProcessMain.nls.ko",{"vs/base/common/severity":["오류","경고","정보"],"vs/base/node/zip":["zip 파일 내에 {0}이(가) 없습니다."],"vs/platform/configuration/common/configurationRegistry":["기본 구성 재정의","{0} 언어에 대해 재정의할 편집기 설정을 구성합니다.","언어에 대해 재정의할 편집기 설정을 구성합니다.","'{0}'을(를) 등록할 수 없습니다. 이는 언어별 편집기 설정을 설명하는 속성 패턴인 '\\\\[.*\\\\]$'과(와) 일치합니다. 'configurationDefaults' 기여를 사용하세요.","'{0}'을(를) 등록할 수 없습니다. 이 속성은 이미 등록되어 있습니다."],"vs/platform/extensionManagement/common/extensionManagement":["확장","기본 설정"],"vs/platform/extensionManagement/node/extensionGalleryService":["VS Code의 현재 버전 '{0}'과(와) 호환되는 확장을 찾을 수 없으므로 다운로드할 수 없습니다."],
"vs/platform/extensionManagement/node/extensionManagementService":["잘못된 확장: package.json이 JSON 파일이 아닙니다.","{0}을(를) 다시 설치하기 전에 Code를 다시 시작하세요.","이 확장의 최신 버전이 이미 설치되어 있습니다. 이 버전을 이전 버전으로 재정의하시겠습니까?","재정의","취소","의존성 설치 중 오류가 발생했습니다. {0}","'{0}'을(를) 설치할 수 없습니다; VS Code '{1}'과 호환되는 버전이 없습니다.","문제가 있다고 보고되었으므로 확장을 설치할 수 없습니다.","VS Code의 현재 버전 '{1}'과(와) 호환되는 종속된 확장 '{0}'을(를) 찾을 수 없으므로 설치할 수 없습니다.","확장을 설치할 수 없습니다. 다시 설치하기 위해 VS Code를 종료하고 다시 시작하십시오.","확장을 설치할 수 없습니다. 다시 설치하기 전에 VS 코드를 종료한 후 다시 시작하십시오. ","'{0}'만 제거할까요, 아니면 종속성도 제거할까요?","만","모두","취소","'{0}'을(를) 제거할까요?","확인","취소","확장 '{0}'을(를) 제거할 수 없습니다. 확장 '{1}'이(가) 이 확장에 종속됩니다.","확장 '{0}'을(를) 제거할 수 없습니다. 확장 '{1}' 및 '{2}'이(가) 이 확장에 종속됩니다.","확장 '{0}'을(를) 제거할 수 없습니다. 확장 '{1}', '{2}' 등이 이 확장에 종속됩니다.","확장을 찾을 수 없음"],
"vs/platform/extensions/node/extensionValidator":["`engines.vscode` 값 {0}을(를) 구문 분석할 수 없습니다. ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x 등을 사용하세요.","`engines.vscode`({0})에 지정된 버전이 명확하지 않습니다. vscode 버전이 1.0.0 이전이면 최소한 원하는 주 버전과 부 버전을 정의하세요( 예: ^0.10.0, 0.10.x, 0.11.0 등).","`engines.vscode`({0})에 지정된 버전이 명확하지 않습니다. vscode 버전이 1.0.0 이후이면 최소한 원하는 주 버전을 정의하세요(예: ^1.10.0, 1.10.x, 1.x.x, 2.x.x 등).","확장이 Code {0}과(와) 호환되지 않습니다. 확장에 {1}이(가) 필요합니다.","가져온 확장 설명이 비어 있습니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `object` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.","속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string` 형식이어야 합니다.","확장의 폴더({1}) 내에 포함할 `main`({0})이 필요합니다. 이로 인해 확장이 이식 불가능한 상태가 될 수 있습니다.","속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.","확장 버전이 semver와 호환되지 않습니다."],
"vs/platform/message/common/message":["닫기","나중에","취소","...1개의 추가 파일이 표시되지 않음","...{0}개의 추가 파일이 표시되지 않음"],"vs/platform/request/node/request":["HTTP","사용할 프록시 설정입니다. 설정되지 않으면 http_proxy 및 https_proxy 환경 변수에서 가져옵니다.","제공된 CA 목록에 대해 프록시 서버 인증서를 확인해야 하는지 여부를 나타냅니다.","모든 네트워크 요청에 대해 'Proxy-Authorization' 헤더로 보낼 값입니다."],"vs/platform/telemetry/common/telemetryService":["원격 분석","사용 데이터와 오류를 Microsoft에 전송할 수 있습니다."]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1633d0959a33c1ba0169618280a0edb30d1ddcc3/core/vs\code\electron-browser\sharedProcess\sharedProcessMain.nls.ko.js.map
