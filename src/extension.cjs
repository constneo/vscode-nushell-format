/**
 * @param {import("vscode").ExtensionContext} context
 */
async function activate(context) {
  // 加载 ESM
  const esm = await import("./extension.js")
  // 委托给 ES 模块的 activate 方法
  esm.activate(context)
}

async function deactivate() {
  const esm = await import("./extension.js")
  esm.deactivate()
}

module.exports = { activate, deactivate }
