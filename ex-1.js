class EmailNotification { 
    constructor(notificationId ,createdTime ,content ,receiver ){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification { 
    constructor(notificationId ,createdTime ,content ,phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

let createEmail = new EmailNotification("Hello! Jammy" , "10/10/2023" , "nice to meet you" ,"youemail@gmail.com");
createEmail.send()

let createSMS = new SMSNotification("Hello! Jammy" , "10/10/2023" , "nice to meet you" ,"08 8888 8888");
createSMS.send()

