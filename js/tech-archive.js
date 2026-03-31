/**
 * tech-archive.js
 * CNC Teknik Kütüphane Listesi ve Gelişmiş Interaktif Hesaplayıcı
 */

const techData = {
    catalogs: [
        { name: "Akko Ürün Kataloğu", file: "Akko ürün katalog.pdf" },
        { name: "Korloy Kesici Takım", file: "korloy kesici takım.pdf" },
        { name: "Kesici Uç Kataloğu", file: "Kesici uç katalog.pdf" },
        { name: "Sandvik CoroKey 2010", file: "CoroKey_2010 katalog.pdf" },
        { name: "BT Tutucular (Holders)", file: "BT-holders.pdf" },
        { name: "Saplı Tarama Freze (XNKT)", file: "Saplı Tarama Freze-XNKT.pdf" },
        { name: "Genel Takımlar Kataloğu", file: "Takımlar Katalog.pdf" }
    ],
    education: [
        { name: "CNC Torna Eğitimi Notları", file: "CNC_TORNA_Egitimi.pdf" },
        { name: "CNC Freze Programlama Rehberi", file: "Cnc Frezede Programlama.pdf" },
        { name: "CNC Bilgi Formu & Teknik Terimler", file: "cnc bilgi formu.pdf" },
        { name: "HSR-HSM İşleme Stratejileri", file: "HSR-HSM.pdf" }
    ],
    tables: [
        { name: "Matkap Uçları Teknik Tablo", file: "MATKAP-UCLARI.pdf" },
        { name: "Karbür Matkap Devir/İlerleme", file: "genel karbür matkap için devir ilerleme hesapları.pdf" },
        { name: "Sertmetal Kullanım Rehberi", file: "sertmetal.pdf" }
    ],
    catia: [
        { category: "Analiz Eğitim Dosyaları", files: ["Bisiklet Analysis.pdf", "CATİA DS - Generative Assembly Structural Analysis.pdf", "Catia_-_Generative_Part_Stress_Analysis.pdf"], path: "catia eğitim dökümanları/Analiz eğitim dökümanları/" },
        { category: "Açılış Ayarları", files: ["Açılış ayarları 1.pdf", "Açılış ayarları 2 (CATIA V5R21).pdf"], path: "catia eğitim dökümanları/Açılış ayarları/" },
        { category: "Freestyle Modelleme", files: ["FreeStyle 1.pdf", "FreeStyle 2.pdf"], path: "catia eğitim dökümanları/Freestyle eğitim dökümanları/" },
        { category: "Montaj Tasarımı (Assembly)", files: ["Assembly Design 1.pdf", "Assembly Design 2.pdf"], path: "catia eğitim dökümanları/Montaj eğitim dökümanları/" },
        { category: "Teknik Resim (Drafting)", files: ["Drafting 1.pdf", "Drafting 2.pdf"], path: "catia eğitim dökümanları/Teknik resim eğitim dökümanları/" },
        { category: "CATIA CAM Uygulamaları", files: ["Prismatic Machining 1.pdf", "Surface Machining 1.pdf"], path: "catia eğitim dökümanları/cam eğitim dökümanları/" },
        { category: "Katı Model (Part Design)", files: ["Part Design 1.pdf", "Part Design 2.pdf"], path: "catia eğitim dökümanları/katı model eğitim dökümanları/" },
        { category: "Yüzey Modelleme (GSD)", files: ["Generatif Shape Design 1.pdf", "Generatif Shape Design 2.pdf"], path: "catia eğitim dökümanları/yüzey modelleme eğitim dökümanları/" },
        { category: "Infrastructure & Ayarlar", files: ["Infrastruce.PDF", "CATİA SOLUTIONS - Infrastructure.pdf"], path: "catia eğitim dökümanları/ınfrastruce eğitim dökümanları/" }
    ],
    nx: [
        { 
            category: "Eğitim Dökümanları", 
            files: ["05 Korozyon.pptx", "11 Sac ParçaTasarımımı.pptx", "CATİA ve NX KULLANAN FİRMALAR.jpg", "NX 10 Yenilikler CAD.pdf", "siemens-nx-klavye-kisayollari.pdf", "Sketch Relations.pdf", "WEBINAR_SUNUM_1926_realize_shape.pdf"], 
            path: "SİEMENS NX EĞİTİM DÖKÜMANLARI/" 
        },
        { 
            category: "Komut Uygulamaları (.prt)", 
            files: ["501_drf_drawing_4.prt", "502_drf_drawing_3.prt", "503_drf_drawing_6.prt", "504_drf_section_1.prt", "505_drf_section_2.prt", "506_drf_section_4.prt", "507_drf_section_5.prt", "508_drf_section_6.prt", "509_drf_broken_2.prt", "Direct1.prt", "Direct2.prt", "Direct3.prt", "Direct_Modeling.prt", "Global_Shaping_1.prt", "Global_Shaping_2.prt", "Global_Shaping_3.prt", "Global_Shaping_4.prt", "global_shaping_5.prt", "global_shaping_6.prt", "global_shaping_7.prt", "head_11-3.prt", "model1.prt", "N_Sided_1.prt", "Parameter-Arclength_Ornek.prt", "patch_openings_1.prt", "Spline1.prt", "Spline_2.prt", "Spline_Kanca_.prt", "Spline_Planes.prt", "swept_4.prt", "synchronous_modeling_1.prt", "synchronous_modeling_2.prt", "synchronous_modeling_2_hg.prt", "synchronous_modeling_3.prt", "synchronous_modeling_4.prt", "synchronous_modeling_5.prt", "synchronous_modeling_6.prt", "synchronous_modeling_7.prt", "synchronous_modeling_8.prt", "synchronous_modeling_9.prt", "Transition.prt", "Trim_Extend_1.prt", "Trim_Extend_2.prt", "Trim_Extend_3.prt", "true_shading.prt", "Yuzey_Modelleme(Araba).prt"], 
            path: "SİEMENS NX KOMUTLAR İÇİN UYGULAMALAR/" 
        }
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
    updateResults(); // İlk hesaplama
});

