/**
 * drop
 */

/**
 * @param {import("vscode").ExtensionContext} context
 */
async function activate(context) {
  const esm = await import("./extension.js")
  esm.activate(context)
}

async function deactivate() {
  const esm = await import("./extension.js")
  esm.deactivate()
}

module.exports = { activate, deactivate }
