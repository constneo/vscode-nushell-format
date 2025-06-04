// 当前插件的唯一标识符,应该与 package.json中的 configuration.id相对应
export const EXNTENSION_ID = "vscode-nushell-format"

export const DISPLAY_NAME = ""

export const CONFIG = {
  TOPIARY_CONFIG_FILE: "TOPIARY_CONFIG_FILE",
  TOPIARY_LANGUAGE_DIR: "TOPIARY_LANGUAGE_DIR",
  notify: "notify"
}

export const COMMANDS = {
  format: "vscode-nushell-format.format"
}

export const selector = [{ scheme: "file", language: "nushell", pattern: "**/*.nu" }]
