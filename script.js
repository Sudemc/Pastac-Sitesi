// Tatlı verileri - Gerçek görseller ile güncellenmiş (İçerik listeleri kaldırıldı)
const tatlilar = {
    // CHEESECAKE ÇEŞİTLERİ
    "cheesecake-baklavali": {
        name: "Baklavalı Cheesecake",
        image: "tatlıfoto/baklacalıcheesecake.png",
        description: "Geleneksel baklava lezzeti ile modern cheesecake'in muhteşem buluşması. Antep fıstığı ve baklava parçaları ile süslenmiş eşsiz bir lezzet."
    },
    "cheesecake-baklavali-tum": {
        name: "Baklavalı Bütün Cheesecake",
        image: "tatlıfoto/baklavalıtümcheesecake.png",
        description: "Bütün baklava ile kaplanmış muhteşem cheesecake. Özel günleriniz için ideal bir seçim."
    },
    "cheesecake-beyaz-cikolatali-cilekli": {
        name: "Beyaz Çikolatalı Çilekli Cheesecake",
        image: "tatlıfoto/beyazcikolatalıcileklicheesecake.png",
        description: "Beyaz çikolatanın zarif tatlılığı ve taze çileklerin ferahlığı bir arada."
    },
    "cheesecake-dubai": {
        name: "Dubai Cheesecake",
        image: "tatlıfoto/dubaicheesecake.png",
        description: "Sosyal medyanın fenomen tatlısı Dubai çikolatasıyla buluşan özel cheesecake. Fıstık ezmesi ve kadayıf dolgulu."
    },
    "cheesecake-elmali": {
        name: "Elmalı Cheesecake",
        image: "tatlıfoto/elmalıcheesecake.png",
        description: "Tarçınlı elma ile zenginleştirilmiş sonbahar aromalı cheesecake."
    },
    "cheesecake-fistikli": {
        name: "Fıstıklı Cheesecake",
        image: "tatlıfoto/fıstıklıcheesecake.png",
        description: "Antep fıstığının yoğun aroması ile hazırlanan özel cheesecake."
    },
    "cheesecake-kahveli": {
        name: "Kahveli Cheesecake",
        image: "tatlıfoto/kahvelicheesecake.png",
        description: "Espresso aromalı, kahve severlerin favorisi cheesecake."
    },
    "cheesecake-lotuslu": {
        name: "Lotuslu Cheesecake",
        image: "tatlıfoto/lotuslucheesecake.png",
        description: "Biscoff bisküvisi ve Lotus ezmesi ile hazırlanan popüler lezzet."
    },
    "cheesecake-oreolu": {
        name: "Oreolu Cheesecake",
        image: "tatlıfoto/oreolucheesecake.png",
        description: "Oreo bisküvilerinin çıtırlığı ve cheesecake'in yumuşaklığı bir arada."
    },
    "cheesecake-red-velvet": {
        name: "Red Velvet Cheesecake",
        image: "tatlıfoto/redvelvetcheesecake.png",
        description: "Kırmızı kadife kek ve cheesecake'in lüks birleşimi."
    },
    "cheesecake-sutrecelli": {
        name: "Sütreçelli Cheesecake",
        image: "tatlıfoto/sutrecellicheesecake.png",
        description: "Sütreçel dolgulu, karamelize lezzet seven herkes için."
    },
    "cheesecake-cikolata-kaplamali": {
        name: "Çikolata Kaplamalı Cheesecake",
        image: "tatlıfoto/çikolatakaplamalıcheesecake.png",
        description: "Parlak çikolata ganaj ile kaplı şık cheesecake."
    },
    "cheesecake-cikolatali": {
        name: "Çikolatalı Cheesecake",
        image: "tatlıfoto/çikolatalıcheesecake.png",
        description: "Çikolata sevenler için yoğun çikolatalı cheesecake."
    },
    "cheesecake-cilekli-fistikli": {
        name: "Çilekli Fıstıklı Cheesecake",
        image: "tatlıfoto/çileklifıstıklıcheesecake.png",
        description: "Taze çilek ve Antep fıstığının muhteşem uyumu."
    },

    // SAN SEBASTİAN ÇEŞİTLERİ
    "san-sebastian-cilekli": {
        name: "Çilekli Sade San Sebastian",
        image: "tatlıfoto/cileklisadesansebastian.png",
        description: "Klasik San Sebastian cheesecake üzerine taze çilek ile servis. Yanık yüzeyi ve kremsi dokusu ile eşsiz."
    },
    "san-sebastian-cikolatali": {
        name: "Çikolatalı San Sebastian",
        image: "tatlıfoto/çikolatalısebastian.png",
        description: "Çikolatanın yoğun lezzeti ile zenginleştirilmiş San Sebastian."
    },
    "san-sebastian-fistikli": {
        name: "Fıstıklı San Sebastian",
        image: "tatlıfoto/fıstıklısansebastian.png",
        description: "Antep fıstığının eşsiz aroması ile buluşan San Sebastian. Fıstık sevenler için vazgeçilmez."
    },

    // EKLER ÇEŞİTLERİ
    "ekler-fistikli": {
        name: "Fıstıklı Ekler",
        image: "tatlıfoto/fıstıklıekler.png",
        description: "Antep fıstıklı krema dolgulu, fıstık parçaları ile süslenmiş özel ekler."
    },
    "ekler-lavantali": {
        name: "Lavantalı Ekler",
        image: "tatlıfoto/lavantalıekler.png",
        description: "Lavanta aromalı krema ile doldurulmuş zarif ekler."
    },
    "ekler-cikolatali": {
        name: "Çikolatalı Ekler",
        image: "tatlıfoto/çikolatalıekler.png",
        description: "Klasik çikolata kremalı ekler. Her zaman popüler olan favori."
    },

    // TART ÇEŞİTLERİ
    "tart-kalpli": {
        name: "Kalpli Creme Tart",
        image: "tatlıfoto/kalplicremetart.png",
        description: "Kalp şeklinde hazırlanan romantik creme tart. Özel günler için ideal."
    },
    "tart-kalp-cicekli": {
        name: "Kalp Çiçekli Creme Tart",
        image: "tatlıfoto/kalpçiçeklicremetart.png",
        description: "Çiçek süslemeli kalp tart. Zarif ve şık sunumu ile göz kamaştırıcı."
    },
    "tart-kremali": {
        name: "Kremalı Tart",
        image: "tatlıfoto/kremalıtart.png",
        description: "Klasik kremalı tart. Çıtır taban ve yumuşak krema ile muhteşem."
    },
    "tart-fistikli": {
        name: "Fıstıklı Tart",
        image: "tatlıfoto/fıstıklıtart.png",
        description: "Antep fıstıklı kremalı tart. Fıstığın yoğun aroması ile."
    },

    // PUFF & PROFİTEROL
    "creme-puff": {
        name: "Creme Puff",
        image: "tatlıfoto/cremepuff.png",
        description: "Hafif ve kabarık hamur içinde vanilya kreması. Klasik Fransız tatlısı."
    },
    "creme-puff-fistikli": {
        name: "Fıstıklı Kremalı Creme Puff",
        image: "tatlıfoto/fıstıklıkremalıcremepuff.png",
        description: "Antep fıstıklı krema ile doldurulmuş özel creme puff."
    },
    "profiterol-rocher": {
        name: "Rocher Profiterol",
        image: "tatlıfoto/rocherprofiterol.png",
        description: "Ferrero Rocher tadında, fındıklı çikolatalı özel profiterol."
    },

    // BUTİK ÇİKOLATA
    "butik-cikolata-cilekli": {
        name: "Çilekli Dolgulu Çikolata",
        image: "tatlıfoto/butikçikolata.png",
        description: "Çilekli krema dolgulu el yapımı butik çikolata."
    },
    "butik-cikolata-lotuslu": {
        name: "Lotuslu Dolgulu Çikolata",
        image: "tatlıfoto/butikçikolata2.png",
        description: "Lotus ezmesi dolgulu özel butik çikolata."
    },
    "butik-cikolata-limonlu": {
        name: "Limonlu Dolgulu Çikolata",
        image: "tatlıfoto/dolgulubutikçikolata.png",
        description: "Limon kreması dolgulu ferahlatıcı butik çikolata."
    },
    "butik-cikolata-frambuazli": {
        name: "Frambuazlı Dolgulu Çikolata",
        image: "tatlıfoto/dolguluçikolata2.png",
        description: "Frambuaz dolgulu taze aromalı butik çikolata."
    },
    "butik-cikolata-karamelli": {
        name: "Karamelli Dolgulu Çikolata",
        image: "tatlıfoto/karamelliçikolata.png",
        description: "Tuzlu karamel dolgulu premium butik çikolata."
    },

    // PASTALAR
    "pasta-elmali": {
        name: "Elmalı Pasta",
        image: "tatlıfoto/elmalıpasta.png",
        description: "Taze elmalar ve tarçın ile hazırlanan sonbahar lezzeti."
    },
    "pasta-cilekli": {
        name: "Çilekli Pasta",
        image: "tatlıfoto/çileklipasta.png",
        description: "Taze çileklerle süslenmiş klasik pasta."
    },
    "pasta-fistikli-fraizer": {
        name: "Fıstıklı Fraizer Pasta",
        image: "tatlıfoto/fıstıklıfraizerpasta.png",
        description: "Fransız Fraisier pastasının fıstıklı versiyonu."
    },
    "pasta-fistikli-royal": {
        name: "Fıstıklı Royal Kremalı Pasta",
        image: "tatlıfoto/fıstıklıroyalkremalıpasta.png",
        description: "Royal kremalı, fıstıklı özel gün pastası."
    },
    "pasta-rulo": {
        name: "Rulo Pasta",
        image: "tatlıfoto/rulopasta.png",
        description: "Yumuşak pandispanya ve kremalı rulo pasta."
    },
    "pasta-porsiyon-1": {
        name: "Porsiyon Pasta",
        image: "tatlıfoto/porsiyonpasta1.png",
        description: "Tek kişilik özel porsiyon pastalar."
    },
    "pasta-porsiyon-2": {
        name: "Porsiyon Pasta Özel",
        image: "tatlıfoto/porsiyonpasta2.png",
        description: "Farklı tasarımlarda porsiyon pastalar."
    },

    // MAKARON
    "makaron-frambuazli": {
        name: "Frambuazlı Makaron",
        image: "tatlıfoto/frambuazlımakaron.png",
        description: "Taze frambuaz aromalı Fransız makaronu."
    },
    "makaron-fistikli": {
        name: "Fıstıklı Makaron",
        image: "tatlıfoto/fıstıklımakaron.png",
        description: "Antep fıstıklı özel makaron."
    },

    // TEK TATLILAR (Kategorisiz)
    "cake-pop": {
        name: "Cake Pop",
        image: "tatlıfoto/cakepop.png",
        description: "Çubukta mini kekler. Parti ve özel günler için ideal."
    },
    "coco-star": {
        name: "Coco Star",
        image: "tatlıfoto/cocostrar.png",
        description: "Hindistan cevizi dolgulu çikolata kaplamalı tatlı."
    },
    "fransiz-cocie": {
        name: "Fransız Cocie",
        image: "tatlıfoto/fransızcocie.png",
        description: "Klasik Fransız tatlısı. Zarif ve lezzetli."
    },
    "ibiza": {
        name: "Ibiza",
        image: "tatlıfoto/ibiza.png",
        description: "Tropik aromalı, egzotik görünümlü özel tatlı."
    },
    "lotus-magnolya": {
        name: "Lotus Magnolya",
        image: "tatlıfoto/lotusmagnolya.png",
        description: "Lotus bisküvisi ile hazırlanan çiçek formunda özel tatlı."
    },
    "firin-sutlac": {
        name: "Fırın Sütlaç",
        image: "tatlıfoto/fırınsütlaç.png",
        description: "Geleneksel Türk tatlısı. Fırında kızartılmış sütlaç."
    },
    "fistikli-cookie": {
        name: "Fıstıklı Cookie",
        image: "tatlıfoto/fıstıklıcookie.png",
        description: "Antep fıstıklı yumuşak cookie."
    }
};

