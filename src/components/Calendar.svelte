<svelte:options customElement={{
    tag: 'event-calendar',
    props: {
        source: { attribute: 'source' },
        colorsGid: { attribute: 'colors-gid' }
    }
}} />

<script lang="ts">
    import CalendarCard from "../lib/CalendarCard.svelte";
    import GoogleFont from "../lib/GoogleFont.svelte";
    import type { EventType } from "../types/event.type";

    export let source: URL;
    export let colorsGid: string;

    let promise = Promise.all([loadData(), loadColors()]);
    let months = new Set<string>();

    async function loadData() {
        const response = await fetch(source);

        if (response.ok) {
            const raw = await response.text();
            return convertToEvents(raw);
        } else {
            throw new Error('Failed to load calendar.')
        }
    }

    async function loadColors() {
        const response = await fetch(source + '&single=true&gid=' + colorsGid);

        if (response.ok) {
            const colorsRaw = await response.text();
            saveColors(colorsRaw);
        } else {
            throw new Error('Failed to load colors.')
        }
    }

    function convertToEvents(raw: string) {
        const events = raw.split('\n').map(row => row.split('\t')).map(row => {
            const date = new Date(row[0]);
            const month = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
            
            return {
                date,
                month,
                origin: row[1],
                series: row[2],
                episode: row[3],
                image: row[4]
            }
        });

        events.shift();
        events.sort((a, b) => Number(a.date) - Number(b.date));

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        const eightWeeksFromNow = new Date(currentDate);
        eightWeeksFromNow.setDate(currentDate.getDate() + 7 * 8);
        const filteredData = events.filter(obj => obj.date >= currentDate && obj.date <= eightWeeksFromNow);
        extractMonths(filteredData);

        return filteredData;
    }

    function saveColors(colors: string) {
        const variables = colors.split('\n').map(row => row.split('\t')).map(row => ({
            name: '--' + row[0].toLocaleLowerCase('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-'),
            value: row[1]
        }));

        for (const variable of variables) {
            document.documentElement.style.setProperty(variable.name, variable.value);
        }
    }

    function extractMonths(events: EventType[]) {
        for (const eventObj of events) {
            months.add(eventObj.date.toLocaleDateString(undefined, { year: 'numeric', month: 'long' }));
        }
    }
</script>

{#await promise}
    <p>Loading...</p>
{:then data}
    <GoogleFont font='Dosis'>
        {#each months as month}
            <h2>{month}</h2>
            <div class="calendar-items">
                {#each data[0].filter(e => e.month === month) as eventObj}
                    <CalendarCard eventObj={eventObj} />
                {/each}
            </div>
        {/each}
    </GoogleFont>
{/await}

<style>
    .calendar-items {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
</style>