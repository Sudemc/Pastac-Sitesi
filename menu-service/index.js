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
                { id: 'cheesecake-baklavali', name: 'Baklavalı Porsiyon Cheesecake', description: 'Geleneksel Türk baklavasının çıtırlığını, cheesecake\'in ipeksi dokusuyla tek porsiyonda buluşturduk. Altın sarısı çıtır yufkalar, yoğun Antep fıstığı ve özel peynir kremasının bu eşsiz uyumu, tatlı molalarınızın yeni favorisi olacak.', image: 'tatlıfoto/baklacalıcheesecake.png' },
                { id: 'cheesecake-baklavali-tum', name: 'Baklavalı Bütün Cheesecake', description: 'Geleneksel Türk baklavasının çıtırlığı ile ipeksi cheesecake dokusunun kusursuz uyumu. Bol Antep fıstığı, tereyağlı baklava yufkası ve özel peynir dolgusuyla hazırlanan bu bütün lezzet, en özel davet sofralarınızın yıldızı olmaya aday.', image: 'tatlıfoto/baklavalıtümcheesecake.png' },
                { id: 'cheesecake-beyaz-cikolatali-cilekli', name: 'Beyaz Çikolatalı Çilekli Cheesecake', description: 'Beyaz çikolatanın yoğun hazzını, çileğin doğal asiditesiyle kırdık. Baymayan, içinizi ferahlatan, tam kıvamında bir lezzet. Üzerindeki bol sosu ve çilek süslemeleriyle hem gözünüze hem damağınıza hitap edecek.', image: 'tatlıfoto/beyazcikolatalıcileklicheesecake.png' },
                { id: 'cheesecake-dubai', name: 'Dubai Cheesecake', description: 'Sosyal medyayı sallayan o meşhur lezzet, şimdi cheesecake formunda! İpeksi cheesecake dokusunun üzerinde; bol Antep fıstığı kreması ve altın sarısı çıtır kadayıf dolgusu, en üstte ise nefis sütlü çikolata kaplaması. O meşhur "çıtırtıyı" her çatalda hissedeceksiniz.', image: 'tatlıfoto/dubaicheesecake.png' },
                { id: 'cheesecake-elmali', name: 'Elmalı Cheesecake', description: 'Çıtır çıtır tereyağlı kırıntı hamurunun altında saklı bir lezzet şöleni! Hafif tarçınla sotelenmiş elma küpleri ve pürüzsüz cheesecake tabanının mükemmel uyumu. Tatlı, mayhoş ve kıtır dokuların bu dengeli birleşimine bayılacaksınız.', image: 'tatlıfoto/elmalıcheesecake.png' },
                { id: 'cheesecake-fistikli', name: 'Fıstıklı Cheesecake', description: 'Yeşil altın Antep fıstığının en yoğun hali! Cheesecake\'in o bildiğiniz ipeksi kremasını, %100 gerçek Antep fıstığı ezmesiyle harmanladık. Üzerinde fıstık parçaları barındıran bu lezzet, damakta bıraktığı yoğun aromasıyla tatlı standartlarınızı yükseltecek.', image: 'tatlıfoto/fıstıklıcheesecake.png' },
                { id: 'cheesecake-kahveli', name: 'Kahveli Cheesecake', description: 'Taze çekilmiş espresso çekirdeklerinin o büyüleyici kokusunu, cheesecake\'in ferahlatıcı dokusuyla birleştirdik. Tatlı mı yesem kahve mi içsem kararsızlığına son. Kahve aroması ve ağızda eriyen kremasıyla, günün yorgunluğunu unutturacak sofistike bir lezzet.', image: 'tatlıfoto/kahvelicheesecake.png' },
                { id: 'cheesecake-lotuslu', name: 'Lotuslu Cheesecake', description: 'Dünyanın en sevilen karamelize bisküvisi Lotus Biscoff\'un, cheesecake ile efsanevi buluşması. Tabanında yoğun bisküvi lezzeti, üzerinde akışkan Lotus kreması ve kenarlarında çıtır kırıntılar... Karamel ve tarçın notalarının bu kremamsı uyumuna bayılacaksınız.', image: 'tatlıfoto/lotuslucheesecake.png' },
                { id: 'cheesecake-oreolu', name: 'Oreolu Cheesecake', description: 'Sütün en iyi arkadaşı Oreo, şimdi cheesecake\'in kalbinde! Yoğun kakaolu bisküvi tabanı ve içinde saklı iri Oreo parçacıklarıyla hazırlanan, her çatalda efsane lezzet. Hem göze hem damağa hitap eden bir siyah-beyaz klasiği.', image: 'tatlıfoto/oreolucheesecake.png' },
                { id: 'cheesecake-red-velvet', name: 'Red Velvet Cheesecake', description: 'Klasik Red Velvet kekinin o meşhur nemli ve yumuşak yapısını, yoğun cheesecake dolgusuyla birleştirdik. Ağızda eriyen ipeksi kıvamı ve hafif kakao aromasıyla, tatlıda hem hafiflik hem de zenginlik arayanlar için kusursuz bir tercih.', image: 'tatlıfoto/redvelvetcheesecake.png' },
                { id: 'cheesecake-sutrecelli', name: 'Sütreçelli Cheesecake', description: 'Sütün en tatlı, en büyüleyici hali! Ağır ağır pişerek o eşsiz karamel rengini ve tadını alan ev yapımı süt reçelini, ipeksi cheesecake dokusuyla buluşturduk. Süt tadı ve karamelize aromaların damakta yarattığı bu zengin lezzete hayran kalacaksınız.', image: 'tatlıfoto/sutrecellicheesecake.png' },
                { id: 'cheesecake-cikolata-kaplamali', name: 'Çikolata Kaplamalı Cheesecake', description: 'Parlak çikolata ganaj ile kaplı şık cheesecake.', image: 'tatlıfoto/çikolatakaplamalıcheesecake.png' },
                { id: 'cheesecake-cikolatali', name: 'Çikolatalı Cheesecake', description: 'Ağır olmayan ama yoğun bir lezzet arayanlar için. En kaliteli çikolatalarla hazırladığımız bu cheesecake, kadifemsi dokusuyla damağınızda süzülür. Kahvenizin yanına yakışacak, tam kıvamında bir lezzet.', image: 'tatlıfoto/çikolatalıcheesecake.png' },
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
                { id: 'pasta-porsiyon-2', name: 'Porsiyon Çikolatalı Fıstıklı Pasta', description: 'Yumuşacık kek katmanları arasında özel pastacı kreması ve kenarları saran taze çilek dilimleri... En üstte ise ince bir çikolata katmanı üzerine cömertçe serpiştirilmiş Antep fıstığı. Meyvenin ferahlığı, fıstığın çıtırlığı ve kremanın yumuşaklığı tek bir çatada buluştu.', image: 'tatlıfoto/porsiyonpasta2.png' }
            ]
        },
        {
            id: 'puff',
            displayName: 'Puff & Profiterol',
            coverImage: 'tatlıfoto/rocherprofiterol.png',
            items: [
                { id: 'creme-puff', name: 'Creme Puff', description: 'Dışı kıtır, içi yumuşacık bir sürpriz! Özel "Craquelin" (kıtır bisküvi) katmanıyla fırınlanan hamuru, denemeden geçmek istemeyeceğiniz bir deneyim sunuyor. İçindeki pürüzsüz ve yoğun krema dolgusu ise bu çıtırlığı mükemmel bir yumuşaklıkla dengeliyor. Hem dokusuyla hem lezzetiyle modern bir klasik.', image: 'tatlıfoto/cremepuff.png' },
                { id: 'creme-puff-fistikli', name: 'Fıstıklı Kremalı Creme Puff', description: 'Altın sarısı pişmiş, hafifçe kıtır şu hamurunun içinde iki farklı dünya buluştu: Bir yanda yoğun ve zengin Antep fıstıklı krema, tam kalbinde ise ferahlatıcı frambuaz dolgusu. Fıstığın asil tadını, frambuazın mayhoşluğuyla dengeleyen bu lezzet, her ısırıkta damağınızda bir şölen yaratacak.', image: 'tatlıfoto/fıstıklıkremalıcremepuff.png' },
                { id: 'profiterol-rocher', name: 'Rocher Profiterol', description: 'Çikolata ve fındığın o efsanevi uyumu... Yumuşacık hamur toplarının içini özel krema ile doldurduk, dışını ise "Rocher" usulü parça fındıklı gurme çikolata ile kapladık. Her lokmada hem fındığın kavruk tadını hem de çikolatanın yoğunluğunu hissedeceğiniz, el yapımı özel bir lezzet.', image: 'tatlıfoto/rocherprofiterol.png' }
            ]
        },
        {
            id: 'makaron',
            displayName: 'Makaron Çeşitleri',
            coverImage: 'tatlıfoto/frambuazlımakaron.png',
            items: [
                { id: 'makaron-frambuazli', name: 'Frambuazlı Makaron', description: 'Yapay aroma değil, gerçek meyve özü! Mevsimin en güzel frambuazlarıyla hazırlanan yoğun dolgusu, çıtır dış kabukla buluştuğunda damağınızda patlayan bir lezzet şölenine dönüşüyor. Rengini ve tadını tamamen doğadan alan, hafif ve zarif bir tercih.', image: 'tatlıfoto/frambuazlımakaron.png' },
                { id: 'makaron-fistikli', name: 'Fıstıklı Makaron', description: 'Fıstık severler için başyapıt. Sadece rengiyle değil, damağı kaplayan tadıyla da iddialı. Birinci kalite Antep fıstığı ezmesiyle hazırlanan özel harcı, makaronun narin dokusuyla birleşerek çay saatinize lüks bir dokunuş katıyor.', image: 'tatlıfoto/fıstıklımakaron.png' }
            ]
        }
    ],
    standalone: [
        { id: 'cake-pop', name: 'Cake Pop', description: 'Kutlamaların ve partilerin neşesi! Rengarenk çikolata kaplamaları ve şeker süslemeleriyle hem göze hem damağa hitap eden, çubukta servis edilen nefis kek topları. Çocuklar için yemesi en eğlenceli, büyükler için kahve yanına en yakışan atıştırmalık.', image: 'tatlıfoto/cakepop.png' },
        { id: 'coco-star', name: 'Cocostar Pasta', description: 'Kakaolu pandispanyanın yumuşaklığı, Hindistan cevizinin o kendine has dokusuyla buluştu. İçi bembeyaz ve yumuşacık dolgulu, dışı yoğun çikolata kaplamalı. Isırdığınızda damağınıza yayılan o sütlü ve tatlı Hindistan cevizi aroması, çikolata krizlerinizin en hafif ve en lezzetli çözümü olacak.', image: 'tatlıfoto/cocostrar.png' },
        { id: 'fransiz-cocie', name: 'Fransız Coockie', description: 'Yüksek kaliteli tereyağı ve gerçek Belçika çikolatası parçalarıyla hazırladığımız bu lezzet; Amerikan cookie’lerinin aksine daha narin, daha gevrek ve yoğun aromalıdır. Çikolata severler için gurme bir deneyim.', image: 'tatlıfoto/fransızcocie.png' },
        { id: 'ibiza', name: 'Ibiza', description: 'Dışını kaplayan nefis bisküvi mantosunun içinde, yumuşacık ve hafif özel kreması saklı. Bisküvinin kıtırlığı ile kremanın yumuşaklığının yarattığı bu tezat uyuma bayılacaksınız.', image: 'tatlıfoto/ibiza.png' },
        { id: 'lotus-magnolya', name: 'Lotus Magnolya', description: 'Efsanevi Lotus bisküvisinin karamelize tadı, ipeksi magnolya kremasıyla buluştu. Katman katman bisküvi kırıntıları ve yumuşacık sütlü kremanın bu muhteşem uyumu, hafif ama etkileyici bir tatlı arayanlar için favori tercih. Her kaşıkta pürüzsüz bir mutluluk.', image: 'tatlıfoto/lotusmagnolya.png' },
        { id: 'firin-sutlac', name: 'Fırın Sütlaç', description: 'Sadece pirinç, şeker ve bol süt. Katkısız, nişasta kokmayan, kaşığa gelen o mükemmel dokusuyla geleneksel lezzetimiz. Üzerindeki hafif yanık kabuğu ve içindeki akışkan kıvamıyla sütlü tatlı severlerin vazgeçilmezi.', image: 'tatlıfoto/fırınsütlaç.png' },
        { id: 'fistikli-cookie', name: 'Fıstıklı Cookie', description: 'Antep fıstığını bu kurabiyede baş tacı yaptık. Kaliteli tereyağı ve bol fıstıkla hazırlanan hamuru, fırından çıktığı an yayılan kokusuyla büyülüyor. Hem doyurucu hem de zengin aromalı.', image: 'tatlıfoto/fıstıklıcookie.png' }
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