// Butik Pasta verileri (1-36)
const butikPastalar = [];
for (let i = 1; i <= 36; i++) {
    butikPastalar.push({
        key: `butik-pasta-${i}`,
        name: `Butik Pasta ${i}`,
        image: `tatlıfoto/butikpasta${i}.png`
    });
}

// Cheesecake çeşitleri
const cheesecakeCesitleri = [
    { key: "cheesecake-baklavali", name: "Baklavalı Cheesecake", image: "tatlıfoto/baklacalıcheesecake.png" },
    { key: "cheesecake-baklavali-tum", name: "Baklavalı Bütün Cheesecake", image: "tatlıfoto/baklavalıtümcheesecake.png" },
    { key: "cheesecake-beyaz-cikolatali-cilekli", name: "Beyaz Çikolatalı Çilekli", image: "tatlıfoto/beyazcikolatalıcileklicheesecake.png" },
    { key: "cheesecake-dubai", name: "Dubai Cheesecake", image: "tatlıfoto/dubaicheesecake.png" },
    { key: "cheesecake-elmali", name: "Elmalı Cheesecake", image: "tatlıfoto/elmalıcheesecake.png" },
    { key: "cheesecake-fistikli", name: "Fıstıklı Cheesecake", image: "tatlıfoto/fıstıklıcheesecake.png" },
    { key: "cheesecake-kahveli", name: "Kahveli Cheesecake", image: "tatlıfoto/kahvelicheesecake.png" },
    { key: "cheesecake-lotuslu", name: "Lotuslu Cheesecake", image: "tatlıfoto/lotuslucheesecake.png" },
    { key: "cheesecake-oreolu", name: "Oreolu Cheesecake", image: "tatlıfoto/oreolucheesecake.png" },
    { key: "cheesecake-red-velvet", name: "Red Velvet Cheesecake", image: "tatlıfoto/redvelvetcheesecake.png" },
    { key: "cheesecake-sutrecelli", name: "Sütreçelli Cheesecake", image: "tatlıfoto/sutrecellicheesecake.png" },
    { key: "cheesecake-cikolata-kaplamali", name: "Çikolata Kaplamalı", image: "tatlıfoto/çikolatakaplamalıcheesecake.png" },
    { key: "cheesecake-cikolatali", name: "Çikolatalı Cheesecake", image: "tatlıfoto/çikolatalıcheesecake.png" },
    { key: "cheesecake-cilekli-fistikli", name: "Çilekli Fıstıklı Cheesecake", image: "tatlıfoto/çileklifıstıklıcheesecake.png" }
];

