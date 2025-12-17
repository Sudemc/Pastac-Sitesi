// Nazike Cücemen - Mikroservis Frontend
// API URL'leri (Production - Render.com)
const MENU_SERVICE_URL = 'https://menu-service-zsp6.onrender.com';
const COMM_SERVICE_URL = 'https://communication-service-yd6s.onrender.com';

// Global state
let menuData = null;
let currentCategory = null;

// DOM elementleri
const tatlilarContainer = document.getElementById('tatlilar-container');
const cesitlerModal = document.getElementById('cesitlerModal');
const cesitlerGrid = document.getElementById('cesitlerGrid');
const cesitlerTitle = document.getElementById('cesitlerTitle');
const tatliModal = document.getElementById('tatliModal');
const modalBody = document.getElementById('modalBody');
const modalCloseButtons = document.querySelectorAll('.modal-close');

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', async () => {
    await loadMenu();
    setupEventListeners();
});

// Menü verilerini yükle
async function loadMenu() {
    try {
        const response = await fetch(`${MENU_SERVICE_URL}/menu`);
        if (!response.ok) throw new Error('Menü yüklenemedi');

        menuData = await response.json();
        renderCategories();
        renderStandalone();
    } catch (error) {
        console.error('Menü yüklenirken hata:', error);
        showError('Menü yüklenemedi. Lütfen sayfayı yenileyin.');
    }
}

// Kategorileri render et
function renderCategories() {
    if (!menuData || !menuData.categories) return;

    const categoriesHTML = menuData.categories.map(category => `
        <div class="tatli-card" data-category="${category.id}">
            <div class="tatli-image">
                <img src="${category.coverImage}" alt="${category.displayName}" loading="lazy">
                <div class="tatli-overlay">
                    <span class="overlay-text">${category.items.length} Çeşit</span>
                </div>
            </div>
            <div class="tatli-info">
                <h3 class="tatli-name">${category.displayName.replace(' Çeşitleri', '').replace(' Koleksiyonu', '')}</h3>
                <span class="tatli-action">Çeşitleri gör →</span>
            </div>
        </div>
    `).join('');

    tatlilarContainer.innerHTML = categoriesHTML;
}

// Bağımsız tatlıları render et
function renderStandalone() {
    if (!menuData || !menuData.standalone) return;

    const standaloneHTML = menuData.standalone.map(item => `
        <div class="tatli-card" data-item="${item.id}">
            <div class="tatli-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="tatli-overlay">
                    <span class="overlay-text">Detayları Gör</span>
                </div>
            </div>
            <div class="tatli-info">
                <h3 class="tatli-name">${item.name}</h3>
                <span class="tatli-action">Detayları gör →</span>
            </div>
        </div>
    `).join('');

    tatlilarContainer.innerHTML += standaloneHTML;
}

// Event listener'ları kur (Event Delegation)
function setupEventListeners() {
    // Tatlı kartlarına tıklama (Event Delegation)
    tatlilarContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.tatli-card');
        if (!card) return;

        const categoryId = card.dataset.category;
        const itemId = card.dataset.item;

        if (categoryId) {
            showCategoryModal(categoryId);
        } else if (itemId) {
            showItemModal(itemId);
        }
    });

    // Çeşitler grid'ine tıklama (Event Delegation)
    cesitlerGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.cesit-card');
        if (!card) return;

        const itemId = card.dataset.item;
        if (itemId) {
            closeCesitlerModal();
            setTimeout(() => showItemModal(itemId), 300);
        }
    });

    // Modal kapatma butonları
    modalCloseButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal === cesitlerModal) {
                closeCesitlerModal();
            } else if (modal === tatliModal) {
                closeItemModal();
            }
        });
    });

    // Modal dışına tıklama ile kapatma
    cesitlerModal.addEventListener('click', (e) => {
        if (e.target === cesitlerModal) closeCesitlerModal();
    });

    tatliModal.addEventListener('click', (e) => {
        if (e.target === tatliModal) closeItemModal();
    });

    // ESC tuşu ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (cesitlerModal.classList.contains('active')) {
                closeCesitlerModal();
            } else if (tatliModal.classList.contains('active')) {
                closeItemModal();
            }
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Header scroll efekti
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        header.style.boxShadow = currentScroll > 0
            ? '0 10px 30px rgba(0, 0, 0, 0.15)'
            : '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
}

// Kategori modalını göster
function showCategoryModal(categoryId) {
    const category = menuData.categories.find(c => c.id === categoryId);
    if (!category) return;

    currentCategory = category;
    cesitlerTitle.textContent = category.displayName;

    cesitlerGrid.innerHTML = category.items.map(item => `
        <div class="cesit-card" data-item="${item.id}">
            <div class="cesit-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cesit-info">
                <h4>${item.name}</h4>
            </div>
        </div>
    `).join('');

    cesitlerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Çeşitler modalını kapat
function closeCesitlerModal() {
    cesitlerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Ürün detay modalını göster
function showItemModal(itemId) {
    // Tüm kategorilerde ve standalone'da ara
    let item = null;
    let categoryName = 'Tatlı';

    // Kategorilerde ara
    for (const category of menuData.categories) {
        const found = category.items.find(i => i.id === itemId);
        if (found) {
            item = found;
            categoryName = category.displayName;
            break;
        }
    }

    // Standalone'da ara
    if (!item) {
        item = menuData.standalone.find(i => i.id === itemId);
        if (item) categoryName = 'Bağımsız Tatlılar';
    }

    if (!item) return;

    modalBody.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="modal-image" loading="lazy">
        <h2 class="modal-title">${item.name}</h2>
        <p class="modal-description">${item.description}</p>
        
        <div class="modal-siparis">
            <button class="btn-siparis btn-whatsapp" 
                    data-product="${item.name}" 
                    data-category="${categoryName}">
                WhatsApp ile Bilgi Al
            </button>
        </div>
    `;

    // WhatsApp butonuna event listener ekle
    const whatsappBtn = modalBody.querySelector('.btn-whatsapp');
    whatsappBtn.addEventListener('click', () => {
        requestWhatsAppLink(item.name, categoryName);
    });

    tatliModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Ürün modalını kapat
function closeItemModal() {
    tatliModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// WhatsApp linki iste
async function requestWhatsAppLink(productName, categoryName) {
    try {
        const params = new URLSearchParams({
            product: productName,
            category: categoryName
        });

        const response = await fetch(`${COMM_SERVICE_URL}/whatsapp-link?${params}`);
        if (!response.ok) throw new Error('Link oluşturulamadı');

        const data = await response.json();
        window.open(data.link, '_blank');
    } catch (error) {
        console.error('WhatsApp linki alınırken hata:', error);
        // Fallback: Direkt WhatsApp linki oluştur
        const message = encodeURIComponent(`Merhaba, ${categoryName} grubundaki ${productName} hakkında bilgi almak istiyorum.`);
        window.open(`https://wa.me/905558033164?text=${message}`, '_blank');
    }
}

// Hata mesajı göster
function showError(message) {
    tatlilarContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 80px 40px;">
            <h3 style="font-family: var(--font-serif); font-size: 24px; margin-bottom: 20px;">Bir Hata Oluştu</h3>
            <p style="color: var(--color-gray); margin-bottom: 30px;">${message}</p>
            <button onclick="location.reload()" class="btn-discover" style="cursor: pointer; border: 1px solid #000; background: #000; color: #fff;">
                Yeniden Dene
            </button>
        </div>
    `;
}

// Sayfa yüklenme animasyonu
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});
