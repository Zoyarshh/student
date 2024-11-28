<script>
    function register() {
        const userID = document.getElementById('registerUserID').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        localStorage.setItem('userID', userID);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Registered successfully!');
        // Optionally, close the window and refresh the opener
        window.close();
        window.opener.location.reload();
    }
</script>
