class ProductPage {
  get product() {
    return $('[title="View Details"]');
  }
  get titleProductOne() {
    return $('[title="Park Avenue Pleat Front Trousers"]');
  }
  get titleProductTwo() {
    return $('[title="Core Striped Sport Shirt"]');
  }
  get color() {
    return $('#attribute92');
  }
  get size() {
    return $('#attribute180');
  }
  get addToCart() {
    return $('[title="Add to Cart"]');
  }
  get titleTwo() {
    return $('h1=Shoping Cart');
  }
}
export default new ProductPage();
