class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <!-- header section -->
    <header class="header">
      <a href="index.html" class="logo"><i class="fas fa-store"></i> shop</a>

      <form class="search-form">
        <input type="search" id="search-box" placeholder="search here" />
        <label for="search-box" class="fas fa-search"></label>
      </form>

      <div class="icons">
        <div id="menu-btn" class="fas fa-bars"></div>
        <div id="search-btn" class="fas fa-search"></div>
        <a href="login.html" class="fas fa-user"></a>
        <a href="#" class="fas fa-heart"></a>
        <a href="cart.html" class="fas fa-shopping-cart"></a>
      </div>
    </header>
    <!-- end header section -->

    <!-- sidebar section -->
    <div class="sidebar">
      <div id="close-sidebar" class="fas fa-times"></div>

      <div class="user">
        <img src="./images/user-img.png" alt="user" />
        <h3>john doe</h3>
        <a href="#">logout</a>
      </div>

      <nav class="navbar">
        <a href="index.html"><i class="fas fa-angle right"></i> home</a>
        <a href="about.html"><i class="fas fa-angle right"></i> about</a>
        <a href="products.html"><i class="fas fa-angle right"></i> products</a>
        <a href="contact.html"><i class="fas fa-angle right"></i> contact</a>
        <a href="login.html"><i class="fas fa-angle right"></i> login</a>
        <a href="register.html"><i class="fas fa-angle right"></i> register</a>
        <a href="cart.html"><i class="fas fa-angle right"></i> cart</a>
      </nav>
    </div>
    <!-- end sidebar section -->
        `;
  }
}
window.customElements.define("app-header", AppHeader);

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <!-- footer section -->
    <footer class="footer">
      <div class="quick-links">
        <a href="index.html" class="logo"> <i class="fas fa-store"></i></a>

        <div class="links">
          <a href="index.html">home</a>
          <a href="about.html">about</a>
          <a href="products.html">products</a>
          <a href="contact.html">contact</a>
          <a href="login.html">login</a>
          <a href="register.html">register</a>
          <a href="cart.html">cart</a>
        </div>

        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div>
      </div>

      <div class="credit">
        <p>created by <span>IKRAM</span> | all rights reserved</p>

        <img src="./images/card_img.png" alt="payment options" />
      </div>
    </footer>
    <!-- end footer section -->
        `;
  }
}
window.customElements.define("app-footer", AppFooter);
