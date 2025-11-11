async function register() {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) {
        alert(error.message)
    } else {
        alert("Account created — go check email to confirm.")
    }
}

async function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
        alert(error.message)
    } else {
        alert("Logged in. You’re him.")
    }
}