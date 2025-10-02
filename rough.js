{
  "security.workspace.trust.untrustedFiles": "open",
  "workbench.iconTheme": "material-icon-theme",

  // 💾 Format file on Ctrl+S or autoSave
  "editor.formatOnSave": true,

  // 🧹 ESLint + Prettier on save
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit" //  comment-out if you work on react naive project
  },

  // ✂️ Clean code style
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "prettier.singleQuote": true,
  "prettier.semi": true,

  // ✅ Prettier for JSX/TSX formatting
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    // "editor.defaultFormatter": "vscode.typescript-language-features"
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "diffEditor.hideUnchangedRegions.enabled": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "[kotlin]": {
    "editor.defaultFormatter": "esafirm.kotlin-formatter"
  },
  "workbench.navigationControl.enabled": false,
  "github.copilot.nextEditSuggestions.enabled": false,
  "github.copilot.enable": {
    "*": false,
    "plaintext": false,
    "markdown": false,
    "scminput": false,
    "javascriptreact": true
  }
}