// San Sebastian çeşitleri
const sanSebastianCesitleri = [
    { key: "san-sebastian-cilekli", name: "Çilekli Sade San Sebastian", image: "tatlıfoto/cileklisadesansebastian.png" },
    { key: "san-sebastian-cikolatali", name: "Çikolatalı San Sebastian", image: "tatlıfoto/çikolatalısebastian.png" },
    { key: "san-sebastian-fistikli", name: "Fıstıklı San Sebastian", image: "tatlıfoto/fıstıklısansebastian.png" }
];

// Ekler çeşitleri
const eklerCesitleri = [
    { key: "ekler-fistikli", name: "Fıstıklı Ekler", image: "tatlıfoto/fıstıklıekler.png" },
    { key: "ekler-lavantali", name: "Lavantalı Ekler", image: "tatlıfoto/lavantalıekler.png" },
    { key: "ekler-cikolatali", name: "Çikolatalı Ekler", image: "tatlıfoto/çikolatalıekler.png" }
];

// Tart çeşitleri
const tartCesitleri = [
    { key: "tart-kalpli", name: "Kalpli Creme Tart", image: "tatlıfoto/kalplicremetart.png" },
    { key: "tart-kalp-cicekli", name: "Kalp Çiçekli Creme Tart", image: "tatlıfoto/kalpçiçeklicremetart.png" },
    { key: "tart-kremali", name: "Kremalı Tart", image: "tatlıfoto/kremalıtart.png" },
    { key: "tart-fistikli", name: "Fıstıklı Tart", image: "tatlıfoto/fıstıklıtart.png" }
];

