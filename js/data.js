let cart = []
fetch("https://tholsreymey.github.io/skincare/skincare.json")
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
          <button  type="button" onclick="AddtoCart(${pro.id})" class="btn btn-warning w-100">Add to cart</button>
        </div>
      </div>
    </div>`

  })
  document.getElementById("show-product").innerHTML = show
 
}

