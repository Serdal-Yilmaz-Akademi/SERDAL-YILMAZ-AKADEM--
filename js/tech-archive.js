/**
 * tech-archive.js
 * CNC Teknik Kütüphane Listesi ve Gelişmiş Interaktif Hesaplayıcı
 * Dosyalar Google Drive üzerinden servis edilmektedir.
 */

// Google Drive doğrudan indirme linki oluşturucu
function driveDownload(id) {
    return `https://drive.google.com/uc?export=download&id=${id}`;
}
// Google Drive klasör linki
function driveFolder(id) {
    return `https://drive.google.com/drive/folders/${id}`;
}

const techData = {
    catalogs: [
        { name: "Akko Ürün Kataloğu",        url: driveDownload("1PbI8lLh2Kt-3SlnBspMsfNZgNIbSSR86") },
        { name: "Korloy Kesici Takım",         url: driveDownload("1D4dcEMGypxFQq38YSymHirGeVwWsXXFP") },
        { name: "Kesici Uç Kataloğu",          url: driveDownload("1pUzZFx23MvZwHgSC00isyDjldFiKpYMH") },
        { name: "Sandvik CoroKey 2010",        url: driveDownload("12J-BDc0c2YfgrOjU6F8BySfimd75jpCN") },
        { name: "BT Tutucular (Holders)",      url: driveDownload("18_FEX14MdFvNsL6nNDwclrGGALJExcYK") },
        { name: "Saplı Tarama Freze (XNKT)",   url: driveDownload("1Ecur8bL38W6iw-WuEphda51dgPyPPCrp") },
        { name: "Genel Takımlar Kataloğu",     url: driveDownload("1BtIJyP-85GIZu31SxAGo_evPAhJ7FhbV") }
    ],
    education: [
        { name: "CNC Torna Eğitimi Notları",        url: driveDownload("1qpciBgrp7E8wMAoQl6rPGmoEm55Jb3KK") },
        { name: "CNC Freze Programlama Rehberi",     url: driveDownload("1vQXpjKaF1c8G4lSv8M7AnDvzzZ0Fsc4C") },
        { name: "CNC Bilgi Formu & Teknik Terimler", url: driveDownload("18ldIeMGsbi4KH2IGRmNwRtKsbKkztnao") },
        { name: "HSR-HSM İşleme Stratejileri",       url: driveDownload("1Fb2ejB6sb7jmcx0wX5fJdXBjNNhfJBt5") }
    ],
    tables: [
        { name: "Matkap Uçları Teknik Tablo",        url: driveDownload("153uLmGGlaLFXXsQ2wCLgiDsSbGIG7sZf") },
        { name: "Karbür Matkap Devir/İlerleme",      url: driveDownload("1K46THkM6-VzcYSCNC6T18slUgHp-ov-e") },
        { name: "Sertmetal Kullanım Rehberi",         url: driveDownload("1fV2PoSlxGeQA8hVD57hTeOF3x_Q3xWim") }
    ],
    catia: [
        { category: "Analiz Eğitim Dosyaları",    folderUrl: driveFolder("1INg5bxfTk_T0kpAqtC04Vd-vXXB9smkT") },
        { category: "Açılış Ayarları",            folderUrl: driveFolder("1_fGWsrXoVRASsdV0asifiQNsDU0oscR1") },
        { category: "Freestyle Modelleme",        folderUrl: driveFolder("11xdj26_AlePJFe1KO-WppLWtUZHYxEs9") },
        { category: "Montaj Tasarımı (Assembly)", folderUrl: driveFolder("17MKA8I2dsyz1Sxc4Nalj8rbrZv7n_3Xs") },
        { category: "Teknik Resim (Drafting)",    folderUrl: driveFolder("1BLthF-k9RkqRqhOCdGRX0s14-1d3sGoj") },
        { category: "CATIA CAM Uygulamaları",     folderUrl: driveFolder("1SF8OhkwzCrBBXYWfb2xO9R5vqpkq3ba1") },
        { category: "Katı Model (Part Design)",   folderUrl: driveFolder("17P5e8ldHczGCfieigdDLKd5sJH2SGjDF") },
        { category: "Yüzey Modelleme (GSD)",      folderUrl: driveFolder("18m4rvRVk_Dn0dHR974gg5Le0-FlFTLrg") },
        { category: "Infrastructure & Ayarlar",   folderUrl: driveFolder("13tPqzF5G8bOp0J26JsxEfrQOznjERbkx") }
    ],
    nx: [
        { name: "05 Korozyon",                       url: driveDownload("1gD3h6HCpekvLOKzwLTIqaDueyXKL9q6V") },
        { name: "11 Sac Parça Tasarımı",              url: driveDownload("1yzraYFN7Dwt8L5YhaZP6VLEfwlmP7CzX") },
        { name: "NX 10 Yenilikler CAD",               url: driveDownload("1BXSFDhLndEZIP_GUitgntZWPkpmfhJwr") },
        { name: "Siemens NX Klavye Kısayolları",      url: driveDownload("1ROQDAWbBfWvtqHrMBYkirt2UbRZy1Nat") },
        { name: "Sketch Relations",                   url: driveDownload("1TMQG5WXhiTKHfnSMo04TUHyfTWWOJnZB") },
        { name: "Realize Shape Webinar Sunumu",       url: driveDownload("179BpdGfVm2QaTDgCqfMX_4EtBX0FE7ci") },
        { name: "CATIA ve NX Kullanan Firmalar",      url: driveDownload("1b7gtefyGqJjcEHkLJGEvKovhOBhQgm7V") }
    ],
    nxPrt: {
        folderUrl: driveFolder("1GMzVSr9j5yVDoEnZ8bEsCu-zxVsqmCkV")
    },
    solidcam: [
        { name: "Program Kodları",                        url: driveDownload("1NXkZqoY8-6eJ_njndxhLlV7oFTF8CTW0") },
        { name: "CNC Freze Tezgahları",                   url: driveDownload("1GkJc8McRovAJMEkFNagLdJyNgtN4FOew") },
        { name: "CNC Freze Programlama Örnekleri",        url: driveDownload("15Ju4LENEWvBguMcTdquzWQAp2G32DNe0") },
        { name: "Devir ve İlerleme Hesabı",               url: driveDownload("18MJhRUVocRaccFw-kwT1TXx9KRju7mRD") },
        { name: "CNC Freze Örnek 01",                     url: driveDownload("1A9gPqf8Q-Vzy11Fzx29Tq5Yzzv_DfuCR") },
        { name: "CNC Frezede Programlama",                url: driveDownload("18wg_p2p0lL95Zs0f3p6E845KIKKU0FGj") },
        { name: "CNC Tornalama Çevrimleri",               url: driveDownload("1c3FxFM4rDrtYtKFjiOwoED5b8wdw-8uf") },
        { name: "CNC İşleme Merkezi",                     url: driveDownload("1rhVl8L7WIed9eZ0kdymdXb53ylAkwIcy") },
        { name: "CNC Torna/Freze G-M Kodları",            url: driveDownload("1IUvb-NE7xCbowjYFTtm9g60GVLlYDqGU") },
        { name: "SolidCAM 2020 Yenilikleri (TR)",         url: driveDownload("1hwzYXNzO1eBbAAuIu_c5Y2JwKezMdsaC") },
        { name: "SolidCAM 2020 Modules Overview",         url: driveDownload("1aBR2Z_2uXcFPCCSYh0VuNCSzPVaEtssb") },
        { name: "SolidCAM 2020 What's New",               url: driveDownload("1jZbVW6lt9vzEZCHhah7WZOZkDrIt07rB") },
        { name: "SolidCAM Ürün Broşürü",                  url: driveDownload("1gLVPzZhZtFFJopgj-jnr2JODYUQnQJGk") }
    ]
};

