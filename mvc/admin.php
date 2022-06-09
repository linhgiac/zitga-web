<?php
    session_start();
    if( !isset($_SESSION['username'])) {
        header('location: login.php');
    }
?>

<h1>Admin page</h1>

<a href="logout.php">
    <button type="submit" name="dangxuat"> Đăng xuất </button>
</a>