//  Start coding here
class User{
    constructor(id ,name ,email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class postList {
    constructor(posts){
        this.posts = [posts];
    }
    addPost(objectPost){
        this.posts.push(objectPost);
    }
    sharePost(objectPost){
        console.log(`You've shared post "${objectPost.title}" to your friend.`)
    }

}

class Post{
    constructor(id,title,content,comment){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(objectComment){
        this.comment.push(objectComment)
    }
}
class Comment{
    constructor(id,content,createdBy,like){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addlike(){
        this.like += 1
    }
}

class Facebook {
    constructor(groupList,pageList){
        this.groupList = groupList ? [groupList] : [];
        this.pageList = pageList ? [pageList] : [];
    }
    addGroup(name){
        if(name){
            this.groupList.push(name);
        }

    }

    addPage(name){
        if(name){
            this.pageList.push(name);
        }
    }
}

class FacebookPage {
    constructor(name){
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name){
        this.name = name;
    }
}

class Notification{
    constructor(id){
        this.id = id;
    }
    send(post){
        console.log(`Notification: ${post.title} has just commented on this post — ${post.comment[post.comment.length - 1].createdBy}`)
    }
}
let newPost = new Post("1","Hi Gai","How are you?");
console.log(newPost)

let newcomment = new Comment("1","im fine!","Gai");
newPost.addComment(newcomment);
let newComment = new Comment("2","im fine and you?","Donut");
newPost.addComment(newComment);
newComment.addlike()
newComment.addlike()


let newNotification = new Notification("1");
newNotification.send(newPost);
















