let cart = []
fetch("https://nhansophy.github.io/project_api/skincare.json")
  .then(res => res.json())
  .then(item => {
    cart = item
    Displayproducts()
  })
  .catch(err => alert(err))
// Function Display

const Displayproducts = (products = cart) => {
  let show = ``
  products.forEach(pro => {
    show += ` <div class="col-12 col-sm-6 col-md-3">
      <div class="card h-100">
        <img src="${pro.image}"
          class="card-img-top img-fixed" alt="Cappuccino">
        <div class="card-body">
          <h5 class="card-title">${pro.name}</h5>
          <p class="card-text">${pro.description}</p>
          <p class="fw-bold text-success">${pro.price}$</p>
          <button type="button" onclick="AddtoCart(${pro.id})" class="btn btn-light w-100">Order Now</button>
        </div>
      </div>
    </div>`

  })
  document.getElementById("show-product").innerHTML = show
 
}

// search

document.getElementById("input-search").addEventListener("input", (event) => {
  const inputserach = event.target.value.toLowerCase();
  const finds = cart.filter(item => {
    return item.name.toLowerCase().includes(inputserach)
  })
  if (finds.length > 0) {
    Displayproducts(finds)
  } else {
    document.getElementById("show-product").innerHTML = `
        <div class=" w-100">
<h1  class=" text-danger text-center">Search Is Not Found...!</h1>
</div>
      `
  }
})









