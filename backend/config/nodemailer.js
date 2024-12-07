import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_ADMIN_EMAIL,
    pass: process.env.NODEMAILER_ADMIN_PASS, // Ensure the correct password is used here
  },
})

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

    await transporter.sendMail(mailOptions)
    console.log('Order confirmation email sent successfully!')
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

export default sendOrderConfirmationEmail
