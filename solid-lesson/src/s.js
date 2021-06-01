//Single responsibility principle
class News {
  constructor(title, text) {
    this.text = text;
    this.title = title;
    this.modifyed = false;
  }

  update(text) {
    this.text = text;
    this.modifyed = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
    return `
      <div class="container">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text
    }, null, 2)
  }

  xml() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `
  }
}

const news = new News('Breaking news', 'Corona has started killing people');
const printer = new NewsPrinter(news);

console.log(printer.html());
console.log(printer.json());
console.log(printer.xml());