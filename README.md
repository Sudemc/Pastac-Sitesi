# Nazike Cücemen - Mikroservis Tatlıcı Sitesi

El yapımı tatlılar için lüks konseptli web sitesi. Mikroservis mimarisi ile oluşturulmuş.

## 🏗️ Mimari

| Servis | Port | Açıklama |
|--------|------|----------|
| Frontend | 8080 | Nginx ile statik dosyalar |
| MenuService | 3001 | Tatlı menüsü API |
| CommunicationService | 3002 | WhatsApp entegrasyonu |

## 🚀 Kurulum

### Docker ile
```bash
docker-compose up --build
```

### Node.js ile
```bash
# Terminal 1 - MenuService
cd menu-service && npm install && npm start

# Terminal 2 - CommunicationService
cd communication-service && npm install && npm start

# Terminal 3 - Frontend
cd frontend && npx http-server -p 8080 --cors
```

Tarayıcıda: `http://localhost:8080`

## 📁 Proje Yapısı

```
├── docker-compose.yml
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
│   └── tatlıfoto/
├── menu-service/
│   ├── index.js
│   └── Dockerfile
└── communication-service/
    ├── index.js
    └── Dockerfile
```

## 📞 İletişim

- WhatsApp: 0555 803 31 64
- Instagram: @nazikecucemen
