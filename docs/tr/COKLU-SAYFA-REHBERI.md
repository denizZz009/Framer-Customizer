# 🗂️ Çoklu Sayfa Özelleştirme Rehberi

## 🎯 Amaç

Framer sitenizin **tüm sayfalarındaki** metinleri tek seferde AI ile değiştirmek.

---

## 📋 İki Yöntem

### Yöntem 1: Toplu Export (ÖNERİLEN) ⚡

**Tüm sayfaları tek seferde export et ve AI'a gönder**

#### Adımlar:

1. **`customize-advanced copy 2.html`** dosyasını aç
2. **"🗂️ Tüm Sayfaları Toplu Export Et"** butonuna tıkla
3. Açılan modal'da **"HTML Sayfalarını Seç"** butonuna tıkla
4. **Tüm HTML sayfalarını seç** (Ctrl+A ile çoklu seçim)
   - `page-original-framer.html`
   - `about.html`
   - `projects.html`
   - `contact.html`
   - vb.
5. Sistem tüm sayfaları tarayacak (progress bar göreceksin)
6. **`all-pages-texts-for-ai.json`** dosyası indirilecek
7. Bu JSON'u AI'a gönder
8. AI'dan gelen JSON'u **`inject-customizations.html`** ile **her sayfaya** uygula

#### Avantajlar:
- ✅ Tüm sayfalar tek JSON'da
- ✅ Tutarlı çeviri (aynı kelime her yerde aynı)
- ✅ Tek seferde tamamlanır
- ✅ Hızlı ve kolay

---

### Yöntem 2: Sayfa Sayfa Export

**Her sayfayı ayrı ayrı export et**

#### Adımlar:

1. **`customize-advanced copy 2.html`** dosyasını aç
2. Sağ üstte **sayfa seçici** dropdown'ı göreceksin
3. **"📂 Dosya Seç"** butonuna tıkla
4. İstediğin sayfayı seç (örn: `about.html`)
5. Sayfa yüklenecek ve metinler taranacak
6. **"📋 Bu Sayfanın Metinlerini JSON Olarak Export Et"** tıkla
7. `all-texts-for-ai.json` indirilecek
8. AI'a gönder ve çevir
9. **Diğer sayfalar için tekrarla**

#### Avantajlar:
- ✅ Sayfa bazında kontrol
- ✅ Özel değişiklikler yapabilirsin
- ✅ Test etmek için iyi

---

## 🚀 Örnek: 5 Sayfalı Site

### Dosyalar:
```
📁 Framer Export/
├── page-original-framer.html (Ana Sayfa)
├── about.html (Hakkımızda)
├── projects.html (Projeler)
├── blog.html (Blog)
└── contact.html (İletişim)
```

### Yöntem 1 ile (Toplu):

```
1. customize-advanced copy 2.html aç
   ↓
2. "Tüm Sayfaları Toplu Export Et" tıkla
   ↓
3. 5 HTML dosyasını seç (Ctrl+A)
   ↓
4. Sistem tarar: 5/5 sayfa işlendi
   ↓
5. all-pages-texts-for-ai.json indirilir (500+ metin)
   ↓
6. ChatGPT'ye gönder: "Türkçe'ye çevir"
   ↓
7. AI'dan gelen JSON'u al
   ↓
8. inject-customizations.html ile her sayfaya uygula
   ↓
9. 5 özelleştirilmiş HTML dosyası indir
   ↓
10. ✅ BİTTİ! Tüm sayfalar Türkçe
```

**Toplam Süre:** 10 dakika  
**Manuel Yapılsaydı:** 5-6 saat

---

## 💡 Toplu Export Detayları

### JSON Formatı:

```json
{
  "texts": {
    "LOVERA": "LOVERA",
    "Product design": "Product design",
    "About Us": "About Us",
    "Our Team": "Our Team",
    "Contact": "Contact",
    ...
  },
  "info": {
    "totalPages": 5,
    "totalTexts": 523,
    "exportDate": "2025-01-27T10:30:00.000Z",
    "pageNames": [
      "page-original-framer.html",
      "about.html",
      "projects.html",
      "blog.html",
      "contact.html"
    ],
    "instruction": "Bu JSON tüm sayfalarınızdaki metinleri içeriyor..."
  }
}
```

### AI'a Gönderilen Prompt:

```
Bu JSON 5 farklı HTML sayfasındaki tüm metinleri içeriyor.
Tüm metinleri Türkçe'ye çevir.
JSON formatını koru, sadece değerleri değiştir.
Tutarlı bir çeviri yap (aynı kelime her yerde aynı olsun).

[JSON buraya]
```

---

## 🎯 Her Sayfaya Uygulama

AI'dan gelen JSON'u **her sayfaya** uygulamak için:

