# $env.TOPIARY_CONFIG_FILE  = ($env.XDG_CONFIG_HOME | path join topiary languages.ncl)
# $env.TOPIARY_LANGUAGE_DIR  = ($env.XDG_CONFIG_HOME | path join topiary languages)

# print $env.TOPIARY_CONFIG_FILE
# print $env.TOPIARY_LANGUAGE_DIR

# topiary  format  e:\code\vscode\nushell-fmt\test\example.nu

(
  topiary format
  --configuration E:/config/topiary/languages.ncl
  # --language nu
  e:\code\vscode\nushell-fmt\test\example.nu
)
