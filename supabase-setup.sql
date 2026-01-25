-- =====================================================
-- SUPABASE KURULUM SQL
-- Bu SQL'i Supabase SQL Editor'da çalıştırın
-- =====================================================

-- 1. Kategoriler tablosu
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    display_name TEXT NOT NULL,
    cover_image TEXT,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Ürünler tablosu
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    category_id TEXT REFERENCES categories(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    description TEXT,
    image TEXT,
    is_standalone BOOLEAN DEFAULT FALSE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 3. Ayarlar tablosu (admin şifresi için)
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
);

-- 4. Row Level Security - Herkes okuyabilsin
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Okuma politikaları
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read settings" ON settings FOR SELECT USING (true);

-- Yazma politikaları (anon key ile yazabilsin - basit admin için)
CREATE POLICY "Anon insert categories" ON categories FOR INSERT WITH CHECK (true);
CREATE POLICY "Anon update categories" ON categories FOR UPDATE USING (true);
CREATE POLICY "Anon delete categories" ON categories FOR DELETE USING (true);

CREATE POLICY "Anon insert products" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Anon update products" ON products FOR UPDATE USING (true);
CREATE POLICY "Anon delete products" ON products FOR DELETE USING (true);

CREATE POLICY "Anon update settings" ON settings FOR UPDATE USING (true);

-- 5. Admin şifresini ekle (değiştirmek isterseniz buradan)
INSERT INTO settings (key, value) VALUES ('admin_password', 'nazike2024')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- =====================================================
-- MEVCUT VERİLERİ AKTAR
-- =====================================================

-- Kategoriler
INSERT INTO categories (id, display_name, cover_image, sort_order) VALUES
('cheesecake', 'Cheesecake Çeşitleri', 'tatlıfoto/fıstıklıcheesecake.png', 1),
('san-sebastian', 'San Sebastian Çeşitleri', 'tatlıfoto/fıstıklısansebastian.png', 2),
('butik-pasta', 'Butik Pasta Koleksiyonu', 'tatlıfoto/butikpasta1.png', 3),
('ekler', 'Ekler Çeşitleri', 'tatlıfoto/fıstıklıekler.png', 4),
('tart', 'Tart Çeşitleri', 'tatlıfoto/kalplicremetart.png', 5),
('butik-cikolata', 'Butik Çikolata Çeşitleri', 'tatlıfoto/butikçikolata.png', 6),
('pasta', 'Pasta Çeşitleri', 'tatlıfoto/çileklipasta.png', 7),
('puff', 'Puff & Profiterol', 'tatlıfoto/rocherprofiterol.png', 8),
('makaron', 'Makaron Çeşitleri', 'tatlıfoto/frambuazlımakaron.png', 9)
ON CONFLICT (id) DO NOTHING;

