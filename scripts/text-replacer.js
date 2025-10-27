// Framer Site Text Replacer - Herkes için çalışır
(function() {
    'use strict';
    
    // JSON dosyasını yükle
    fetch('customizations.json')
        .then(response => response.json())
        .then(data => {
            console.log('✅ Özelleştirmeler yüklendi:', data);
            
            // Sayfa yüklendikten sonra metinleri değiştir
            function replaceTexts() {
                if (!data.texts) return;
                
                const walker = document.createTreeWalker(
                    document.body,
                    NodeFilter.SHOW_TEXT,
                    null,
                    false
                );
                
                const nodes = [];
                while (walker.nextNode()) {
                    nodes.push(walker.currentNode);
                }
                
                nodes.forEach(node => {
                    const text = node.nodeValue ? node.nodeValue.trim() : '';
                    if (text && data.texts[text]) {
                        node.nodeValue = node.nodeValue.replace(text, data.texts[text]);
                    }
                });
                
                console.log('✅ Metinler değiştirildi');
            }
            
            // Renkleri değiştir
            function replaceColors() {
                if (!data.colors) return;
                
                const style = document.createElement('style');
                style.id = 'custom-colors';
                let css = ':root {';
                
                Object.entries(data.colors).forEach(([prop, color]) => {
                    css += `${prop}: ${color} !important;`;
                });
                
                css += '}';
                style.textContent = css;
                document.head.appendChild(style);
                
                console.log('✅ Renkler değiştirildi');
            }
            
            // Meta bilgilerini değiştir
            function replaceMeta() {
                if (data.pageTitle) {
                    document.title = data.pageTitle;
                }
                if (data.metaDescription) {
                    let meta = document.querySelector('meta[name="description"]');
                    if (meta) meta.content = data.metaDescription;
                }
            }
            
            // İlk değişiklik
            setTimeout(() => {
                replaceTexts();
                replaceColors();
                replaceMeta();
            }, 1000);
            
            // Framer render sonrası tekrar değiştir
            const observer = new MutationObserver(() => {
                replaceTexts();
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        })
        .catch(err => {
            console.warn('⚠️ Özelleştirme dosyası bulunamadı:', err);
        });
})();
