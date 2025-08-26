<script lang="ts">
    export let checked = false;
    export let label = '';
    export let description = '';
</script>

<div class="flex items-center justify-between py-4">
    <div>
        <p class="text-sm font-medium text-black/80">{label}</p>
        <p class="text-xs text-black/50">{description}</p>
    </div>
    <label class="relative inline-flex items-center cursor-pointer">
        <input 
            type="checkbox" 
            bind:checked 
            class="sr-only"
        >
        <div class="w-11 h-6 bg-black/10 border border-black/20 relative transition-all duration-200 {checked ? 'bg-black border-black' : ''}">
            <div class="w-4 h-4 bg-white border border-black/30 absolute top-0.5 transition-all duration-200 {checked ? 'left-5 border-black/50' : 'left-0.5'}"></div>
        </div>
    </label>
</div>