// Butik Çikolata çeşitleri
const cikolataCesitleri = [
    { key: "butik-cikolata-cilekli", name: "Çilekli Dolgulu Çikolata", image: "tatlıfoto/butikçikolata.png" },
    { key: "butik-cikolata-lotuslu", name: "Lotuslu Dolgulu Çikolata", image: "tatlıfoto/butikçikolata2.png" },
    { key: "butik-cikolata-limonlu", name: "Limonlu Dolgulu Çikolata", image: "tatlıfoto/dolgulubutikçikolata.png" },
    { key: "butik-cikolata-frambuazli", name: "Frambuazlı Dolgulu Çikolata", image: "tatlıfoto/dolguluçikolata2.png" },
    { key: "butik-cikolata-karamelli", name: "Karamelli Dolgulu Çikolata", image: "tatlıfoto/karamelliçikolata.png" }
];

// Pasta çeşitleri
const pastaCesitleri = [
    { key: "pasta-elmali", name: "Elmalı Pasta", image: "tatlıfoto/elmalıpasta.png" },
    { key: "pasta-cilekli", name: "Çilekli Pasta", image: "tatlıfoto/çileklipasta.png" },
    { key: "pasta-fistikli-fraizer", name: "Fıstıklı Fraizer Pasta", image: "tatlıfoto/fıstıklıfraizerpasta.png" },
    { key: "pasta-fistikli-royal", name: "Fıstıklı Royal Kremalı", image: "tatlıfoto/fıstıklıroyalkremalıpasta.png" },
    { key: "pasta-rulo", name: "Rulo Pasta", image: "tatlıfoto/rulopasta.png" },
    { key: "pasta-porsiyon-1", name: "Porsiyon Pasta", image: "tatlıfoto/porsiyonpasta1.png" },
    { key: "pasta-porsiyon-2", name: "Porsiyon Pasta Özel", image: "tatlıfoto/porsiyonpasta2.png" }
];

