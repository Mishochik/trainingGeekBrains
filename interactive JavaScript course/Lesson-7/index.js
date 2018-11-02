const categories = ["Комедии", "Ужастики"];
const films = [];

class Comment {
    constructor(text, autor, stars) {
        this.text = text;
        this.autor = autor;
        this.stars = stars;
    }
}
class Film {
    constructor(name, cat) {
        this.name = name;
        this.categories = categories[cat];
        this.comments = [];
    }
    addComment(text, autor, stars) {
        this.comments.push(new Comment(text, autor, stars));
    }
    getAverageStars() {
        let sumStars = 0;
        this.comments.forEach(comment => sumStars = sumStars + comment.stars);
        return (this.comments.length > 0) ? sumStars / this.comments.length : 0;
    }
}

films.push(new Film("Титаник", 0));
films[0].addComment("Очень милый фильм!", "user", 4);
films[0].addComment("Мало экшена!", "user", 3);
films.push(new Film("Один дома", 0));
films[1].addComment("Очень смешной фильм!", "user", 4);
//console.log(films);
console.log(films[0].comments);
console.log(films[0].getAverageStars())

