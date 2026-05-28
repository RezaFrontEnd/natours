// fetch("./book.json")
//   .then(res => res.json())

//   
async function showBooks() 
{
  try 
  {
    let res = await fetch("json/natours.json")
    let data = await res.json()
    data.forEach(item => 
      {
          if(item.id == 1)
            {
              document.querySelector(".logo").src = item.src
              document.querySelector(".heading-primary-main").textContent = item["heading-primary-main"]
              document.querySelector(".heading-primary-sub").textContent = item["heading-primary-sub"]
              document.querySelector(".btn").textContent = item.btn
            }
          if(item.id ==2)
            {
              document.querySelector(".heading-secondary").textContent = item["heading-secondary"]
              document.getElementById("heading-tertiary-1").textContent = item["heading-tertiary-1"]
              document.getElementById("paragraph1").textContent = item["paragraph-1"]
              document.getElementById("paragraph2").textContent = item["paragraph-2"]
              document.querySelector(".composition-photo-p1").src = item["src1"]
              document.querySelector(".composition-photo-p2").src = item["src2"]
              document.querySelector(".composition-photo-p3").src = item["src3"]
              document.getElementById("heading-tertiary-2").textContent = item["heading-tertiary-2"]
              document.querySelector(".btn-text").textContent = item["btn-text"]
            }
          if(item.id == 3)
            {
              document.getElementById("heading-secondary-2").textContent = item["heading-secondary-2"]
              document.getElementById("card-heading-1").textContent = item["card-heading-1"]
              document.querySelector(".list-item-1").textContent = item["list-item-1"]
              document.querySelector(".list-item-2").textContent = item["list-item-2"]
              document.querySelector(".list-item-3").textContent = item["list-item-3"]
              document.querySelector(".list-item-4").textContent = item["list-item-4"]
              document.querySelector(".list-item-5").textContent = item["list-item-5"]
              document.getElementById("card-price-only-1").textContent = item["card-price-only-1"]
              document.getElementById("card-price-value-1").textContent = item["card-price-value-1"]
              document.getElementById("book-now").textContent = item["book-now"]
              document.getElementById("card-heading-2").textContent = item["card-heading-2"]
              document.querySelector(".list_item_1").textContent = item["list_item_1"]
              document.querySelector(".list_item_2").textContent = item["list_item_2"]
              document.querySelector(".list_item_3").textContent = item["list_item_3"]
              document.querySelector(".list_item_4").textContent = item["list_item_4"]
              document.querySelector(".list_item_5").textContent = item["list_item_5"]
              document.getElementById("card-price-only-2").textContent = item["card-price-only-2"]
              document.getElementById("card-price-value-2").textContent = item["card-price-value-2"]
              document.getElementById("book-now-2").textContent = item["book-now-2"]
              document.getElementById("card-heading-3").textContent = item["card-heading-3"]
              document.querySelector(".item-list-1").textContent = item["item-list-1"]
              document.querySelector(".item-list-2").textContent = item["item-list-2"]
              document.querySelector(".item-list-3").textContent = item["item-list-3"]
              document.querySelector(".item-list-4").textContent = item["item-list-4"]
              document.querySelector(".item-list-5").textContent = item["item-list-5"]
              document.getElementById("card-price-only-3").textContent = item["card-price-only-3"]
              document.getElementById("card-price-value-3").textContent = item["card-price-value-3"]
              document.getElementById("book-now-3").textContent = item["book-now-3"]
              document.getElementById("discover").textContent = item["discover"]
            }  
          if(item.id == 4)
            {
              document.getElementById("heading-secondary-3").textContent = item["heading-secondary-3"]
              document.querySelector(".story-caption").textContent = item["story-caption"]
              document.getElementById("heading-tertiary-3").textContent = item["heading-tertiary-3"]
              document.querySelector(".paragraph-3").textContent = item["paragraph-3"]
              document.getElementById("story-caption-2").textContent = item["story-caption-2"]
              document.getElementById("heading-tertiary-4").textContent = item["heading-tertiary-4"]
              document.querySelector(".paragraph-4").textContent = item["paragraph-4"]
              document.getElementById("btn-text-2").textContent = item["btn-text-2"]
            }  
          if(item.id == 5)
            {
              document.getElementById("heading-secondary-4").textContent = item["heading-secondary-4"]
              document.getElementById("form-label-1").textContent = item["form-label-1"]
              document.getElementById("form-label-2").textContent = item["form-label-2"]
              document.getElementById("form-radio-label-1").textContent = item["form-radio-label-1"]
              document.getElementById("form-radio-label-2").textContent = item["form-radio-label-2"]
            }
            if(item.id == 6)
              {
                document.getElementById("heading-secondary-5").textContent = item["heading-secondary-5"]
                document.getElementById("heading-tertiary-5").textContent = item["heading-tertiary-5"]
                document.querySelector(".popup-text").textContent = item["popup-text"]
                document.getElementById("book-now-4").textContent = item["book-now-4"]
              }  
            })
          }
  catch(error)
  {
    console.log("error is happening")
  }
}
showBooks()