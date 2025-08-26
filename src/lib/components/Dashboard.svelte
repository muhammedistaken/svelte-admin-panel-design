<script lang="ts">
    const stats = [
        { title: "Toplam Kullanıcı", value: "2,543", change: "+12.5%", trend: "up" },
        { title: "Gelir", value: "₺345,210", change: "+8.2%", trend: "up" },
        { title: "Siparişler", value: "1,234", change: "-2.1%", trend: "down" },
        { title: "Oturumlar", value: "8,432", change: "+18.7%", trend: "up" }
    ];

    const chartData = [40, 65, 45, 80, 60, 75, 90, 70, 55, 85, 70, 95];
    const devices = [
        { label: "Masaüstü", value: 65, color: "bg-black" },
        { label: "Mobil", value: 25, color: "bg-black/60" },
        { label: "Tablet", value: 10, color: "bg-black/30" }
    ];

    const orders = [
        { id: "#1001", customer: "Mehmet Kaya", amount: "₺429.00", status: "Tamamlandı", date: "26 Ağu 2025", statusColor: "green" },
        { id: "#1002", customer: "Ayşe Demir", amount: "₺289.50", status: "Bekliyor", date: "25 Ağu 2025", statusColor: "yellow" },
        { id: "#1003", customer: "Ali Yılmaz", amount: "₺999.99", status: "Tamamlandı", date: "25 Ağu 2025", statusColor: "green" },
        { id: "#1004", customer: "Fatma Özkan", amount: "₺359.75", status: "İşleniyor", date: "24 Ağu 2025", statusColor: "blue" },
        { id: "#1005", customer: "Mustafa Çelik", amount: "₺189.99", status: "İptal", date: "24 Ağu 2025", statusColor: "red" }
    ];

    let weeklyData = Array.from({ length: 7 }, (_, i) => ({
        day: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'][i],
        value: Math.floor(Math.random() * 100) + 20
    }));
</script>

<div class="flex-1 p-4 h-full overflow-y-auto scrollbar">
    <div class="mb-8">
        <h1 class="text-2xl font-light text-black/80 mb-2">Ana Sayfa</h1>
        <p class="text-sm text-black/50">Hoş geldiniz! İşletmenizde bugün neler oluyor.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {#each stats as stat}
            <div class="bg-white border border-black/10 p-6 rounded-none hover:border-black/20 transition-colors">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-sm font-medium text-black/60">{stat.title}</h3>
                    <span class="text-xs font-medium {stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
                        {stat.change}
                    </span>
                </div>
                <p class="text-2xl font-light text-black/80">{stat.value}</p>
                <div class="mt-3 h-1 bg-black/5 rounded-full overflow-hidden">
                    <div class="h-full {stat.trend === 'up' ? 'bg-green-500' : 'bg-red-500'} rounded-full" style="width: {Math.abs(parseFloat(stat.change))}%"></div>
                </div>
            </div>
        {/each}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-black/10 p-6 rounded-none">
            <h3 class="text-lg font-light text-black/70 mb-4">Aylık Satışlar</h3>
            <div class="h-48 flex items-end justify-between gap-1">
                {#each chartData as value, i}
                    <div 
                        class="bg-black/70 transition-all duration-500 hover:bg-black/90 cursor-pointer"
                        style="height: {value}%; width: calc(100% / {chartData.length} - 2px);"
                        title="Month {i + 1}: {value}%"
                    ></div>
                {/each}
            </div>
            <div class="flex justify-between text-xs text-black/40 mt-2">
                <span>Oca</span>
                <span>Mar</span>
                <span>Haz</span>
                <span>Eyl</span>
                <span>Ara</span>
            </div>
        </div>

        <div class="bg-white border border-black/10 p-6 rounded-none">
            <h3 class="text-lg font-light text-black/70 mb-4">Haftalık Trafik</h3>
            <div class="h-48 relative">
                <svg class="w-full h-full" viewBox="0 0 280 180">
                    {#each Array(5) as _, i}
                        <line x1="0" y1="{36 * i}" x2="280" y2="{36 * i}" stroke="#000" stroke-opacity="0.05" stroke-width="1"/>
                    {/each}
                    
                    <polyline
                        points="{weeklyData.map((point, i) => `${40 * i},${180 - (point.value * 1.5)}`).join(' ')}"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        stroke-opacity="0.8"
                    />
                    
                    {#each weeklyData as point, i}
                        <circle
                            cx="{40 * i}"
                            cy="{180 - (point.value * 1.5)}"
                            r="3"
                            fill="#000"
                            fill-opacity="0.8"
                        />
                    {/each}
                </svg>
            </div>
            <div class="flex justify-between text-xs text-black/40 mt-2">
                {#each weeklyData as point}
                    <span>{point.day}</span>
                {/each}
            </div>
        </div>

        <div class="bg-white border border-black/10 p-6 rounded-none">
            <h3 class="text-lg font-light text-black/70 mb-4">Cihaz Kullanımı</h3>
            <div class="space-y-4">
                {#each devices as item}
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-3 h-3 {item.color} rounded-full"></div>
                            <span class="text-sm text-black/70">{item.label}</span>
                        </div>
                        <span class="text-sm font-medium text-black/80">{item.value}%</span>
                    </div>
                    <div class="w-full bg-black/5 h-2 rounded-full overflow-hidden">
                        <div class="{item.color} h-full rounded-full transition-all duration-1000" style="width: {item.value}%"></div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="bg-white border border-black/10 p-6 rounded-none">
            <h3 class="text-lg font-light text-black/70 mb-4">Son Aktiviteler</h3>
            <div class="space-y-4">
                <div class="flex items-center gap-4 py-2 border-b border-black/5">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-black/70">New user registered</p>
                        <p class="text-xs text-black/40">2 minutes ago</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 py-2 border-b border-black/5">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-black/70">Order #1234 completed</p>
                        <p class="text-xs text-black/40">15 minutes ago</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 py-2 border-b border-black/5">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-black/70">Payment received</p>
                        <p class="text-xs text-black/40">1 hour ago</p>
                    </div>
                </div>
                <div class="flex items-center gap-4 py-2">
                    <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-black/70">System backup completed</p>
                        <p class="text-xs text-black/40">2 hours ago</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recent Orders Table -->
        <div class="lg:col-span-2 bg-white border border-black/10 rounded-none">
            <div class="p-6 border-b border-black/5">
                <div class="flex items-center justify-between">
                    <h3 class="text-lg font-light text-black/70">Son Siparişler</h3>
                    <button class="text-sm text-black/50 hover:text-black/70 transition-colors">View All</button>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="border-b border-black/5">
                        <tr class="text-left">
                            <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Sipariş No</th>
                            <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Müşteri</th>
                            <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Tutar</th>
                            <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Durum</th>
                            <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Tarih</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-black/5">
                        {#each orders as order}
                            <tr class="hover:bg-black/2 transition-colors">
                                <td class="px-6 py-4 text-sm font-medium text-black/70">{order.id}</td>
                                <td class="px-6 py-4 text-sm text-black/70">{order.customer}</td>
                                <td class="px-6 py-4 text-sm font-medium text-black/80">{order.amount}</td>
                                <td class="px-6 py-4">
                                    <span class="px-2 py-1 text-xs rounded-full {order.statusColor === 'green' ? 'bg-green-100 text-green-800' : order.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-800' : order.statusColor === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}">
                                        {order.status}
                                    </span>
                                </td>
                                <td class="px-6 py-4 text-sm text-black/50">{order.date}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
