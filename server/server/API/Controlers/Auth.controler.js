function SignUP(req,res){
  res.send('working')
}

function SignIn(req,res){
    res.send("hello working")
}

function logout(req,res){
    res.send("hello working")
}

module.exports = {SignIn,SignUP,logout}