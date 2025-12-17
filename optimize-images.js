const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'tatlıfoto');
const outputDir = path.join(__dirname, 'tatlıfoto', 'webp');

// WebP klasörünü oluştur
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('✅ webp klasörü oluşturuldu\n');
}

async function optimizeImages() {
    const files = fs.readdirSync(inputDir).filter(file =>
        file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
    );

    console.log(`📸 ${files.length} resim bulundu\n`);
    console.log('='.repeat(60));

    let totalOriginal = 0;
    let totalOptimized = 0;
    let successCount = 0;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const inputPath = path.join(inputDir, file);
        const outputFileName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const outputPath = path.join(outputDir, outputFileName);

        try {
            const originalStats = fs.statSync(inputPath);
            const originalSize = originalStats.size;
            totalOriginal += originalSize;

            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);

            const optimizedStats = fs.statSync(outputPath);
            const optimizedSize = optimizedStats.size;
            totalOptimized += optimizedSize;

            const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
            const originalMB = (originalSize / 1024 / 1024).toFixed(2);
            const optimizedMB = (optimizedSize / 1024 / 1024).toFixed(2);

            console.log(`[${i + 1}/${files.length}] ${file}`);
            console.log(`    ${originalMB} MB → ${optimizedMB} MB (-%${savings})`);

            successCount++;
        } catch (error) {
            console.log(`❌ Hata: ${file} - ${error.message}`);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('\n📊 ÖZET:');
    console.log(`   Toplam resim: ${files.length}`);
    console.log(`   Başarılı: ${successCount}`);
    console.log(`   Orijinal toplam: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Optimize toplam: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Tasarruf: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
    console.log('\n✅ Optimizasyon tamamlandı!');
    console.log(`📁 WebP dosyaları: ${outputDir}`);
}

optimizeImages().catch(console.error);
