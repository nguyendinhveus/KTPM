describe('Cart and Checkout Test', () => {
  beforeEach(() => {
    // Đăng nhập chung cho tất cả các test case trong file này
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  // Kịch bản 3: Thêm sản phẩm
  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  // Kịch bản 4: Sắp xếp giá
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

  // BÀI TẬP YÊU CẦU THÊM 1: Xóa sản phẩm
  it('Should remove a product from the cart', () => {
    // Thêm vào trước
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    
    // Sau đó nhấn Remove
    cy.get('.inventory_item').first().find('.btn_inventory').click(); // Nút Add giờ thành Remove
    
    // Xác minh giỏ hàng trống (không tồn tại badge số lượng)
    cy.get('.shopping_cart_badge').should('not.exist');
  });

  // BÀI TẬP YÊU CẦU THÊM 2: Quy trình thanh toán (Checkout)
  it('Should complete the checkout process', () => {
    // 1. Thêm sản phẩm và vào giỏ hàng
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_link').click();
    
    // 2. Nhấn Checkout
    cy.get('#checkout').click();
    
    // 3. Điền thông tin
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    
    // 4. Xác minh chuyển đến trang bước 2
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.title').should('contain', 'Checkout: Overview');
  });
});