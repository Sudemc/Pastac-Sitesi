// Supabase Configuration
const SUPABASE_URL = 'https://tskejfganbdkylhqytfu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRza2VqZmdhbmJka3lsaHF5dGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzMjcyOTEsImV4cCI6MjA4NDkwMzI5MX0.W7lijafeCiO-6AAcIr4tUJEA1R8kXCMqYWLQqD7pkhQ';

// Initialize Supabase - deferred to handle SDK loading
let supabaseClient = null;

function initSupabase() {
    try {
        if (window.supabase && window.supabase.createClient) {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('✅ Supabase SDK yüklendi');
            return true;
        }
    } catch (err) {
        console.warn('⚠️ Supabase başlatılamadı:', err);
    }
    return false;
}

// State
let categories = [];
let products = [];
let isLoggedIn = false;
let deleteCallback = null;

// DOM Elements
const loginScreen = document.getElementById('loginScreen');
const adminPanel = document.getElementById('adminPanel');
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('passwordInput');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');

// Initialize
document.addEventListener('DOMContentLoaded', init);

async function init() {
    // Try to initialize Supabase
    initSupabase();

    // Check if already logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        showAdminPanel();
    }

    setupEventListeners();
}

function setupEventListeners() {
    // Login
    loginForm.addEventListener('submit', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => switchSection(item.dataset.section));
    });

    // Add buttons
    document.getElementById('addProductBtn').addEventListener('click', () => openProductModal());
    document.getElementById('addCategoryBtn').addEventListener('click', () => openCategoryModal());

    // Modal close buttons
    document.querySelectorAll('.modal-close, .modal-cancel').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Forms
    document.getElementById('productForm').addEventListener('submit', handleProductSubmit);
    document.getElementById('categoryForm').addEventListener('submit', handleCategorySubmit);
    document.getElementById('changePasswordBtn').addEventListener('click', handlePasswordChange);

    // Image uploads
    document.getElementById('productImage').addEventListener('change', (e) => handleImagePreview(e, 'imagePreview', 'productImageUrl'));
    document.getElementById('categoryImage').addEventListener('change', (e) => handleImagePreview(e, 'categoryImagePreview', 'categoryCoverImage'));

    // Filter and search
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('searchInput').addEventListener('input', filterProducts);

    // Delete confirmation
    document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
        if (deleteCallback) deleteCallback();
        closeAllModals();
    });

    // Close modals on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });
}

// Authentication
async function handleLogin(e) {
    e.preventDefault();
    const password = passwordInput.value;

    // If Supabase is not available, use default password
    if (!supabaseClient) {
        if (password === 'nazike2024') {
            showAdminPanel();
        } else {
            loginError.textContent = 'Şifre hatalı!';
        }
        return;
    }

    try {
        const { data, error } = await supabaseClient
            .from('settings')
            .select('value')
            .eq('key', 'admin_password')
            .single();

        if (error) {
            // If settings table doesn't exist, use default password
            if (password === 'nazike2024') {
                showAdminPanel();
            } else {
                loginError.textContent = 'Şifre hatalı!';
            }
            return;
        }

        if (data.value === password) {
            showAdminPanel();
        } else {
            loginError.textContent = 'Şifre hatalı!';
        }
    } catch (err) {
        // Fallback for connection errors
        if (password === 'nazike2024') {
            showAdminPanel();
        } else {
            loginError.textContent = 'Bağlantı hatası!';
        }
    }
}

function showAdminPanel() {
    sessionStorage.setItem('adminLoggedIn', 'true');
    loginScreen.style.display = 'none';
    adminPanel.style.display = 'flex';
    loadData();
}

function handleLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    loginScreen.style.display = 'flex';
    adminPanel.style.display = 'none';
    passwordInput.value = '';
    loginError.textContent = '';
}

// Data Loading
async function loadData() {
    await Promise.all([loadCategories(), loadProducts()]);
    updateCategoryFilter();
    renderProducts();
    renderCategories();
}

