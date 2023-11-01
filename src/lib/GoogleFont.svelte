<script lang="ts">
    import { onMount } from "svelte";

    export let font: string;

    let fontLoaded = false;

    onMount(() => {
        const script = document.createElement("script");
        script.src =
            "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";

        script.onload = function () {
            WebFont.load({
                google: {
                    families: [font],
                },
                active: function () {
                    fontLoaded = true;
                },
            });
        };

        document.head.appendChild(script);
    });
</script>

<div
    style="font-family: {fontLoaded
        ? `${font}, sans-serif`
        : 'sans-serif'};"
>
    <slot />
</div>
