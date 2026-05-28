class Books {
    constructor(title, author, price) {
        this.title = title
        this.author = author
        this.price = price
    }
}
class Storage
{
    static save(books)
    {
        localStorage.setItem("showBooks",JSON.stringify(books))
    }
    static load(books)
    {
        return JSON.parse(localStorage.getItem(books)) || []
    }
}
class ShowBook {
    static books = Storage.load()
    static add(book) {
        this.books.push(book)
        Storage.save(this.books)
        this.render()
    }
    static remove(index) {
        this.books.splice(index, 1)
        Storage.save(this.books)
        this.render()
    }
    static render() {
        // let tbody = document.getElementById("bookList")
        // tbody.innerHTML = ``
        // this.books.forEach((element,index)=> {
        // const row = document.createElement("tr")
        // row.innerHTML = `
        // <td>${element.title}</td>
        // <td>${element.author}</td>
        // <td>${element.price}</td>
        // <td><button onClick=ShowBook.remove(${index})>delete</buttton></td>
        // `
        // tbody.appendChild(row)



        let tbody = document.getElementById("bookList")
        tbody.innerHTML = ``
        this.books.forEach((item, index) => {
            const row = document.createElement("tr")
            row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.price}</td>
            <td><button onClick=ShowBook.remove(${index})>delete</button></td>
            `
            tbody.appendChild(row)
        });
        ;

    }
}

let author = document.getElementById("author")
let title = document.getElementById("book")
let price = document.getElementById("price")
let form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const book = new Books(title.value, author.value, price.value)
    ShowBook.add(book)
})
