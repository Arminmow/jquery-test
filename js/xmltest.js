function getXml (){
    var xmlContent = "" +
"<users>" +
"<user>" +
"<id>1</id>" +
"<name>armin</name>" +
"<username>arminmow</username>" +
"<password>arminAa12345</password>" +
"<email>arminmow@gmail.com</email>" +
"<phone>09105928917</phone>" +
"</user>" +
"<user>" +
"<id>2</id>" +
"<name>user2</name>" +
"<username>username2</username>" +
"<password>pass2</password>" +
"<email>e2@gmail.com</email>" +
"<phone>2</phone>" +
"</user>" +
"<user>" +
"<id>3</id>" +
"<name>user3</name>" +
"<username>username3</username>" +
"<password>pass3</password>" +
"<email>e3@gmail.com</email>" +
"<phone>3</phone>" +
"</user>" +
"<user>" +
"<id>4</id>" +
"<name>user4</name>" +
"<username>username4</username>" +
"<password>pass4</password>" +
"<email>e4@gmail.com</email>" +
"<phone>4</phone>" +
"</user>" +
"<user>" +
"<id>5</id>" +
"<name>user5</name>" +
"<username>username5</username>" +
"<password>pass5</password>" +
"<email>e5@gmail.com</email>" +
"<phone>5</phone>" +
"</user>" +
"</users>";

    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlContent , "text/xml");

    return xmlDoc;
}

function login (){
    var myXml = getXml();
    var username = document.getElementById("usernameinput").value;
    var password = document.getElementById("passinput").value;



    var users = myXml.childNodes[0].childNodes;
    console.log(users)

    var hasUser = false;
    var ref_password = "";
    var ref_id = -999;



    for (var i = 0 ; i <users.length ; i++ ){
        var user = users[i];
        var ref_username = user.childNodes[2].textContent;

        if (username == ref_username ){
            hasUser = true;
            ref_password = user.childNodes[3].textContent;
            ref_id = user.childNodes[0].textContent;
            break;
        }
        else {

        }
    }

    if (hasUser == true){

        if (ref_password == password){
            window.open("user.html?id=" + ref_id);
        }
        else {
            if (password == ""){
                document.getElementById("passCheck").innerHTML = "*Password required "
            }
            else {
                document.getElementById("passCheck").innerHTML = "*Invalid   "
            }

        }
    }
    else {
        document.getElementById("userCheck").innerHTML = "*Invalid username  "
        if (username == ""){
            document.getElementById("userCheck").innerHTML = "*Username required "
        }
        document.getElementById("passCheck").innerHTML = "*Invalid   "
        if (password == ""){
            document.getElementById("passCheck").innerHTML = "*Password required "
        }
    }
}

function getProfile (id){
    var myXml = getXml();
    var users = myXml.childNodes[0].childNodes;



    for (var i=0; i < users.length ; i++){
        var user = users[i];
        var ref_id = user.childNodes[0].textContent


        if (id == ref_id){
            var ref_username = user.childNodes[2].textContent;
            var ref_email = user.childNodes[4].textContent;
            var ref_phone = user.childNodes[5].textContent
            var ref_name = user.childNodes[1].textContent
            document.getElementById("nameDisplay").innerHTML= ref_name;
            document.getElementById("usernameDisplay").innerHTML= ref_username;
            document.getElementById("emailDisplay").innerHTML = ref_email;
            document.getElementById("phoneDisplay").innerHTML = ref_phone;
            if (id == 1){
                alert("you're admin")

            }

        }

    }


}



function closeModal (){
    var username = document.getElementById("usernameinput");
    var password = document.getElementById("passinput");

    username.value= "";
    password.value="";
    document.getElementById("passCheck").innerHTML = ""
    document.getElementById("userCheck").innerHTML = ""
}
