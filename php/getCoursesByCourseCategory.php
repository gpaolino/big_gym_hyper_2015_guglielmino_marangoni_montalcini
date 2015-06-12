<?php
header('Access-Control-Allow-Origin: *');

$par = $_POST['course_category'];
//connection to db
$mysqli = new mysqli("localhost", "bgym", "", "my_bgym");

if (mysqli_connect_errno()) { //verify connection
    
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    # extract results mysqli_result::fetch_array
    $query = " SELECT course_cat.image as img, course.full_name as cfn, course.active, course.course_cat as cc, course_cat.full_name as ccfn FROM course_cat, course WHERE course_cat.id = course.course_cat AND course_cat.full_name = '$par' ORDER BY course.level, course.full_name ";
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);	//<----- CORRECT HERE		
        }
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();



}






?>