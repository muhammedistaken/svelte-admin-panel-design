<script lang="ts">
    import { currentPage, navigate } from '../stores/router';
    
    const user = {
        name: "Mehmet Demir",
        role: "Admin",
        avatar: "MD"
    };

    const stats = [
        { label: "Users", value: "2.5K" },
        { label: "Revenue", value: "$45K" },
        { label: "Orders", value: "1.2K" }
    ];

    let sidebarOpen = true;

    const toggleSidebar = () => sidebarOpen = !sidebarOpen;
</script>

<header class="h-full bg-transparent flex flex-col relative border-r border-black/20 transition-all duration-300 overflow-visible" style="width: {sidebarOpen ? '25%' : '60px'};">
    
    <button 
        on:click={toggleSidebar}
        class="cursor-pointer absolute -right-3 top-6 w-6 h-6 bg-white border border-black/20 rounded-full flex items-center justify-center z-50 hover:border-black/40 hover:shadow-md transition-all duration-200 shadow-sm"
    >
        <span class="text-xs transform transition-transform duration-300 {sidebarOpen ? 'rotate-0' : 'rotate-180'}">‹</span>
    </button>
    <div class="px-4 py-6 border-b border-black/10 transition-all duration-300" style="visibility: {sidebarOpen ? 'visible' : 'hidden'}; pointer-events: {sidebarOpen ? 'auto' : 'none'};">
        <div class="text-center mb-4">
            <h1 class="text-xl font-light text-black/70 mb-1">YÖNETİM PANELİ</h1>
            <p class="text-xs text-black/40">Kontrol Paneli</p>
        </div>
        
        <div class="bg-black/2 border border-black/5 p-3 rounded-sm">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center text-xs font-medium text-black/70">
                    {user.avatar}
                </div>
                <div class="flex-1">
                    <p class="text-sm font-medium text-black/80">{user.name}</p>
                    <p class="text-xs text-black/50">{user.role}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex-1 flex flex-col pt-6 pb-6 transition-all duration-300">
        <nav class="flex-1 flex flex-col">
            <div class="mb-6">
                <h3 class="px-4 text-xs font-medium text-black/40 uppercase tracking-wide mb-3" style="visibility: {sidebarOpen ? 'visible' : 'hidden'};">Menü</h3>
                <ul class="flex flex-col gap-2">
                    <li>
                        <button 
                            class="w-full text-left px-4 py-2 text-sm cursor-pointer border-l-2 transition-all duration-200 {$currentPage === 'Dashboard' ? 'text-black border-black bg-black/2' : 'text-black/60 border-transparent hover:text-black/80 hover:bg-black/1'}"
                            on:click={() => navigate('Dashboard')}
                            title="Ana Sayfa"
                        >
                            <span class="flex items-center gap-2">
                                <span class="text-base">📊</span>
                                {#if sidebarOpen}<span>Ana Sayfa</span>{/if}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button 
                            class="w-full text-left px-4 py-2 text-sm cursor-pointer border-l-2 transition-all duration-200 {$currentPage === 'Users' ? 'text-black border-black bg-black/2' : 'text-black/60 border-transparent hover:text-black/80 hover:bg-black/1'}"
                            on:click={() => navigate('Users')}
                            title="Kullanıcılar"
                        >
                            <span class="flex items-center gap-2">
                                <span class="text-base">👥</span>
                                {#if sidebarOpen}<span>Kullanıcılar</span>{/if}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button 
                            class="w-full text-left px-4 py-2 text-sm cursor-pointer border-l-2 transition-all duration-200 {$currentPage === 'Analytics' ? 'text-black border-black bg-black/2' : 'text-black/60 border-transparent hover:text-black/80 hover:bg-black/1'}"
                            on:click={() => navigate('Analytics')}
                            title="Analitik"
                        >
                            <span class="flex items-center gap-2">
                                <span class="text-base">📈</span>
                                {#if sidebarOpen}<span>Analitik</span>{/if}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button 
                            class="w-full text-left px-4 py-2 text-sm cursor-pointer border-l-2 transition-all duration-200 {$currentPage === 'Settings' ? 'text-black border-black bg-black/2' : 'text-black/60 border-transparent hover:text-black/80 hover:bg-black/1'}"
                            on:click={() => navigate('Settings')}
                            title="Ayarlar"
                        >
                            <span class="flex items-center gap-2">
                                <span class="text-base">⚙️</span>
                                {#if sidebarOpen}<span>Ayarlar</span>{/if}
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="px-4 border-t border-black/10 pt-4 transition-all duration-300" style="visibility: {sidebarOpen ? 'visible' : 'hidden'}; pointer-events: {sidebarOpen ? 'auto' : 'none'};">
            <h3 class="text-xs font-medium text-black/40 uppercase tracking-wide mb-3">Özet</h3>
            <div class="space-y-2">
                {#each stats as stat}
                    <div class="flex items-center justify-between py-1">
                        <span class="text-xs text-black/60">{stat.label}</span>
                        <span class="text-xs font-medium text-black/80">{stat.value}</span>
                    </div>
                {/each}
            </div>
        </div>

        <div class="px-4 mt-4 border-t border-black/10 pt-4 transition-all duration-300" style="visibility: {sidebarOpen ? 'visible' : 'hidden'}; pointer-events: {sidebarOpen ? 'auto' : 'none'};">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-black/60">Sistem</span>
                <div class="flex items-center gap-1">
                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span class="text-xs text-green-600">Çevrimiçi</span>
                </div>
            </div>
            <div class="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                <div class="bg-green-500 h-full rounded-full" style="width: 85%"></div>
            </div>
            <p class="text-xs text-black/40 mt-1">%85</p>
        </div>
    </div>
</header>