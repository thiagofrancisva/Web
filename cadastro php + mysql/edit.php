<?php
    include_once('config.php');

    if(!empty($_GET['id']))
    {
        $id = $_GET['id'];
        $sqlSelect = "SELECT * FROM tbl001_processo WHERE id=$id";
        $result = $conn->query($sqlSelect);
        if($result->num_rows > 0)
        {
            while($row = mysqli_fetch_assoc($result))
            {
                    $processo = $row['processo'];
                    $nprocesso = $row['procNum'];
                    $ano = $row['procAno'];
                    $fase = $row['fase'];
                    $atual = $row['status'];
                    $origem = $row['origem'];
                    $doc = $row['origemDoc'];
                    $tema = $row['tema'];
                    $instauracao = $row['dtInstaura'];
                    $citacao = $row['dtCitInt'];
                    $audiencia = $row['dtAudiencia'];
                    $julgamento = $row['dtJulgamento'];
                    $advogado = $row['advogado'];
                     
            }
        }
        else
        {
            header('Location: sistema.php');
        }
    }
    else
    {
        header('Location: sistema.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário | GN</title>
    <style>
        body{
            font-family: Arial, Helvetica, sans-serif;
            background-image: linear-gradient(to right, rgb(20, 147, 220), rgb(17, 54, 71));
        }
        .box{
            color: white;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 15px;
            width: 20%;
        }
        fieldset{
            border: 3px solid dodgerblue;
        }
        legend{
            border: 1px solid dodgerblue;
            padding: 10px;
            text-align: center;
            background-color: dodgerblue;
            border-radius: 8px;
        }
        .inputBox{
            position: relative;
        }
        
        .labelInput{
            position: absolute;
            top: 0px;
            left: 0px;
            pointer-events: none;
            transition: .5s;
        }
        .inputUser:focus ~ .labelInput,
        .inputUser:valid ~ .labelInput{
            top: -20px;
            font-size: 12px;
            color: dodgerblue;
        }
        #data_nascimento{
            border: none;
            padding: 8px;
            border-radius: 10px;
            outline: none;
            font-size: 15px;
        }
        #submit{
            background-image: linear-gradient(to right,rgb(0, 92, 197), rgb(90, 20, 220));
            width: 100%;
            border: none;
            padding: 15px;
            color: white;
            font-size: 15px;
            cursor: pointer;
            border-radius: 10px;
        }
        #submit:hover{
            background-image: linear-gradient(to right,rgb(0, 80, 172), rgb(80, 19, 195));
        }
    </style>
</head>
<body>
    <a href="sistema.php">Voltar</a>
    <div class="box">
        <form action="saveEdit.php" method="POST">
            <fieldset>
                <legend><b>Editar Processo</b></legend>
                <br>
                <div class="inputBox">
                    <input type="text" name="processo" id="processo" class="inputUser" value=<?php echo $processo;?>>
                    <label for="processo" class="labelInput">Processo</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="number" name="nprocesso" id="nprocesso" class="inputUser" value=<?php echo $nprocesso;?> required>
                    <label for="nprocesso" class="labelInput">Número do Processo</label>
                </div>

                <br>
                <br>
                <div class="inputBox">
                    <input type="number" name="ano" id="ano" class="inputUser" value=<?php echo $ano;?> required>
                    <label for="ano" class="labelInput">Ano do Processo</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="fase" id="fase" class="inputUser" value=<?php echo $fase;?> required>
                    <label for="fase" class="labelInput">Fase Processual</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="atual" id="atual" class="inputUser" value=<?php echo $atual;?> required>
                    <label for="atual" class="labelInput">Status Atual</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="origem" id="origem" class="inputUser" value=<?php echo $origem;?> required>
                    <label for="origem" class="labelInput">Origem</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="ogmdoc" id="ogmdoc" class="inputUser" value=<?php echo $doc;?>>
                    <label for="ogmdoc" class="labelInput">Origem do Documento</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="tema" id="tema" class="inputUser" value=<?php echo $tema;?> required>
                    <label for="tema" class="labelInput">Tema</label>
                </div>
                <br>
                <br>
                <br>
                <label for="dtinst"><b>Data da Instauração:</b></label>
                <input type="date" name="dtinst" id="data" value=<?php echo $instauracao;?> required>
                <br><br><br>
                <label for="dtcit"><b>Data da Citação:</b></label>
                <input type="date" name="dtcit" id="data" value=<?php echo $citacao;?>>
                <br><br><br>
                <label for="dtaud"><b>Data da Audiência:</b></label>
                <input type="date" name="dtaud" id="data" value=<?php echo $audiencia;?>>
                <br><br><br>
                <label for="dtjul"><b>Data do Julgamento:</b></label>
                <input type="date" name="dtjul" id="data" value=<?php echo $julgamento;?>>
                <br><br><br>
                <div class="inputBox">
                    <input type="text" name="advogado" id="advogado" class="inputUser" value=<?php echo $advogado;?>>
                    <label for="advogado" class="labelInput">Advogado</label>
                </div>
                <br>
                <br>
				<input type="hidden" name="id" value=<?php echo $id;?>>
                <input type="submit" name="update" id="submit">
            </fieldset>
        </form>
    </div>
</body>
</html>