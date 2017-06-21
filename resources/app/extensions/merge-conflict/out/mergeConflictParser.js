"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const vscode = require("vscode");
const documentMergeConflict_1 = require("./documentMergeConflict");
const startHeaderMarker = '<<<<<<< ';
const splitterMarker = '=======';
const endFooterMarker = '>>>>>>> ';
class MergeConflictParser {
    static scanDocument(document) {
        // Scan each line in the document, we already know there is atleast a <<<<<<< and
        // >>>>>> marker within the document, we need to group these into conflict ranges.
        // We initially build a scan match, that references the lines of the header, splitter
        // and footer. This is then converted into a full descriptor containing all required
        // ranges.
        let currentConflict = null;
        const conflictDescriptors = [];
        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i);
            // Ignore empty lines
            if (!line || line.isEmptyOrWhitespace) {
                continue;
            }
            // Is this a start line? <<<<<<<
            if (line.text.startsWith(startHeaderMarker)) {
                if (currentConflict !== null) {
                    // Error, we should not see a startMarker before we've seen an endMarker
                    currentConflict = null;
                    // Give up parsing, anything matched up this to this point will be decorated
                    // anything after will not
                    break;
                }
                // Create a new conflict starting at this line
                currentConflict = { startHeader: line };
            }
            else if (currentConflict && line.text.startsWith(splitterMarker)) {
                currentConflict.splitter = line;
            }
            else if (currentConflict && line.text.startsWith(endFooterMarker)) {
                currentConflict.endFooter = line;
                // Create a full descriptor from the lines that we matched. This can return
                // null if the descriptor could not be completed.
                let completeDescriptor = MergeConflictParser.scanItemTolMergeConflictDescriptor(document, currentConflict);
                if (completeDescriptor !== null) {
                    conflictDescriptors.push(completeDescriptor);
                }
                // Reset the current conflict to be empty, so we can match the next
                // starting header marker.
                currentConflict = null;
            }
        }
        return conflictDescriptors
            .filter(Boolean)
            .map(descriptor => new documentMergeConflict_1.DocumentMergeConflict(document, descriptor));
    }
    static scanItemTolMergeConflictDescriptor(document, scanned) {
        // Validate we have all the required lines within the scan item.
        if (!scanned.startHeader || !scanned.splitter || !scanned.endFooter) {
            return null;
        }
        // Assume that descriptor.current.header, descriptor.incoming.header and descriptor.spliiter
        // have valid ranges, fill in content and total ranges from these parts.
        // NOTE: We need to shift the decortator range back one character so the splitter does not end up with
        // two decoration colors (current and splitter), if we take the new line from the content into account
        // the decorator will wrap to the next line.
        return {
            current: {
                header: scanned.startHeader.range,
                decoratorContent: new vscode.Range(scanned.startHeader.rangeIncludingLineBreak.end, MergeConflictParser.shiftBackOneCharacter(document, scanned.splitter.range.start)),
                // Current content is range between header (shifted for linebreak) and splitter start
                content: new vscode.Range(scanned.startHeader.rangeIncludingLineBreak.end, scanned.splitter.range.start),
                name: scanned.startHeader.text.substring(startHeaderMarker.length)
            },
            splitter: scanned.splitter.range,
            incoming: {
                header: scanned.endFooter.range,
                decoratorContent: new vscode.Range(scanned.splitter.rangeIncludingLineBreak.end, MergeConflictParser.shiftBackOneCharacter(document, scanned.endFooter.range.start)),
                // Incoming content is range between splitter (shifted for linebreak) and footer start
                content: new vscode.Range(scanned.splitter.rangeIncludingLineBreak.end, scanned.endFooter.range.start),
                name: scanned.endFooter.text.substring(endFooterMarker.length)
            },
            // Entire range is between current header start and incoming header end (including line break)
            range: new vscode.Range(scanned.startHeader.range.start, scanned.endFooter.rangeIncludingLineBreak.end)
        };
    }
    static containsConflict(document) {
        if (!document) {
            return false;
        }
        let text = document.getText();
        return text.includes(startHeaderMarker) && text.includes(endFooterMarker);
    }
    static shiftBackOneCharacter(document, range) {
        let line = range.line;
        let character = range.character - 1;
        if (character < 0) {
            line--;
            character = document.lineAt(line).range.end.character;
        }
        return new vscode.Position(line, character);
    }
}
exports.MergeConflictParser = MergeConflictParser;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379d2efb5539b09112c793d3d9a413017d736f89/extensions\merge-conflict\out/mergeConflictParser.js.map