// Matkap Verileri
const drillData = {
    "otomatis-celigi": { vc: 40, feeds: { 2: 0.05, 5: 0.12, 8: 0.17, 12: 0.24, 16: 0.30, 25: 0.40, 40: 0.40 } },
    "alasimsiz-celik": { vc: 35, feeds: { 2: 0.04, 5: 0.12, 8: 0.19, 12: 0.25, 16: 0.30, 25: 0.35, 40: 0.40 } },
    "paslanmaz":       { vc: 12, feeds: { 2: 0.02, 5: 0.05, 8: 0.08, 12: 0.12, 16: 0.15, 25: 0.20, 40: 0.23 } },
    "aluminyum":       { vc: 80, feeds: { 2: 0.12, 5: 0.12, 8: 0.13, 12: 0.20, 16: 0.25, 25: 0.30, 40: 0.43 } },
    "dokme-demir":     { vc: 20, feeds: { 2: 0.03, 5: 0.07, 8: 0.10, 12: 0.15, 16: 0.20, 25: 0.25, 40: 0.30 } },
    "plastik":         { vc: 30, feeds: { 2: 0.07, 5: 0.13, 8: 0.15, 12: 0.20, 16: 0.25, 25: 0.30, 40: 0.35 } }
};

let currentCalcType = 'drill';

