/**
 * Framer HTML Text Replacement System
 * DOM render sonrası metinleri otomatik değiştiren sistem
 */

(function() {
    'use strict';
    
    console.log('🎨 Text Replacement System başlatılıyor...');
    
    let customizations = null;
    let observer = null;
    let isApplying = false;
    
    // JSON dosyasını yükle
    async function loadCustomizations() {
        try {
            const response = await fetch('customizations.json');
            customizations = await response.json();
            console.log('✅ Özelleştirmeler yüklendi:', customizations);
            return true;
        } catch (error) {
            console.warn('⚠️ customizations.json bulunamadı:', error);
            return false;
        }
    }
    
    // Metinleri değiştir
    function replaceTexts() {
        if (!customizations || !customizations.texts || isApplying) return;
        
        isApplying = true;
        let changeCount = 0;
        
        try {
            // TreeWalker ile tüm text node'ları bul
            const walker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                {
                    acceptNode: function(node) {
                        // Script ve style içeriklerini atla
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
            
            // Tüm text node'ları topla
            while (walker.nextNode()) {
                const node = walker.currentNode;
                const text = node.nodeValue ? node.nodeValue.trim() : '';
                
                if (text && customizations.texts[text]) {
                    nodesToChange.push({
                        node: node,
                        oldText: text,
                        newText: customizations.texts[text]
                    });
                }
            }
            
            // Değişiklikleri uygula
            nodesToChange.forEach(({ node, oldText, newText }) => {
                node.nodeValue = node.nodeValue.replace(oldText, newText);
                changeCount++;
            });
            
            if (changeCount > 0) {
                console.log(`✅ ${changeCount} metin değiştirildi`);
            }
            
        } catch (error) {
            console.error('❌ Metin değiştirme hatası:', error);
        } finally {
            isApplying = false;
        }
    }
    
    // Renkleri değiştir
    function replaceColors() {
        if (!customizations || !customizations.colors) return;
        
        try {
            const root = document.documentElement;
            let colorCount = 0;
            
            Object.entries(customizations.colors).forEach(([cssVar, newColor]) => {
                root.style.setProperty(cssVar, newColor);
                colorCount++;
            });
            
            if (colorCount > 0) {
                console.log(`✅ ${colorCount} renk değiştirildi`);
            }
        } catch (error) {
            console.error('❌ Renk değiştirme hatası:', error);
        }
    }
    
    // Meta bilgilerini değiştir
    function replaceMeta() {
        if (!customizations) return;
        
        try {
            if (customizations.pageTitle) {
                document.title = customizations.pageTitle;
            }
            
            if (customizations.metaDescription) {
                let meta = document.querySelector('meta[name="description"]');
                if (meta) {
                    meta.content = customizations.metaDescription;
                }
            }
            
            console.log('✅ Meta bilgileri güncellendi');
        } catch (error) {
            console.error('❌ Meta güncelleme hatası:', error);
        }
    }
    
    // Tüm değişiklikleri uygula
    function applyAllChanges() {
        replaceTexts();
        replaceColors();
        replaceMeta();
    }
    
    // MutationObserver ile DOM değişikliklerini izle
    function startObserver() {
        if (observer) {
            observer.disconnect();
        }
        
        observer = new MutationObserver((mutations) => {
            // Sadece text değişikliklerinde çalış
            const hasTextChanges = mutations.some(mutation => 
                mutation.type === 'characterData' || 
                mutation.type === 'childList'
            );
            
            if (hasTextChanges) {
                replaceTexts();
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
        
        console.log('👁️ DOM Observer aktif');
    }
    
    // Başlat
    async function init() {
        const loaded = await loadCustomizations();
        
        if (!loaded) {
            console.log('ℹ️ Özelleştirme dosyası yok, sistem pasif');
            return;
        }
        
        // Sayfa yüklendikten sonra uygula
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(applyAllChanges, 500);
                setTimeout(applyAllChanges, 1500);
                setTimeout(applyAllChanges, 3000);
                startObserver();
            });
        } else {
            setTimeout(applyAllChanges, 500);
            setTimeout(applyAllChanges, 1500);
            setTimeout(applyAllChanges, 3000);
            startObserver();
        }
        
        console.log('✅ Text Replacement System aktif!');
    }
    
    init();
    
})();
