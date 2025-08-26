<script lang="ts">
    import Header from "./lib/layouts/Header.svelte";
    import Panel from "./lib/layouts/Panel.svelte";
    import Dashboard from "./lib/components/Dashboard.svelte";
    import Users from "./lib/components/Users.svelte";
    import Analytics from "./lib/components/Analytics.svelte";
    import Settings from "./lib/components/Settings.svelte";
    import { currentPage } from "./lib/stores/router";
</script>

<main class="flex h-full items-center justify-center">
    <Panel>
        <Header />
        {#if $currentPage === 'Dashboard'}
            <Dashboard />
        {:else if $currentPage === 'Users'}
            <Users />
        {:else if $currentPage === 'Analytics'}
            <Analytics />
        {:else if $currentPage === 'Settings'}
            <Settings />
        {:else}
            <Dashboard />
        {/if}
    </Panel>
</main>