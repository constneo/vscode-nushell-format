// 当前插件的唯一标识符,应该与 package.json中的 configuration.id相对应
export const ID = "vscode-nushell-format"

export const ENV = {
  file: "TOPIARY_CONFIG_FILE",
  dir: "TOPIARY_LANGUAGE_DIR"
}

export const COMMANDS = {
  format: "vscode-nushell-format.format"
}

export const selector = [{ scheme: "file", language: "nushell", pattern: "**/*.nu" }]
