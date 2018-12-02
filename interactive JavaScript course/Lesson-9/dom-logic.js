const opennendFilns = {};

document.addEventListener("DOMContentLoaded", function () {
    for (let category of categories) {
        const newEl = document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText = category;
        newEl.addEventListener("click", function () {
            onCategoryChoice(category);
        });
        document.querySelector(".categories").appendChild(newEl);
    }
});

function detFilmByNsme(filmName) {
    return films.filter(f => f.name === filmName)[0];
}

function getFilmComments(filmName) {
    const film = detFilmByNsme(filmName);
    return film.comments;
}

function onAddCommentClick(name) {
    const autorValue = document.getElementById(`autor-${name}`).value;
    const commentValue = document.getElementById(`comment-${name}`).value;
    const film = detFilmByNsme(name);
    film.addComment(commentValue, autorValue);
    onCategoryChoice(film.category);
}

function renderCommentForm(film) {
    const content = `<div class="formTitle">Добавьте отзыв фильму ${film.name}</div><div class="formBodi">
    <input id="autor-${film.name}" class="formAutor" placeholder="Ваше имя">
    <input id="comment-${film.name}" class="formComment" placeholder="Ваш оттзыв">
    <button onclick="onAddCommentClick('${film.name}')">Отправить</button></div>`;
    const form = document.createElement("div");
    form.classList.add("commentForm");
    form.innerHTML = content;
    form.addEventListener("click", function (event) {
        event.stopPropagation();
        form.classList.add("chosen");
    });
    return form;
}

function openFilmCard(film, newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach(c => {
        s += `<div class="comment"><span class="commentAutor">${c.autor}</span>: ${c.text}</div>`;
    });
    newEl.innerHTML += `<div class="filmComment">${s}</div>`;
    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    addCommentButton.addEventListener("click", function (event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
        newEl.removeChild(addCommentButton);
    });
    newEl.appendChild(addCommentButton);
}

function onFilmClick(film, newEl) {
    if (opennendFilns.hasOwnProperty(film.name) && opennendFilns[film.name] === true) {
        newEl.innerHTML = `<div class="filmName">${film.name}</div>`;
        opennendFilns[film.name] = false;
    } else {
        openFilmCard(film, newEl);
        opennendFilns[film.name] = true;
    }
}

function renderFilm(film) {
    const newEl = document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML = `<div class="filmName">${film.name}</div>`;
    newEl.addEventListener("click", function () {
        onFilmClick(film, newEl)
    });
    document.querySelector(".films").appendChild(newEl);
}

function onCategoryChoice(categoryName) {
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for (let film of films) {
        renderFilm(film);
    }
}