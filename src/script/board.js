function writeNewPost(id, password, body) {
    // A post entry.
    var postData = {
      id: id,
      password: password,
      message: body.replaceAll('\n', '<br/>')
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('message').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/message/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);

}

function addMessageCard(key, id, body){
    let message = document.createElement("div");
    message.setAttribute("id", key);
    message.classList = "alert alert-light msg"
    
    let messageBody = document.createElement("div");
    let messageId = document.createElement("div");
    messageId.classList = 'rightAligned';

    messageBody.innerHTML = body;
    messageId.innerHTML = "&FilledVerySmallSquare;  " + id;

    message.append(messageId);
    message.append(messageBody);
    document.querySelector("#messageBoard").prepend(message);
}

document.querySelector("#submitButton").addEventListener('click',()=>{
    var id = document.querySelector("#inputId")
    var password = document.querySelector("#inputPassword");
    var body = document.querySelector("#inputMessage");
    if(id.value !== "" && password.value !== "" && body.value !== ""){
        writeNewPost(id.value, password.value, body.value);
        id.value = "";
        password.value = "";
        body.value = "";
    }   
})


msgRef.on('child_added', (data) => {
    addMessageCard(data.key, data.val().id, data.val().message);
});

msgRef.on('child_removed', (data) => {
    const element = document.getElementById(data.key);
    element.remove();
});