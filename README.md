# vscode-compiled-windows

This is a p-recompiled version of vs code for windows.

## Contributions

To contribute to this project, pull any tagged version of VS Code from the official
[GitHub repo](https://github.com/Microsoft/vscode). Review the
[documentation](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run-from-source)
for how to compile VS Code.

### Update Node
Download the latest version of node and install it and then update npm: `npm update npm -g`.

### Cleanup from last build
1. Delete the old vscode folder (this step makes the building simpler as it forces npm to
   re-pull all the latest things it needs)
1. In git bash:
```
git clone https://github.com/microsoft/vscode
cd vscode
git checkout #.##.#
```

### Building
1. From a windows command prompt, change to the directory where vscode was cloned.
```
scripts\npm.bat install
gulp watch
```

2. Wait for the gulp command to show the following messages:
```
[monaco.d.ts] Starting monaco.d.ts generation
[monaco.d.ts] Finished monaco.d.ts generation
Finished compilation with 0 errors after 53616 ms
Starting compilation...
Finished compilation with 0 errors after 12152 ms
```

3. Press `Ctrl + C` to stop the watch.
4. Delete the old folder if it is still there from a previous build and then run the build command `gulp vscode-win32`
5. Once you have a freshly built new version of VS Code, run it and test to make sure that it works.
6. After testing the newly built version of VS Code, delete everything out of your
   `vscode-compiled-windows` folder except for the following:

    1. .git folder
    1. LICENSE.txt
    1. README.md

7. Copy the contents from the VSCode-win32 folder into the `vscode-compiled-windows` folder.
8. Run the following git command to tell git for this project to ignore crlf for now:
   `git config core.autocrlf false`. Now perform your standard `git add .` and
   `git commit -m "added version v#.#.#"` commands.
