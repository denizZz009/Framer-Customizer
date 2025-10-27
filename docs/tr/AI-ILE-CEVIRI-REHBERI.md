# 🤖 AI ile Otomatik Çeviri/Değiştirme Rehberi

## 🎯 Amaç

Framer sitenizde bulunan **tüm metinleri** tek seferde AI ile değiştirmek/çevirmek için bu sistemi kullanın.

---

## 📋 Adım Adım Kullanım

### 1️⃣ Metinleri Export Et

1. **`customize-advanced copy 2.html`** dosyasını tarayıcıda açın
2. Sağ tarafta `page-original-framer.html` önizlemesi yüklenecek
3. Metinler otomatik taranacak (sol üstte sayıyı göreceksiniz)
4. **"📋 Tüm Metinleri JSON Olarak Export Et"** butonuna tıklayın
5. **`all-texts-for-ai.json`** dosyası indirilecek

### 2️⃣ AI'a Gönder

**ChatGPT, Claude veya herhangi bir AI'a şu prompt'u gönderin:**

```
Bu JSON dosyasındaki tüm metinleri Türkçe'ye çevir. 
JSON formatını koru, sadece değerleri değiştir.
Anahtar (key) kısmı orijinal metin, değer (value) kısmı çevrilmiş metin olsun.

[all-texts-for-ai.json içeriğini buraya yapıştır]
```

**Veya başka değişiklikler için:**

```
Bu JSON'daki metinleri daha profesyonel/casual/modern yap
Bu JSON'daki metinleri İngilizce'den Almanca'ya çevir
Bu JSON'daki "design" kelimesini "tasarım" ile değiştir
```

### 3️⃣ AI'dan Gelen JSON'u Kullan

1. AI'ın verdiği JSON'u kopyalayın
2. **`inject-customizations.html`** dosyasını tarayıcıda açın
3. JSON'u textarea'ya yapıştırın
4. "✅ JSON'u Doğrula" butonuna tıklayın
5. `page-original-framer.html` dosyanızı seçin
6. "✨ İşle ve İndir" butonuna tıklayın
7. Özelleştirilmiş HTML dosyanız indirilecek!

---

## 💡 Örnek Kullanım

### Export Edilen JSON (all-texts-for-ai.json):
```json
{
  "texts": {
    "LOVERA": "LOVERA",
    "Product design": "Product design",
    "Content strategy": "Content strategy",
    "Brand identity design": "Brand identity design",
    "Web development": "Web development",
    "Studio": "Studio",
    "Projects": "Projects",
    "News": "News",
    "Pricing": "Pricing",
    "Contact": "Contact",
    "Los Angeles": "Los Angeles",
    "hello@lovera.com": "hello@lovera.com"
  },
  "info": {
    "totalTexts": 12,
    "exportDate": "2025-01-27T10:30:00.000Z",
    "instruction": "Bu JSON'u AI'a gönderin..."
  }
}
```

### AI'a Gönderilen Prompt:
```
Bu JSON'daki tüm metinleri Türkçe'ye çevir. 
JSON formatını koru, sadece değerleri değiştir.

{
  "texts": {
    "LOVERA": "LOVERA",
    "Product design": "Product design",
    ...
  }
}
```

### AI'dan Dönen JSON:
```json
{
  "texts": {
    "LOVERA": "LOVERA",
    "Product design": "Ürün Tasarımı",
    "Content strategy": "İçerik Stratejisi",
    "Brand identity design": "Marka Kimliği Tasarımı",
    "Web development": "Web Geliştirme",
    "Studio": "Stüdyo",
    "Projects": "Projeler",
    "News": "Haberler",
    "Pricing": "Fiyatlandırma",
    "Contact": "İletişim",
    "Los Angeles": "Los Angeles",
    "hello@lovera.com": "merhaba@lovera.com"
  }
}
```

### Bu JSON'u inject-customizations.html'e Yapıştırın!

---

## 🎨 Farklı Kullanım Senaryoları

### Senaryo 1: Tam Türkçe'ye Çeviri
```
Bu JSON'daki tüm metinleri Türkçe'ye çevir.
Marka isimleri ve email adresleri hariç.
```

### Senaryo 2: Daha Profesyonel Dil
```
Bu JSON'daki metinleri daha profesyonel ve kurumsal bir dille yeniden yaz.
```

### Senaryo 3: Kısaltma
```
Bu JSON'daki metinleri daha kısa ve öz hale getir.
Maksimum 3 kelime olsun.
```

### Senaryo 4: Belirli Kelimeleri Değiştir
```
Bu JSON'da:
- "design" kelimesini "tasarım" ile değiştir
- "studio" kelimesini "ajans" ile değiştir
- "project" kelimesini "proje" ile değiştir
```

