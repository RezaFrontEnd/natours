fetch("./book.json",
    {
    mehod:"POST",
    headers:
    {
        "Content-Type":"application/json"

    },
    body:
    {
        "name":"ali",
        "email":"ali@gmail.com",
        "password":"123444566"
    }
})