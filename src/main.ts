import { getEvents } from "./services/events";

const IMAGE_NOT_FOUND = 'https://media.istockphoto.com/id/1409329028/pt/vetorial/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=mYYgZekhwsH2MrjuAip3dTTh2lxSYTr6el6u0C75MrI='

document.addEventListener('DOMContentLoaded', async () => {
    const events = await getEvents();

    const main = document.getElementById('events');

    events?.forEach((event) => {
        const card = document.createElement('eve-card-root');
        const img = document.createElement('eve-card-img');
        const content = document.createElement('eve-card-content');

        const image = event.foto.startsWith('https:') ? event.foto : IMAGE_NOT_FOUND

        card.setAttribute('direction', 'column');
        img.setAttribute('src', image);
        content.setAttribute('title', event.nome);
        content.setAttribute('description', event.descricao);

        card.appendChild(img);
        card.appendChild(content);

        main?.appendChild(card);
    });
})