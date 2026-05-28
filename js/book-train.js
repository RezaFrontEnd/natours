class Book
{
    constructor(title,author,price)
    {
        this.title = title,
        this.author = author,
        this.price = price
    }
}
class Storage
{
    static save(books)
    {
        localStorage.setItem("books",JSON.stringify(books))
    }
    static load()
    {
        return JSON.parse(localStorage.getItem("books")) || []
    }
}
class ShowBook
{
    static books = Storage.load()
    static add(book)
    {
        this.books.push(book)
        Storage.save(this.books)
        this.render()
    }
    static remove(index)
    {
        this.books.splice(index,1)
        Storage.save(this.books)
        this.render()
    }
    static render()
    {
        const tbody = document.getElementById("booksTable")
        tbody.innerHTML = ``
        this.books.forEach((book,index) => {
        const row = document.createElement("tr")  
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
        <td><button onClick=ShowBook.remove(${index})>delete</button></td>
        `
        tbody.appendChild(row)  
        });
    }

}

const form = document.querySelector("#bookForm")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const price = document.getElementById("price").value
    const book = new Book(title,author,price)
    ShowBook.add(book) 
})