// Puff & Profiterol çeşitleri
const puffCesitleri = [
    { key: "creme-puff", name: "Creme Puff", image: "tatlıfoto/cremepuff.png" },
    { key: "creme-puff-fistikli", name: "Fıstıklı Kremalı Creme Puff", image: "tatlıfoto/fıstıklıkremalıcremepuff.png" },
    { key: "profiterol-rocher", name: "Rocher Profiterol", image: "tatlıfoto/rocherprofiterol.png" }
];

// Makaron çeşitleri
const makaronCesitleri = [
    { key: "makaron-frambuazli", name: "Frambuazlı Makaron", image: "tatlıfoto/frambuazlımakaron.png" },
    { key: "makaron-fistikli", name: "Fıstıklı Makaron", image: "tatlıfoto/fıstıklımakaron.png" }
];

// Kategori eşlemeleri
const kategoriler = {
    "cheesecake": { cesitler: cheesecakeCesitleri, baslik: "Cheesecake Çeşitleri" },
    "san-sebastian": { cesitler: sanSebastianCesitleri, baslik: "San Sebastian Çeşitleri" },
    "ekler": { cesitler: eklerCesitleri, baslik: "Ekler Çeşitleri" },
    "tart": { cesitler: tartCesitleri, baslik: "Tart Çeşitleri" },
    "butik-cikolata": { cesitler: cikolataCesitleri, baslik: "Butik Çikolata Çeşitleri" },
    "pasta": { cesitler: pastaCesitleri, baslik: "Pasta Çeşitleri" },
    "puff": { cesitler: puffCesitleri, baslik: "Puff & Profiterol" },
    "makaron": { cesitler: makaronCesitleri, baslik: "Makaron Çeşitleri" },
    "butik-pasta": { cesitler: butikPastalar, baslik: "Butik Pasta Koleksiyonu" }
};

