/**
 * FRAMER SPA (Single Page Application) FIX
 * Framer sayfa değiştirdiğinde özelleştirmeleri tekrar uygular
 */

(function() {
    'use strict';
    
    console.log('🔧 Framer SPA Fix yükleniyor...');
    
    // Özelleştirmeleri yükle
    let customizations = null;
    
    async function loadCustomizations() {
        try {
            const response = await fetch('customizations.json');
            customizations = await response.json();
            console.log('✅ Özelleştirmeler yüklendi');
            return true;
        } catch (error) {
            console.warn('⚠️ customizations.json bulunamadı');
            return false;
        }
    }
    
    // Metinleri değiştir
    function applyTextChanges() {
        if (!customizations || !customizations.texts) return;
        
        let count = 0;
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    const parent = node.parentElement;
                    if (parent && ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );
        
        const nodesToChange = [];
        while (walker.nextNode()) {
            const node = walker.currentNode;
            const text = node.nodeValue ? node.nodeValue.trim() : '';
            if (text && customizations.texts[text]) {
                nodesToChange.push({ node, oldText: text, newText: customizations.texts[text] });
            }
        }
        
        nodesToChange.forEach(({ node, oldText, newText }) => {
            node.nodeValue = node.nodeValue.replace(oldText, newText);
            count++;
        });
        
        if (count > 0) {
            console.log(`✅ ${count} metin değiştirildi (${window.location.pathname})`);
        }
    }
    
    // Renkleri uygula
    function applyColors() {
        if (!customizations || !customizations.colors) return;
        
        const root = document.documentElement;
        Object.entries(customizations.colors).forEach(([cssVar, color]) => {
            root.style.setProperty(cssVar, color);
        });
    }
    
    // Meta bilgilerini uygula
    function applyMeta() {
        if (!customizations) return;
        
        if (customizations.pageTitle) {
            document.title = customizations.pageTitle;
        }
        
        if (customizations.metaDescription) {
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.content = customizations.metaDescription;
        }
        
        if (customizations.favicon) {
            const favicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
            favicons.forEach(link => {
                link.href = customizations.favicon;
            });
        }
        
        if (customizations.logo) {
            const logos = document.querySelectorAll('img[alt*="logo" i], img[class*="logo" i], .logo img');
            logos.forEach(img => {
                img.src = customizations.logo;
                img.srcset = '';
            });
        }
    }
    
    // Tüm değişiklikleri uygula
    function applyAll() {
        applyTextChanges();
        applyColors();
        applyMeta();
    }
    
    // URL değişikliklerini dinle (Framer SPA için)
    let lastUrl = location.href;
    
    function checkUrlChange() {
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            console.log('🔄 Sayfa değişti:', currentUrl);
            lastUrl = currentUrl;
            
            // Yeni içerik yüklenene kadar bekle
            setTimeout(applyAll, 500);
            setTimeout(applyAll, 1000);
            setTimeout(applyAll, 2000);
        }
    }
    
    // Her 500ms'de URL kontrolü yap
    setInterval(checkUrlChange, 500);
    
    // MutationObserver ile DOM değişikliklerini izle
    const observer = new MutationObserver((mutations) => {
        // Büyük değişiklikler varsa (sayfa geçişi)
        const hasMajorChanges = mutations.some(mutation => 
            mutation.addedNodes.length > 5 || mutation.removedNodes.length > 5
        );
        
        if (hasMajorChanges) {
            console.log('🔄 DOM büyük değişiklik algılandı');
            setTimeout(applyAll, 300);
        } else {
            // Küçük değişiklikler için sadece metinleri kontrol et
            applyTextChanges();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Popstate event'ini dinle (geri/ileri butonları)
    window.addEventListener('popstate', () => {
        console.log('🔄 Popstate event');
        setTimeout(applyAll, 500);
    });
    
    // Başlat
    async function init() {
        const loaded = await loadCustomizations();
        if (!loaded) {
            console.log('ℹ️ Özelleştirme dosyası yok');
            return;
        }
        
        // İlk uygulama
        setTimeout(applyAll, 500);
        setTimeout(applyAll, 1500);
        setTimeout(applyAll, 3000);
        
        console.log('✅ Framer SPA Fix aktif!');
        console.log('📍 URL değişiklikleri izleniyor...');
    }
    
    init();
    
})();
