document.querySelector('form').addEventListener('submit',async (event)=>{
    event.preventDefault()
    try
    {
        let a = await axios.post('/signup',{
            username : event.target.username.value,
            password : event.target.password.value
        })
        console.log(a)
        window.location.href = "http://localhost:1000/"
    }
    catch(e)
    {
        console.log(e)
        alert(e.data.message)
    }
})