-- Cheesecake Ürünleri
INSERT INTO products (id, category_id, name, description, image, sort_order) VALUES
('cheesecake-baklavali', 'cheesecake', 'Baklavalı Porsiyon Cheesecake', 'Geleneksel Türk baklavasının çıtırlığını, cheesecake''in ipeksi dokusuyla tek porsiyonda buluşturduk. Altın sarısı çıtır yufkalar, yoğun Antep fıstığı ve özel peynir kremasının bu eşsiz uyumu, tatlı molalarınızın yeni favorisi olacak.', 'tatlıfoto/baklacalıcheesecake.png', 1),
('cheesecake-baklavali-tum', 'cheesecake', 'Baklavalı Bütün Cheesecake', 'Geleneksel Türk baklavasının çıtırlığı ile ipeksi cheesecake dokusunun kusursuz uyumu. Bol Antep fıstığı, tereyağlı baklava yufkası ve özel peynir dolgusuyla hazırlanan bu bütün lezzet, en özel davet sofralarınızın yıldızı olmaya aday.', 'tatlıfoto/baklavalıtümcheesecake.png', 2),
('cheesecake-beyaz-cikolatali-cilekli', 'cheesecake', 'Beyaz Çikolatalı Çilekli Cheesecake', 'Beyaz çikolatanın yoğun hazzını, çileğin doğal asiditesiyle kırdık. Baymayan, içinizi ferahlatan, tam kıvamında bir lezzet.', 'tatlıfoto/beyazcikolatalıcileklicheesecake.png', 3),
('cheesecake-dubai', 'cheesecake', 'Dubai Cheesecake', 'Sosyal medyayı sallayan o meşhur lezzet, şimdi cheesecake formunda! İpeksi cheesecake dokusunun üzerinde; bol Antep fıstığı kreması ve altın sarısı çıtır kadayıf dolgusu.', 'tatlıfoto/dubaicheesecake.png', 4),
('cheesecake-elmali', 'cheesecake', 'Elmalı Cheesecake', 'Çıtır çıtır tereyağlı kırıntı hamurunun altında saklı bir lezzet şöleni! Hafif tarçınla sotelenmiş elma küpleri ve pürüzsüz cheesecake tabanının mükemmel uyumu.', 'tatlıfoto/elmalıcheesecake.png', 5),
('cheesecake-fistikli', 'cheesecake', 'Fıstıklı Cheesecake', 'Yeşil altın Antep fıstığının en yoğun hali! Cheesecake''in o bildiğiniz ipeksi kremasını, %100 gerçek Antep fıstığı ezmesiyle harmanladık.', 'tatlıfoto/fıstıklıcheesecake.png', 6),
('cheesecake-kahveli', 'cheesecake', 'Kahveli Cheesecake', 'Taze çekilmiş espresso çekirdeklerinin o büyüleyici kokusunu, cheesecake''in ferahlatıcı dokusuyla birleştirdik.', 'tatlıfoto/kahvelicheesecake.png', 7),
('cheesecake-lotuslu', 'cheesecake', 'Lotuslu Cheesecake', 'Dünyanın en sevilen karamelize bisküvisi Lotus Biscoff''un, cheesecake ile efsanevi buluşması.', 'tatlıfoto/lotuslucheesecake.png', 8),
('cheesecake-oreolu', 'cheesecake', 'Oreolu Cheesecake', 'Sütün en iyi arkadaşı Oreo, şimdi cheesecake''in kalbinde! Yoğun kakaolu bisküvi tabanı ve içinde saklı iri Oreo parçacıklarıyla hazırlanan, her çatalda efsane lezzet.', 'tatlıfoto/oreolucheesecake.png', 9),
('cheesecake-red-velvet', 'cheesecake', 'Red Velvet Cheesecake', 'Klasik Red Velvet kekinin o meşhur nemli ve yumuşak yapısını, yoğun cheesecake dolgusuyla birleştirdik.', 'tatlıfoto/redvelvetcheesecake.png', 10),
('cheesecake-sutrecelli', 'cheesecake', 'Sütreçelli Cheesecake', 'Sütün en tatlı, en büyüleyici hali! Ağır ağır pişerek o eşsiz karamel rengini ve tadını alan ev yapımı süt reçelini, ipeksi cheesecake dokusuyla buluşturduk.', 'tatlıfoto/sutrecellicheesecake.png', 11),
('cheesecake-cikolata-kaplamali', 'cheesecake', 'Çikolata Kaplamalı Cheesecake', 'Klasik dilimlerden sıkılanlara modern bir dokunuş. Özel çubuklu sunumu ve üzerindeki şık süslemeleriyle tam bir görsel şölen.', 'tatlıfoto/çikolatakaplamalıcheesecake.png', 12),
('cheesecake-cikolatali', 'cheesecake', 'Çikolatalı Cheesecake', 'Ağır olmayan ama yoğun bir lezzet arayanlar için. En kaliteli çikolatalarla hazırladığımız bu cheesecake, kadifemsi dokusuyla damağınızda süzülür.', 'tatlıfoto/çikolatalıcheesecake.png', 13),
('cheesecake-cilekli-fistikli', 'cheesecake', 'Çilekli Fıstıklı Cheesecake', 'Antep fıstığının zengin aroması, taze çileklerin ferahlatıcılığıyla buluştu!', 'tatlıfoto/çileklifıstıklıcheesecake.png', 14)
ON CONFLICT (id) DO NOTHING;

