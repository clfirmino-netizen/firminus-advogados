@echo off
chcp 65001 >nul
title Firminus Advogados - Abrir Site
echo ============================================
echo  ABRINDO SITE FIRMINUS ADVOGADOS
echo ============================================

if not exist "config.js" (
    echo [ERRO] config.js nao encontrado.
    echo Execute este arquivo DENTRO da pasta do projeto.
    pause
    exit /b
)

echo.
echo [1/3] Abrindo o Studio (config.js) no editor padrao...
start "" "config.js"

echo [2/3] Abrindo o site no navegador padrao...
start "" "index.html"

echo [3/3] Abrindo a pasta de imagens...
start "" "assets\images"

echo.
echo Tudo aberto. Edite o config.js, salve e pressione F5 no navegador.
pause
