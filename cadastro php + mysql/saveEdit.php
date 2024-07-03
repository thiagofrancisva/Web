<?php
    // isset -> serve para saber se uma variável está definida
    include_once('config.php');
    if(isset($_POST['update']))
    {
  
        $id = $_POST['id'];
        $processo = $_POST['processo'];
        $nprocesso = $_POST['nprocesso'];
        $ano = $_POST['ano'];
        $fase = $_POST['fase'];
        $atual = $_POST['atual'];
        $origem = $_POST['origem'];
        $doc = $_POST['ogmdoc'];
        $tema = $_POST['tema'];
        $instauracao = $_POST['dtinst'];
        $citacao = $_POST['dtcit'];
        $audiencia = $_POST['dtaud'];
        $julgamento = $_POST['dtjul'];
        $advogado = $_POST['advogado'];
        
        $sqlInsert= "UPDATE tbl001_processo 
        SET processo ='$processo',procNum ='$nprocesso', procAno ='$ano', fase ='$fase', status = '$atual',
        origem = '$origem', origemDoc = '$doc', tema = '$tema', dtInstaura = '$instauracao',
        dtCitInt = '$citacao', dtAudiencia = '$audiencia', dtJulgamento = '$julgamento', advogado = '$advogado'
        WHERE id=$id";
          
        $result = $conn->query($sqlInsert);
    }   
    header('Location: sistema.php');

?>