document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // MODAL (Lead Magnet / İndirme)
    // ===================================================================
    const modalOverlay = document.getElementById('downloadModal');
    const closeBtn     = document.getElementById('closeModal');
    const downloadForm = document.getElementById('leadForm');
    const resourcePathInput  = document.getElementById('resourcePath');
    const resourceTitleElem  = document.getElementById('modalResourceTitle');

    const downloadBtns = document.querySelectorAll('.download-trigger');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            resourceTitleElem.textContent = btn.getAttribute('data-title');
            resourcePathInput.value       = btn.getAttribute('data-file');
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => downloadForm.reset(), 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal(); });

    downloadForm.addEventListener('submit', e => {
        e.preventDefault();
        const targetFile = resourcePathInput.value;
        const submitBtn  = downloadForm.querySelector('.btn-primary');
        const origText   = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="ph-bold ph-spinner"></i> İşleniyor...';
        submitBtn.disabled  = true;
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="ph-bold ph-check"></i> Gönderildi!';
            submitBtn.style.background = '#10B981';
            setTimeout(() => {
                window.open(targetFile, '_blank');
                closeModal();
                setTimeout(() => { submitBtn.innerHTML = origText; submitBtn.style.background = ''; submitBtn.disabled = false; }, 1000);
            }, 800);
        }, 1200);
    });

    // ===================================================================
    // VİDEO OYNATICI MODAL (Drive Embed)
    // ===================================================================
    const playerOverlay = document.getElementById('videoPlayerModal');
    const playerClose   = document.getElementById('closeVideoModal');
    const playerIframe  = document.getElementById('driveVideoIframe');
    const playerTitle   = document.getElementById('videoPlayerTitle');
    const playerDesc    = document.getElementById('videoPlayerDesc');
    const playerLink    = document.getElementById('videoPlayerLink');

    function openVideoPlayer(video) {
        playerIframe.src  = getDriveEmbedUrl(video.id);
        playerTitle.textContent = video.title;
        playerDesc.textContent  = video.desc  || '';
        playerLink.href = getDriveLink(video.id);
        playerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeVideoPlayer() {
        playerOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Durdurmak için src'yi temizle
        setTimeout(() => { playerIframe.src = ''; }, 300);
    }

    if (playerClose)   playerClose.addEventListener('click', closeVideoPlayer);
    if (playerOverlay) playerOverlay.addEventListener('click', e => { if (e.target === playerOverlay) closeVideoPlayer(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && playerOverlay && playerOverlay.classList.contains('active')) closeVideoPlayer(); });

    // ===================================================================
    // VİDEO ARŞİVİ – Kategori Sidebar + Grid
    // ===================================================================
    const categoryList        = document.getElementById('categoryList');
    const videoGrid           = document.getElementById('videoGrid');
    const currentCategoryTitle = document.getElementById('currentCategoryTitle');

    if (categoryList && videoGrid && typeof videoData !== 'undefined') {
        const categories = Object.keys(videoData);

        categories.forEach((category, index) => {
            const li  = document.createElement('li');
            const btn = document.createElement('button');
            
            // Emoji ikonu ekle kategoriye göre
            const icons = {
                '1- EKSEN TANITIM':     '🎯',
                '2- KABA İŞLEME':       '⚙️',
                '3- ARA KABA':          '🔩',
                '4- FİNİSH':            '✨',
                '5- 4 EKSEN':           '🔄',
                '6- 5 EKSEN':           '🚀',
                '7- DELİK İŞLEMLERİ':  '🕳️',
                '8- iMACHINING & ADAPTIVE': '🧠',
                '9- TORNA':             '🌀',
                '10- ÖRNEK ÇALIŞMALAR': '🏆',
            };
            const icon = icons[category] || '📹';
            const count = videoData[category].length;
            btn.innerHTML = `<span class="cat-icon">${icon}</span><span class="cat-name">${category}</span><span class="cat-count">${count}</span>`;
            
            if (index === 0) btn.classList.add('active');

            btn.addEventListener('click', () => {
                document.querySelectorAll('.category-list button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                loadVideos(category);
            });

            li.appendChild(btn);
            categoryList.appendChild(li);
        });

        if (categories.length > 0) loadVideos(categories[0]);

        // ---------------------------------------------------------------
        // loadVideos – Drive embed kartları
        // ---------------------------------------------------------------
        function loadVideos(category) {
            currentCategoryTitle.textContent = category;
            videoGrid.innerHTML = '';

            const videos = videoData[category];
            if (!videos || videos.length === 0) {
                videoGrid.innerHTML = '<p style="color:var(--text-muted)">Bu kategoride video bulunmamaktadır.</p>';
                return;
            }

            videos.forEach((video, idx) => {
                const card = document.createElement('div');
                card.classList.add('video-card');
                card.style.animationDelay = `${idx * 0.05}s`;

                card.innerHTML = `
                    <div class="video-thumb-wrapper">
                        <div class="drive-thumb">
                            <i class="ph-fill ph-play-circle"></i>
                        </div>
                        <div class="thumb-overlay">
                            <button class="play-btn" aria-label="Videoyu Oynat">
                                <i class="ph-fill ph-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="video-info">
                        <h5>${video.title}</h5>
                        <p class="video-desc">${video.desc || ''}</p>
                        <div class="video-actions">
                            <button class="btn-watch">
                                <i class="ph-bold ph-play"></i> İzle
                            </button>
                            <a href="${getDriveLink(video.id)}" target="_blank" class="btn-drive" title="Drive'da Aç">
                                <i class="ph ph-arrow-square-out"></i>
                            </a>
                        </div>
                    </div>
                `;

                // İzle butonu → modal oynatıcı
                card.querySelectorAll('.btn-watch, .play-btn').forEach(el => {
                    el.addEventListener('click', () => openVideoPlayer(video));
                });

                videoGrid.appendChild(card);
            });
        }
    }

    // ===================================================================
    // Smooth scroll navigasyon linkleri
    // ===================================================================
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===================================================================
    // Hesaplama aracı (Matkap / Freze)
    // ===================================================================
    const drillData = {
        'aluminyum':       { vc: 80,  fz: 0.12 },
        'otomatis-celigi': { vc: 30,  fz: 0.08 },
        'alasimsiz-celik': { vc: 20,  fz: 0.06 },
        'paslanmaz':       { vc: 12,  fz: 0.04 },
        'dokme-demir':     { vc: 25,  fz: 0.09 },
        'plastik':         { vc: 100, fz: 0.15 },
    };

    function calcDrill() {
        const mat = document.getElementById('materialSelect')?.value;
        const d   = parseFloat(document.getElementById('diameterSelect')?.value);
        if (!mat || !d) return;
        const { vc, fz } = drillData[mat] || { vc: 20, fz: 0.06 };
        const n  = Math.round((vc * 1000) / (Math.PI * d));
        const vf = Math.round(n * fz);
        document.getElementById('vcResult').textContent = vc;
        document.getElementById('nResult').textContent  = n;
        document.getElementById('vfResult').textContent = vf;
    }

    function calcMill() {
        const D   = parseFloat(document.getElementById('millDiameter')?.value) || 10;
        const Z   = parseInt(document.getElementById('millZ')?.value)           || 4;
        const fz  = parseFloat(document.getElementById('millFz')?.value)        || 0.05;
        const vc  = parseFloat(document.getElementById('millVc')?.value)        || 150;
        const n   = Math.round((vc * 1000) / (Math.PI * D));
        const vf  = Math.round(n * Z * fz);
        document.getElementById('vcResult').textContent = vc;
        document.getElementById('nResult').textContent  = n;
        document.getElementById('vfResult').textContent = vf;
    }

    // Sekme geçişleri
    document.querySelectorAll('.calc-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const type = tab.getAttribute('data-type');
            document.getElementById('drillInputs').style.display = type === 'drill' ? 'block' : 'none';
            document.getElementById('millInputs').style.display  = type === 'mill'  ? 'block' : 'none';
            type === 'drill' ? calcDrill() : calcMill();
        });
    });

    // Değer değişince hesapla
    ['materialSelect','diameterSelect'].forEach(id => document.getElementById(id)?.addEventListener('change', calcDrill));
    ['millDiameter','millZ','millFz','millVc'].forEach(id => document.getElementById(id)?.addEventListener('input', calcMill));

    // İlk yükleme
    calcDrill();
});
