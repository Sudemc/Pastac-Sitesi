// Tatlı verileri - Gerçek görseller ile güncellenmiş (İçerik listeleri kaldırıldı)
const tatlilar = {
    // CHEESECAKE ÇEŞİTLERİ
    "cheesecake-baklavali": {
        name: "Baklavalı Porsiyon Cheesecake",
        image: "tatlıfoto/baklacalıcheesecake.png",
        description: "Geleneksel Türk baklavasının çıtırlığını, cheesecake'in ipeksi dokusuyla tek porsiyonda buluşturduk. Altın sarısı çıtır yufkalar, yoğun Antep fıstığı ve özel peynir kremasının bu eşsiz uyumu, tatlı molalarınızın yeni favorisi olacak."
    },
    "cheesecake-baklavali-tum": {
        name: "Baklavalı Bütün Cheesecake",
        image: "tatlıfoto/baklavalıtümcheesecake.png",
        description: "Geleneksel Türk baklavasının çıtırlığı ile ipeksi cheesecake dokusunun kusursuz uyumu. Bol Antep fıstığı, tereyağlı baklava yufkası ve özel peynir dolgusuyla hazırlanan bu bütün lezzet, en özel davet sofralarınızın yıldızı olmaya aday."
    },
    "cheesecake-beyaz-cikolatali-cilekli": {
        name: "Beyaz Çikolatalı Çilekli Cheesecake",
        image: "tatlıfoto/beyazcikolatalıcileklicheesecake.png",
        description: "Beyaz çikolatanın yoğun hazzını, çileğin doğal asiditesiyle kırdık. Baymayan, içinizi ferahlatan, tam kıvamında bir lezzet. Üzerindeki bol sosu ve çilek süslemeleriyle hem gözünüze hem damağınıza hitap edecek."
    },
    "cheesecake-dubai": {
        name: "Dubai Cheesecake",
        image: "tatlıfoto/dubaicheesecake.png",
        description: "Sosyal medyayı sallayan o meşhur lezzet, şimdi cheesecake formunda! İpeksi cheesecake dokusunun üzerinde; bol Antep fıstığı kreması ve altın sarısı çıtır kadayıf dolgusu, en üstte ise nefis sütlü çikolata kaplaması. O meşhur \"çıtırtıyı\" her çatalda hissedeceksiniz."
    },
    "cheesecake-elmali": {
        name: "Elmalı Cheesecake",
        image: "tatlıfoto/elmalıcheesecake.png",
        description: "Çıtır çıtır tereyağlı kırıntı hamurunun altında saklı bir lezzet şöleni! Hafif tarçınla sotelenmiş elma küpleri ve pürüzsüz cheesecake tabanının mükemmel uyumu. Tatlı, mayhoş ve kıtır dokuların bu dengeli birleşimine bayılacaksınız."
    },
    "cheesecake-fistikli": {
        name: "Fıstıklı Cheesecake",
        image: "tatlıfoto/fıstıklıcheesecake.png",
        description: "Yeşil altın Antep fıstığının en yoğun hali! Cheesecake'in o bildiğiniz ipeksi kremasını, %100 gerçek Antep fıstığı ezmesiyle harmanladık. Üzerinde fıstık parçaları barındıran bu lezzet, damakta bıraktığı yoğun aromasıyla tatlı standartlarınızı yükseltecek."
    },
    "cheesecake-kahveli": {
        name: "Kahveli Cheesecake",
        image: "tatlıfoto/kahvelicheesecake.png",
        description: "Taze çekilmiş espresso çekirdeklerinin o büyüleyici kokusunu, cheesecake'in ferahlatıcı dokusuyla birleştirdik. Tatlı mı yesem kahve mi içsem kararsızlığına son. Kahve aroması ve ağızda eriyen kremasıyla, günün yorgunluğunu unutturacak sofistike bir lezzet."
    },
    "cheesecake-lotuslu": {
        name: "Lotuslu Cheesecake",
        image: "tatlıfoto/lotuslucheesecake.png",
        description: "Dünyanın en sevilen karamelize bisküvisi Lotus Biscoff'un, cheesecake ile efsanevi buluşması. Tabanında yoğun bisküvi lezzeti, üzerinde akışkan Lotus kreması ve kenarlarında çıtır kırıntılar... Karamel ve tarçın notalarının bu kremamsı uyumuna bayılacaksınız."
    },
    "cheesecake-oreolu": {
        name: "Oreolu Cheesecake",
        image: "tatlıfoto/oreolucheesecake.png",
        description: "Sütün en iyi arkadaşı Oreo, şimdi cheesecake'in kalbinde! Yoğun kakaolu bisküvi tabanı ve içinde saklı iri Oreo parçacıklarıyla hazırlanan, her çatalda efsane lezzet. Hem göze hem damağa hitap eden bir siyah-beyaz klasiği."
    },
    "cheesecake-red-velvet": {
        name: "Red Velvet Cheesecake",
        image: "tatlıfoto/redvelvetcheesecake.png",
        description: "Klasik Red Velvet kekinin o meşhur nemli ve yumuşak yapısını, yoğun cheesecake dolgusuyla birleştirdik. Ağızda eriyen ipeksi kıvamı ve hafif kakao aromasıyla, tatlıda hem hafiflik hem de zenginlik arayanlar için kusursuz bir tercih."
    },
    "cheesecake-sutrecelli": {
        name: "Sütreçelli Cheesecake",
        image: "tatlıfoto/sutrecellicheesecake.png",
        description: "Sütün en tatlı, en büyüleyici hali! Ağır ağır pişerek o eşsiz karamel rengini ve tadını alan ev yapımı süt reçelini, ipeksi cheesecake dokusuyla buluşturduk. Süt tadı ve karamelize aromaların damakta yarattığı bu zengin lezzete hayran kalacaksınız."
    },
    "cheesecake-cikolata-kaplamali": {
        name: "Çikolata Kaplamalı Cheesecake",
        image: "tatlıfoto/çikolatakaplamalıcheesecake.png",
        description: "Klasik dilimlerden sıkılanlara modern bir dokunuş. Özel çubuklu sunumu ve üzerindeki şık süslemeleriyle (fıstık, fındık, kurutulmuş meyve) tam bir görsel şölen. Kahvenizin yanına alabileceğiniz veya sevdiklerinize hediye edebileceğiniz en tatlı sürpriz."
    },
    "cheesecake-cikolatali": {
        name: "Çikolatalı Cheesecake",
        image: "tatlıfoto/çikolatalıcheesecake.png",
        description: "Ağır olmayan ama yoğun bir lezzet arayanlar için. En kaliteli çikolatalarla hazırladığımız bu cheesecake, kadifemsi dokusuyla damağınızda süzülür. Kahvenizin yanına yakışacak, tam kıvamında bir lezzet."
    },
    "cheesecake-cilekli-fistikli": {
        name: "Çilekli Fıstıklı Cheesecake",
        image: "tatlıfoto/çileklifıstıklıcheesecake.png",
        description: "Antep fıstığının zengin aroması, taze çileklerin ferahlatıcılığıyla buluştu! Pürüzsüz peynir dolgusu ve üzerindeki bol çilek sosu... Tatlılık ve mayhoşluğun bu eşsiz dengesine bayılacaksınız."
    },

    // SAN SEBASTİAN ÇEŞİTLERİ
    "san-sebastian-cilekli": {
        name: "Çilekli Sade San Sebastian",
        image: "tatlıfoto/cileklisadesansebastian.png",
        description: "Sade mi yesem, çilekli mi? Kararsız kalanlar için iki efsane lezzeti tek tabakta birleştirdik. Bir yarısında San Sebastian'ın o saf, kremamsı ve yanık lezzeti; diğer yarısında taze çilek sosunun ferahlatıcı mayhoşluğu. Seçim yapmanıza gerek yok, ikisinin de tadını çıkarın!"
    },
    "san-sebastian-cikolatali": {
        name: "Çikolatalı San Sebastian",
        image: "tatlıfoto/çikolatalısebastian.png",
        description: "Sosla değil, özüyle çikolatalı! İçeriğindeki yoğun kakao ve erimiş çikolata sayesinde rengini ve tadını tam kalbinden alır. Klasik San Sebastian'ın pürüzsüz peynir dokusu ile yoğun çikolata aromasının fırındaki muhteşem dansı. Çikolata krizlerinin en \"kremamsı\" çözümü"
    },
    "san-sebastian-fistikli": {
        name: "Fıstıklı San Sebastian",
        image: "tatlıfoto/fıstıklısansebastian.png",
        description: "Peynir dolgusunun hafifliği, Antep fıstığı sosunun zenginliğiyle birleşti. Klasik San Sebastian lezzetini, bol fıstık sosu ile bambaşka bir boyuta taşıdık. Fıstık severler için vazgeçilmez bir tercih."
    },

    // EKLER ÇEŞİTLERİ
    "ekler-fistikli": {
        name: "Antep Fıstıklı Ekler",
        image: "tatlıfoto/fıstıklıekler.png",
        description: "Antep fıstığının en tatlı hali! İncecik hamuru, içinde damağı saran ipeksi pastacı kreması ve üzerinde yoğun Antep fıstığı kaplaması. Hem göze hem damağa hitap eden, bol malzemeli bir lezzet şöleni."
    },
    "ekler-lavantali": {
        name: "Lavantalı Ekler",
        image: "tatlıfoto/lavantalıekler.png",
        description: "Klasik tatlardan sıkılanlar için sıra dışı bir dokunuş. Lavantanın sakinleştirici aromasını, incecik hamuru ve ipeksi krema ile buluşturduk. İlk ısırıkta şaşırtan, sonrasında vazgeçilmez olan, buram buram bahar kokulu bir lezzet."
    },
    "ekler-cikolatali": {
        name: "Çikolatalı Ekler",
        image: "tatlıfoto/çikolatalıekler.png",
        description: "Bazı lezzetlerin modası asla geçmez. İncecik hamuru, içinde taşan yumuşacık çikolatalı pastacı kreması ve üzerinde parlayan gerçek çikolata sosu. Bildiğiniz, özlediğiniz ve her zaman mutlu eden o efsane lezzet."
    },

    // TART ÇEŞİTLERİ
    "tart-kalpli": {
        name: "Kalpli Creme Tart",
        image: "tatlıfoto/kalplicremetart.png",
        description: "Ballı bisküvinin karamelize tadı, kremanın hafifliği ve çikolatanın dayanılmaz lezzeti tek bir kalpte buluştu. Üzeri en sevilen çikolatalarla donatılmış bu kalp pasta, lezzetten ödün veremeyenler ideal bir seçenek."
    },
    "tart-kalp-cicekli": {
        name: "Çiçekli Bahçesi Kalp Creme Tart",
        image: "tatlıfoto/kalpçiçeklicremetart.png",
        description: "Ballı bisküvi ve ipeksi krema katmanlarını, canlı çiçeklerin doğal güzelliği ve çikolatalarımızla süsledik. Görüntüsüyle büyüleyen, tadıyla hafifleten bir lezzet."
    },
    "tart-kremali": {
        name: "Kremalı Tart",
        image: "tatlıfoto/kremalıtart.png",
        description: "Tereyağlı kıtır tart hamuru kaseleri içinde, bulut gibi hafif özel pastacı kreması. Zirvesindeki taze ahududunun (frambuaz) mayhoşluğu, kremanın tatlılığıyla mükemmel bir denge kuruyor. Tek lokmada mutluluk arayanlar için."
    },
    "tart-fistikli": {
        name: "Fıstıklı Tart",
        image: "tatlıfoto/fıstıklıtart.png",
        description: "Antep fıstığının en yoğun ve en asil hali. Tereyağlı kıtır tart hamurunun içini, gerçek Antep fıstığıyla hazırladığımız özel dolguyla taçlandırdık. Her lokmada damağınıza yayılan o zengin fıstık aroması ve üzerindeki taze fıstık parçalarıyla, tatlıda kalite arayanlar için eşsiz bir tercih."
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
        name: "Karışık Dolgulu Çikolata",
        image: "tatlıfoto/butikçikolata.png",
        description: "Çikolatayı bir sanat eserine dönüştürdük. En kaliteli kakao çekirdeklerinden üretilen incecik, çıtır bir dış kabuk ve içerisinde damağınızı şaşırtacak akışkan dolgular... Koruyucu ve yapay aroma içermeyen, tamamen el işçiliğiyle hazırlanan bu koleksiyon; limonun ferahlığından Lotus'un karamelize tadına, fıstığın asaletinden orman meyvelerinin canlılığına kadar uzanan bir lezzet yolculuğu sunuyor. Kendini şımartmak veya sevdiklerine unutulmaz bir hediye vermek isteyenler için."
    },
    "butik-cikolata-lotuslu": {
        name: "Lotus Biscoff Dolgulu Çikolata",
        image: "tatlıfoto/butikçikolata2.png",
        description: "Lotus bisküvisinin o kendine has karamelize ve baharatlı tadını, lezziz bir dolgu haline getirdik. Çıtır çikolata kabuğuyla birleşen bu yoğun lezzet, kahve keyfinizin en iyi eşlikçisi."
    },
    "butik-cikolata-limonlu": {
        name: "Limon Dolgulu Çikolata",
        image: "tatlıfoto/dolgulubutikçikolata.png",
        description: "Çikolatanın tatlılığını, taze limonların doğal asiditesiyle dengeledik. Isırdığınız anda damağınıza yayılan o ferah, narenciye aromalı dolgu, size bir yaz esintisi yaşatacak."
    },
    "butik-cikolata-frambuazli": {
        name: "Frambuaz Dolgulu Çikolata",
        image: "tatlıfoto/dolguluçikolata2.png",
        description: "Gerçek frambuaz püresiyle hazırlanan, rengini ve tadını tamamen meyveden alan asil bir lezzet. Frambuazın doğal mayhoşluğu ile çikolatanın yoğunluğu arasında kurulan kusursuz denge."
    },
    "butik-cikolata-karamelli": {
        name: "Karamel Dolgulu Çikolata",
        image: "tatlıfoto/karamelliçikolata.png",
        description: "Klasiklerden vazgeçmeyenler için. İncecik çikolata kabuğu kırıldığında dışarı süzülen, ev yapımı, yoğun kıvamlı ve tereyağlı karamel dolgusu. Tatlı krizlerinin kesin çözümü."
    },

    // PASTALAR
    "pasta-elmali": {
        name: "File Bademli Elmalı Pasta",
        image: "tatlıfoto/elmalıpasta.png",
        description: "Altın sarısı rengi ve üzerindeki cömert badem kaplamasıyla iştah kabartan bir klasik. Elmanın mayhoşluğu ile bademin zengin aromasının birleştiği bu pasta, hafifliğiyle baymıyor, lezzetiyle iz bırakıyor. Misafir ikramlarının vazgeçilmezi."
    },
    "pasta-cilekli": {
        name: "Çilekli Fraiser Pasta",
        image: "tatlıfoto/çileklipasta.png",
        description: "Fransız pastacılığının en şık imzası. İki kat yumuşacık pandispanya arasında, kenarlara özenle dizilmiş taze çilekler ve ipeksi dokusuyla damakta eriyen özel kreması. Hem görüntüsüyle büyüleyen hem de lezzetiyle hafif ve ferah bir bahar rüyası."
    },
    "pasta-fistikli-fraizer": {
        name: "Fıstıklı Fraiser Pasta",
        image: "tatlıfoto/fıstıklıfraizerpasta.png",
        description: "Fransız klasiğine \"Yeşil Altın\" dokunuşu. Klasik vanilyalı krema yerine, bol Antep fıstığı ezmesiyle zenginleştirilmiş gurme bir krema kullandık. Taze çileklerin asiditesi, fıstıklı kremanın yoğunluğunu hafifleterek ortaya sofistike bir tat çıkarıyor. Sıradan tatlardan sıkılanlar ve kalite arayanlar için kusursuz bir seçim."
    },
    "pasta-fistikli-royal": {
        name: "Fıstıklı Roral Kremalı Pasta",
        image: "tatlıfoto/fıstıklıroyalkremalıpasta.png",
        description: "Bazen en güzeli, en sade ve en yumuşak olanıdır. İçinde dikkatinizi dağıtacak hiçbir sertlik yok. Sadece özel Royal kremasının verdiği o yoğun haz ve ağızda dağılan kekin uyumu var. Kendinizi şımartmak istediğiniz o anlar için pürüzsüz bir kaçamak."
    },
    "pasta-rulo": {
        name: "Rulo Pasta",
        image: "tatlıfoto/rulopasta.png",
        description: "Çatalla dokunduğunuz an hissedeceğiniz o puf puf doku... Kırılmadan, nazikçe sarılmış sünger kekin (pandispanya) içinde saklı, ipeksi bir krema dolgusu. Ağır olmayan, baymayan ve yedikçe yediren hafif bir lezzet arayanlar için kusursuz bir seçim."
    },
    "pasta-porsiyon-1": {
        name: "Porsiyon Pasta",
        image: "tatlıfoto/porsiyonpasta1.png",
        description: "Büyük kutlamaların lezzetini tek porsiyona sığdırdık. Şık silindir formu, katman katman lezzeti ve üzerindeki zarif çiçek dokunuşlarıyla; söz, nişan veya doğum günü gibi özel günlerinizde misafirlerinize sunabileceğiniz en prestijli ikram."
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
    { key: "cheesecake-baklavali", name: "Baklavalı Porsiyon Cheesecake", image: "tatlıfoto/baklacalıcheesecake.png" },
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
    { key: "ekler-fistikli", name: "Antep Fıstıklı Ekler", image: "tatlıfoto/fıstıklıekler.png" },
    { key: "ekler-lavantali", name: "Lavantalı Ekler", image: "tatlıfoto/lavantalıekler.png" },
    { key: "ekler-cikolatali", name: "Çikolatalı Ekler", image: "tatlıfoto/çikolatalıekler.png" }
];

// Tart çeşitleri
const tartCesitleri = [
    { key: "tart-kalpli", name: "Kalpli Creme Tart", image: "tatlıfoto/kalplicremetart.png" },
    { key: "tart-kalp-cicekli", name: "Çiçekli Bahçesi Kalp Creme Tart", image: "tatlıfoto/kalpçiçeklicremetart.png" },
    { key: "tart-kremali", name: "Kremalı Tart", image: "tatlıfoto/kremalıtart.png" },
    { key: "tart-fistikli", name: "Fıstıklı Tart", image: "tatlıfoto/fıstıklıtart.png" }
];

// Butik Çikolata çeşitleri
const cikolataCesitleri = [
    { key: "butik-cikolata-cilekli", name: "Karışık Dolgulu Çikolata", image: "tatlıfoto/butikçikolata.png" },
    { key: "butik-cikolata-lotuslu", name: "Lotus Biscoff Dolgulu Çikolata", image: "tatlıfoto/butikçikolata2.png" },
    { key: "butik-cikolata-limonlu", name: "Limon Dolgulu Çikolata", image: "tatlıfoto/dolgulubutikçikolata.png" },
    { key: "butik-cikolata-frambuazli", name: "Frambuaz Dolgulu Çikolata", image: "tatlıfoto/dolguluçikolata2.png" },
    { key: "butik-cikolata-karamelli", name: "Karamel Dolgulu Çikolata", image: "tatlıfoto/karamelliçikolata.png" }
];

// Pasta çeşitleri
const pastaCesitleri = [
    { key: "pasta-elmali", name: "File Bademli Elmalı Pasta", image: "tatlıfoto/elmalıpasta.png" },
    { key: "pasta-cilekli", name: "Çilekli Fraiser Pasta", image: "tatlıfoto/çileklipasta.png" },
    { key: "pasta-fistikli-fraizer", name: "Fıstıklı Fraiser Pasta", image: "tatlıfoto/fıstıklıfraizerpasta.png" },
    { key: "pasta-fistikli-royal", name: "Fıstıklı Roral Kremalı Pasta", image: "tatlıfoto/fıstıklıroyalkremalıpasta.png" },
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

// Aktif kategori takibi (geri butonu için)
let activeKategori = null;

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

    // Aktif kategoriyi kaydet (geri butonu için)
    activeKategori = kategoriKey;

    cesitlerTitle.textContent = kategori.baslik;
    cesitlerGrid.innerHTML = kategori.cesitler.map(cesit => {
        const webpImage = cesit.image.replace('tatlıfoto/', 'tatlıfoto/webp/').replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const infoHtml = kategoriKey === 'butik-pasta' ? '' : `
            <div class="cesit-info">
                <h4>${cesit.name}</h4>
            </div>`;

        return `
        <div class="cesit-card" data-cesit="${cesit.key}">
            <div class="cesit-image">
                <picture>
                    <source srcset="${webpImage}" type="image/webp">
                    <img src="${cesit.image}" alt="${cesit.name}" loading="lazy">
                </picture>
            </div>
            ${infoHtml}
        </div>
    `}).join('');

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

    const webpImage = tatli.image.replace('tatlıfoto/', 'tatlıfoto/webp/').replace(/\.(png|jpg|jpeg)$/i, '.webp');

    // Geri butonu HTML (sadece bir kategoriden geldiyse göster)
    const backButtonHtml = activeKategori ? `
        <button class="btn-back" onclick="goBackToCategory()" title="${kategoriler[activeKategori].baslik}'e Dön">
            ←
        </button>
    ` : '';

    modalBody.innerHTML = `
        ${backButtonHtml}
        <picture>
            <source srcset="${webpImage}" type="image/webp">
            <img src="${tatli.image}" alt="${tatli.name}" class="modal-image" loading="lazy">
        </picture>
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
    // Geri butonu HTML (butik pastalar kategorisinden geldiyse)
    const backButtonHtml = activeKategori === 'butik-pasta' ? `
        <button class="btn-back" onclick="goBackToCategory()" title="Butik Pasta Koleksiyonu'na Dön">
            ←
        </button>
    ` : '';

    modalBody.innerHTML = `
        ${backButtonHtml}
        <picture>
            <source srcset="tatlıfoto/webp/butikpasta${pastaNum}.webp" type="image/webp">
            <img src="tatlıfoto/butikpasta${pastaNum}.png" alt="Butik Pasta ${pastaNum}" class="modal-image" loading="lazy">
        </picture>

        
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
    // Aktif kategoriyi temizle (X ile kapatıldığında)
    activeKategori = null;
}

// Kategoriye geri dönme fonksiyonu
function goBackToCategory() {
    if (activeKategori) {
        const kategoriKey = activeKategori;
        closeModal();
        // Kategori sıfırlanmasını önle (geri dönüyoruz)
        setTimeout(() => {
            showCesitlerModal(kategoriKey);
        }, 300);
    }
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
