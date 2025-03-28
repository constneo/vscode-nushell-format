import { getConfig } from "./utils.js"
import vscode from "./vscode.js"

export default async () => {
  try {
    const config = await getConfig()

    console.log("[ config ]->", config)

    if (config.notify) {
      vscode.window.showInformationMessage(`Thank you for using Format Nushell With TopiaryCLI .`)
    }
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to get Format Nushell With TopiaryCLI config.`)
  }
}
