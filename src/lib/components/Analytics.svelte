<script lang="ts">
    const analyticsData = {
        pageViews: [
            { page: "/ana-sayfa", views: 12540, percentage: 35 },
            { page: "/kullanicilar", views: 8920, percentage: 25 },
            { page: "/urunler", views: 6780, percentage: 19 },
            { page: "/ayarlar", views: 4320, percentage: 12 },
            { page: "/analitik", views: 3210, percentage: 9 }
        ],
        trafficSources: [
            { source: "Doğrudan", visitors: 15240, percentage: 42 },
            { source: "Arama Motorları", visitors: 11850, percentage: 33 },
            { source: "Sosyal Medya", visitors: 5680, percentage: 16 },
            { source: "Yönlendirme", visitors: 3240, percentage: 9 }
        ],
        browserStats: [
            { browser: "Chrome", users: 18540, percentage: 68 },
            { browser: "Firefox", users: 4320, percentage: 16 },
            { browser: "Safari", users: 2890, percentage: 11 },
            { browser: "Edge", users: 1350, percentage: 5 }
        ],
        monthlyData: [
            { month: "Oca", revenue: 12000, orders: 240 },
            { month: "Şub", revenue: 15000, orders: 290 },
            { month: "Mar", revenue: 18000, orders: 350 },
            { month: "Nis", revenue: 16000, orders: 310 },
            { month: "May", revenue: 22000, orders: 420 },
            { month: "Haz", revenue: 25000, orders: 480 },
            { month: "Tem", revenue: 28000, orders: 520 },
            { month: "Ağu", revenue: 32000, percentage: 85 }
        ]
    };

    const conversionRate = 3.2;
    const avgSessionDuration = "2dk 34sn";
    const bounceRate = 42.5;
</script>

<div class="flex-1 p-4 h-full overflow-y-auto scrollbar">
    
    <div class="mb-8">
        <h1 class="text-2xl font-light text-black/80 mb-2">Analitik</h1>
        <p class="text-sm text-black/50">Uygulama performansı ve kullanıcı davranışları hakkında detaylı bilgiler</p>
    </div>

    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-sm font-medium text-black/60 mb-2">Dönüşüm Oranı</h3>
            <p class="text-2xl font-light text-black/80">{conversionRate}%</p>
            <div class="mt-3 h-1 bg-black/5 rounded-full overflow-hidden">
                <div class="h-full bg-green-500 rounded-full" style="width: {conversionRate * 10}%"></div>
            </div>
        </div>
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-sm font-medium text-black/60 mb-2">Ort. Oturum Süresi</h3>
            <p class="text-2xl font-light text-black/80">{avgSessionDuration}</p>
            <div class="mt-3 h-1 bg-black/5 rounded-full overflow-hidden">
                <div class="h-full bg-blue-500 rounded-full" style="width: 65%"></div>
            </div>
        </div>
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-sm font-medium text-black/60 mb-2">Çıkma Oranı</h3>
            <p class="text-2xl font-light text-black/80">{bounceRate}%</p>
            <div class="mt-3 h-1 bg-black/5 rounded-full overflow-hidden">
                <div class="h-full bg-orange-500 rounded-full" style="width: {bounceRate}%"></div>
            </div>
        </div>
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-sm font-medium text-black/60 mb-2">Sayfa Görüntüleme</h3>
            <p class="text-2xl font-light text-black/80">35,8K</p>
            <div class="mt-3 h-1 bg-black/5 rounded-full overflow-hidden">
                <div class="h-full bg-purple-500 rounded-full" style="width: 78%"></div>
            </div>
        </div>
    </div>

    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-lg font-light text-black/70 mb-4">Gelir Trendi</h3>
            <div class="h-48 relative">
                <svg class="w-full h-full" viewBox="0 0 400 180">
                    
                    {#each Array(6) as _, i}
                        <line x1="0" y1="{30 * i}" x2="400" y2="{30 * i}" stroke="#000" stroke-opacity="0.05" stroke-width="1"/>
                    {/each}
                    
                    
                    <polyline
                        points="{analyticsData.monthlyData.map((point, i) => `${50 * i},${180 - (point.revenue / 500)}`).join(' ')}"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        stroke-opacity="0.8"
                    />
                    
                    
                    {#each analyticsData.monthlyData as point, i}
                        <circle
                            cx="{50 * i}"
                            cy="{180 - (point.revenue / 500)}"
                            r="3"
                            fill="#000"
                            fill-opacity="0.8"
                        />
                    {/each}
                </svg>
            </div>
            <div class="flex justify-between text-xs text-black/40 mt-2">
                {#each analyticsData.monthlyData.slice(0, 6) as point}
                    <span>{point.month}</span>
                {/each}
            </div>
        </div>

        
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-lg font-light text-black/70 mb-4">Popüler Sayfalar</h3>
            <div class="space-y-4">
                {#each analyticsData.pageViews as page}
                    <div class="flex items-center justify-between">
                        <div class="flex-1">
                            <p class="text-sm font-medium text-black/70">{page.page}</p>
                            <div class="w-full bg-black/5 h-2 rounded-full overflow-hidden mt-1">
                                <div class="bg-black/60 h-full rounded-full transition-all duration-1000" style="width: {page.percentage}%"></div>
                            </div>
                        </div>
                        <div class="ml-4 text-right">
                            <span class="text-sm font-medium text-black/80">{page.views.toLocaleString()}</span>
                            <p class="text-xs text-black/50">{page.percentage}%</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-lg font-light text-black/70 mb-4">Trafik Kaynakları</h3>
            <div class="space-y-4">
                {#each analyticsData.trafficSources as source}
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-3 h-3 bg-black/{source.percentage + 20} rounded-full"></div>
                            <span class="text-sm text-black/70">{source.source}</span>
                        </div>
                        <div class="text-right">
                            <span class="text-sm font-medium text-black/80">{source.visitors.toLocaleString()}</span>
                            <p class="text-xs text-black/50">{source.percentage}%</p>
                        </div>
                    </div>
                    <div class="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                        <div class="bg-black/{source.percentage + 20} h-full rounded-full transition-all duration-1000" style="width: {source.percentage}%"></div>
                    </div>
                {/each}
            </div>
        </div>

        
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-lg font-light text-black/70 mb-4">Tarayıcı İstatistikleri</h3>
            <div class="space-y-4">
                {#each analyticsData.browserStats as browser}
                    <div class="flex items-center justify-between py-2">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center text-xs font-medium text-black/70">
                                {browser.browser.charAt(0)}
                            </div>
                            <span class="text-sm text-black/70">{browser.browser}</span>
                        </div>
                        <div class="text-right">
                            <span class="text-sm font-medium text-black/80">{browser.users.toLocaleString()}</span>
                            <p class="text-xs text-black/50">{browser.percentage}%</p>
                        </div>
                    </div>
                    <div class="w-full bg-black/5 h-1 rounded-full overflow-hidden">
                        <div class="bg-black/70 h-full rounded-full transition-all duration-1000" style="width: {browser.percentage}%"></div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
