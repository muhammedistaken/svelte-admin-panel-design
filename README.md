# 🎯 Svelte Admin Panel - Yönetim Paneli

Modern ve minimalist tasarımla geliştirilmiş, Türkçe arayüze sahip yönetim paneli. Ultra-sade siyah/beyaz renk paleti ile profesyonel görünüm sunar.

## ✨ Özellikler

### 🎨 **Tasarım ve UI/UX**
- **Ultra-minimalist tasarım** - Sade siyah/beyaz renk paleti
- **Responsive tasarım** - Tüm cihazlarda mükemmel uyum
- **Animasyonlar** - Smooth geçişler ve hover efektleri
- **Modern tipografi** - Okunabilir ve şık font yapısı

### 🧭 **Navigasyon**
- **Collapsible sidebar** - Açılır/kapanır yan menü
- **Smart routing** - Özel routing sistemi
- **Breadcrumb navigation** - Kolay gezinti
- **Active state indicators** - Aktif sayfa göstergesi

### 👥 **Kullanıcı Yönetimi**
- **Tam CRUD işlemleri** - Kullanıcı ekleme, silme, düzenleme
- **Filtreleme sistemi** - Rol ve durum bazlı filtreleme
- **Arama özelliği** - Real-time arama
- **Modal dialogs** - Kullanıcı dostu form arayüzü
- **Avatar sistemi** - Otomatik avatar oluşturma

### 📊 **Dashboard**
- **İstatistik kartları** - Özet bilgiler
- **Gerçek zamanlı veriler** - Canlı güncellemeler
- **Türkçe tarih formatı** - Yerelleştirilmiş tarihler
- **Sistem durumu** - Canlı sistem bilgileri

### ⚙️ **Ayarlar**
- **Toggle switches** - Etkileşimli ayar kontrolleri
- **Tema ayarları** - Görünüm seçenekleri
- **Bildirim ayarları** - Özelleştirilebilir bildirimler
- **Hesap yönetimi** - Kullanıcı profil ayarları

### 📈 **Analitik**
- **Veri görselleştirme** - Grafikler ve tablolar
- **Export özelliği** - Veri dışa aktarma
- **Filtreleme** - Tarih ve kategori bazlı
- **İstatistiksel özetler** - Önemli metriklerin görüntülenmesi

## 🛠 Teknik Özellikler

### **Frontend Stack**
- **[Svelte 5.38.1](https://svelte.dev/)** - Modern reactive framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4.1.12](https://tailwindcss.com/)** - Utility-first CSS
- **[Vite 7.1.2](https://vitejs.dev/)** - Lightning fast build tool

### **Development Tools**
- **[Bun](https://bun.sh/)** - Fast package manager ve runtime
- **[Svelte Check](https://github.com/sveltejs/language-tools)** - TypeScript validation
- **ESM modules** - Modern module system
- **Hot Module Replacement** - Instant development feedback

### **Architecture**
- **Component-based architecture** - Modüler yapı
- **Custom router** - Lightweight routing solution
- **Svelte stores** - State management
- **Reactive programming** - Otomatik UI güncellemeleri

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- **Node.js 18+** veya **Bun 1.0+**
- Modern web browser

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/muhammedistaken/svelte-admin-panel-design.git
cd svelte-admin-panel-design
```

### 2. Bağımlılıkları Yükleyin
```bash
# Bun kullanarak (önerilen)
bun install

# veya npm ile
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
# Bun ile
bun dev

# veya npm ile
npm run dev
```

### 4. Production Build
```bash
# Bun ile
bun run build

# veya npm ile
npm run build
```

### 5. Build'i Önizleyin
```bash
# Bun ile
bun run preview

# veya npm ile
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── lib/
│   ├── components/         # Ana bileşenler
│   │   ├── Dashboard.svelte    # Ana sayfa bileşeni
│   │   ├── Users.svelte        # Kullanıcı yönetimi
│   │   ├── Analytics.svelte    # Analitik sayfası
│   │   ├── Settings.svelte     # Ayarlar sayfası
│   │   └── ToggleSwitch.svelte # Toggle bileşeni
│   ├── layouts/            # Layout bileşenleri
│   │   ├── Header.svelte       # Sidebar navigation
│   │   └── Panel.svelte        # Ana layout wrapper
│   └── stores/             # State management
│       └── router.ts           # Custom routing system
├── assets/                 # Static assets
├── app.css                # Global styles
├── App.svelte             # Root component
└── main.ts                # Entry point
```

## 🎮 Kullanım Kılavuzu

### **Sidebar Navigation**
- **Toggle Button**: Sağ üstteki yuvarlak buton ile sidebar'ı açıp kapatabilirsiniz
- **Menu Items**: Ana Sayfa, Kullanıcılar, Analitik, Ayarlar sayfalarına erişim
- **Responsive**: Kapalı durumda sadece ikonlar görünür

### **Kullanıcı Yönetimi**
- **Kullanıcı Ekleme**: "Yeni Kullanıcı Ekle" butonu ile modal açılır
- **Filtreleme**: Rol ve durum bazlı filtreleme seçenekleri
- **Arama**: Gerçek zamanlı kullanıcı arama
- **Silme**: Onay dialog'u ile güvenli kullanıcı silme

### **Dashboard**
- **İstatistik Kartları**: Toplam kullanıcı, aktif kullanıcı, beklemede, pasif
- **Sistem Durumu**: Gerçek zamanlı sistem sağlık göstergesi
- **Kullanıcı Profili**: Sidebar'da giriş yapan kullanıcı bilgileri

## 🎨 Tema ve Tasarım

### **Renk Paleti**
- **Primary**: Siyah (#000000)
- **Background**: Beyaz (#FFFFFF)
- **Text**: Siyah tonları (opacity variations)
- **Borders**: Siyah/10 opacity
- **Hover States**: Siyah/5 opacity

### **Typography**
- **Font Weight**: Light (300) ağırlıklı
- **Font Size**: 14px base size
- **Line Height**: 1.5 optimal okunabilirlik

### **Spacing**
- **Padding**: 4px multiples (Tailwind spacing)
- **Margins**: Consistent vertical rhythm
- **Border Radius**: Minimal (2px default)

## 🔧 Özelleştirme

### **Renk Teması Değiştirme**
```css
/* app.css içinde */
:root {
  --primary-color: #000000;
  --background-color: #ffffff;
  --text-color: rgba(0, 0, 0, 0.8);
}
```

### **Yeni Sayfa Ekleme**
1. `src/lib/components/` altında yeni `.svelte` dosyası oluşturun
2. `src/lib/stores/router.ts` dosyasına route ekleyin
3. `Header.svelte` dosyasına navigation item ekleyin

### **Yeni Bileşen Ekleme**
```svelte
<!-- src/lib/components/YeniAilenen.svelte -->
<script lang="ts">
  // Component logic
</script>

<!-- Template -->
<div class="p-4">
  <!-- Content -->
</div>
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

**@muhammedd.tsx**
- GitHub: [@muhammedistaken](https://github.com/muhammedistaken)

## 🙏 Teşekkürler

- [Svelte Team](https://svelte.dev/) - Amazing reactive framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework  
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime

---

⭐ **Bu projeyi beğendiyseniz yıldızlamayı unutmayın!**
