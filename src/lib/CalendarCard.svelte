<script lang="ts">
    import type { EventType } from "../types/event.type";

    export let eventObj: EventType;
</script>

<div class="event-card" style={`background-color: var(--${eventObj.origin.toLocaleLowerCase('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-')})`}>
    <div class="date-display">
        <span class="month">{eventObj.date.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
        <span class="date">{eventObj.date.getDate()}</span>
    </div>
    <div class="event-image"><img src={eventObj.image} alt={eventObj.series} referrerpolicy="no-referrer" /></div>
    <div class="event-description">
        <span class="origin">{eventObj.origin.toUpperCase()}</span>
        <span class="title">{eventObj.series} {eventObj.episode}. rész</span>
    </div>
</div>

<style>
    .event-card {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 280px;
        color: white;
        border-radius: 20px;
    }

    .date-display {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 20px 0%;
        width: 20%;
        padding: 0.5rem;
    }

    .month {
        font-size: 0.8em;
    }

    .date {
        font-weight: 800;
        font-size: 2.2em;
    }

    .event-description {
        display: flex;
        flex-direction: column;
        flex: 50%;

        padding: 35px 30px;
    }

    .event-image {
        flex: 50%;
        height: 50%;
    }

    .origin {
        opacity: 0.7;
    }

    .title {
        font-weight: bold;
        font-size: 1.2em;
    }

    img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }
</style>