-- San Sebastian Ürünleri
INSERT INTO products (id, category_id, name, description, image, sort_order) VALUES
('san-sebastian-cilekli', 'san-sebastian', 'Çilekli Sade San Sebastian', 'Sade mi yesem, çilekli mi? Kararsız kalanlar için iki efsane lezzeti tek tabakta birleştirdik.', 'tatlıfoto/cileklisadesansebastian.png', 1),
('san-sebastian-cikolatali', 'san-sebastian', 'Çikolatalı San Sebastian', 'Sosla değil, özüyle çikolatalı! İçeriğindeki yoğun kakao ve erimiş çikolata sayesinde rengini ve tadını tam kalbinden alır.', 'tatlıfoto/çikolatalısebastian.png', 2),
('san-sebastian-fistikli', 'san-sebastian', 'Fıstıklı San Sebastian', 'Peynir dolgusunun hafifliği, Antep fıstığı sosunun zenginliğiyle birleşti.', 'tatlıfoto/fıstıklısansebastian.png', 3),
('san-sebastian-sade', 'san-sebastian', 'Sade San Sebastian', 'Fırından çıktığı andaki o muhteşem kokusu ve sarsılan o meşhur kıvamıyla San Sebastian Cheesecake.', 'tatlıfoto/sadesansebastian.png', 4),
('san-sebastian-cilekli-yeni', 'san-sebastian', 'Çilekli San Sebastian', 'Klasik San Sebastian lezzetini, gerçek çileklerin ferahlığıyla yeniden yorumladık.', 'tatlıfoto/cileklisansebastian.jpg', 5)
ON CONFLICT (id) DO NOTHING;

-- Ekler Ürünleri
INSERT INTO products (id, category_id, name, description, image, sort_order) VALUES
('ekler-fistikli', 'ekler', 'Antep Fıstıklı Ekler', 'Antep fıstığının en tatlı hali! İncecik hamuru, içinde damağı saran ipeksi pastacı kreması ve üzerinde yoğun Antep fıstığı kaplaması.', 'tatlıfoto/fıstıklıekler.png', 1),
('ekler-lavantali', 'ekler', 'Lavantalı Ekler', 'Klasik tatlardan sıkılanlar için sıra dışı bir dokunuş. Lavantanın sakinleştirici aromasını, incecik hamuru ve ipeksi krema ile buluşturduk.', 'tatlıfoto/lavantalıekler.png', 2),
('ekler-cikolatali', 'ekler', 'Çikolatalı Ekler', 'Bazı lezzetlerin modası asla geçmez. İncecik hamuru, içinde taşan yumuşacık çikolatalı pastacı kreması.', 'tatlıfoto/çikolatalıekler.png', 3)
ON CONFLICT (id) DO NOTHING;

-- Tart Ürünleri
INSERT INTO products (id, category_id, name, description, image, sort_order) VALUES
('tart-kalpli', 'tart', 'Kalpli Creme Tart', 'Ballı bisküvinin karamelize tadı, kremanın hafifliği ve çikolatanın dayanılmaz lezzeti tek bir kalpte buluştu.', 'tatlıfoto/kalplicremetart.png', 1),
('tart-kalp-cicekli', 'tart', 'Çiçekli Bahçesi Kalp Creme Tart', 'Ballı bisküvi ve ipeksi krema katmanlarını, canlı çiçeklerin doğal güzelliği ve çikolatalarımızla süsledik.', 'tatlıfoto/kalpçiçeklicremetart.png', 2),
('tart-kremali', 'tart', 'Kremalı Tart', 'Tereyağlı kıtır tart hamuru kaseleri içinde, bulut gibi hafif özel pastacı kreması.', 'tatlıfoto/kremalıtart.png', 3),
('tart-fistikli', 'tart', 'Fıstıklı Tart', 'Antep fıstığının en yoğun ve en asil hali. Tereyağlı kıtır tart hamurunun içini, gerçek Antep fıstığıyla hazırladığımız özel dolguyla taçlandırdık.', 'tatlıfoto/fıstıklıtart.png', 4)
ON CONFLICT (id) DO NOTHING;

