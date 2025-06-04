# Format Nushell With TopiaryCLI

**This extension only supports vscode desktop**

## Topiary

https://github.com/tweag/topiary

```shell
# Add topiary.exe to PATH
$env.TOPIARY_HOME = "e:/dev/topiary/bin"

# topiary.exe in $env.TOPIARY_HOME
path add $env.TOPIARY_HOME
```

## Clone the TopiaryCLI to the local

```shell
cd e:/config
mkdir topiary
git clone https://github.com/blindFS/topiary-nushell topiary
```

**Priority Level**: vscode plugin config > environment

Add `TOPIARY_CONFIG_FILE` and `TOPIARY_LANGUAGE_DIR` to environment.

```shell
$env.TOPIARY_CONFIG_FILE  = "e:/config/topiary/languages.ncl"
$env.TOPIARY_LANGUAGE_DIR  ="e:/config/topiary/languages"
```

Or add config to `.vscode/settings.json`

Like that:

```json
{
  "[nushell]": {
    "editor.defaultFormatter": "constneo.vscode-nushell-format"
  },
  "editor.formatOnSave": true,
  "vscode-nushell-format.TOPIARY_CONFIG_FILE": "e:/config/topiary/languages.ncl",
  "vscode-nushell-format.TOPIARY_LANGUAGE_DIR": "e:/config/topiary/languages"
}
```

## Build

```shell
npm install

npm install -g @vscode/vsce

vsce package --no-dependencies
```

## Thanks

- [Topiary](https://github.com/tweag/topiary)
- [Format nushell with Topiary](https://github.com/blindFS/topiary-nushell)
- [Tree-sitter grammar for Nushell](https://github.com/nushell/tree-sitter-nu)
- [Nushell](https://github.com/nushell/nushell)
