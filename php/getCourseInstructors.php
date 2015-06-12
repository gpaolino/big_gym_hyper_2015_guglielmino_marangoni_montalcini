<?php
header('Access-Control-Allow-Origin: *');

$par = $_POST['course_name'];
//connection to db
$mysqli = new mysqli("localhost", "bgym", "", "my_bgym");

if (mysqli_connect_errno()) { //verify connection
    
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
   
    
    # extract results mysqli_result::fetch_array
    $query = " SELECT instructor.full_name, instructor.active FROM course, instructor, teach WHERE course.id = teach.course_id AND instructor.id = teach.instr_id AND course.full_name = '$par'";
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