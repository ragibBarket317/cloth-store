import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_ADMIN_EMAIL,
    pass: process.env.NODEMAILER_ADMIN_PASS, // Ensure the correct password is used here
  },
})

await new Promise((resolve, reject) => {
  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error)
      reject(error)
    } else {
      console.log('Server is ready to take our messages')
      resolve(success)
    }
  })
})

export const sendOrderDeliverdEmail = async (
  orderId,
  orderDate,
  address,
  amount
) => {
  try {
    const mailOptions = {
      from: process.env.NODEMAILER_ADMIN_EMAIL,
      to: address.email,
      subject: 'Order Delivered Successfully',
      html: `
        <h3 style="text-align: center; font-size: 1.5rem;">Order Delivered</h3>
        <p>Hey <strong>${address.firstName} ${address.lastName}</strong>,</p>
        <p>Your order has been delivered successfully.</p>
        <p><strong>Order Details:</strong></p>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Order Date:</strong> ${new Date(
          orderDate
        ).toLocaleDateString()}</p>
        <p><strong>Amount:</strong> ${amount} TK</p>
        <div style="margin-top: 20px;">
          <a href="${
            process.env.FRONTEND_URL
          }/orders" style="color: #1a73e8; text-decoration: none;">Give your feedback</a>
        </div>
        <div style="margin-top: 20px;">
          <p style="margin-top: 20px;">Best regards,</p>
          <p>Customer Support Team,</p>
          <p>Cloth-Store</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

// Function to send email
const sendOrderConfirmationEmail = async (
  userEmail,
  address,
  items,
  amount
) => {
  try {
    const itemTableRows = items
      .map(
        (item) => `
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">${item.name}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${item.quantity}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${item.regularPrice}</td>
        </tr>`
      )
      .join('')

    const mailOptions = {
      from: process.env.NODEMAILER_ADMIN_EMAIL,
      to: userEmail,
      subject: 'Order Confirmation',
      html: `
        <h3>Your Order Details</h3>
        <p><strong>Name:</strong> ${address.firstName} ${address.lastName}</p>
        <p><strong>Email:</strong> ${address.email}</p>
        <p><strong>Address:</strong></p>
        <p>${address.address}, ${address.city}</p>
        
        <p><strong>Items:</strong></p>
        <table style="border-collapse: collapse; width: 100%; text-align: left;">
          <thead>
            <tr>
              <th style="border: 1px solid #ddd; padding: 8px;">Item Name</th>
              <th style="border: 1px solid #ddd; padding: 8px;">Quantity</th>
              <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemTableRows}
          </tbody>
        </table>
        <p style="text-align: end; margin-top: 5px;">Total Amount: Delivery Fee: 60 TK</p>
        <h6 style="text-align: end; margin-top: 2px;">Total Amount: ${amount} TK</h6>
        <p style="margin-top: 10px;">Thank you for staying with us. Happy shopping!!<p>
      `,
    }

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          console.log(info)
          resolve(info)
        }
      })
    })
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

export default sendOrderConfirmationEmail
