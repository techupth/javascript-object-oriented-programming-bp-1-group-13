class Notification {
    constructor(notificationId ,createdTime ,content ,receiver ) {
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
    constructor(notificationId ,createdTime ,content ,receiver){
        super(notificationId ,createdTime ,content ,receiver)
    }
}

class SMSNotification extends Notification { 
    constructor(notificationId ,createdTime ,content ,receiver){
        super(notificationId ,createdTime ,content ,receiver)
    }
}

let createEmail = new EmailNotification("Hello! Jammy" , "10/10/2023" , "nice to meet you" ,"youemail@gmail.com");
createEmail.send()

let createSMS = new SMSNotification("Hello! Jammy" , "10/10/2023" , "nice to meet you" ,"08 8888 8888");
createSMS.send()
