# Cloth Store Project

## Overview
The Cloth Store project is a full-stack web application designed to provide users with a seamless shopping experience. Users can browse, purchase products, track their orders, and leave reviews. The application also includes a comprehensive admin panel for managing products, users, orders, and reviews.

## Live Link
[Cloth Store Client](https://cloth-store-smoky.vercel.app)
[Cloth Store Admin Dashboard](https://cloth-store-admin-nine.vercel.app)

## Necessary Credentials
- **Admin Login**:
  - Email: `admin@clothStore.com`
  - Password: `ADMIN123456`
  

## Key Features

### User Features

1. **Product Purchase**:
   - Users can browse the product catalog and add items to their cart.
   - On the cart page, users can proceed to checkout.

2. **Authentication**:
   - If not logged in, users are redirected to the login page when attempting to proceed to checkout.
   - After a successful login, users are redirected back to the checkout page.

3. **Checkout and Payment**:
   - Users provide necessary information during checkout.
   - Two payment options are available:
     - SSL Commerce
     - Cash on Delivery
   - Upon successful payment, users are redirected to the orders page.

4. **Order Management**:
   - Users can view both previous and new orders.
   - A track button allows users to monitor the shipping status of their orders.

5. **Email Notifications**:
   - Users receive an order confirmation email after successfully placing an order.
   - Another email is sent when the shipping status updates to "Delivered."

6. **Product Reviews**:
   - After the product is delivered, users can leave a review for the product.

### Admin Features

1. **Dashboard**:
   - View all products, users, orders, and reviews.

2. **Product Management**:
   - Add new products.
   - Update existing products.
   - Delete products.

3. **Order Management**:
   - Update order statuses (e.g., "Shipping," "Delivered").

4. **Review Management**:
   - All reviews initially have a status of "Pending."
   - Admin can update the review status to "Approved."

## Workflow

### User Workflow
- Add products to cart → Proceed to checkout → Login (if necessary) → Provide information → Select payment option → Place order → Receive email notifications → Leave a review (post-delivery).

### Admin Workflow
- Manage products, users, orders, and reviews from the admin panel.
- Approve or reject reviews.
- Update shipping and delivery statuses for orders.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js
- **Database**: MongoDB
- **Payment Integration**: SSL Commerce API
- **Email Service**: Nodemailer (or similar service)