### Senaryo 5: Farklı Dile Çeviri
```
Bu JSON'daki metinleri İspanyolca'ya çevir.
```

---

## 🔥 Pro İpuçları

### 1. Seçici Çeviri
AI'a şunu söyleyin:
```
Bu JSON'daki metinleri Türkçe'ye çevir ama:
- Email adresleri değişmesin
- Şehir isimleri değişmesin
- Marka isimleri (LOVERA gibi) değişmesin
- Telefon numaraları değişmesin
```

### 2. Tutarlılık İçin
```
Bu JSON'daki metinleri çevirirken:
- "design" her zaman "tasarım" olsun
- "studio" her zaman "stüdyo" olsun
- Tutarlı bir ton kullan
```

### 3. SEO Dostu Çeviri
```
Bu JSON'daki metinleri Türkçe'ye çevir.
SEO dostu olsun, anahtar kelimeleri koru.
```

### 4. Birden Fazla Dil
Aynı JSON'u farklı dillere çevirip farklı versiyonlar oluşturabilirsiniz:
- `customizations-tr.json` (Türkçe)
- `customizations-en.json` (İngilizce)
- `customizations-de.json` (Almanca)

---

## ⚡ Hızlı Workflow

```
1. customize-advanced copy 2.html aç
   ↓
2. "Tüm Metinleri JSON Olarak Export Et" tıkla
   ↓
3. JSON'u AI'a gönder (ChatGPT/Claude)
   ↓
4. AI'dan gelen JSON'u kopyala
   ↓
5. inject-customizations.html aç
   ↓
6. JSON'u yapıştır ve doğrula
   ↓
7. page-original-framer.html seç
   ↓
8. "İşle ve İndir" tıkla
   ↓
9. Özelleştirilmiş HTML'i hosting'e yükle
   ↓
10. ✅ BİTTİ!
```

**Toplam Süre:** ~5 dakika (AI'ın cevap vermesini bekleme dahil)

---

## 🎯 Hangi AI'ları Kullanabilirsiniz?

### Ücretsiz:
- ✅ **ChatGPT 3.5** (chat.openai.com)
- ✅ **Claude** (claude.ai)
- ✅ **Google Gemini** (gemini.google.com)
- ✅ **Bing Chat** (bing.com/chat)

### Ücretli (Daha İyi Sonuçlar):
- ⭐ **ChatGPT 4** (Daha doğru çeviriler)
- ⭐ **Claude Pro** (Daha uzun metinler)

---

## 🐛 Sorun Giderme

### "JSON geçersiz" Hatası
AI bazen JSON'u markdown code block içinde verir:
```json
{
  "texts": {...}
}
```

Sadece `{` ile başlayan ve `}` ile biten kısmı kopyalayın.

### Bazı Metinler Değişmedi
- Metinler **tam eşleşme** ile değişir
- "LOVERA" ≠ "Lovera" ≠ "lovera"
- Büyük/küçük harf önemli!

### AI Bazı Metinleri Çevirmedi
AI'a tekrar söyleyin:
```
Tüm metinleri çevir, hiçbirini atlama.
Email ve URL'ler hariç.
```

---

## 📊 Örnek Sonuçlar

### Önce (İngilizce):
- Product design
- Content strategy
- Brand identity design
- Web development

### Sonra (Türkçe):
- Ürün Tasarımı
- İçerik Stratejisi
- Marka Kimliği Tasarımı
- Web Geliştirme

**Değiştirilen:** 150+ metin
**Süre:** 5 dakika
**Maliyet:** Ücretsiz (ChatGPT 3.5 ile)

---

## 🎉 Başarı Hikayeleri

### Kullanım 1: Tam Türkçe Site
```
İngilizce Framer template → AI ile Türkçe'ye çeviri → 5 dakikada Türkçe site
```

### Kullanım 2: Çoklu Dil Versiyonları
```
1 Framer template → AI ile 5 farklı dile çeviri → 5 farklı dil versiyonu
```

### Kullanım 3: Marka Değişikliği
```
Template'deki tüm "LOVERA" → AI ile "MYAGENCY" → Rebrand tamamlandı
```

---

## 💪 Sonuç

Bu sistem sayesinde:
- ✅ Manuel çeviri yapmaya gerek yok
- ✅ Tek tek metin değiştirmeye gerek yok
- ✅ AI her şeyi 1 dakikada halleder
- ✅ Siz sadece kopyala-yapıştır yaparsınız

**Toplam Süre:** 5 dakika
**Manuel Yapılsaydı:** 2-3 saat

---

**🚀 Hemen deneyin ve zamanınızı kurtarın!**
