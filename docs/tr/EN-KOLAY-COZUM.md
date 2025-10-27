# ⚡ EN KOLAY ÇÖZÜM - Dosya İsimlerini Değiştir

## 🎯 Sorun

```
Framer bekliyor: /about
Senin dosyan: ajans.html
Sonuç: Bulamıyor ❌
```

## ✅ En Kolay Çözüm

**Dosya isimlerini Framer'ın beklediği isimlere çevir!**

```
ajans.html → about.html ✅
```

---

## 🚀 3 Adımda Çözüm

### Adım 1: Otomatik Yeniden Adlandır

1. **`dosya-adlarini-duzenle.html`** dosyasını tarayıcıda aç
2. **"HTML Dosyalarını Seç"** tıkla
3. **Tüm HTML dosyalarını seç** (Ctrl+A)
4. **"Dosyaları Yeniden Adlandır ve İndir"** tıkla
5. Dosyalar otomatik indirilecek (yeni isimlerle)

### Adım 2: Dosyaları Kopyala

İndirilen dosyaları eski dosyaların üzerine kopyala:

```
C:\Users\DENİZ\Desktop\site türkce\
├── index.html (eski: anasayfa.html)
├── about.html (eski: ajans.html)
├── project-lobby.html (eski: projeler/Projeler anasayfa.html)
├── blog-lobby.html (eski: haberler/haberleranasayfa.html)
├── pricing.html (eski: projeler/teklifler.html)
└── contact.html (eski: iletisim.html)
```

### Adım 3: Eski Dosyaları Sil

Eski isimlerdeki dosyaları sil:
- ❌ `anasayfa.html` → Sil
- ❌ `ajans.html` → Sil
- ❌ `projeler/` klasörü → Sil
- ❌ `haberler/` klasörü → Sil

---

## 📋 Dosya İsmi Eşleştirmesi

| Eski İsim | Yeni İsim | Framer Route |
|-----------|-----------|--------------|
| `anasayfa.html` | `index.html` | `/` |
| `ajans.html` | `about.html` | `/about` |
| `projeler/Projeler anasayfa.html` | `project-lobby.html` | `/project-lobby` |
| `haberler/haberleranasayfa.html` | `blog-lobby.html` | `/blog-lobby` |
| `projeler/teklifler.html` | `pricing.html` | `/pricing` |
| `iletisim.html` | `contact.html` | `/contact` |

---

## 💡 Neden Bu Daha İyi?

### ✅ Avantajlar:
1. **Tek seferlik işlem** - Bir kere yap, sonsuza kadar çalışır
2. **Hiçbir kod değişikliği yok** - Framer aynen çalışır
3. **SEO dostu** - `/about`, `/projects` gibi temiz URL'ler
4. **Kolay bakım** - Standart dosya isimleri
5. **Hızlı** - 3 dakikada biter

### ❌ Diğer Yöntemlerin Dezavantajları:
- Script ekleme → Her dosyaya eklemen lazım
- Link değiştirme → Binlerce link değiştirmen lazım
- Routing fix → Karmaşık ve hata riski

---

## 🎯 Sonuç

### Önce:
```
Navbar → "Ajans" tıkla
→ Framer /about arıyor
→ ajans.html bulamıyor
→ İngilizce içerik ❌
```

### Sonra:
```
Navbar → "Ajans" tıkla
→ Framer /about arıyor
→ about.html buluyor
→ Türkçe içerik ✅
```

---

## 🔧 Manuel Yeniden Adlandırma

Otomatik araç çalışmazsa, manuel olarak yeniden adlandır:

### Windows:
```
1. Dosyaya sağ tık
2. "Yeniden adlandır"
3. Yeni ismi yaz (about.html)
4. Enter
```

### Toplu Yeniden Adlandırma (CMD):
```cmd
cd "C:\Users\DENİZ\Desktop\site türkce"
ren anasayfa.html index.html
ren ajans.html about.html
ren "projeler\Projeler anasayfa.html" project-lobby.html
move "projeler\Projeler anasayfa.html" project-lobby.html
```

---

## ⚠️ Önemli Notlar

1. **Klasör yapısını düzelt:**
   ```
   Önce:
   ├── haberler/
   │   └── haberleranasayfa.html
   
   Sonra:
   └── blog-lobby.html (ana klasörde)
   ```

2. **customizations.json'u kopyala:**
   ```
   Her dosyanın yanında customizations.json olmalı
   ```

3. **Yedek al:**
   ```
   Önce tüm dosyaları yedekle!
   ```

---

## 🎉 Başarı Kontrol Listesi

- [ ] `dosya-adlarini-duzenle.html` ile dosyaları yeniden adlandırdım
- [ ] İndirilen dosyaları kopyaladım
- [ ] Eski dosyaları sildim
- [ ] Klasör yapısını düzelttim (alt klasörleri kaldırdım)
- [ ] `customizations.json` her dosyanın yanında
- [ ] `index.html` açtım ve test ettim
- [ ] Navbar'dan "Ajans" tıkladım
- [ ] `about.html` açıldı ve Türkçe görünüyor ✅

---

**🎉 Sorun çözüldü! En kolay yöntem!**

**Toplam Süre:** 3 dakika  
**Zorluk:** Çok kolay  
**Kalıcılık:** Sonsuza kadar çalışır
