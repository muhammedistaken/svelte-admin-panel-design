<script lang="ts">
    import ToggleSwitch from './ToggleSwitch.svelte';
    
    let settings = {
        general: {
            siteName: "Yönetim Paneli",
            siteDescription: "İşletme yönetim paneli",
            timezone: "UTC+3",
            language: "Türkçe",
            theme: "Açık"
        },
        notifications: {
            emailNotifications: true,
            pushNotifications: false,
            smsNotifications: true,
            weeklyReports: true,
            systemAlerts: true
        },
        security: {
            twoFactorAuth: false,
            sessionTimeout: 30,
            passwordExpiry: 90,
            loginAttempts: 5
        },
        advanced: {
            debugMode: false,
            analyticsEnabled: true,
            cacheEnabled: true,
            compressionEnabled: true
        }
    };

    let activeTab = 'general';
    
    function setActiveTab(tab: string) {
        activeTab = tab;
    }

    function saveSettings() {
        alert('Ayarlar kaydedildi!');
    }

    const tabs = [
        { id: 'general', name: 'Genel', icon: '⚙️' },
        { id: 'notifications', name: 'Bildirimler', icon: '🔔' },
        { id: 'security', name: 'Güvenlik', icon: '🔒' },
        { id: 'advanced', name: 'Gelişmiş', icon: '🛠️' }
    ];
</script>

<div class="flex-1 p-4 h-full overflow-y-auto scrollbar">
    <div class="mb-8">
        <h1 class="text-2xl font-light text-black/80 mb-2">Ayarlar</h1>
        <p class="text-sm text-black/50">Sistem ayarlarını düzenleyin</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div class="lg:col-span-1">
            <div class="border-l-2 border-black/10 pl-6">
                <h3 class="text-sm font-medium text-black/60 mb-6">Kategoriler</h3>
                <nav class="space-y-3">
                    {#each tabs as tab}
                        <button
                            class="w-full flex items-center gap-3 px-3 py-3 text-sm transition-all duration-200 cursor-pointer border-l-2 {activeTab === tab.id ? 'text-black border-black bg-black/2' : 'text-black/60 border-transparent hover:text-black/80 hover:border-black/20'}"
                            on:click={() => setActiveTab(tab.id)}
                        >
                            <span>{tab.icon}</span>
                            {tab.name}
                        </button>
                    {/each}
                </nav>
            </div>
        </div>

        <div class="lg:col-span-3">
            <div class="space-y-8">
                {#if activeTab === 'general'}
                    <div>
                        <h3 class="text-lg font-light text-black/80 mb-6 pb-3 border-b border-black/10">Genel Ayarlar</h3>
                        <div class="space-y-6">
                            <div>
                                <label for="siteName" class="block text-sm font-medium text-black/70 mb-2">Site Adı</label>
                                <input 
                                    id="siteName"
                                    type="text" 
                                    bind:value={settings.general.siteName}
                                    class="w-full px-4 py-3 border border-black/20 bg-white focus:border-black/40 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label for="siteDescription" class="block text-sm font-medium text-black/70 mb-2">Site Açıklaması</label>
                                <textarea 
                                    id="siteDescription"
                                    bind:value={settings.general.siteDescription}
                                    class="w-full px-4 py-3 border border-black/20 bg-white focus:border-black/40 focus:outline-none transition-colors h-24 resize-none"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                {/if}

                {#if activeTab === 'notifications'}
                    <div>
                        <h3 class="text-lg font-light text-black/80 mb-6 pb-3 border-b border-black/10">Bildirim Ayarları</h3>
                        <div class="space-y-4">
                            <ToggleSwitch 
                                bind:checked={settings.notifications.emailNotifications}
                                label="E-posta Bildirimleri"
                                description="E-posta ile bildirim al"
                            />
                            <ToggleSwitch 
                                bind:checked={settings.notifications.pushNotifications}
                                label="Anlık Bildirimler"
                                description="Tarayıcı bildirimleri"
                            />
                            <ToggleSwitch 
                                bind:checked={settings.notifications.smsNotifications}
                                label="SMS Bildirimleri"
                                description="SMS ile bildirim al"
                            />
                            <ToggleSwitch 
                                bind:checked={settings.notifications.weeklyReports}
                                label="Haftalık Raporlar"
                                description="Haftalık özet raporu al"
                            />
                            <ToggleSwitch 
                                bind:checked={settings.notifications.systemAlerts}
                                label="Sistem Uyarıları"
                                description="Önemli sistem bildirimleri"
                            />
                        </div>
                    </div>
                {/if}

                {#if activeTab === 'security'}
                    <div>
                        <h3 class="text-lg font-light text-black/80 mb-6 pb-3 border-b border-black/10">Güvenlik Ayarları</h3>
                        <div class="space-y-6">
                            <ToggleSwitch 
                                bind:checked={settings.security.twoFactorAuth}
                                label="İki Faktörlü Doğrulama"
                                description="Ek güvenlik katmanı ekle"
                            />
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <div>
                                    <label for="sessionTimeout" class="block text-sm font-medium text-black/70 mb-2">Oturum Zaman Aşımı (dakika)</label>
                                    <input 
                                        id="sessionTimeout"
                                        type="number" 
                                        bind:value={settings.security.sessionTimeout}
                                        class="w-full px-4 py-3 border border-black/20 bg-white focus:border-black/40 focus:outline-none transition-colors"
                                        min="5"
                                        max="1440"
                                    />
                                </div>
                                <div>
                                    <label for="passwordExpiry" class="block text-sm font-medium text-black/70 mb-2">Şifre Süresi (gün)</label>
                                    <input 
                                        id="passwordExpiry"
                                        type="number" 
                                        bind:value={settings.security.passwordExpiry}
                                        class="w-full px-4 py-3 border border-black/20 bg-white focus:border-black/40 focus:outline-none transition-colors"
                                        min="30"
                                        max="365"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}

                {#if activeTab === 'advanced'}
                    <div>
                        <h3 class="text-lg font-light text-black/80 mb-6 pb-3 border-b border-black/10">Gelişmiş Ayarlar</h3>
                        <div class="space-y-4">
                            <ToggleSwitch 
                                bind:checked={settings.advanced.debugMode}
                                label="Hata Ayıklama Modu"
                                description="Detaylı hata kaydı etkinleştir"
                            />
                            <ToggleSwitch 
                                bind:checked={settings.advanced.analyticsEnabled}
                                label="Analitik"
                                description="Kullanıcı davranışı takibi"
                            />
                            <ToggleSwitch 
                                bind:checked={settings.advanced.cacheEnabled}
                                label="Önbellekleme"
                                description="Uygulama performansını artır"
                            />
                            <ToggleSwitch 
                                bind:checked={settings.advanced.compressionEnabled}
                                label="Sıkıştırma"
                                description="Bant genişliği kullanımını azalt"
                            />
                        </div>
                    </div>
                {/if}

                <div class="pt-6 border-t border-black/10">
                    <div class="flex justify-end gap-4">
                        <button class="px-6 py-3 border border-black/20 text-black/70 hover:border-black/40 hover:text-black transition-colors cursor-pointer">
                            Sıfırla
                        </button>
                        <button 
                            on:click={saveSettings}
                            class="px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors cursor-pointer"
                        >
                            Değişiklikleri Kaydet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
