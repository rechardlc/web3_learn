@echo off
echo ========================================
echo Installing Cursor extensions to Qoder
echo ========================================

REM === 从 Cursor 导入的插件 ===
code --install-extension adpyke.codesnap
code --install-extension bradlc.vscode-tailwindcss
code --install-extension christian-kohler.path-intellisense
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension esbenp.prettier-vscode
code --install-extension formulahendry.auto-rename-tag
code --install-extension formulahendry.code-runner
code --install-extension hediet.vscode-drawio
code --install-extension juanblanco.solidity
code --install-extension k--kato.intellij-idea-keybindings
code --install-extension ms-azuretools.vscode-containers
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension prisma.prisma
code --install-extension qiu8310.minapp-vscode
code --install-extension redhat.java
code --install-extension redis.redis-for-vscode
code --install-extension steoates.autoimport
code --install-extension stylelint.vscode-stylelint
code --install-extension techer.open-in-browser
code --install-extension vscjava.vscode-gradle
code --install-extension vscjava.vscode-java-debug
code --install-extension vscjava.vscode-java-dependency
code --install-extension vscjava.vscode-java-pack
code --install-extension vscjava.vscode-java-test
code --install-extension vscjava.vscode-maven
code --install-extension vscode-icons-team.vscode-icons
code --install-extension vue.volar
code --install-extension xyz.local-history

REM === 额外推荐的 Web3 开发插件 ===
code --install-extension christian-kohler.npm-intellisense
code --install-extension tintinweb.solidity-visual-auditor
code --install-extension consensys.truffle-for-vscode
code --install-extension tintinweb.ethereum-security-bundle
code --install-extension remix-project.remix-ide
code --install-extension ms-vscode.vscode-json
code --install-extension redhat.vscode-yaml
code --install-extension ms-vscode.hexeditor
code --install-extension ms-vscode.live-server
code --install-extension mhutchie.git-graph
code --install-extension pkief.material-icon-theme
code --install-extension github.github-vscode-theme

echo ========================================
echo Installation completed!
echo Please restart Qoder to see the changes.
echo ========================================
pause