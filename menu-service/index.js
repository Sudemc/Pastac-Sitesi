const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// CORS aktif
app.use(cors({ origin: '*' }));
app.use(express.json());

// Butik Pasta için dinamik üretim (1-36)
const butikPastalar = [];
for (let i = 1; i <= 36; i++) {
    butikPastalar.push({
        id: `butik-pasta-${i}`,
        name: `Butik Pasta Model ${i}`,
        description: 'Özel tasarım butik pasta. Doğum günleri, nişan, düğün ve tüm özel günleriniz için size özel tasarlanır.',
        image: `tatlıfoto/butikpasta${i}.png`
    });
}

// Menü verisi
const MENU_DATA = {
    categories: [
        {
            id: 'cheesecake',
            displayName: 'Cheesecake Çeşitleri',
            coverImage: 'tatlıfoto/fıstıklıcheesecake.png',
            items: [
                { id: 'cheesecake-baklavali', name: 'Baklavalı Cheesecake', description: 'Geleneksel baklava lezzeti ile modern cheesecake\'in muhteşem buluşması. Antep fıstığı ve baklava parçaları ile süslenmiş eşsiz bir lezzet.', image: 'tatlıfoto/baklacalıcheesecake.png' },
                { id: 'cheesecake-baklavali-tum', name: 'Baklavalı Bütün Cheesecake', description: 'Bütün baklava ile kaplanmış muhteşem cheesecake. Özel günleriniz için ideal bir seçim.', image: 'tatlıfoto/baklavalıtümcheesecake.png' },
                { id: 'cheesecake-beyaz-cikolatali-cilekli', name: 'Beyaz Çikolatalı Çilekli Cheesecake', description: 'Beyaz çikolatanın zarif tatlılığı ve taze çileklerin ferahlığı bir arada.', image: 'tatlıfoto/beyazcikolatalıcileklicheesecake.png' },
                { id: 'cheesecake-dubai', name: 'Dubai Cheesecake', description: 'Sosyal medyanın fenomen tatlısı Dubai çikolatasıyla buluşan özel cheesecake. Fıstık ezmesi ve kadayıf dolgulu.', image: 'tatlıfoto/dubaicheesecake.png' },
                { id: 'cheesecake-elmali', name: 'Elmalı Cheesecake', description: 'Tarçınlı elma ile zenginleştirilmiş sonbahar aromalı cheesecake.', image: 'tatlıfoto/elmalıcheesecake.png' },
                { id: 'cheesecake-fistikli', name: 'Fıstıklı Cheesecake', description: 'Antep fıstığının yoğun aroması ile hazırlanan özel cheesecake.', image: 'tatlıfoto/fıstıklıcheesecake.png' },
                { id: 'cheesecake-kahveli', name: 'Kahveli Cheesecake', description: 'Espresso aromalı, kahve severlerin favorisi cheesecake.', image: 'tatlıfoto/kahvelicheesecake.png' },
                { id: 'cheesecake-lotuslu', name: 'Lotuslu Cheesecake', description: 'Biscoff bisküvisi ve Lotus ezmesi ile hazırlanan popüler lezzet.', image: 'tatlıfoto/lotuslucheesecake.png' },
                { id: 'cheesecake-oreolu', name: 'Oreolu Cheesecake', description: 'Oreo bisküvilerinin çıtırlığı ve cheesecake\'in yumuşaklığı bir arada.', image: 'tatlıfoto/oreolucheesecake.png' },
                { id: 'cheesecake-red-velvet', name: 'Red Velvet Cheesecake', description: 'Kırmızı kadife kek ve cheesecake\'in lüks birleşimi.', image: 'tatlıfoto/redvelvetcheesecake.png' },
                { id: 'cheesecake-sutrecelli', name: 'Sütreçelli Cheesecake', description: 'Sütreçel dolgulu, karamelize lezzet seven herkes için.', image: 'tatlıfoto/sutrecellicheesecake.png' },
                { id: 'cheesecake-cikolata-kaplamali', name: 'Çikolata Kaplamalı Cheesecake', description: 'Parlak çikolata ganaj ile kaplı şık cheesecake.', image: 'tatlıfoto/çikolatakaplamalıcheesecake.png' },
                { id: 'cheesecake-cikolatali', name: 'Çikolatalı Cheesecake', description: 'Çikolata sevenler için yoğun çikolatalı cheesecake.', image: 'tatlıfoto/çikolatalıcheesecake.png' },
                { id: 'cheesecake-cilekli-fistikli', name: 'Çilekli Fıstıklı Cheesecake', description: 'Taze çilek ve Antep fıstığının muhteşem uyumu.', image: 'tatlıfoto/çileklifıstıklıcheesecake.png' }
            ]
        },
        {
            id: 'san-sebastian',
            displayName: 'San Sebastian Çeşitleri',
            coverImage: 'tatlıfoto/fıstıklısansebastian.png',
            items: [
                { id: 'san-sebastian-cilekli', name: 'Çilekli Sade San Sebastian', description: 'Klasik San Sebastian cheesecake üzerine taze çilek ile servis. Yanık yüzeyi ve kremsi dokusu ile eşsiz.', image: 'tatlıfoto/cileklisadesansebastian.png' },
                { id: 'san-sebastian-cikolatali', name: 'Çikolatalı San Sebastian', description: 'Çikolatanın yoğun lezzeti ile zenginleştirilmiş San Sebastian.', image: 'tatlıfoto/çikolatalısebastian.png' },
                { id: 'san-sebastian-fistikli', name: 'Fıstıklı San Sebastian', description: 'Antep fıstığının eşsiz aroması ile buluşan San Sebastian. Fıstık sevenler için vazgeçilmez.', image: 'tatlıfoto/fıstıklısansebastian.png' }
            ]
        },
        {
            id: 'butik-pasta',
            displayName: 'Butik Pasta Koleksiyonu',
            coverImage: 'tatlıfoto/butikpasta1.png',
            items: butikPastalar
        },
        {
            id: 'ekler',
            displayName: 'Ekler Çeşitleri',
            coverImage: 'tatlıfoto/fıstıklıekler.png',
            items: [
                { id: 'ekler-fistikli', name: 'Fıstıklı Ekler', description: 'Antep fıstıklı krema dolgulu, fıstık parçaları ile süslenmiş özel ekler.', image: 'tatlıfoto/fıstıklıekler.png' },
                { id: 'ekler-lavantali', name: 'Lavantalı Ekler', description: 'Lavanta aromalı krema ile doldurulmuş zarif ekler.', image: 'tatlıfoto/lavantalıekler.png' },
                { id: 'ekler-cikolatali', name: 'Çikolatalı Ekler', description: 'Klasik çikolata kremalı ekler. Her zaman popüler olan favori.', image: 'tatlıfoto/çikolatalıekler.png' }
            ]
        },
        {
            id: 'tart',
            displayName: 'Tart Çeşitleri',
            coverImage: 'tatlıfoto/kalplicremetart.png',
            items: [
                { id: 'tart-kalpli', name: 'Kalpli Creme Tart', description: 'Kalp şeklinde hazırlanan romantik creme tart. Özel günler için ideal.', image: 'tatlıfoto/kalplicremetart.png' },
                { id: 'tart-kalp-cicekli', name: 'Kalp Çiçekli Creme Tart', description: 'Çiçek süslemeli kalp tart. Zarif ve şık sunumu ile göz kamaştırıcı.', image: 'tatlıfoto/kalpçiçeklicremetart.png' },
                { id: 'tart-kremali', name: 'Kremalı Tart', description: 'Klasik kremalı tart. Çıtır taban ve yumuşak krema ile muhteşem.', image: 'tatlıfoto/kremalıtart.png' },
                { id: 'tart-fistikli', name: 'Fıstıklı Tart', description: 'Antep fıstıklı kremalı tart. Fıstığın yoğun aroması ile.', image: 'tatlıfoto/fıstıklıtart.png' }
            ]
        },
        {
            id: 'butik-cikolata',
            displayName: 'Butik Çikolata Çeşitleri',
            coverImage: 'tatlıfoto/butikçikolata.png',
            items: [
                { id: 'butik-cikolata-cilekli', name: 'Çilekli Dolgulu Çikolata', description: 'Çilekli krema dolgulu el yapımı butik çikolata.', image: 'tatlıfoto/butikçikolata.png' },
                { id: 'butik-cikolata-lotuslu', name: 'Lotuslu Dolgulu Çikolata', description: 'Lotus ezmesi dolgulu özel butik çikolata.', image: 'tatlıfoto/butikçikolata2.png' },
                { id: 'butik-cikolata-limonlu', name: 'Limonlu Dolgulu Çikolata', description: 'Limon kreması dolgulu ferahlatıcı butik çikolata.', image: 'tatlıfoto/dolgulubutikçikolata.png' },
                { id: 'butik-cikolata-frambuazli', name: 'Frambuazlı Dolgulu Çikolata', description: 'Frambuaz dolgulu taze aromalı butik çikolata.', image: 'tatlıfoto/dolguluçikolata2.png' },
                { id: 'butik-cikolata-karamelli', name: 'Karamelli Dolgulu Çikolata', description: 'Tuzlu karamel dolgulu premium butik çikolata.', image: 'tatlıfoto/karamelliçikolata.png' }
            ]
        },
        {
            id: 'pasta',
            displayName: 'Pasta Çeşitleri',
            coverImage: 'tatlıfoto/çileklipasta.png',
            items: [
                { id: 'pasta-elmali', name: 'Elmalı Pasta', description: 'Taze elmalar ve tarçın ile hazırlanan sonbahar lezzeti.', image: 'tatlıfoto/elmalıpasta.png' },
                { id: 'pasta-cilekli', name: 'Çilekli Pasta', description: 'Taze çileklerle süslenmiş klasik pasta.', image: 'tatlıfoto/çileklipasta.png' },
                { id: 'pasta-fistikli-fraizer', name: 'Fıstıklı Fraizer Pasta', description: 'Fransız Fraisier pastasının fıstıklı versiyonu.', image: 'tatlıfoto/fıstıklıfraizerpasta.png' },
                { id: 'pasta-fistikli-royal', name: 'Fıstıklı Royal Kremalı Pasta', description: 'Royal kremalı, fıstıklı özel gün pastası.', image: 'tatlıfoto/fıstıklıroyalkremalıpasta.png' },
                { id: 'pasta-rulo', name: 'Rulo Pasta', description: 'Yumuşak pandispanya ve kremalı rulo pasta.', image: 'tatlıfoto/rulopasta.png' },
                { id: 'pasta-porsiyon-1', name: 'Porsiyon Pasta', description: 'Tek kişilik özel porsiyon pastalar.', image: 'tatlıfoto/porsiyonpasta1.png' },
                { id: 'pasta-porsiyon-2', name: 'Porsiyon Pasta Özel', description: 'Farklı tasarımlarda porsiyon pastalar.', image: 'tatlıfoto/porsiyonpasta2.png' }
            ]
        },
        {
            id: 'puff',
            displayName: 'Puff & Profiterol',
            coverImage: 'tatlıfoto/rocherprofiterol.png',
            items: [
                { id: 'creme-puff', name: 'Creme Puff', description: 'Hafif ve kabarık hamur içinde vanilya kreması. Klasik Fransız tatlısı.', image: 'tatlıfoto/cremepuff.png' },
                { id: 'creme-puff-fistikli', name: 'Fıstıklı Kremalı Creme Puff', description: 'Antep fıstıklı krema ile doldurulmuş özel creme puff.', image: 'tatlıfoto/fıstıklıkremalıcremepuff.png' },
                { id: 'profiterol-rocher', name: 'Rocher Profiterol', description: 'Ferrero Rocher tadında, fındıklı çikolatalı özel profiterol.', image: 'tatlıfoto/rocherprofiterol.png' }
            ]
        },
        {
            id: 'makaron',
            displayName: 'Makaron Çeşitleri',
            coverImage: 'tatlıfoto/frambuazlımakaron.png',
            items: [
                { id: 'makaron-frambuazli', name: 'Frambuazlı Makaron', description: 'Taze frambuaz aromalı Fransız makaronu.', image: 'tatlıfoto/frambuazlımakaron.png' },
                { id: 'makaron-fistikli', name: 'Fıstıklı Makaron', description: 'Antep fıstıklı özel makaron.', image: 'tatlıfoto/fıstıklımakaron.png' }
            ]
        }
    ],
    standalone: [
        { id: 'cake-pop', name: 'Cake Pop', description: 'Çubukta mini kekler. Parti ve özel günler için ideal.', image: 'tatlıfoto/cakepop.png' },
        { id: 'coco-star', name: 'Coco Star', description: 'Hindistan cevizi dolgulu çikolata kaplamalı tatlı.', image: 'tatlıfoto/cocostrar.png' },
        { id: 'fransiz-cocie', name: 'Fransız Cocie', description: 'Klasik Fransız tatlısı. Zarif ve lezzetli.', image: 'tatlıfoto/fransızcocie.png' },
        { id: 'ibiza', name: 'Ibiza', description: 'Tropik aromalı, egzotik görünümlü özel tatlı.', image: 'tatlıfoto/ibiza.png' },
        { id: 'lotus-magnolya', name: 'Lotus Magnolya', description: 'Lotus bisküvisi ile hazırlanan çiçek formunda özel tatlı.', image: 'tatlıfoto/lotusmagnolya.png' },
        { id: 'firin-sutlac', name: 'Fırın Sütlaç', description: 'Geleneksel Türk tatlısı. Fırında kızartılmış sütlaç.', image: 'tatlıfoto/fırınsütlaç.png' },
        { id: 'fistikli-cookie', name: 'Fıstıklı Cookie', description: 'Antep fıstıklı yumuşak cookie.', image: 'tatlıfoto/fıstıklıcookie.png' }
    ]
};

// Endpoints
app.get('/menu', (req, res) => {
    res.json(MENU_DATA);
});

app.get('/menu/:category', (req, res) => {
    const categoryId = req.params.category;
    const category = MENU_DATA.categories.find(c => c.id === categoryId);

    if (category) {
        res.json(category);
    } else if (categoryId === 'standalone') {
        res.json({ id: 'standalone', displayName: 'Bağımsız Tatlılar', items: MENU_DATA.standalone });
    } else {
        res.status(404).json({ error: 'Kategori bulunamadı' });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', service: 'MenuService', timestamp: new Date().toISOString() });
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`MenuService running on port ${PORT}`);
    console.log(`Endpoints:`);
    console.log(`  GET http://localhost:${PORT}/menu`);
    console.log(`  GET http://localhost:${PORT}/menu/:category`);
    console.log(`  GET http://localhost:${PORT}/health`);
});
