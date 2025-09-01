# PowerShell script to install Cursor extensions to Qoder
Write-Host "========================================"
Write-Host "Installing Cursor extensions to Qoder"
Write-Host "========================================"

# 从 Cursor 导入的插件列表
$extensions = @(
    "adpyke.codesnap",
    "bradlc.vscode-tailwindcss",
    "christian-kohler.path-intellisense",
    "dbaeumer.vscode-eslint",
    "eamodio.gitlens",
    "esbenp.prettier-vscode",
    "formulahendry.auto-rename-tag",
    "formulahendry.code-runner",
    "hediet.vscode-drawio",
    "juanblanco.solidity",
    "k--kato.intellij-idea-keybindings",
    "ms-azuretools.vscode-containers",
    "ms-azuretools.vscode-docker",
    "ms-vscode.vscode-typescript-next",
    "prisma.prisma",
    "qiu8310.minapp-vscode",
    "redhat.java",
    "redis.redis-for-vscode",
    "steoates.autoimport",
    "stylelint.vscode-stylelint",
    "techer.open-in-browser",
    "vscjava.vscode-gradle",
    "vscjava.vscode-java-debug",
    "vscjava.vscode-java-dependency",
    "vscjava.vscode-java-pack",
    "vscjava.vscode-java-test",
    "vscjava.vscode-maven",
    "vscode-icons-team.vscode-icons",
    "vue.volar",
    "xyz.local-history",
    # 额外推荐的 Web3 开发插件
    "christian-kohler.npm-intellisense",
    "tintinweb.solidity-visual-auditor",
    "consensys.truffle-for-vscode",
    "tintinweb.ethereum-security-bundle",
    "remix-project.remix-ide",
    "ms-vscode.vscode-json",
    "redhat.vscode-yaml",
    "ms-vscode.hexeditor",
    "ms-vscode.live-server",
    "mhutchie.git-graph",
    "pkief.material-icon-theme",
    "github.github-vscode-theme"
)

# 安装所有插件
foreach ($extension in $extensions) {
    Write-Host "Installing $extension..."
    code --install-extension $extension
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Successfully installed $extension" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to install $extension" -ForegroundColor Red
    }
}

Write-Host "========================================"
Write-Host "Installation completed!"
Write-Host "Please restart Qoder to see the changes."
Write-Host "========================================"
Read-Host "Press Enter to continue..."