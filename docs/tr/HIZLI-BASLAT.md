# ⚡ HIZLI BAŞLANGIÇ - 3 Dakikada Framer Siteni Özelleştir

## 🎯 Ne Yapacağız?

Framer'dan export ettiğin HTML dosyasındaki **tüm metinleri AI ile otomatik değiştireceğiz!**

---

## 🚀 3 Adımda Tamamla

### 1️⃣ Metinleri Çıkart (30 saniye)

1. **`customize-advanced copy 2.html`** dosyasını tarayıcıda aç
2. Sağda `page-original-framer.html` yüklenecek
3. Sol üstte metinler taranacak (örn: "150 metin bulundu")
4. **"📋 Tüm Metinleri JSON Olarak Export Et"** butonuna tıkla
5. **`all-texts-for-ai.json`** dosyası indirilecek

### 2️⃣ AI'a Gönder (1 dakika)

1. **ChatGPT** veya **Claude** aç (ücretsiz)
2. Şu mesajı gönder:

```
Bu JSON'daki tüm metinleri Türkçe'ye çevir.
JSON formatını koru, sadece değerleri değiştir.
Email ve URL'leri değiştirme.

[all-texts-for-ai.json içeriğini buraya yapıştır]
```

3. AI'ın cevabını bekle (30 saniye)
4. Dönen JSON'u kopyala

### 3️⃣ Siteye Ekle (1 dakika)

1. **`inject-customizations.html`** dosyasını tarayıcıda aç
2. AI'dan aldığın JSON'u textarea'ya yapıştır
3. **"✅ JSON'u Doğrula"** tıkla
4. **`page-original-framer.html`** dosyasını seç
5. **"✨ İşle ve İndir"** tıkla
6. Özelleştirilmiş HTML dosyan indirilecek!

---

## ✅ BİTTİ!

Artık sitenin tüm metinleri değişmiş durumda. İndirdiğin HTML dosyasını:
- Tarayıcıda aç ve kontrol et
- Hosting'e yükle (Netlify, Vercel, vb.)
- Canlıya al!

---

## 📁 Hangi Dosyaları Kullanacaksın?

```
📂 Proje Klasörü
├── 📄 customize-advanced copy 2.html  ← ADIM 1: Buradan başla
├── 📄 inject-customizations.html      ← ADIM 3: Buradan bitir
├── 📄 page-original-framer.html       ← Senin Framer dosyan
└── 📄 all-texts-for-ai.json          ← ADIM 1'de indirilecek
```

---

## 💡 Örnek

### Önce (İngilizce):
```
LOVERA
Product design
Content strategy
Studio
Projects
Contact
```

### AI'a Gönder:
```
"Bu JSON'daki metinleri Türkçe'ye çevir"
```

### Sonra (Türkçe):
```
LOVERA
Ürün Tasarımı
İçerik Stratejisi
Stüdyo
Projeler
İletişim
```

**Değiştirilen:** 150+ metin
**Süre:** 3 dakika
**Maliyet:** Ücretsiz

---

## 🎯 Farklı Kullanımlar

### Türkçe'ye Çevir
```
"Bu JSON'daki metinleri Türkçe'ye çevir"
```

### Daha Profesyonel Yap
```
"Bu JSON'daki metinleri daha profesyonel yap"
```

### Marka İsmini Değiştir
```
"Bu JSON'da LOVERA'yı MYAGENCY ile değiştir"
```

### Başka Dile Çevir
```
"Bu JSON'daki metinleri Almanca'ya çevir"
```

---

## 🐛 Sorun mu Var?

### "Metinler taranmıyor"
- Sayfayı yenile (F5)
- 2-3 saniye bekle
- Sağ tarafta önizleme yüklenmeli

### "JSON geçersiz"
- AI'ın verdiği JSON'da sadece `{` ile `}` arasını kopyala
- Markdown code block'ları atla

### "Bazı metinler değişmedi"
- Normal! Framer bazı metinleri geç yükler
- Sayfayı yenile, 3 saniye bekle

---

## 📚 Daha Fazla Bilgi

- **Detaylı Rehber:** `AI-ILE-CEVIRI-REHBERI.md`
- **AI Prompt Örnekleri:** `ORNEK-AI-PROMPT.md`
- **Teknik Dokümantasyon:** `KULLANIM-REHBERI.md`

---

## 🎉 Başarı!

3 dakikada Framer siteni özelleştirdin! 

**Sonraki Adımlar:**
1. ✅ İndirilen HTML'i tarayıcıda aç
2. ✅ Değişiklikleri kontrol et
3. ✅ Hosting'e yükle
4. ✅ Canlıya al!

---

**💪 Kolay gelsin!**
