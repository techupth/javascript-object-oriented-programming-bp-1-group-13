class Notification {
    constructor(notificationId,createdTime,content,receiver){
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
 }

class EmailNotification extends Notification {
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver)
    }
 }

class SMSNotification extends Notification{
    constructor(notificationId,createdTime,content,phoneNumber){
        super(notificationId,createdTime,content)
        this.phoneNumber = phoneNumber
    }
    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
 }
 let createEmail = new EmailNotification("Hello","23/10/2023","Let make frined","yourEmail@hotmail.com")
 let createSMS = new SMSNotification("Hello","23/10/2023","Let make frined","099-888-7777")
 
 createEmail.send()
 createSMS.send()