document.addEventListener('DOMContentLoaded', () => {
    renderLibrary();
    initCalculatorControls();
    updateResults();
});

function renderLibrary() {
    const catalogContainer = document.getElementById('catalogFiles');
    const eduContainer = document.getElementById('eduFiles');
    const catiaContainer = document.getElementById('catiaFiles');

    if (catalogContainer) {
        catalogContainer.innerHTML = techData.catalogs.map(item => createFileItem(item)).join('');
    }
    if (eduContainer) {
        eduContainer.innerHTML = techData.education.concat(techData.tables).map(item => createFileItem(item)).join('');
    }
    if (catiaContainer) {
        catiaContainer.innerHTML = techData.catia.map(cat => `
            <div class="lib-subcategory">
                <h5 class="subcategory-title">${cat.category}</h5>
                <div class="lib-files">
                    <div class="lib-file-item">
                        <div class="file-info">
                            <i class="ph-duotone ph-folder-open"></i>
                            <span class="file-name">${cat.category} — Tüm Dosyalar</span>
                        </div>
                        <a href="${cat.folderUrl}" target="_blank" class="dl-btn" title="Drive'da Aç">
                            <i class="ph-bold ph-arrow-square-out"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    const nxContainer = document.getElementById('nxFiles');
    if (nxContainer) {
        nxContainer.innerHTML = techData.nx.map(item => createFileItem(item)).join('') + `
            <div class="lib-subcategory" style="margin-top:1rem;">
                <h5 class="subcategory-title">Komut Uygulamaları (.prt Dosyaları)</h5>
                <div class="lib-files">
                    <div class="lib-file-item">
                        <div class="file-info">
                            <i class="ph-duotone ph-folder-open"></i>
                            <span class="file-name">Tüm NX Komut Uygulama Dosyaları</span>
                        </div>
                        <a href="${techData.nxPrt.folderUrl}" target="_blank" class="dl-btn" title="Drive'da Aç">
                            <i class="ph-bold ph-arrow-square-out"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    const solidcamContainer = document.getElementById('solidcamFiles');
    if (solidcamContainer) {
        solidcamContainer.innerHTML = techData.solidcam.map(item => createFileItem(item)).join('');
    }
}

function createFileItem(item) {
    return `
        <div class="lib-file-item">
            <div class="file-info">
                <i class="ph-duotone ph-file-pdf"></i>
                <span class="file-name">${item.name}</span>
            </div>
            <a href="${item.url}" target="_blank" class="dl-btn" title="İndir" download>
                <i class="ph-bold ph-download-simple"></i>
            </a>
        </div>
    `;
}

function initCalculatorControls() {
    const tabs = document.querySelectorAll('.calc-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            currentCalcType = tab.dataset.type;
            document.getElementById('drillInputs').style.display = currentCalcType === 'drill' ? 'block' : 'none';
            document.getElementById('millInputs').style.display = currentCalcType === 'mill' ? 'block' : 'none';

            updateResults();
        });
    });

    const inputs = ['materialSelect', 'diameterSelect', 'millDiameter', 'millZ', 'millFz', 'millVc'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', updateResults);
    });
}

function updateResults() {
    let vc, n, vf;

    if (currentCalcType === 'drill') {
        const material = document.getElementById('materialSelect').value;
        const diameter = parseInt(document.getElementById('diameterSelect').value);
        const data = drillData[material];

        vc = data.vc;
        const f_rev = data.feeds[diameter] || 0.1;
        n = Math.round((vc * 1000) / (Math.PI * diameter));
        vf = Math.round(n * f_rev);
    } else {
        const diameter = parseFloat(document.getElementById('millDiameter').value) || 1;
        const z = parseInt(document.getElementById('millZ').value) || 1;
        const fz = parseFloat(document.getElementById('millFz').value) || 0.01;
        vc = parseFloat(document.getElementById('millVc').value) || 0;

        n = Math.round((vc * 1000) / (Math.PI * diameter));
        vf = Math.round(n * fz * z);
    }

    const vcEl = document.getElementById('vcResult');
    const nEl = document.getElementById('nResult');
    const vfEl = document.getElementById('vfResult');

    vcEl.textContent = vc;
    nEl.textContent = n;
    vfEl.textContent = vf;

    [vcEl, nEl, vfEl].forEach(el => {
        el.classList.remove('result-glow');
        void el.offsetWidth;
        el.classList.add('result-glow');
    });
}
