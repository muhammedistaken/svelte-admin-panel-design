<script lang="ts">
    let settings = {
        general: {
            siteName: "Admin Panel",
            siteDescription: "Professional dashboard for managing your application",
            timezone: "UTC+3",
            language: "English",
            theme: "Light"
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
        alert('Settings saved successfully!');
    }

    const tabs = [
        { id: 'general', name: 'General', icon: '⚙️' },
        { id: 'notifications', name: 'Notifications', icon: '🔔' },
        { id: 'security', name: 'Security', icon: '🔒' },
        { id: 'advanced', name: 'Advanced', icon: '🛠️' }
    ];
</script>

<div class="flex-1 p-8 bg-gray-50/30">
    <div class="mb-8">
        <h1 class="text-2xl font-light text-black/80 mb-2">Settings</h1>
        <p class="text-sm text-black/50">Configure your application preferences and system settings</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div class="lg:col-span-1">
            <div class="border-l-2 border-black/10 pl-6">
                <h3 class="text-sm font-medium text-black/60 mb-6">Categories</h3>
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
                        <h3 class="text-lg font-light text-black/80 mb-6 pb-3 border-b border-black/10">General Settings</h3>
                        <div class="space-y-6">
                            <div>
                                <label for="siteName" class="block text-sm font-medium text-black/70 mb-2">Site Name</label>
                                <input 
                                    id="siteName"
                                    type="text" 
                                    bind:value={settings.general.siteName}
                                    class="w-full px-4 py-3 border border-black/20 bg-white focus:border-black/40 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label for="siteDescription" class="block text-sm font-medium text-black/70 mb-2">Site Description</label>
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
                        <h3 class="text-lg font-light text-black/80 mb-6 pb-3 border-b border-black/10">Notification Settings</h3>
                        <div class="space-y-6">
                            <div class="flex items-center justify-between py-4 border-b border-black/5">
                                <div>
                                    <p class="text-sm font-medium text-black/80">Email Notifications</p>
                                    <p class="text-xs text-black/50">Receive notifications via email</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" bind:checked={settings.notifications.emailNotifications} class="sr-only peer">
                                    <div class="w-11 h-6 bg-black/10 peer-focus:outline-none border border-black/20 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-black/20 after:border after:h-4 after:w-4 after:transition-all peer-checked:bg-black peer-checked:border-black"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                {/if}

                {#if activeTab === 'security'}
                    <div>
                        <h3 class="text-lg font-light text-black/80 mb-6 pb-3 border-b border-black/10">Security Settings</h3>
                        <div class="space-y-6">
                            <div class="flex items-center justify-between py-4 border-b border-black/5">
                                <div>
                                    <p class="text-sm font-medium text-black/80">Two-Factor Authentication</p>
                                    <p class="text-xs text-black/50">Add an extra layer of security</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" bind:checked={settings.security.twoFactorAuth} class="sr-only peer">
                                    <div class="w-11 h-6 bg-black/10 peer-focus:outline-none border border-black/20 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-black/20 after:border after:h-4 after:w-4 after:transition-all peer-checked:bg-black peer-checked:border-black"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                {/if}

                {#if activeTab === 'advanced'}
                    <div>
                        <h3 class="text-lg font-light text-black/80 mb-6 pb-3 border-b border-black/10">Advanced Settings</h3>
                        <div class="space-y-6">
                            <div class="flex items-center justify-between py-4 border-b border-black/5">
                                <div>
                                    <p class="text-sm font-medium text-black/80">Debug Mode</p>
                                    <p class="text-xs text-black/50">Enable detailed error logging</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" bind:checked={settings.advanced.debugMode} class="sr-only peer">
                                    <div class="w-11 h-6 bg-black/10 peer-focus:outline-none border border-black/20 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-black/20 after:border after:h-4 after:w-4 after:transition-all peer-checked:bg-black peer-checked:border-black"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                {/if}

                <div class="pt-6 border-t border-black/10">
                    <div class="flex justify-end gap-4">
                        <button class="px-6 py-3 border border-black/20 text-black/70 hover:border-black/40 hover:text-black transition-colors cursor-pointer">
                            Reset
                        </button>
                        <button 
                            on:click={saveSettings}
                            class="px-6 py-3 bg-black text-white hover:bg-black/80 transition-colors cursor-pointer"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
