class user{
    constructor(id,name,email){
    this.id = id;
    this.name = name;
    this.email = email;
    }
}
class postList{
    constructor(posts){
     this.posts = [posts];
    }
    addPost(post){
        this.posts.push(post)
        return this.posts
    }
    sharePost(postTitle){
        this.postTitle = postTitle
        console.log(`You've shared post ${this.postList} to your friend.`)
    }
}
class post{
    constructor(id,title,content,comment){
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [comment];
    }
    addComment(newComment){
    this.comment.push(newComment)
    return this.comment
    }
}
class comment{
    constructor(id,content,createdBy,like){
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
    }
    addLike(){
        return this.like += 1
    }
}
class Facebook {
    constructor(groupList,pageList){
    this.groupList = [groupList] 
    this.pageList = [pageList];
    }
    addGroup(group){
        this.groupList.push(group)
        return this.groupList
        }
        addPage(page){
        this.pageList.push(page)
        return this.pageList
        }
}
class FacebookPage{
    constructor(name){
    this.name = name;
    }
}
class FacebookGroup{
    constructor(name){
    this.name = name;
    }
}
class Notification{
    constructor(id){
    this.id = id;
    }
    send(commentCreatedBy,postTitle){
        this.commentCreatedBy = commentCreatedBy;
        this.postTitle = postTitle;
        console.log(`Notification: ${this.commentCreatedBy} has just commented on this post—"${this.postTitle}"`)
    }
}
let newPost = new post("090","Yo !","How are you?","Im fine");
console.log(newPost)
newPost.addComment("That good")
console.log(newPost)

let newNotification = new Notification("007");
newNotification.send("book","Hello");
let newFacebook = new Facebook("Car","Tree Friend")
console.log(newFacebook)
console.log(newFacebook.addGroup("wdawd"))

let newComment = new comment("008","What do u do bro","book")
newComment.addLike()
console.log(newComment)