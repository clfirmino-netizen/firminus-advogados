@echo off
chcp 65001 >nul
title Configurar GitHub (primeira vez)
echo ============================================
echo  CONFIGURACAO INICIAL DO GITHUB
echo ============================================

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Git nao esta instalado.
    echo Baixe em: https://git-scm.com/download/win
    pause
    exit /b
)

echo.
echo ANTES DE CONTINUAR, crie o repositorio no GitHub:
echo   1. Acesse https://github.com/new
echo   2. Nome: firminus-advogados
echo   3. Marque PUBLICO e clique "Create repository"
echo.

set /p usuario="Digite seu usuario do GitHub: "
set /p repo="Digite o nome do repositorio: "

echo.
echo Configurando repositorio local...
git init
git add .
git commit -m "Site inicial Firminus Advogados"
git branch -M main
git remote add origin https://github.com/%usuario%/%repo%.git
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ============================================
    echo  CONFIGURADO COM SUCESSO!
    echo.
    echo  Agora ative o GitHub Pages:
    echo  GitHub ^> seu repositorio ^> Settings ^> Pages
    echo  Source: Deploy from branch ^> main ^> / root ^> Save
    echo.
    echo  Seu site: https://%usuario%.github.io/%repo%
    echo ============================================
) else (
    echo [ERRO] Falha. Verifique usuario, nome do repo e sua senha/token.
)
pause
