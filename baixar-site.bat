@echo off
chcp 65001 >nul
title Baixar Site Firminus Advogados
echo ============================================
echo  BAIXAR SITE DE OUTRO COMPUTADOR
echo ============================================

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Git nao esta instalado.
    echo Baixe em: https://git-scm.com/download/win
    pause
    exit /b
)

echo.
echo Este script vai baixar o site do GitHub para este computador.
echo.

set /p usuario="Digite seu usuario do GitHub: "
set /p repo="Digite o nome do repositorio: "
set /p destino="Pasta onde salvar (ex: C:\Projetos): "

if not exist "%destino%" (
    echo Criando pasta %destino%...
    mkdir "%destino%"
)

cd /d "%destino%"

if exist "%repo%" (
    echo.
    echo [AVISO] A pasta "%repo%" ja existe aqui.
    echo Para baixar novamente, apague ou renomeie a pasta existente.
    pause
    exit /b
)

echo.
echo Baixando o site do GitHub...
git clone https://github.com/%usuario%/%repo%.git

if %errorlevel% equ 0 (
    echo.
    echo ============================================
    echo  SITE BAIXADO COM SUCESSO!
    echo.
    echo  Local: %destino%\%repo%
    echo.
    echo  Proximos passos:
    echo    1. Abra a pasta "%repo%"
    echo    2. Duplo clique em "abrir-site.bat"
    echo    3. Para publicar: "atualizar-github.bat"
    echo ============================================
) else (
    echo.
    echo [ERRO] Falha ao baixar. Verifique:
    echo   - Usuario e nome do repositorio estao corretos?
    echo   - O repositorio e PUBLICO?
    echo   - Ha conexao com a internet?
)
pause
