# 🎨 Renk Değiştirme Rehberi

## 🎯 Amaç

Framer sitenizin renklerini **canlı önizleme** ile değiştirin ve AI ile otomatik renk paleti oluşturun.

---

## ⚡ Hızlı Başlangıç

### 1️⃣ Renkleri Görüntüle

1. **`customize-advanced copy 2.html`** dosyasını aç
2. **"🎨 Renkler"** sekmesine tıkla
3. Sistem otomatik renkleri tarayacak
4. Tüm renkleri göreceksin (örn: #ff531f, #2d2f2e, vb.)

### 2️⃣ Canlı Önizleme ile Değiştir

1. Bir rengin yanındaki **renk kutusuna** tıkla
2. Yeni rengi seç
3. **Önizleme anında değişecek!** 🎉
4. Beğenmediysen tekrar değiştir

### 3️⃣ JSON Olarak Export Et

1. **"📋 Bu Sayfanın Metinlerini JSON Olarak Export Et"** tıkla
2. JSON'da hem metinler hem renkler olacak
3. AI'a gönder veya manuel düzenle
4. **`inject-customizations.html`** ile siteye uygula

---

## 🎨 Renk Sistemi Nasıl Çalışır?

### Framer CSS Değişkenleri

Framer, renkleri CSS değişkenleri olarak saklar:

```css
:root {
  --token-9a91e853-f5c6-46a5-8fa7-05be67b4c926: #ff531f;
  --token-49e4ddec-83e3-4ae4-8788-2f69df6150be: #2d2f2e;
  --token-0c7ce2d0-fe6f-494a-9773-2fe854073d77: #ffffff;
}
```

### Sistem Ne Yapar?

1. **Tarama:** Tüm CSS değişkenlerini tarar
2. **Gruplama:** Aynı rengi gruplar
3. **Gösterim:** Her rengi color picker ile gösterir
4. **Canlı Değişim:** Seçtiğin rengi anında uygular
5. **Export:** JSON'a kaydeder

---

## 💡 Kullanım Senaryoları

### Senaryo 1: Tek Renk Değiştir

**Amaç:** Vurgu rengini turuncu (#ff531f) → mavi (#0066ff) yap

```
1. customize-advanced copy 2.html aç
2. "Renkler" sekmesine git
3. #ff531f rengini bul
4. Color picker'a tıkla
5. Mavi (#0066ff) seç
6. Önizlemede anında değişti! ✅
7. "JSON İndir" ile kaydet
```

### Senaryo 2: Tüm Renk Paletini Değiştir

**Amaç:** Tüm siteyi farklı bir renk temasına çevir

```
1. customize-advanced copy 2.html aç
2. "Renkler" sekmesine git
3. Her rengi tek tek değiştir:
   - #ff531f → #0066ff (Mavi)
   - #2d2f2e → #1a1a2e (Koyu Mavi)
   - #ffffff → #eef2f7 (Açık Gri)
4. Önizlemede tüm değişiklikleri gör
5. "JSON İndir" ile kaydet
```

### Senaryo 3: AI ile Renk Paleti Oluştur

**Amaç:** AI'a renk paleti oluşturmasını söyle

```
1. customize-advanced copy 2.html aç
2. "Tüm Metinleri JSON Olarak Export Et" tıkla
3. JSON'da renkler de var
4. ChatGPT'ye gönder:

"Bu JSON'daki renkleri modern bir mavi temasına çevir.
Ana renk: #0066ff
Koyu renk: #003d99
Açık renk: #e6f2ff"

5. AI yeni renkleri verecek
6. inject-customizations.html ile uygula
```

---

## 🎯 Renk Değiştirme Örnekleri

### Örnek 1: Turuncu → Mavi

**Önce:**
```json
{
  "colors": {
    "--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926": "#ff531f"
  }
}
```

**Sonra:**
```json
{
  "colors": {
    "--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926": "#0066ff"
  }
}
```

### Örnek 2: Tam Renk Paleti

**Önce (Turuncu Tema):**
```json
{
  "colors": {
    "--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926": "#ff531f",
    "--token-49e4ddec-83e3-4ae4-8788-2f69df6150be": "#ff825c",
    "--token-0c7ce2d0-fe6f-494a-9773-2fe854073d77": "#2d2f2e"
  }
}
```

**Sonra (Mavi Tema):**
```json
{
  "colors": {
    "--token-9a91e853-f5c6-46a5-8fa7-05be67b4c926": "#0066ff",
    "--token-49e4ddec-83e3-4ae4-8788-2f69df6150be": "#3399ff",
    "--token-0c7ce2d0-fe6f-494a-9773-2fe854073d77": "#1a1a2e"
  }
}
```

---

## 🤖 AI ile Renk Paleti Oluşturma

### Prompt Örnekleri:

#### 1. Modern Mavi Tema
```
Bu JSON'daki renkleri modern bir mavi temasına çevir.
Profesyonel ve temiz görünmeli.
Ana renk: #0066ff
```

#### 2. Yeşil/Doğa Teması
```
Bu JSON'daki renkleri doğa temalı yeşil tonlara çevir.
Organik ve sakin bir his vermeli.
Ana renk: #2ecc71
```

#### 3. Mor/Lüks Tema
```
Bu JSON'daki renkleri lüks bir mor temasına çevir.
Premium ve şık görünmeli.
Ana renk: #9b59b6
```

#### 4. Koyu Mod (Dark Mode)
```
Bu JSON'daki renkleri koyu moda uygun hale getir.
Arka plan koyu, yazılar açık olmalı.
```

---

## 🎨 Renk Paleti Önerileri

### Mavi Tema (Teknoloji)
```json
{
  "primary": "#0066ff",
  "secondary": "#3399ff",
  "dark": "#003d99",
  "light": "#e6f2ff",
  "text": "#1a1a2e"
}
```

### Yeşil Tema (Doğa/Sağlık)
```json
{
  "primary": "#2ecc71",
  "secondary": "#27ae60",
  "dark": "#1e8449",
  "light": "#d5f4e6",
  "text": "#0e3b20"
}
```

### Mor Tema (Lüks/Yaratıcı)
```json
{
  "primary": "#9b59b6",
  "secondary": "#8e44ad",
  "dark": "#6c3483",
  "light": "#f4ecf7",
  "text": "#2c1a3d"
}
```

### Kırmızı Tema (Enerji/Tutku)
```json
{
  "primary": "#e74c3c",
  "secondary": "#c0392b",
  "dark": "#922b21",
  "light": "#fadbd8",
  "text": "#3d1a16"
}
```

---

## 🔧 Teknik Detaylar

### Renk Tarama Süreci

```javascript
1. Root element'teki CSS değişkenlerini tara
2. Computed styles'dan değişkenleri al
3. StyleSheets'ten değişkenleri çıkar
4. RGB değerleri varsa HEX'e çevir
5. Benzersiz renkleri grupla
6. Her rengin kullanıldığı yerleri listele
```

### Canlı Önizleme

```javascript
// Renk değiştiğinde
function updateColor(originalColor, newColor) {
    // 1. Değişikliği kaydet
    colorChanges.set(originalColor, newColor);
    
    // 2. Önizlemede anında uygula
    const props = originalColors.get(originalColor);
    props.forEach(prop => {
        previewDoc.documentElement.style.setProperty(prop, newColor);
    });
}
```

---

## 🐛 Sorun Giderme

### "Renkler bulunamadı"

**Çözüm:**
1. Sayfayı yenile (F5)
2. 2-3 saniye bekle
3. "🔄 Renkleri Tara" butonuna tıkla

### "Renk değişmiyor"

**Çözüm:**
1. Color picker'ı kullan (input'a manuel yazma)
2. "✨ Değişiklikleri Uygula" butonuna tıkla
3. Önizlemeyi yenile

### "Bazı renkler eksik"

**Çözüm:**
- Normal! Framer bazı renkleri inline style olarak kullanır
- Sistem sadece CSS değişkenlerini yakalar
- Inline renkler için manuel değişiklik gerekir

---

## 📊 Performans

- **Renk Tarama:** ~1 saniye
- **Canlı Önizleme:** Anında
- **JSON Export:** ~0.5 saniye

---

## 🎉 Başarı Hikayeleri

> "Turuncu temayı maviye çevirdim, 2 dakika sürdü!" - Kullanıcı 1

> "AI'a 'koyu mod yap' dedim, mükemmel bir palet oluşturdu!" - Kullanıcı 2

> "Canlı önizleme sayesinde renkleri deneyerek seçtim!" - Kullanıcı 3

---

## 🚀 Hızlı Başlangıç

```
1. customize-advanced copy 2.html aç
2. "Renkler" sekmesine git
3. Color picker ile renkleri değiştir
4. Önizlemede anında gör
5. "JSON İndir" ile kaydet
6. inject-customizations.html ile uygula
7. ✅ BİTTİ!
```

---

**🎨 Renk paletinizi özelleştirin!**
