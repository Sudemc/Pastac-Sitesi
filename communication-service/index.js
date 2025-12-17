const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3002;
const PHONE_NUMBER = '905558033164';
const LOGS_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOGS_DIR, 'requests.log');

// Logs klasörünü oluştur
if (!fs.existsSync(LOGS_DIR)) {
    fs.mkdirSync(LOGS_DIR, { recursive: true });
}

// CORS aktif
app.use(cors({ origin: '*' }));
app.use(express.json());

// Tarih formatla
function formatDate(date) {
    const pad = (n) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

// Log kaydet (konsol + dosya)
function logRequest(category, product) {
    const timestamp = formatDate(new Date());
    const logMessage = `[${timestamp}] - ${category}/${product} için bilgi istendi.`;

    // Konsola yaz
    console.log(logMessage);

    // Dosyaya yaz
    fs.appendFileSync(LOG_FILE, logMessage + '\n', 'utf8');
}

// WhatsApp link oluştur
app.get('/whatsapp-link', (req, res) => {
    const { product, category } = req.query;

    if (!product) {
        return res.status(400).json({ error: 'Ürün adı gerekli (product parametresi)' });
    }

    const categoryText = category || 'Tatlı';
    const message = `Merhaba, ${categoryText} grubundaki ${product} hakkında bilgi almak istiyorum.`;
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

    // Log kaydet
    logRequest(categoryText, product);

    res.json({ link });
});

// Log kayıtlarını getir
app.get('/logs', (req, res) => {
    try {
        if (fs.existsSync(LOG_FILE)) {
            const logs = fs.readFileSync(LOG_FILE, 'utf8');
            const lines = logs.trim().split('\n').filter(line => line);
            res.json({ count: lines.length, logs: lines });
        } else {
            res.json({ count: 0, logs: [] });
        }
    } catch (error) {
        res.status(500).json({ error: 'Log dosyası okunamadı' });
    }
});

// Sağlık kontrolü
app.get('/health', (req, res) => {
    res.json({ status: 'OK', service: 'CommunicationService', timestamp: new Date().toISOString() });
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`CommunicationService running on port ${PORT}`);
    console.log(`Endpoints:`);
    console.log(`  GET http://localhost:${PORT}/whatsapp-link?product=...&category=...`);
    console.log(`  GET http://localhost:${PORT}/logs`);
    console.log(`  GET http://localhost:${PORT}/health`);
});
