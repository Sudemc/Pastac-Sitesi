# Nazike Cücemen Web Sitesi - Localhost Sunucu Başlatıcı
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Nazike Cücemen Web Sitesi" -ForegroundColor Magenta
Write-Host "  Localhost Sunucu Başlatılıyor..." -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Python kontrolü
$pythonCommand = $null
if (Get-Command python -ErrorAction SilentlyContinue) {
    $pythonCommand = "python"
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    $pythonCommand = "python3"
} else {
    Write-Host "HATA: Python bulunamadı!" -ForegroundColor Red
    Write-Host "Lütfen Python'u yükleyin: https://www.python.org/downloads/" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alternatif olarak Node.js kullanabilirsiniz:" -ForegroundColor Yellow
    Write-Host "  npx http-server -p 8000" -ForegroundColor Green
    pause
    exit
}

# Port kontrolü
$port = 8000

Write-Host "Sunucu başlatılıyor..." -ForegroundColor Green
Write-Host "Tarayıcınız otomatik olarak açılacak..." -ForegroundColor Green
Write-Host ""
Write-Host "Site adresi: http://localhost:$port" -ForegroundColor Cyan
Write-Host ""
Write-Host "Sunucuyu durdurmak için Ctrl+C tuşlarına basın" -ForegroundColor Yellow
Write-Host ""

# Tarayıcıyı aç (biraz gecikme ile)
Start-Sleep -Seconds 2
Start-Process "http://localhost:$port"

# HTTP sunucusunu başlat
& $pythonCommand -m http.server $port


