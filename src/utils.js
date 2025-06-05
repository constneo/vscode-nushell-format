import { exec } from "child_process"
import vscode from "./vscode.js"
import { CONFIG, EXNTENSION_ID } from "./constans.js"
import fs from "node:fs"

/**
 * @param {string} fileName
 */
export function format(fileName) {
  return new Promise((resolve, reject) => {
    exec(`topiary  format  "${fileName}"`, (error, stdout, stderr) => {
      if (error) reject(`topiary error ${stderr || error.message}`)
      else resolve(stdout)
    })
  })
}

/**
 * @typedef {{TOPIARY_CONFIG_FILE:string,TOPIARY_LANGUAGE_DIR:string,notify:boolean}} Configuration
 */

/**
 * 检查环境变量以及配置
 * @returns {Promise<Configuration>}
 */
export function getConfig() {
  return new Promise((resolve, reject) => {
    const config = vscode.workspace.getConfiguration(EXNTENSION_ID)
    console.log("config:", config)

    const configFile = config.get(CONFIG.TOPIARY_CONFIG_FILE)
    console.log("[plugin config TOPIARY_CONFIG_FILE ]->", configFile)

    if (fs.existsSync(configFile)) {
      process.env.TOPIARY_CONFIG_FILE = configFile
    }

    const languageDir = config.get(CONFIG.TOPIARY_LANGUAGE_DIR)
    console.log("[plugin config TOPIARY_LANGUAGE_DIR ]->", languageDir)

    if (fs.existsSync(languageDir)) {
      process.env.TOPIARY_LANGUAGE_DIR = languageDir
    }

    const { TOPIARY_CONFIG_FILE, TOPIARY_LANGUAGE_DIR } = process.env

    console.log("[env TOPIARY_LANGUAGE_DIR ]->", process.env.TOPIARY_CONFIG_FILE)
    console.log("[env TOPIARY_CONFIG_FILE ]->", process.env.TOPIARY_LANGUAGE_DIR)

    if (!TOPIARY_CONFIG_FILE) {
      reject(`Environment variable not set:${CONFIG.TOPIARY_CONFIG_FILE} `)
    }

    if (!TOPIARY_LANGUAGE_DIR) {
      reject(`Environment variable not set:${CONFIG.TOPIARY_LANGUAGE_DIR}`)
    }

    const notify = config.get(CONFIG.notify)

    resolve({
      TOPIARY_CONFIG_FILE,
      TOPIARY_LANGUAGE_DIR,
      notify
    })
  })
}
