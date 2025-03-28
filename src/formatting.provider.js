import { COMMANDS, selector } from "./constans.js"
import { format, getConfig } from "./utils.js"
import vscode from "./vscode.js"

export class Disposable extends vscode.Disposable {
  subscriptions = []

  dispose() {
    this.subscriptions.forEach(sub => sub.dispose())
  }
}

export class FormattingEditProvider extends Disposable {
  constructor() {
    super(() => {})

    vscode.workspace.onWillSaveTextDocument(this.onWillSaveDocument)
    this.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(selector, this))
  }

  async provideDocumentFormattingEdits(document) {
    try {
      await getConfig()
      await format(document.fileName)
    } catch (err) {
      vscode.window.showErrorMessage(`${err}`)
    }
    return []
  }

  async onWillSaveDocument(_event) {
    vscode.commands.executeCommand(COMMANDS.format)
    return []
  }
}