### Adım 1: İlk Sayfa
1. `inject-customizations.html` aç
2. AI'dan gelen JSON'u yapıştır
3. `page-original-framer.html` seç
4. "İşle ve İndir" tıkla
5. `page-customized-[timestamp].html` indirilir

### Adım 2: İkinci Sayfa
1. `inject-customizations.html` aç (aynı JSON hala orada)
2. `about.html` seç
3. "İşle ve İndir" tıkla
4. `about-customized-[timestamp].html` indirilir

### Adım 3-5: Diğer Sayfalar
Aynı şekilde devam et...

**İpucu:** JSON'u bir kere yapıştır, sonra sadece dosya seç ve indir!

---

## 🔥 Pro İpuçları

### 1. Tutarlılık İçin Toplu Export Kullan

**Neden?**
- Aynı kelime tüm sayfalarda aynı çevrilir
- "Product design" → her yerde "Ürün Tasarımı"
- Tutarsızlık olmaz

**Örnek:**
```
Sayfa 1: "Product design" → "Ürün Tasarımı"
Sayfa 2: "Product design" → "Ürün Tasarımı" ✅
```

Sayfa sayfa yaparsanız:
```
Sayfa 1: "Product design" → "Ürün Tasarımı"
Sayfa 2: "Product design" → "Ürün Dizaynı" ❌ (tutarsız)
```

### 2. Büyük Siteler İçin Batch İşlem

500+ sayfa varsa:
1. İlk 100 sayfayı export et
2. AI'a gönder
3. Uygula
4. Sonraki 100 sayfayı export et
5. Tekrarla

### 3. Test Sayfası Oluştur

Önce 1-2 sayfayı test et:
1. Ana sayfa + 1 alt sayfa export et
2. AI'a gönder
3. Sonucu kontrol et
4. Memnunsan tüm sayfaları yap

### 4. JSON'u Sakla

AI'dan gelen JSON'u kaydet:
- `customizations-tr.json` (Türkçe)
- `customizations-en.json` (İngilizce)
- `customizations-de.json` (Almanca)

Sonra tekrar kullanabilirsin!

---

## 🐛 Sorun Giderme

### "Bazı sayfalar yüklenmedi"

**Çözüm:**
- Tüm HTML dosyaları aynı klasörde olmalı
- Dosya isimleri doğru olmalı
- Dosyalar bozuk olmamalı

### "Çok fazla metin var (1000+)"

**Çözüm:**
- Normal! Büyük siteler için beklenen
- AI (ChatGPT 4) ile çevir (daha uzun metinleri destekler)
- Veya sayfaları gruplara böl

### "Bazı metinler çevrilmedi"

**Çözüm:**
- Metinler tam eşleşme ile değişir
- "LOVERA" ≠ "Lovera"
- JSON'da büyük/küçük harf kontrolü yap

---

## 📊 Performans

### Toplu Export:
- **5 sayfa:** ~10 saniye
- **10 sayfa:** ~20 saniye
- **50 sayfa:** ~2 dakika
- **100 sayfa:** ~5 dakika

### AI Çeviri:
- **100 metin:** ~30 saniye (ChatGPT 3.5)
- **500 metin:** ~1 dakika (ChatGPT 4)
- **1000 metin:** ~2 dakika (ChatGPT 4)

### Uygulama:
- **Her sayfa:** ~5 saniye

**Toplam (10 sayfalı site):**
- Export: 20 saniye
- AI: 1 dakika
- Uygulama: 50 saniye (10 sayfa × 5 saniye)
- **TOPLAM: ~2 dakika**

---

## 🎉 Başarı Senaryoları

### Senaryo 1: Küçük Site (5 sayfa)
```
5 sayfa × 100 metin = 500 metin
Toplu export → AI → Uygula
Süre: 5 dakika
```

### Senaryo 2: Orta Site (20 sayfa)
```
20 sayfa × 80 metin = 1600 metin
Toplu export → AI (2 batch) → Uygula
Süre: 15 dakika
```

### Senaryo 3: Büyük Site (100 sayfa)
```
100 sayfa × 50 metin = 5000 metin
Toplu export (10 batch) → AI → Uygula
Süre: 1 saat
Manuel yapılsaydı: 20-30 saat
```

---

## 🚀 Hızlı Başlangıç

```
1. customize-advanced copy 2.html aç
2. "Tüm Sayfaları Toplu Export Et" tıkla
3. Tüm HTML dosyalarını seç (Ctrl+A)
4. all-pages-texts-for-ai.json indirilir
5. ChatGPT'ye gönder: "Türkçe'ye çevir"
6. inject-customizations.html ile her sayfaya uygula
7. ✅ BİTTİ!
```

---

**💪 Tüm sayfalarınızı birden özelleştirin!**
