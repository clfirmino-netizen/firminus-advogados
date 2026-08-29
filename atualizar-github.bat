@echo off
chcp 65001 >nul
title Atualizar Site no GitHub
echo ============================================
echo  ENVIAR ATUALIZACOES PARA O GITHUB
echo ============================================

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Git nao esta instalado.
    echo Baixe em: https://git-scm.com/download/win
    pause
    exit /b
)

if not exist ".git" (
    echo [ERRO] Esta pasta ainda nao e um repositorio Git.
    echo Execute primeiro o "configurar-github.bat".
    pause
    exit /b
)

echo.
echo Adicionando arquivos alterados...
git add .

echo Registrando as mudancas...
set /p msg="Mensagem da atualizacao (ex: alterei o nome do escritorio): "
if "%msg%"=="" set msg=Atualizacao do site

git commit -m "%msg%"

echo.
echo Enviando para o GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ============================================
    echo  ATUALIZACAO ENVIADA COM SUCESSO!
    echo  O site estara no ar em 1-2 minutos.
    echo ============================================
) else (
    echo.
    echo [AVISO] Falha ao enviar. Verifique conexao e repositorio.
)
pause
