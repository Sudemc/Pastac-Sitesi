// Nazike Cücemen - Supabase Frontend
// Supabase Configuration
const SUPABASE_URL = 'https://tskejfganbdkylhqytfu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRza2VqZmdhbmJka3lsaHF5dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzMjcyOTEsImV4cCI6MjA4NDkwMzI5MX0.W7lijafeCiO-6AAcIr4tUJEA1R8kXCMqYWLQqD7pkhQ';

// Supabase client
let supabaseClient = null;

// Global state
let menuData = { categories: [], standalone: [] };
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
    initSupabase();
    await loadMenu();
    setupEventListeners();
});

// Supabase'i başlat
function initSupabase() {
    try {
        if (window.supabase && window.supabase.createClient) {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('✅ Supabase bağlantısı kuruldu');
        }
    } catch (err) {
        console.error('Supabase başlatılamadı:', err);
    }
}

// Menü verilerini Supabase'den yükle
async function loadMenu() {
    try {
        if (!supabaseClient) {
            throw new Error('Supabase bağlantısı yok');
        }

        // Paralel sorgular ile kategorileri ve ürünleri çek
        const [categoriesResult, productsResult] = await Promise.all([
            supabaseClient.from('categories').select('*').order('sort_order'),
            supabaseClient.from('products').select('*').order('sort_order')
        ]);

        if (categoriesResult.error) throw categoriesResult.error;
        if (productsResult.error) throw productsResult.error;

        const categories = categoriesResult.data || [];
        const products = productsResult.data || [];

        // Menü verisini oluştur
        menuData.categories = categories.map(cat => ({
            id: cat.id,
            displayName: cat.display_name,
            coverImage: cat.cover_image,
            items: products
                .filter(p => p.category_id === cat.id)
                .map(p => ({
                    id: p.id,
                    name: p.name,
                    description: p.description,
                    image: p.image
                }))
        }));

        // Bağımsız ürünleri ayır
        menuData.standalone = products
            .filter(p => p.is_standalone || !p.category_id)
            .map(p => ({
                id: p.id,
                name: p.name,
                description: p.description,
                image: p.image
            }));

        console.log(`✅ ${categories.length} kategori, ${products.length} ürün yüklendi`);

        renderCategories();
        renderStandalone();
    } catch (error) {
        console.error('Menü yüklenirken hata:', error);
        showError('Menü yüklenemedi. Lütfen sayfayı yenileyin.');
    }
}

// Kategorileri render et
function renderCategories() {
    if (!menuData.categories.length) return;

    const categoriesHTML = menuData.categories.map(category => {
        // WebP versiyonunu kullan
        const webpImage = category.coverImage ?
            category.coverImage.replace('tatlıfoto/', 'tatlıfoto/webp/').replace(/\.(png|jpg|jpeg)$/i, '.webp') : '';

        return `
        <div class="tatli-card" data-category="${category.id}">
            <div class="tatli-image">
                <picture>
                    <source srcset="${webpImage}" type="image/webp">
                    <img src="${category.coverImage}" alt="${category.displayName}" loading="lazy">
                </picture>
                <div class="tatli-overlay">
                    <span class="overlay-text">${category.items.length} Çeşit</span>
                </div>
            </div>
            <div class="tatli-info">
                <h3 class="tatli-name">${category.displayName.replace(' Çeşitleri', '').replace(' Koleksiyonu', '')}</h3>
                <span class="tatli-action">Çeşitleri gör →</span>
            </div>
        </div>
    `}).join('');

    tatlilarContainer.innerHTML = categoriesHTML;
}

// Bağımsız tatlıları render et
function renderStandalone() {
    if (!menuData.standalone.length) return;

    const standaloneHTML = menuData.standalone.map(item => {
        const webpImage = item.image ?
            item.image.replace('tatlıfoto/', 'tatlıfoto/webp/').replace(/\.(png|jpg|jpeg)$/i, '.webp') : '';

        return `
        <div class="tatli-card" data-item="${item.id}">
            <div class="tatli-image">
                <picture>
                    <source srcset="${webpImage}" type="image/webp">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </picture>
                <div class="tatli-overlay">
                    <span class="overlay-text">Detayları Gör</span>
                </div>
            </div>
            <div class="tatli-info">
                <h3 class="tatli-name">${item.name}</h3>
                <span class="tatli-action">Detayları gör →</span>
            </div>
        </div>
    `}).join('');

    tatlilarContainer.innerHTML += standaloneHTML;
}

// Event listener'ları kur
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

    // Çeşitler grid'ine tıklama
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

    cesitlerGrid.innerHTML = category.items.map(item => {
        const webpImage = item.image ?
            item.image.replace('tatlıfoto/', 'tatlıfoto/webp/').replace(/\.(png|jpg|jpeg)$/i, '.webp') : '';

        return `
        <div class="cesit-card" data-item="${item.id}">
            <div class="cesit-image">
                <picture>
                    <source srcset="${webpImage}" type="image/webp">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </picture>
            </div>
            <div class="cesit-info">
                <h4>${item.name}</h4>
            </div>
        </div>
    `}).join('');

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
        if (item) categoryName = 'Özel Lezzetler';
    }

    if (!item) return;

    const webpImage = item.image ?
        item.image.replace('tatlıfoto/', 'tatlıfoto/webp/').replace(/\.(png|jpg|jpeg)$/i, '.webp') : '';

    modalBody.innerHTML = `
        <picture>
            <source srcset="${webpImage}" type="image/webp">
            <img src="${item.image}" alt="${item.name}" class="modal-image" loading="lazy">
        </picture>
        <h2 class="modal-title">${item.name}</h2>
        <p class="modal-description">${item.description || ''}</p>
        
        <div class="modal-siparis">
            <a href="https://wa.me/905558033164?text=Merhaba, ${encodeURIComponent(item.name)} hakkında bilgi almak istiyorum." 
               class="btn-siparis" 
               target="_blank">
                WhatsApp ile Bilgi Al
            </a>
        </div>
    `;

    tatliModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Ürün modalını kapat
function closeItemModal() {
    tatliModal.classList.remove('active');
    document.body.style.overflow = 'auto';
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