async function loadCategories() {
    try {
        const { data, error } = await supabaseClient
            .from('categories')
            .select('*')
            .order('sort_order');

        if (error) throw error;
        categories = data || [];
    } catch (err) {
        console.error('Kategoriler yüklenemedi:', err);
        showToast('Kategoriler yüklenemedi!', 'error');
    }
}

async function loadProducts() {
    try {
        const { data, error } = await supabaseClient
            .from('products')
            .select('*')
            .order('sort_order');

        if (error) throw error;
        products = data || [];
    } catch (err) {
        console.error('Ürünler yüklenemedi:', err);
        showToast('Ürünler yüklenemedi!', 'error');
    }
}

// Navigation
function switchSection(section) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.section === section);
    });

    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.toggle('active', sec.id === section + 'Section');
    });
}

// Products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    let filtered = products;

    if (categoryFilter) {
        filtered = filtered.filter(p => p.category_id === categoryFilter);
    }

    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <h3>Ürün bulunamadı</h3>
                <p>Yeni ürün eklemek için yukarıdaki butonu kullanın.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => {
        const category = categories.find(c => c.id === product.category_id);
        const categoryName = category ? category.display_name : 'Bağımsız Ürün';
        const imageUrl = getImageUrl(product.image);

        return `
            <div class="product-card">
                <img class="product-image" src="${imageUrl}" alt="${product.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 fill=%22%23999%22>Görsel Yok</text></svg>'">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-category">${categoryName}</div>
                    <div class="product-actions">
                        <button class="btn-edit" onclick="editProduct('${product.id}')">Düzenle</button>
                        <button class="btn-delete" onclick="confirmDelete('product', '${product.id}', '${product.name}')">Sil</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterProducts() {
    renderProducts();
}

function updateCategoryFilter() {
    const select = document.getElementById('categoryFilter');
    const productCategorySelect = document.getElementById('productCategory');

    const options = categories.map(c => `<option value="${c.id}">${c.display_name}</option>`).join('');

    select.innerHTML = `<option value="">Tüm Kategoriler</option>${options}`;
    productCategorySelect.innerHTML = `<option value="">Bağımsız Ürün (Kategorisiz)</option>${options}`;
}

function openProductModal(product = null) {
    const modal = document.getElementById('productModal');
    const title = document.getElementById('productModalTitle');

    if (product) {
        title.textContent = 'Ürün Düzenle';
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category_id || '';
        document.getElementById('productDescription').value = product.description || '';
        document.getElementById('productImageUrl').value = product.image || '';
        document.getElementById('productOrder').value = product.sort_order || 0;

        const preview = document.getElementById('imagePreview');
        if (product.image) {
            preview.innerHTML = `<img src="${getImageUrl(product.image)}" alt="Preview">`;
        } else {
            preview.innerHTML = '<span>Görsel seçmek için tıklayın</span>';
        }
    } else {
        title.textContent = 'Yeni Ürün Ekle';
        document.getElementById('productForm').reset();
        document.getElementById('productId').value = '';
        document.getElementById('productImageUrl').value = '';
        document.getElementById('imagePreview').innerHTML = '<span>Görsel seçmek için tıklayın</span>';
    }

    modal.classList.add('active');
}

async function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        openProductModal(product);
    }
}

async function handleProductSubmit(e) {
    e.preventDefault();

    const id = document.getElementById('productId').value || generateId(document.getElementById('productName').value);
    const name = document.getElementById('productName').value;
    const categoryId = document.getElementById('productCategory').value || null;
    const description = document.getElementById('productDescription').value;
    const image = document.getElementById('productImageUrl').value;
    const sortOrder = parseInt(document.getElementById('productOrder').value) || 0;
    const isStandalone = !categoryId;

    const productData = {
        id,
        name,
        category_id: categoryId,
        description,
        image,
        is_standalone: isStandalone,
        sort_order: sortOrder
    };

    try {
        const existingProduct = products.find(p => p.id === id);

        if (existingProduct) {
            const { error } = await supabaseClient
                .from('products')
                .update(productData)
                .eq('id', id);
            if (error) throw error;
            showToast('Ürün güncellendi!', 'success');
        } else {
            const { error } = await supabaseClient
                .from('products')
                .insert(productData);
            if (error) throw error;
            showToast('Ürün eklendi!', 'success');
        }

        closeAllModals();
        await loadProducts();
        renderProducts();
    } catch (err) {
        console.error('Ürün kaydedilemedi:', err);
        showToast('Hata: ' + err.message, 'error');
    }
}

async function deleteProduct(id) {
    try {
        const { error } = await supabaseClient
            .from('products')
            .delete()
            .eq('id', id);

        if (error) throw error;

        showToast('Ürün silindi!', 'success');
        await loadProducts();
        renderProducts();
    } catch (err) {
        console.error('Ürün silinemedi:', err);
        showToast('Hata: ' + err.message, 'error');
    }
}

// Categories
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');

    if (categories.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <h3>Kategori bulunamadı</h3>
                <p>Yeni kategori eklemek için yukarıdaki butonu kullanın.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = categories.map(category => {
        const productCount = products.filter(p => p.category_id === category.id).length;
        const imageUrl = getImageUrl(category.cover_image);

        return `
            <div class="category-card">
                <img class="category-image" src="${imageUrl}" alt="${category.display_name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/></svg>'">
                <div class="category-info">
                    <div class="category-name">${category.display_name}</div>
                    <div class="category-id">${category.id}</div>
                    <div class="category-count">${productCount} ürün</div>
                </div>
                <div class="category-actions">
                    <button class="btn-edit" onclick="editCategory('${category.id}')">Düzenle</button>
                    <button class="btn-delete" onclick="confirmDelete('category', '${category.id}', '${category.display_name}')">Sil</button>
                </div>
            </div>
        `;
    }).join('');
}

function openCategoryModal(category = null) {
    const modal = document.getElementById('categoryModal');
    const title = document.getElementById('categoryModalTitle');
    const idInput = document.getElementById('categoryId');

    if (category) {
        title.textContent = 'Kategori Düzenle';
        idInput.value = category.id;
        idInput.disabled = true;
        document.getElementById('editingCategoryId').value = category.id;
        document.getElementById('categoryDisplayName').value = category.display_name;
        document.getElementById('categoryCoverImage').value = category.cover_image || '';
        document.getElementById('categoryOrder').value = category.sort_order || 0;

        const preview = document.getElementById('categoryImagePreview');
        if (category.cover_image) {
            preview.innerHTML = `<img src="${getImageUrl(category.cover_image)}" alt="Preview">`;
        } else {
            preview.innerHTML = '<span>Görsel seçmek için tıklayın</span>';
        }
    } else {
        title.textContent = 'Yeni Kategori Ekle';
        document.getElementById('categoryForm').reset();
        idInput.disabled = false;
        document.getElementById('editingCategoryId').value = '';
        document.getElementById('categoryCoverImage').value = '';
        document.getElementById('categoryImagePreview').innerHTML = '<span>Görsel seçmek için tıklayın</span>';
    }

    modal.classList.add('active');
}

async function editCategory(id) {
    const category = categories.find(c => c.id === id);
    if (category) {
        openCategoryModal(category);
    }
}

async function handleCategorySubmit(e) {
    e.preventDefault();

    const editingId = document.getElementById('editingCategoryId').value;
    const id = editingId || document.getElementById('categoryId').value;
    const displayName = document.getElementById('categoryDisplayName').value;
    const coverImage = document.getElementById('categoryCoverImage').value;
    const sortOrder = parseInt(document.getElementById('categoryOrder').value) || 0;

    const categoryData = {
        id,
        display_name: displayName,
        cover_image: coverImage,
        sort_order: sortOrder
    };

    try {
        if (editingId) {
            const { error } = await supabaseClient
                .from('categories')
                .update({
                    display_name: displayName,
                    cover_image: coverImage,
                    sort_order: sortOrder
                })
                .eq('id', id);
            if (error) throw error;
            showToast('Kategori güncellendi!', 'success');
        } else {
            const { error } = await supabaseClient
                .from('categories')
                .insert(categoryData);
            if (error) throw error;
            showToast('Kategori eklendi!', 'success');
        }

        closeAllModals();
        await loadCategories();
        updateCategoryFilter();
        renderCategories();
    } catch (err) {
        console.error('Kategori kaydedilemedi:', err);
        showToast('Hata: ' + err.message, 'error');
    }
}

async function deleteCategory(id) {
    try {
        // First, set products in this category to standalone
        await supabaseClient
            .from('products')
            .update({ category_id: null, is_standalone: true })
            .eq('category_id', id);

        const { error } = await supabaseClient
            .from('categories')
            .delete()
            .eq('id', id);

        if (error) throw error;

        showToast('Kategori silindi!', 'success');
        await loadData();
    } catch (err) {
        console.error('Kategori silinemedi:', err);
        showToast('Hata: ' + err.message, 'error');
    }
}

// Settings
async function handlePasswordChange() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!newPassword || !confirmPassword) {
        showToast('Lütfen tüm alanları doldurun!', 'error');
        return;
    }

    if (newPassword !== confirmPassword) {
        showToast('Şifreler eşleşmiyor!', 'error');
        return;
    }

    if (newPassword.length < 6) {
        showToast('Şifre en az 6 karakter olmalı!', 'error');
        return;
    }

    try {
        const { error } = await supabaseClient
            .from('settings')
            .upsert({ key: 'admin_password', value: newPassword });

        if (error) throw error;

        showToast('Şifre değiştirildi!', 'success');
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    } catch (err) {
        console.error('Şifre değiştirilemedi:', err);
        showToast('Hata: ' + err.message, 'error');
    }
}

// Image Handling
async function handleImagePreview(e, previewId, hiddenInputId) {
    const file = e.target.files[0];
    if (!file) return;

    const preview = document.getElementById(previewId);
    const hiddenInput = document.getElementById(hiddenInputId);

    // Show local preview
    const reader = new FileReader();
    reader.onload = (e) => {
        preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);

    // Upload to Supabase Storage
    try {
        const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

        const { data, error } = await supabaseClient.storage
            .from('product-images')
            .upload(fileName, file);

        if (error) {
            // If bucket doesn't exist, use local path
            console.warn('Storage upload failed, using local path:', error);
            hiddenInput.value = `tatlıfoto/${file.name}`;
            showToast('Görsel yerel olarak kaydedilecek', 'success');
        } else {
            const { data: urlData } = supabaseClient.storage
                .from('product-images')
                .getPublicUrl(fileName);

            hiddenInput.value = urlData.publicUrl;
            showToast('Görsel yüklendi!', 'success');
        }
    } catch (err) {
        console.error('Görsel yüklenemedi:', err);
        // Fallback to local path
        hiddenInput.value = `tatlıfoto/${file.name}`;
    }
}

// Delete Confirmation
function confirmDelete(type, id, name) {
    const modal = document.getElementById('deleteModal');
    const message = document.getElementById('deleteMessage');

    message.textContent = `"${name}" öğesini silmek istediğinizden emin misiniz?`;

    deleteCallback = () => {
        if (type === 'product') {
            deleteProduct(id);
        } else if (type === 'category') {
            deleteCategory(id);
        }
    };

    modal.classList.add('active');
}

// Utilities
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    deleteCallback = null;
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show ' + type;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function generateId(name) {
    return name
        .toLowerCase()
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        + '-' + Date.now().toString(36);
}

function getImageUrl(imagePath) {
    if (!imagePath) return '';

    // If it's already a full URL
    if (imagePath.startsWith('http')) {
        return imagePath;
    }

    // If it's a relative path, return as is
    return imagePath;
}

// Make functions available globally for onclick handlers
window.editProduct = editProduct;
window.editCategory = editCategory;
window.confirmDelete = confirmDelete;
