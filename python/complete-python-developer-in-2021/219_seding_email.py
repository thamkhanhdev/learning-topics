import smtplib
from email.message import EmailMessage

email = EmailMessage()

email['from'] = 'null'
email['to_addrs'] = 'null@gmail.com'
email['subject'] = 'Notice about new open job!'

email['msg'] = 'Hello reader, I would like to notice you that you have already passed the interview round 1.'

with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.login('kaiz.sonytv55x7500h@gmail.com', 'null')
    smtp.sendmail(email)
    print('All good boss!')
