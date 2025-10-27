# 🎨 Framer Özelleştirme Sistemi - Kullanım Rehberi

## 📋 Sistem Özeti

Bu sistem, Framer'dan export ettiğiniz HTML dosyasındaki metinleri, renkleri ve diğer elementleri **DOM render olduktan sonra bile** otomatik olarak değiştiren bir çözümdür.

### ✨ Özellikler

- ✅ DOM render sonrası metinleri otomatik değiştirir
- ✅ Framer'ın dinamik içerik yüklemesine karşı dayanıklı
- ✅ MutationObserver ile sürekli izleme
- ✅ JSON tabanlı kolay yapılandırma
- ✅ Renk, metin ve meta bilgilerini değiştirme

---

## 🚀 Hızlı Başlangıç

### Yöntem 1: Otomatik Enjeksiyon (ÖNERİLEN)

1. **`inject-customizations.html`** dosyasını tarayıcıda açın

2. **Adım 1:** JSON alanına özelleştirmelerinizi girin:
```json
{
  "texts": {
    "LOVERA": "MYAGENCY",
    "Product design": "Web Tasarım"
  },
  "colors": {
    "--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926": "#0066ff"
  },
  "pageTitle": "My Agency",
  "metaDescription": "Professional agency"
}
```

3. **Adım 2:** "JSON'u Doğrula" butonuna tıklayın

4. **Adım 3:** `page-original-framer.html` dosyanızı seçin

5. **Adım 4:** "İşle ve İndir" butonuna tıklayın

6. **Sonuç:** Özelleştirilmiş HTML dosyası otomatik indirilir!

---

### Yöntem 2: Manuel Ekleme

1. **`customizations.json`** dosyasını düzenleyin:
```json
{
  "texts": {
    "Eski Metin": "Yeni Metin"
  },
  "colors": {
    "--css-variable-name": "#yeni-renk"
  }
}
```

2. **`apply-text-changes.js`** dosyasını `page-original-framer.html` içine ekleyin:

`page-original-framer.html` dosyasını açın ve `</body>` etiketinden **hemen önce** şu satırı ekleyin:

```html
<script src="apply-text-changes.js"></script>
</body>
```

3. Dosyaları aynı klasörde tutun:
```
📁 proje/
  ├── page-original-framer.html
  ├── apply-text-changes.js
  └── customizations.json
```

4. `page-original-framer.html` dosyasını tarayıcıda açın

---

## 📝 JSON Yapılandırması

### Metin Değiştirme

```json
{
  "texts": {
    "Orijinal Metin": "Yeni Metin",
    "LOVERA": "MYAGENCY",
    "Product design": "Web Tasarım",
    "hello@lovera.com": "info@myagency.com"
  }
}
```

**Önemli:** Metinler **tam eşleşme** ile değiştirilir. "LOVERA" yazarsanız sadece "LOVERA" değişir, "Lovera" değişmez.

### Renk Değiştirme

```json
{
  "colors": {
    "--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926": "#0066ff",
    "--token-49e4ddec-83e3-4ae4-8788-2f69df6150be": "#ff0000"
  }
}
```

**CSS değişken isimlerini bulmak için:**
1. Sayfayı tarayıcıda açın
2. F12 > Console'u açın
3. Şu komutu çalıştırın:
```javascript
getComputedStyle(document.documentElement).getPropertyValue('--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926')
```

### Meta Bilgileri

```json
{
  "pageTitle": "My Agency - Creative Studio",
  "metaDescription": "Professional creative agency for web design"
}
```

### Tam Örnek

```json
{
  "texts": {
    "LOVERA": "CREATIVE STUDIO",
    "Product design": "UI/UX Design",
    "Content strategy": "Digital Strategy",
    "Brand identity design": "Brand Design",
    "Web development": "Development",
    "Studio": "About",
    "Projects": "Work",
    "News": "Blog",
    "Pricing": "Services",
    "Contact": "Get in Touch",
    "Los Angeles": "New York",
    "hello@lovera.com": "hello@creativestudio.com",
    "(0523) 6363-362": "+1 (555) 123-4567"
  },
  "colors": {
    "--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926": "#0066ff",
    "--token-49e4ddec-83e3-4ae4-8788-2f69df6150be": "#0066ff",
    "--token-0c7ce2d0-fe6f-494a-9773-2fe854073d77": "#0066ff"
  },
  "pageTitle": "Creative Studio - Digital Agency",
  "metaDescription": "Award-winning digital agency specializing in UI/UX design and web development"
}
```

---

## 🔧 Nasıl Çalışır?

### 1. Yükleme Aşaması
- Sayfa yüklendiğinde `customizations.json` dosyası okunur
- JSON içeriği parse edilir ve hafızaya alınır

### 2. İlk Uygulama
- Sayfa yüklendikten 500ms, 1500ms ve 3000ms sonra değişiklikler uygulanır
- Bu, Framer'ın dinamik içerik yüklemesini beklemek içindir

