import { exec } from "child_process"
import vscode from "./vscode.js"
import { ENV, ID } from "./constans.js"
import fs from "node:fs"

/**
 * @param {string} fileName
 */
export function format(fileName) {
  return new Promise((resolve, reject) => {
    exec(`topiary  format  ${fileName}`, (error, stdout, stderr) => {
      if (error) reject(`topiary error ${stderr || error.message}`)
      else resolve(stdout)
    })
  })
}

/**
 * 检查环境变量以及配置
 */
export function getConfig() {
  return new Promise((resolve, reject) => {
    const config = vscode.workspace.getConfiguration(ID)

    const configFile = config.get(ENV.file)
    console.log("[plugin TOPIARY_CONFIG_FILE ]->", configFile)
    if (fs.existsSync(configFile)) {
      process.env.TOPIARY_CONFIG_FILE = configFile
    }

    const dir = config.get(ENV.dir)
    console.log("[plugin TOPIARY_LANGUAGE_DIR ]->", dir)

    if (fs.existsSync(dir)) {
      process.env.TOPIARY_LANGUAGE_DIR = dir
    }

    const { TOPIARY_CONFIG_FILE, TOPIARY_LANGUAGE_DIR } = process.env

    if (!TOPIARY_CONFIG_FILE) {
      reject(`Environment variable not set:${ENV.file} `)
    }

    if (!TOPIARY_LANGUAGE_DIR) {
      reject(`Environment variable not set:${ENV.dir}`)
    }

    const notify = config.get("notify")

    resolve({
      TOPIARY_CONFIG_FILE,
      TOPIARY_LANGUAGE_DIR,
      notify
    })
  })
}
