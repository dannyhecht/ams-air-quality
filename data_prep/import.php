$txt_file    = file_get_contents('path/to/file.txt');
$rows        = explode("\n", $txt_file);
array_shift($rows);

foreach($rows as $row => $data)
{
    //get row data
    $row_data = explode('^', $data);

    $info[$row]['id']           = $row_data[0];
    $info[$row]['name']         = $row_data[1];
    $info[$row]['description']  = $row_data[2];
    $info[$row]['images']       = $row_data[3];

    //display data
    echo 'Row ' . $row . ' ID: ' . $info[$row]['id'] . '<br />';
    echo 'Row ' . $row . ' NAME: ' . $info[$row]['name'] . '<br />';
    echo 'Row ' . $row . ' DESCRIPTION: ' . $info[$row]['description'] . '<br />';
    echo 'Row ' . $row . ' IMAGES:<br />';

    //display images
    $row_images = explode(',', $info[$row]['images']);

    foreach($row_images as $row_image)
    {
        echo ' - ' . $row_image . '<br />';
    }

    echo '<br />';
}


function parseTextFile($file){
    if( !$file = file_get_contents($file))
        throw new Exception('No file was found!!');
    $data = [];
    $firstLine = true;
    foreach(explode("\n", $file) as $line) {
        if($firstLine) { 
            $keys=explode('^', $line);
            $firstLine = false; 
            continue; 
        } // skip first line
        $texts = explode('^', $line);
        $data[] = array_combine($keys,$texts);
    }
    return $data;
}