-- Butik Çikolata Ürünleri
INSERT INTO products (id, category_id, name, description, image, sort_order) VALUES
('butik-cikolata-cilekli', 'butik-cikolata', 'Karışık Dolgulu Çikolata', 'Çikolatayı bir sanat eserine dönüştürdük. En kaliteli kakao çekirdeklerinden üretilen incecik, çıtır bir dış kabuk.', 'tatlıfoto/butikçikolata.png', 1),
('butik-cikolata-lotuslu', 'butik-cikolata', 'Lotus Biscoff Dolgulu Çikolata', 'Lotus bisküvisinin o kendine has karamelize ve baharatlı tadını, lezziz bir dolgu haline getirdik.', 'tatlıfoto/butikçikolata2.png', 2),
('butik-cikolata-limonlu', 'butik-cikolata', 'Limon Dolgulu Çikolata', 'Çikolatanın tatlılığını, taze limonların doğal asiditesiyle dengeledik.', 'tatlıfoto/dolgulubutikçikolata.png', 3),
('butik-cikolata-frambuazli', 'butik-cikolata', 'Frambuaz Dolgulu Çikolata', 'Gerçek frambuaz püresiyle hazırlanan, rengini ve tadını tamamen meyveden alan asil bir lezzet.', 'tatlıfoto/dolguluçikolata2.png', 4),
('butik-cikolata-karamelli', 'butik-cikolata', 'Karamel Dolgulu Çikolata', 'Klasiklerden vazgeçmeyenler için. İncecik çikolata kabuğu kırıldığında dışarı süzülen, ev yapımı, yoğun kıvamlı karamel dolgusu.', 'tatlıfoto/karamelliçikolata.png', 5)
ON CONFLICT (id) DO NOTHING;

-- Pasta Ürünleri
INSERT INTO products (id, category_id, name, description, image, sort_order) VALUES
('pasta-elmali', 'pasta', 'File Bademli Elmalı Pasta', 'Altın sarısı rengi ve üzerindeki cömert badem kaplamasıyla iştah kabartan bir klasik.', 'tatlıfoto/elmalıpasta.png', 1),
('pasta-cilekli', 'pasta', 'Çilekli Fraiser Pasta', 'Fransız pastacılığının en şık imzası. İki kat yumuşacık pandispanya arasında, kenarlara özenle dizilmiş taze çilekler.', 'tatlıfoto/çileklipasta.png', 2),
('pasta-fistikli-fraizer', 'pasta', 'Fıstıklı Fraiser Pasta', 'Fransız klasiğine "Yeşil Altın" dokunuşu. Klasik vanilyalı krema yerine, bol Antep fıstığı ezmesiyle zenginleştirilmiş gurme bir krema.', 'tatlıfoto/fıstıklıfraizerpasta.png', 3),
('pasta-fistikli-royal', 'pasta', 'Fıstıklı Royal Kremalı Pasta', 'Bazen en güzeli, en sade ve en yumuşak olanıdır. Sadece özel Royal kremasının verdiği o yoğun haz.', 'tatlıfoto/fıstıklıroyalkremalıpasta.png', 4),
('pasta-rulo', 'pasta', 'Rulo Pasta', 'Çatalla dokunduğunuz an hissedeceğiniz o puf puf doku... Kırılmadan, nazikçe sarılmış sünger kekin içinde saklı krema.', 'tatlıfoto/rulopasta.png', 5),
('pasta-porsiyon-1', 'pasta', 'Porsiyon Pasta', 'Büyük kutlamaların lezzetini tek porsiyona sığdırdık.', 'tatlıfoto/porsiyonpasta1.png', 6),
('pasta-porsiyon-2', 'pasta', 'Porsiyon Çikolatalı Fıstıklı Pasta', 'Yumuşacık kek katmanları arasında özel pastacı kreması ve kenarları saran taze çilek dilimleri.', 'tatlıfoto/porsiyonpasta2.png', 7)
ON CONFLICT (id) DO NOTHING;

