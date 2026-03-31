/**
 * SY CAM Akademi - Video Arşivi
 * Kaynak: Google Drive (herkese açık embed linkleri)
 * Format: { title, id, desc } — id = Drive dosya ID'si
 */

const videoData = {
    "1- EKSEN TANITIM": [
        { title: "Giriş & Hazırlık (PRE-01)",         id: "16RxYfO7jcABWqJ08n3l3CwL9Ql6Bv46W", desc: "SolidCAM'e giriş ve eksen tanıtımı" },
        { title: "Sıfırlama İşlemi",                  id: "1-_5QwZsnC60Gay_9TrujgxQc2INNlRPJ",  desc: "İş parçası koordinat sıfırlama" },
        { title: "Araçlar 01 (Tools)",                id: "1kmdosdR1Zdbo4OlYK9krF4TvFElP6ykr",  desc: "Kesici takım tanımlama" },
        { title: "Örnek Takım Yolu",                  id: "1OT5NcUwlMSgiYuztMHktncFGVG62HAOe",  desc: "İlk toolpath oluşturma" },
        { title: "3 Eksen Örnek 01",                  id: "1nvrMzvhqs3u2D_UrIOg3oukf9SX8RzZP",  desc: "3 eksen frezeleme örneği" },
        { title: "3 Eksen Örnek 03",                  id: "1MouC7EGKLMK9kxQDUu_bmqSq0zSkt3lm",  desc: "3 eksen frezeleme örneği" },
        { title: "3 Eksen Örnek 04",                  id: "1JfQTonS59idJQdaN6FgMF_PgFLf88PsT",  desc: "3 eksen frezeleme örneği" },
        { title: "Climb vs Konvansiyonel Frezeleme",  id: "1djW6uwlJ80LFjfAdGGX4T3ajmRtVDl2T",  desc: "İki frezeleme yönteminin karşılaştırması" },
    ],
    "2- KABA İŞLEME": [
        { title: "Kaba İşleme Temelleri",             id: "1orynd60M9NHA8tli_72avW12CovToXpb",  desc: "Kaba talaş kaldırma stratejileri" },
        { title: "Z-Level Kaba",                      id: "17_gugGeW-j0usxF48ZoYhamML9x5zeRJ",  desc: "Z seviyeli kaba isleme" },
        { title: "Plunge Milling",                    id: "17cOLGiQTv2ZMDeRdBK2bRlmWPG7G8rrc",  desc: "Daldırmalı frezeleme" },
        { title: "Cavity Mill – Cep Boşaltma",        id: "1HUHBCRHYKERedZBMlMGwTgeBlE0c2H7i",  desc: "Kapalı cep boşaltma operasyonu" },
        { title: "Alüminyum Havuz Boşaltma",          id: "1VBqnp3TIiAHgABctDAay_QMDxUYSlsmG",  desc: "CNC freze alüminyum havuz boşaltma" },
        { title: "CNC Freze – İşleme Süreci",         id: "127SOevXrFQE-bXcCkw3UK1MT77SVsXTH",  desc: "Gerçek tezgâhta çalışma süreci" },
        { title: "Kaba Operasyon Karşılaştırma",      id: "1FXdCjCrt1kittAnmZUWMMb7kbTTeOPWf",  desc: "Farklı kaba stratejilerinin kıyası" },
        { title: "Freze T-Kanalı Açma",               id: "1AvyCRlVpMXOhzs5KpaCFrfTtSgBe55a7",  desc: "T-kanal frezeleme uygulaması" },
    ],
    "3- ARA KABA": [
        { title: "Ara Kaba İşleme",                   id: "12tO7RCMShdKhLOk4yErOYM7rZ34BrTJd",  desc: "Kaba ve finish arası temizleme operasyonu" },
    ],
    "4- FİNİSH": [
        { title: "Form İşleme",                       id: "1RjxktJkYs9hKkS0-WZQjB7o4tqBK5BY9",  desc: "3D form yüzey işleme" },
        { title: "Desen İşleme",                      id: "1bfcO0sPQMyjuqCgGEWq357CX_WafrtSG",  desc: "Yüzey desen aktarımı" },
        { title: "Manuel Face Mill",                  id: "1XdlGOrVi5fZKzDkbgMh1rGuy49hTMZg0",  desc: "Manuel yüzey frezeleme" },
        { title: "Parça Form İşleme",                 id: "1w1BusFEEZpS3kjl-2GuwJxfRcUEGlraT",  desc: "Karmaşık formlu parça işleme" },
        { title: "Sert Parça Finiş (60 HRC)",         id: "1g63OI0h-LZHAxGk27u7MEiAQI4DDOa4w",  desc: "Karbür küre freze ile sert malzeme finiş" },
        { title: "Eğimli Yüzey Finiş",                id: "1Y6Ww-7_z9oXKeh-5xNIlv3OWXLlVzn7M",  desc: "3D yüzey finiş tüyoları" },
        { title: "Yüzey Finiş",                       id: "1ZooZ0a4SbSZ3UC7FRvLqHAQI63k1fQwH",  desc: "Genel yüzey finiş operasyonu" },
    ],
    "5- 4 EKSEN": [
        { title: "4 Eksen Pozisyonlamalı",            id: "1VXGr0p9H3X39WGF1Lbj6R34oQ0FQYpkk",  desc: "4 eksen indeksli konumlandırma" },
        { title: "4 Eksen Parça Koparma",             id: "1YHWT5mkAdp_ebe38M8c_OxXy87XR_nwh",  desc: "Bar stoktan parça kesme" },
        { title: "4 Eksen Simultane",                 id: "1GI7jLyl5yQc926471N-utTqwFEPubBzq",  desc: "4 eksen eş zamanlı hareket" },
        { title: "Helis Açma",                        id: "1smjtGFxNyrQm5xkk-9gaoz4vIsBCyRpY",  desc: "Helisel kanal frezeleme" },
        { title: "Heliks Dişli Açma",                 id: "1vue7z353LhmKKR20d7gO9Cu2pJQBvJtM",  desc: "Helisel dişli imalatı" },
    ],
    "6- 5 EKSEN": [
        { title: "CNC 5 Eksen Titan Kartal",          id: "1pvL4L6LewcTb655G7q3OeiEMHz3VmnMS",  desc: "5 eksen karmaşık parça işleme demo" },
        { title: "HAAS UMC-750 5 Eksen Merkezi",      id: "1gC7HIYx7gNYTWCFvizYzqyFRJXgEDnHa",  desc: "HAAS UMC-750 5 eksen işleme merkezi" },
    ],
    "7- DELİK İŞLEMLERİ": [
        { title: "Kılavuzla Diş Açma",               id: "1n4bmVj_vcUHc5-yEXPvj1WtQOC2Z-Sz4",  desc: "Kılavuz çekme ve vida dişi açma" },
        { title: "Raybalama",                         id: "1FDuXj52C9H4zWL3dTg1IjdABuYOvX-qP",  desc: "Hassas delik raybalama" },
        { title: "Baralama",                          id: "1_OJcm3PPSDzof8zaJM_e87dpnSaczylp",  desc: "İnce talaş içi delik genişletme" },
        { title: "Gagalama (Pecking)",                id: "1uI7UQdkFlkRidowNWndaFJTZf6bACPXd",  desc: "Derin delik gagalama döngüsü" },
        { title: "Derin Delik İşleme",               id: "18kOEjoMHvsDKO3L6uLMzaQZaDzg7Rf1h",  desc: "Derin delik delme stratejileri" },
        { title: "Dış Operasyonları",                 id: "1PBqItIcKn-Ms1UP_hdA7rineqhHFkFV8",  desc: "Dış çap torna ve frezeleme" },
        { title: "Diş Tarakla Diş Açma",             id: "12CDYJrHnqR0N4EHiCIutr8tqscBfteMs",  desc: "Diş tarakla diş oluşturma" },
    ],
    "8- iMACHINING & ADAPTIVE": [
        { title: "Adaptive Milling Video 1",          id: "10FfMN5neWM5EPA6_299QyibIAsgmfsYo",  desc: "Yüksek verimli adaptive kaba işleme" },
        { title: "Adaptive Milling Video 2",          id: "19NXK4aB2ABjKkWENZxmnl_gHXOlv4eyI",  desc: "Vortex & adaptive strateji karşılaştırması" },
    ],
    "9- TORNA": [
        { title: "C Eksen 8 İnç CNC Torna",          id: "1QeT5Jnnsz548tzT5pcctGx4fkDtRAf-W",  desc: "C eksenli CNC torna operasyonu" },
        { title: "GOODWAY GLS-2000 LYS",             id: "11Q2o9CNMYDvV1YaufAseHk_r4y2BCZ8w",  desc: "GOODWAY CNC torna tezgahı tanıtımı" },
        { title: "CNC Torna Örnek Parça",             id: "1QUXfDUWk-yfTBtHEcGW4G-qc5kSYA-n6",  desc: "Torna ile örnek parça işleme" },
    ],
    "10- ÖRNEK ÇALIŞMALAR": [
        { title: "6 Eksen Örnek Parça 02",            id: "14Z11pUheT_V92vWZIhhFH_zwX_kCj4gW",  desc: "6 eksen simülasyonlu örnek parça" },
        { title: "4000 mm/dak İlerleme Testi",        id: "1gq42UdLIEhlCWIIB-a_EqYLZvyvr6Rh6",  desc: "Yüksek hızlı frezeleme testi" },
        { title: "Kalıp Şişe Mold İşleme (AXILE)",   id: "1wLCOPDXyRi5O6X4it9C7BMpFIYLBIcr8",  desc: "Şişe kalıbı tam işleme süreci" },
        { title: "AddDoFeed – Küçük Çap High Feed",   id: "1AY-toNtbeUFY3Q6YvF6zFGYRcgnTADWK",  desc: "Küçük çaplı takımla yüksek ilerleme frezesi" },
        { title: "2021 İşleme Süreci Kaydı",          id: "17LvSBR9N4cSX-1A3RKhR_wWuUMcj9Xjx",  desc: "Gerçek saha kayıt görüntüleri" },
    ],
};

/**
 * Google Drive embed URL'i üret
 * @param {string} fileId - Drive dosya ID'si
 * @returns {string} Embed iframe URL
 */
function getDriveEmbedUrl(fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
}

/**
 * Google Drive doğrudan link
 */
function getDriveLink(fileId) {
    return `https://drive.google.com/file/d/${fileId}/view`;
}
