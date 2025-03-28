// 将 commonjs的 vscode 包装为 ESM
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const vscode = require("vscode")

export default vscode
