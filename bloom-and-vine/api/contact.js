import nodemailer from "nodemailer"

export default async function contactMailer(req, res){
    try {
        const transporter= nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            }
        })
        const data = JSON.parse(req.body)

        const {user_name, user_email, phone, date, subject, message} = data
        
        const mailOption = {
            from: `${user_name} [${user_email}] <${process.env.GMAIL_USER}>`,
            to: process.env.EMAIL_TARGET,
            subject: `Contact Form - ${user_name}: ${message.substr(0, 10)}...`,
            replyTo: user_email,
            html:   `<div class="mail-container">
                        <h4>${user_name} has contacted you about ${subject}${data? ` for the day of ${date}` : ""}: </h4>
                        <p>${message}</p><br/>
                        ${phone ? `<p>${user_name} has provided their phone number for ease of contact: ${phone}</p>`:``}
                    </div>`,
        }
            
        transporter.sendMail(mailOption, function (error, info){
            if (error) {
                console.log(error)
                res.send({
                    ok: false,
                    message: "Couldn't send email; try again in a few moments.",
                })
                return
            } else {
                console.log("sent " + info.response)
                res.send({ ok: true, message: "Email sent!" });
            }
        });
    } catch {
        res.send({
            ok: false,
            message: "Couldn't send email; try again in a few moments.",
        })
    }
}