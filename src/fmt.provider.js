import vscode from "./vscode.js"
import { COMMANDS, selector } from "./constans.js"

/**
 * @param {vscode.TextDocument} document
 */
async function provideDocumentFormattingEdits(document) {
  vscode.commands.executeCommand(COMMANDS.format)
  return []
}

export default () => {
  const disposeable = vscode.languages.registerDocumentFormattingEditProvider(selector, {
    provideDocumentFormattingEdits
  })

  return disposeable
}
