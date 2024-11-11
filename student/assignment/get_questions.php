<?php
include("db.php");

$subject = $_GET['subname'];

// Fetch questions from the specified subject table
$sql = "SELECT * FROM `$subject`";
$result = mysqli_query($con, $sql);

if (!$result) {
    http_response_code(500);
    echo json_encode(array("error" => "Error fetching questions: " . mysqli_error($con)));
    exit;
}

$questions = array();

while ($row = mysqli_fetch_assoc($result)) {
    $questionContent = '';
    if (!empty($row['question'])) {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_buffer($finfo, $row['question']);
        finfo_close($finfo);

        // Check if the question is an image
        if (strpos($mimeType, 'image/') === 0) {
            $questionContent = "data:$mimeType;base64," . base64_encode($row['question']);
        } else {
            $questionContent = htmlspecialchars($row['question']);
        }
    } else {
        $questionContent = "No question content available.";
    }

    $questions[] = array(
        'question' => $questionContent,
        'isImage' => (strpos($mimeType, 'image/') === 0), // Flag to identify if it's an image
        'options' => array(
            'A' => $row['optionA'],
            'B' => $row['optionB'],
            'C' => $row['optionC'],
            'D' => $row['optionD']
        ),
        'answer' => $row['answer']
    );
}

header('Content-Type: application/json');
echo json_encode($questions);
mysqli_close($con);
?>
