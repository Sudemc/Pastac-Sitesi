@echo off
chcp 65001 >nul
echo ========================================
echo   Nazike Cücemen Web Sitesi
echo   Localhost Sunucu Başlatılıyor...
echo ========================================
echo.

REM Python kontrolü
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo HATA: Python bulunamadı!
    echo Lütfen Python'u yükleyin: https://www.python.org/downloads/
    echo.
    echo Alternatif olarak Node.js kullanabilirsiniz:
    echo   npx http-server -p 8000
    pause
    exit /b
)

echo Sunucu başlatılıyor...
echo Tarayıcınız otomatik olarak açılacak...
echo.
echo Site adresi: http://localhost:8000
echo.
echo Sunucuyu durdurmak için Ctrl+C tuşlarına basın
echo.

REM Tarayıcıyı aç (biraz gecikme ile)
timeout /t 2 /nobreak >nul
start http://localhost:8000

REM HTTP sunucusunu başlat
python -m http.server 8000


