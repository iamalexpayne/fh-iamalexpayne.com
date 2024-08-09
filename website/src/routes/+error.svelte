<script>
    import { page } from "$app/stores";
</script>

<div class="flex flex-col items-center justify-center h-screen">
    <div class="font-extralight italic text-2xl pb-24 opacity-50">
        {$page.status}
    </div>

    <div class="max-w-md flex flex-col items-center">
        <h1 class="font-bold">{$page.error?.message}</h1>

        <p class="text-sm pt-24">
            <span class="opacity-50"> Try going </span>
            <a
                href="/"
                class="border-b border-olive hover:opacity-100 hover:border-b-2 hover:font-medium opacity-50"
                >home</a
            >
        </p>
    </div>
</div>
