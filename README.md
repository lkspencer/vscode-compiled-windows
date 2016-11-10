# vscode-compiled-windows

This is a p-recompiled version of vs code for windows.

## Contributions

To contribute to this project, pull any tagged version of VS Code from the official
[GitHub repo](https://github.com/Microsoft/vscode). Review the
[documentation](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run-from-source)
for how to compile VS Code.

Prior to packaging, update the `product.json` file with the following code:

```javascript
{
	"nameShort": "Code",
	"nameLong": "VS Code",
	"applicationName": "code",
	"dataFolderName": ".vscode-oss",
	"win32MutexName": "vscodeoss",
	"licenseUrl": "https://github.com/Microsoft/vscode/blob/master/LICENSE.txt",
	"win32DirName": "Microsoft VS Code OSS",
	"win32NameVersion": "Microsoft VS Code OSS",
	"win32RegValueName": "CodeOSS",
	"win32AppId": "{{E34003BB-9E10-4501-8C11-BE3FAA83F23F}",
	"win32AppUserModelId": "Microsoft.CodeOSS",
	"darwinBundleIdentifier": "com.visualstudio.code.oss",
	"reportIssueUrl": "https://github.com/Microsoft/vscode/issues/new",
	"urlProtocol": "vscode-oss",
	"win32SetupExeBasename": "VSCodeSetup"
}
```

**NOTE:** If you get an error about monaco.d.ts while running the gulp task to package up VS
Code, in a separate command prompt/terminal run `gulp watch` and let that run till you see
`[monaco.d.ts] Starting monaco.d.ts generation` followed by
`[monaco.d.ts] Finished monaco.d.ts generation`. Gulp will eventually stop and simply watch the
folder for additional changes. Once that happens, you should be able to re-run the gulp task back
in your main command prompt/terminal to package up VS Code.

Once you have a freshly built new version of VS Code, run it and test to make sure that it works.

After testing the newly built version of VS Code, delete everything out of your
`vscode-compiled-windows` folder except for the following:

1. .git folder
1. LICENSE.txt
1. README.md

Run the following Git command to tell git for this project to ignore crlf for now:
`git config core.autocrlf false`. Now perform your standard `git add .` and
`git commit -m "added version v#.#.#"` commands.