function renderLibrary() {
    const catalogContainer = document.getElementById('catalogFiles');
    const eduContainer = document.getElementById('eduFiles');
    const catiaContainer = document.getElementById('catiaFiles');

    if (catalogContainer) {
        catalogContainer.innerHTML = techData.catalogs.map(item => createFileItem(item, 'cnc takım verileri/')).join('');
    }
    if (eduContainer) {
        eduContainer.innerHTML = techData.education.concat(techData.tables).map(item => createFileItem(item, 'cnc takım verileri/')).join('');
    }
    if (catiaContainer) {
        catiaContainer.innerHTML = techData.catia.map(cat => `
            <div class="lib-subcategory">
                <h5 class="subcategory-title">${cat.category}</h5>
                <div class="lib-files">
                    ${cat.files.map(file => createFileItem({ name: file, file: file }, cat.path)).join('')}
                </div>
            </div>
        `).join('');
    }
    const nxContainer = document.getElementById('nxFiles');
    if (nxContainer) {
        nxContainer.innerHTML = techData.nx.map(cat => `
            <div class="lib-subcategory">
                <h5 class="subcategory-title">${cat.category}</h5>
                <div class="lib-files">
                    ${cat.files.map(file => {
                        const iconClass = file.endsWith('.prt') ? 'ph-duotone ph-cube' : 'ph-duotone ph-file-pdf';
                        return `
                            <div class="lib-file-item">
                                <div class="file-info">
                                    <i class="${iconClass}"></i>
                                    <span class="file-name">${file}</span>
                                </div>
                                <a href="${cat.path}${file}" target="_blank" class="dl-btn" title="Görüntüle/İndir">
                                    <i class="ph-bold ph-arrow-square-out"></i>
                                </a>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `).join('');
    }
}

function createFileItem(item, basePath) {
    const path = `${basePath}${item.file}`;
    return `
        <div class="lib-file-item">
            <div class="file-info">
                <i class="ph-duotone ph-file-pdf"></i>
                <span class="file-name">${item.name}</span>
            </div>
            <a href="${path}" target="_blank" class="dl-btn" title="Görüntüle/İndir">
                <i class="ph-bold ph-arrow-square-out"></i>
            </a>
        </div>
    `;
}

function initCalculatorControls() {
    // Sekme Değiştirme
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

    // İnput Değişimlerini İzle
    const inputs = [
        'materialSelect', 'diameterSelect', 
        'millDiameter', 'millZ', 'millFz', 'millVc'
    ];

    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', updateResults);
        }
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

    // Arayüzü Güncelle
    const vcEl = document.getElementById('vcResult');
    const nEl = document.getElementById('nResult');
    const vfEl = document.getElementById('vfResult');

    vcEl.textContent = vc;
    nEl.textContent = n;
    vfEl.textContent = vf;

    // Animasyon Ekle
    [vcEl, nEl, vfEl].forEach(el => {
        el.classList.remove('result-glow');
        void el.offsetWidth; // Reflow trigger
        el.classList.add('result-glow');
    });
}
