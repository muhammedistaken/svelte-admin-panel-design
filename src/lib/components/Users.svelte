<script lang="ts">
    let users = [
        {
            id: 1,
            name: "Mehmet Yılmaz",
            email: "mehmet@firma.com",
            role: "Admin",
            status: "Aktif",
            joinDate: "15 Oca 2025",
            avatar: "MY"
        },
        {
            id: 2,
            name: "Ayşe Demir",
            email: "ayse@firma.com",
            role: "Kullanıcı",
            status: "Aktif",
            joinDate: "20 Şub 2025",
            avatar: "AD"
        },
        {
            id: 3,
            name: "Ahmet Kaya",
            email: "ahmet@firma.com",
            role: "Kullanıcı",
            status: "Pasif",
            joinDate: "10 Mar 2025",
            avatar: "AK"
        },
        {
            id: 4,
            name: "Fatma Özkan",
            email: "fatma@firma.com",
            role: "Moderatör",
            status: "Aktif",
            joinDate: "5 Nis 2025",
            avatar: "FÖ"
        },
        {
            id: 5,
            name: "Mustafa Çelik",
            email: "mustafa@firma.com",
            role: "Kullanıcı",
            status: "Beklemede",
            joinDate: "22 Ağu 2025",
            avatar: "MÇ"
        }
    ];

    let searchTerm = '';
    let selectedRole = 'Hepsi';
    let selectedStatus = 'Hepsi';
    let showAddModal = false;
    let newUser = {
        name: '',
        email: '',
        role: 'Kullanıcı',
        status: 'Aktif'
    };

    $: filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = selectedRole === 'Hepsi' || user.role === selectedRole;
        const matchesStatus = selectedStatus === 'Hepsi' || user.status === selectedStatus;
        
        return matchesSearch && matchesRole && matchesStatus;
    });

    function getStatusColor(status: string) {
        switch (status) {
            case 'Aktif': return 'bg-green-100 text-green-800';
            case 'Pasif': return 'bg-red-100 text-red-800';
            case 'Beklemede': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    function getRoleColor(role: string) {
        switch (role) {
            case 'Admin': return 'bg-purple-100 text-purple-800';
            case 'Moderatör': return 'bg-blue-100 text-blue-800';
            case 'Kullanıcı': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    function openAddModal() {
        showAddModal = true;
    }

    function closeAddModal() {
        showAddModal = false;
        newUser = { name: '', email: '', role: 'Kullanıcı', status: 'Aktif' };
    }

    function addUser() {
        if (newUser.name && newUser.email) {
            const avatar = newUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
            const today = new Date().toLocaleDateString('tr-TR', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
            });
            
            users = [...users, {
                id: users.length + 1,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                status: newUser.status,
                joinDate: today,
                avatar: avatar.substring(0, 2)
            }];
            closeAddModal();
        }
    }

    function deleteUser(userId: number) {
        if (confirm('Bu kullanıcıyı silmek istediğinizden emin misiniz?')) {
            users = users.filter(u => u.id !== userId);
        }
    }
</script>

<div class="flex-1 p-4 h-full overflow-y-auto scrollbar">
    <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
            <div>
                <h1 class="text-2xl font-light text-black/80 mb-2">Kullanıcılar</h1>
                <p class="text-sm text-black/50">Kullanıcıları ve yetkilerini yönetin</p>
            </div>
            <button 
                on:click={openAddModal}
                class="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors cursor-pointer"
            >
                Yeni Kullanıcı Ekle
            </button>
        </div>

        <div class="flex flex-wrap gap-4 items-center">
            <div class="flex-1 min-w-64">
                <input 
                    type="text" 
                    placeholder="Kullanıcı ara..."
                    bind:value={searchTerm}
                    class="w-full px-4 py-2 border border-black/20 bg-white text-sm focus:border-black/40 focus:outline-none transition-colors"
                />
            </div>
            <div class="flex gap-4">
                <select bind:value={selectedRole} class="px-3 py-2 border border-black/20 bg-white text-sm focus:border-black/40 focus:outline-none">
                    <option value="Hepsi">Tüm Roller</option>
                    <option value="Admin">Admin</option>
                    <option value="Moderatör">Moderatör</option>
                    <option value="Kullanıcı">Kullanıcı</option>
                </select>
                <select bind:value={selectedStatus} class="px-3 py-2 border border-black/20 bg-white text-sm focus:border-black/40 focus:outline-none">
                    <option value="Hepsi">Tüm Durumlar</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Pasif">Pasif</option>
                    <option value="Beklemede">Beklemede</option>
                </select>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-sm font-medium text-black/60 mb-2">Toplam Kullanıcı</h3>
            <p class="text-2xl font-light text-black/80">{users.length}</p>
        </div>
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-sm font-medium text-black/60 mb-2">Aktif Kullanıcı</h3>
            <p class="text-2xl font-light text-green-600">{users.filter(u => u.status === 'Aktif').length}</p>
        </div>
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-sm font-medium text-black/60 mb-2">Beklemede</h3>
            <p class="text-2xl font-light text-yellow-600">{users.filter(u => u.status === 'Beklemede').length}</p>
        </div>
        <div class="bg-white border border-black/10 p-6">
            <h3 class="text-sm font-medium text-black/60 mb-2">Pasif</h3>
            <p class="text-2xl font-light text-red-600">{users.filter(u => u.status === 'Pasif').length}</p>
        </div>
    </div>

    <div class="bg-white border border-black/10">
        <div class="p-6 border-b border-black/5">
            <h3 class="text-lg font-light text-black/70">Tüm Kullanıcılar ({filteredUsers.length})</h3>
        </div>
        
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="border-b border-black/5">
                    <tr class="text-left">
                        <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Kullanıcı</th>
                        <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Rol</th>
                        <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Durum</th>
                        <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">Katılım Tarihi</th>
                        <th class="px-6 py-3 text-xs font-medium text-black/60 uppercase tracking-wider">İşlemler</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-black/5">
                    {#each filteredUsers as user}
                        <tr class="hover:bg-black/2 transition-colors">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-4">
                                    <div class="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center text-sm font-medium text-black/70">
                                        {user.avatar}
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-black/80">{user.name}</p>
                                        <p class="text-xs text-black/50">{user.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <span class="px-2 py-1 text-xs rounded-full {getRoleColor(user.role)}">
                                    {user.role}
                                </span>
                            </td>
                            <td class="px-6 py-4">
                                <span class="px-2 py-1 text-xs rounded-full {getStatusColor(user.status)}">
                                    {user.status}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-black/60">{user.joinDate}</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-2">
                                    <button class="px-3 py-1 text-xs border border-black/20 hover:border-black/40 transition-colors">
                                        Düzenle
                                    </button>
                                    <button 
                                        on:click={() => deleteUser(user.id)}
                                        class="px-3 py-1 text-xs border border-red-300 text-red-600 hover:border-red-400 transition-colors"
                                    >
                                        Sil
                                    </button>
                                </div>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        {#if filteredUsers.length === 0}
            <div class="p-12 text-center">
                <p class="text-black/50">Kriterlere uygun kullanıcı bulunamadı.</p>
            </div>
        {/if}
    </div>
</div>

{#if showAddModal}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white border border-black/20 w-full max-w-md mx-4">
            <div class="px-6 py-4 border-b border-black/10">
                <h3 class="text-lg font-medium text-black/80">Yeni Kullanıcı Ekle</h3>
            </div>
            
            <div class="p-6 space-y-4">
                <div>
                    <label for="username" class="block text-sm font-medium text-black/70 mb-2">Ad Soyad</label>
                    <input 
                        type="text"
                        id="username"
                        bind:value={newUser.name}
                        placeholder="Kullanıcı adını girin"
                        class="w-full px-4 py-2 border border-black/20 bg-white focus:border-black/40 focus:outline-none transition-colors"
                    />
                </div>
                
                <div>
                    <label for="email" class="block text-sm font-medium text-black/70 mb-2">E-posta</label>
                    <input 
                        type="email"
                        id="email"
                        bind:value={newUser.email}
                        placeholder="E-posta adresini girin"
                        class="w-full px-4 py-2 border border-black/20 bg-white focus:border-black/40 focus:outline-none transition-colors"
                    />
                </div>
                
                <div>
                    <label for="role" class="block text-sm font-medium text-black/70 mb-2">Rol</label>
                    <select id="role" bind:value={newUser.role} class="w-full px-4 py-2 border border-black/20 bg-white focus:border-black/40 focus:outline-none">
                        <option value="Kullanıcı">Kullanıcı</option>
                        <option value="Moderatör">Moderatör</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                
                <div>
                    <label for="status" class="block text-sm font-medium text-black/70 mb-2">Durum</label>
                    <select id="status" bind:value={newUser.status} class="w-full px-4 py-2 border border-black/20 bg-white focus:border-black/40 focus:outline-none">
                        <option value="Aktif">Aktif</option>
                        <option value="Beklemede">Beklemede</option>
                        <option value="Pasif">Pasif</option>
                    </select>
                </div>
            </div>
            
            <div class="px-6 py-4 border-t border-black/10 flex justify-end gap-3">
                <button 
                    on:click={closeAddModal}
                    class="px-4 py-2 border border-black/20 text-black/70 hover:border-black/40 hover:text-black transition-colors"
                >
                    İptal
                </button>
                <button 
                    on:click={addUser}
                    class="px-4 py-2 bg-black text-white hover:bg-black/80 transition-colors"
                    disabled={!newUser.name || !newUser.email}
                >
                    Kullanıcı Ekle
                </button>
            </div>
        </div>
    </div>
{/if}