// Modal elementleri
const modal = document.getElementById('tatliModal');
const modalBody = document.getElementById('modalBody');
const cesitlerModal = document.getElementById('cesitlerModal');
const cesitlerGrid = document.getElementById('cesitlerGrid');
const cesitlerTitle = document.getElementById('cesitlerTitle');
const modalCloseButtons = document.querySelectorAll('.modal-close');

// Tatlı kartlarına tıklama olayı
document.querySelectorAll('.tatli-card').forEach(card => {
    card.addEventListener('click', function () {
        const tatliKey = this.getAttribute('data-tatli');
        if (kategoriler[tatliKey]) {
            showCesitlerModal(tatliKey);
        } else {
            showModal(tatliKey);
        }
    });
});

// Çeşitler modalını göster
function showCesitlerModal(kategoriKey) {
    const kategori = kategoriler[kategoriKey];
    if (!kategori) return;

    cesitlerTitle.textContent = kategori.baslik;
    cesitlerGrid.innerHTML = kategori.cesitler.map(cesit => `
        <div class="cesit-card" data-cesit="${cesit.key}">
            <div class="cesit-image">
                <img src="${cesit.image}" alt="${cesit.name}" loading="lazy">
            </div>
            <div class="cesit-info">
                <h4>${cesit.name}</h4>
            </div>
        </div>
    `).join('');

    cesitlerModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Çeşit kartlarına tıklama olayı ekle
    setTimeout(() => {
        document.querySelectorAll('.cesit-card').forEach(card => {
            card.addEventListener('click', function () {
                const cesitKey = this.getAttribute('data-cesit');
                closeCesitlerModal();
                setTimeout(() => {
                    showModal(cesitKey);
                }, 300);
            });
        });
    }, 100);
}

// Çeşitler modal kapatma
function closeCesitlerModal() {
    cesitlerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal açma fonksiyonu
function showModal(tatliKey) {
    const tatli = tatlilar[tatliKey];

    // Butik pasta için özel kontrol
    if (!tatli && tatliKey.startsWith('butik-pasta-')) {
        const pastaNum = tatliKey.replace('butik-pasta-', '');
        showButikPastaModal(pastaNum);
        return;
    }

    if (!tatli) return;

    modalBody.innerHTML = `
        <img src="${tatli.image}" alt="${tatli.name}" class="modal-image" loading="lazy">
        <h2 class="modal-title">${tatli.name}</h2>
        <p class="modal-description">${tatli.description}</p>
        
        <div class="modal-siparis">
            <a href="https://wa.me/905558033164?text=Merhaba, ${encodeURIComponent(tatli.name)} için sipariş vermek istiyorum." 
               class="btn-siparis" 
               target="_blank">
                WhatsApp ile Sipariş Ver
            </a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Butik pasta modal
function showButikPastaModal(pastaNum) {
    modalBody.innerHTML = `
        <img src="tatlıfoto/butikpasta${pastaNum}.png" alt="Butik Pasta ${pastaNum}" class="modal-image" loading="lazy">
        <h2 class="modal-title">Butik Pasta ${pastaNum}</h2>
        <p class="modal-description">Özel tasarım butik pasta. Doğum günleri, nişan, düğün ve tüm özel günleriniz için size özel tasarlanır.</p>
        
        <div class="modal-siparis">
            <a href="https://wa.me/905558033164?text=Merhaba, Butik Pasta ${pastaNum} tasarımı için sipariş vermek istiyorum." 
               class="btn-siparis" 
               target="_blank">
                WhatsApp ile Sipariş Ver
            </a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Modal kapatma
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal kapatma olayları
modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const currentModal = this.closest('.modal');
        if (currentModal === cesitlerModal) {
            closeCesitlerModal();
        } else {
            closeModal();
        }
    });
});

// Modal dışına tıklama ile kapatma
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

cesitlerModal.addEventListener('click', function (e) {
    if (e.target === cesitlerModal) {
        closeCesitlerModal();
    }
});

// ESC tuşu ile kapatma
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (cesitlerModal.classList.contains('active')) {
            closeCesitlerModal();
        } else if (modal.classList.contains('active')) {
            closeModal();
        }
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll efekti
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
});

// Sayfa yüklendiğinde animasyon
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});
