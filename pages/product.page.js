class ProductPage {
  get product() {
    return $('[title="View Details"]');
  }
  get titleProductOne() {
    return $('.h1');
  }
  get titleProductTwo() {
    return $('.h1');
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
    return $('h1=Shopping Cart');
  }
}
export default new ProductPage();
