// import { answers } from './answers';

const answers = [
    {
        number: "0",
        text: "Во-первых, убедитесь, что ваши наушники включены одним нажатием верхней кнопки на задней стороне правого наушника. Затем нажмите и удерживайте кнопку питания в течение 3x секунд, чтобы перевести наушники в режим сопряжения. Обратите внимание: если вы подключаете наушники впервые, они автоматически включаются сразу в этом режиме сопряжения. Голосовые подсказки предоставят вам дополнительные инструкции. Мы рекомендуем вам использовать приложение Bose Music для завершения процесса сопряжения, однако вы также можете использовать настройки Bluetooth на своем устройстве.'",
    },
    {
        number: "1",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum, et excepturi sit dolor placeat rem eius quos aliquid cumque dolorem odit alias repellat quae illo deleniti veritatis? Esse cupiditate ipsam commodi facilis autem, ipsum dicta maiores perferendis magni praesentium beatae architecto animi vel ullam nihil veritatis cum ratione. Perferendis",
    },
    {
        number: "2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aperiam. Laudantium ex dolores soluta incidunt odio. Perferendis autem ratione deleniti, nihil doloribus ipsam rerum aperiam quod? Expedita debitis deserunt beatae fugiat iste quam corporis iure necessitatibus, consequatur magnam sint cum ullam cumque eligendi placeat accusantium repudiandae neque corrupti porro natus exercitationem reiciendis itaque sunt ad? Consectetur, voluptate. Repudiandae explicabo dolorum quae neque autem ex, voluptas dolores atque inventore blanditiis? Fugit",
    },
    {
        number: "3",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia deserunt quas aut tempora quo nihil adipisci aliquid laborum assumenda expedita repudiandae, voluptate repellendus eum corporis at perspiciatis voluptas hic. Impedit.",
    },
];


let getRef = x => document.querySelector(x);

getRef('.questions__list').addEventListener('click', onClick);

function onClick(e) {
    if (e.target.nodeName !== 'use') {
        return;
    }
    const btnNumber = e.target.dataset.action;
    const { number, text } = answers[`${btnNumber}`];

    if (getRef(`p[data-text="${btnNumber}"]`) !== null) {
        removeElement(number);
        return;
    }
    createElement(number, text);
}
function createElement(number, text) {
    const p = document.createElement('p');
    p.setAttribute('data-text', `${number}`)
    p.textContent = `${text}`
    p.style.marginTop = 16 + 'px';
    return getRef(`div[data-action="${number}"]`).append(p);
}
function removeElement(number) {
    getRef(`p[data-text="${number}"]`).remove();

}
