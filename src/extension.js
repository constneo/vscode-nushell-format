import provider from "./fmt.provider.js"
import command from "./fmt.command.js"
import welcome from "./welcome.js"
import { ID } from "./constans.js"
import vscode from "./vscode.js"

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
  console.log(`Register ${ID} extension .`)

  context.subscriptions.push(command())
  context.subscriptions.push(provider())

  welcome()
}

export function deactivate() {}
