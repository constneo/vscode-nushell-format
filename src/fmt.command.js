import { COMMANDS } from "./constans.js"
import { getConfig, format } from "./utils.js"
import vscode from "./vscode.js"

export default () => {
  const disposable = vscode.commands.registerCommand(COMMANDS.format, async () => {
    const editor = vscode.window.activeTextEditor

    if (!editor) return

    const document = editor.document
    // const text = document.getText()

    try {
      await getConfig()
      await format(document.fileName)
    } catch (err) {
      vscode.window.showErrorMessage(`${err}`)
    }
  })

  return disposable
}
