<?php
header('Access-Control-Allow-Origin: *');
//get all the course from db and reply using json structure

//echo "I'm the php";

//connection to db
$mysqli = new mysqli("localhost", "bgym", "", "my_bgym");

if (mysqli_connect_errno()) { //verify connection
    
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    $par = $_REQUEST['par'];
    //echo "Successful connection"; // connection ok
    # extract results mysqli_result::fetch_array
    $query = " SELECT course.full_name, course.active, course_cat.image, course_cat.full_name as ccfn FROM instructor, teach, course, course_cat WHERE instructor.id = teach.instr_id AND course.course_cat=course_cat.id AND course.id = teach.course_id AND instructor.full_name = '".$par."' ORDER BY course.level, course.full_name ";
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