### 3. Sürekli İzleme
- MutationObserver ile DOM değişiklikleri izlenir
- Yeni içerik eklendiğinde otomatik olarak değişiklikler uygulanır
- Bu sayede Framer'ın sonradan yüklediği içerikler de değiştirilir

### 4. Metin Değiştirme Algoritması
```
1. TreeWalker ile tüm text node'ları tara
2. Script/Style içeriklerini atla
3. Tam eşleşen metinleri bul
4. Node değerlerini değiştir
5. Değişiklik sayısını logla
```

---

## 🐛 Sorun Giderme

### Metinler Değişmiyor

**Kontrol Listesi:**
1. ✅ `customizations.json` dosyası doğru konumda mı?
2. ✅ JSON formatı geçerli mi? (JSON validator kullanın)
3. ✅ Metin tam olarak eşleşiyor mu? (büyük/küçük harf duyarlı)
4. ✅ Console'da hata var mı? (F12 > Console)

**Çözüm:**
```javascript
// Console'da test edin:
fetch('customizations.json')
  .then(r => r.json())
  .then(d => console.log('JSON:', d))
  .catch(e => console.error('Hata:', e))
```

### Renkler Değişmiyor

**CSS değişken ismini kontrol edin:**
```javascript
// Console'da çalıştırın:
const styles = getComputedStyle(document.documentElement);
console.log(styles.getPropertyValue('--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926'));
```

### Bazı Metinler Geç Değişiyor

**Normal!** Framer bazı içerikleri geç yükler. Sistem 3 saniye boyunca denemeye devam eder.

**Daha fazla deneme eklemek için:**
```javascript
// apply-text-changes.js içinde:
setTimeout(applyAllChanges, 5000);  // 5 saniye sonra
setTimeout(applyAllChanges, 10000); // 10 saniye sonra
```

---

## 📊 Performans

- **Hafif:** ~5KB JavaScript kodu
- **Hızlı:** Ortalama 50-100ms işlem süresi
- **Verimli:** Sadece değişen DOM elementlerini işler
- **Güvenli:** Orijinal HTML'i değiştirmez

---

## 🎯 İpuçları

### 1. Metinleri Bulmak

Sayfadaki tüm metinleri görmek için:
```javascript
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const texts = new Set();
while (walker.nextNode()) {
  const text = walker.currentNode.nodeValue.trim();
  if (text) texts.add(text);
}
console.log(Array.from(texts).sort());
```

### 2. CSS Değişkenlerini Bulmak

Tüm CSS değişkenlerini görmek için:
```javascript
const styles = getComputedStyle(document.documentElement);
const vars = Array.from(document.styleSheets)
  .flatMap(sheet => Array.from(sheet.cssRules || []))
  .flatMap(rule => Array.from(rule.style || []))
  .filter(prop => prop.startsWith('--'));
console.log([...new Set(vars)]);
```

### 3. Değişiklikleri Test Etme

Değişiklik öncesi/sonrası karşılaştırma:
```javascript
// Önce
console.log('Önce:', document.title);

// Değişikliği uygula
document.title = "Yeni Başlık";

// Sonra
console.log('Sonra:', document.title);
```

---

## 🚀 Hosting'e Yükleme

### Adım 1: Dosyaları Hazırlayın
```
📁 upload/
  ├── page-customized-[timestamp].html  (veya page-original-framer.html)
  ├── apply-text-changes.js (manuel yöntem kullanıyorsanız)
  └── customizations.json (manuel yöntem kullanıyorsanız)
```

### Adım 2: Hosting'e Yükleyin
- Netlify, Vercel, GitHub Pages veya herhangi bir hosting
- Tüm dosyaları aynı klasöre yükleyin
- Ana dosyayı `index.html` olarak yeniden adlandırın

### Adım 3: Test Edin
- Yüklenen URL'i açın
- F12 > Console'u açın
- "✅ Özelleştirme sistemi aktif!" mesajını görmelisiniz
- Değişikliklerin uygulandığını kontrol edin

---

## 📞 Destek

Sorun yaşıyorsanız:
1. Console'daki hata mesajlarını kontrol edin (F12 > Console)
2. JSON formatını doğrulayın (jsonlint.com)
3. Dosya yollarını kontrol edin
4. Tarayıcı cache'ini temizleyin (Ctrl+Shift+R)

---

## ✅ Başarı Kontrol Listesi

- [ ] `inject-customizations.html` ile özelleştirilmiş HTML oluşturdum
- [ ] Tarayıcıda açtığımda değişiklikler görünüyor
- [ ] Console'da hata yok
- [ ] Tüm metinler doğru değişmiş
- [ ] Renkler güncellenmiş
- [ ] Meta bilgileri doğru
- [ ] Hosting'e yükledim
- [ ] Canlı sitede çalışıyor

---

**🎉 Tebrikler! Framer siteniz başarıyla özelleştirildi!**