-- Puff & Profiterol Ürünleri
INSERT INTO products (id, category_id, name, description, image, sort_order) VALUES
('creme-puff', 'puff', 'Creme Puff', 'Dışı kıtır, içi yumuşacık bir sürpriz! Özel "Craquelin" katmanıyla fırınlanan hamuru.', 'tatlıfoto/cremepuff.png', 1),
('creme-puff-fistikli', 'puff', 'Fıstıklı Kremalı Creme Puff', 'Altın sarısı pişmiş, hafifçe kıtır şu hamurunun içinde iki farklı dünya buluştu.', 'tatlıfoto/fıstıklıkremalıcremepuff.png', 2),
('profiterol-rocher', 'puff', 'Rocher Profiterol', 'Çikolata ve fındığın o efsanevi uyumu... Yumuşacık hamur toplarının içini özel krema ile doldurduk.', 'tatlıfoto/rocherprofiterol.png', 3)
ON CONFLICT (id) DO NOTHING;

-- Makaron Ürünleri
INSERT INTO products (id, category_id, name, description, image, sort_order) VALUES
('makaron-frambuazli', 'makaron', 'Frambuazlı Makaron', 'Yapay aroma değil, gerçek meyve özü! Mevsimin en güzel frambuazlarıyla hazırlanan yoğun dolgusu.', 'tatlıfoto/frambuazlımakaron.png', 1),
('makaron-fistikli', 'makaron', 'Fıstıklı Makaron', 'Fıstık severler için başyapıt. Birinci kalite Antep fıstığı ezmesiyle hazırlanan özel harcı.', 'tatlıfoto/fıstıklımakaron.png', 2)
ON CONFLICT (id) DO NOTHING;

-- Bağımsız Ürünler (Standalone)
INSERT INTO products (id, category_id, name, description, image, is_standalone, sort_order) VALUES
('cake-pop', NULL, 'Cake Pop', 'Kutlamaların ve partilerin neşesi! Rengarenk çikolata kaplamaları ve şeker süslemeleriyle hem göze hem damağa hitap eden, çubukta servis edilen nefis kek topları.', 'tatlıfoto/cakepop.png', TRUE, 1),
('coco-star', NULL, 'Cocostar Pasta', 'Kakaolu pandispanyanın yumuşaklığı, Hindistan cevizinin o kendine has dokusuyla buluştu.', 'tatlıfoto/cocostrar.png', TRUE, 2),
('fransiz-cocie', NULL, 'Fransız Coockie', 'Yüksek kaliteli tereyağı ve gerçek Belçika çikolatası parçalarıyla hazırladığımız bu lezzet.', 'tatlıfoto/fransızcocie.png', TRUE, 3),
('ibiza', NULL, 'Ibiza', 'Dışını kaplayan nefis bisküvi mantosunun içinde, yumuşacık ve hafif özel kreması saklı.', 'tatlıfoto/ibiza.png', TRUE, 4),
('lotus-magnolya', NULL, 'Lotus Magnolya', 'Efsanevi Lotus bisküvisinin karamelize tadı, ipeksi magnolya kremasıyla buluştu.', 'tatlıfoto/lotusmagnolya.png', TRUE, 5),
('firin-sutlac', NULL, 'Fırın Sütlaç', 'Sadece pirinç, şeker ve bol süt. Katkısız, nişasta kokmayan, kaşığa gelen o mükemmel dokusuyla geleneksel lezzetimiz.', 'tatlıfoto/fırınsütlaç.png', TRUE, 6),
('fistikli-cookie', NULL, 'Fıstıklı Cookie', 'Antep fıstığını bu kurabiyede baş tacı yaptık. Kaliteli tereyağı ve bol fıstıkla hazırlanan hamuru.', 'tatlıfoto/fıstıklıcookie.png', TRUE, 7)
ON CONFLICT (id) DO NOTHING;

-- Butik Pastalar (1-36)
INSERT INTO products (id, category_id, name, description, image, sort_order)
SELECT 
    'butik-pasta-' || generate_series,
    'butik-pasta',
    'Butik Pasta ' || generate_series,
    'Özel tasarım butik pasta. Doğum günleri, nişan, düğün ve tüm özel günleriniz için size özel tasarlanır.',
    'tatlıfoto/butikpasta' || generate_series || '.png',
    generate_series
FROM generate_series(1, 36)
ON CONFLICT (id) DO NOTHING;

-- Tamamlandı mesajı
SELECT 'Kurulum tamamlandı! ' || 
       (SELECT COUNT(*) FROM categories) || ' kategori ve ' || 
       (SELECT COUNT(*) FROM products) || ' ürün eklendi.' as sonuc;
