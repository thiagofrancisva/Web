<?php

    if(isset($_POST['submit']))
    {
        include_once('config.php');

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


        $result = mysqli_query($conn, "INSERT INTO tbl001_processo(processo,procNum ,procAno, fase,status, 
        origem, origemDoc, tema, dtInstaura, dtCitInt, dtAudiencia, dtJulgamento, advogado) 
        VALUES ('$processo','$nprocesso','$ano','$fase','$atual','$origem',
                '$doc','$tema','$instauracao','$citacao','$audiencia','$julgamento','$advogado')");

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
        .inputUser{
            background: none;
            border: none;
            border-bottom: 1px solid white;
            outline: none;
            color: white;
            font-size: 15px;
            width: 100%;
            letter-spacing: 2px;
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
        #data{
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
    <div class="box">
        <form action="formulario.php" method="POST">
            <fieldset>
                <legend><b>Adicionar Processo</b></legend>
                <br>
                <div class="inputBox">
                    <input type="text" name="processo" id="processo" class="inputUser">
                    <label for="processo" class="labelInput">Processo</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="number" name="nprocesso" id="nprocesso" class="inputUser" required>
                    <label for="nprocesso" class="labelInput">Número do Processo</label>
                </div>

                <br>
                <br>
                <div class="inputBox">
                    <input type="number" name="ano" id="ano" class="inputUser" required>
                    <label for="ano" class="labelInput">Ano do Processo</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="fase" id="fase" class="inputUser" required>
                    <label for="fase" class="labelInput">Fase Processual</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="atual" id="atual" class="inputUser" required>
                    <label for="atual" class="labelInput">Status Atual</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="origem" id="origem" class="inputUser" required>
                    <label for="origem" class="labelInput">Origem</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="ogmdoc" id="ogmdoc" class="inputUser">
                    <label for="ogmdoc" class="labelInput">Origem do Documento</label>
                </div>
                <br>
                <br>
                <div class="inputBox">
                    <input type="text" name="tema" id="tema" class="inputUser" required>
                    <label for="tema" class="labelInput">Tema</label>
                </div>
                <br>
                <br>
                <br>
                <label for="dtinst"><b>Data da Instauração:</b></label>
                <input type="date" name="dtinst" id="data" required>
                <br><br><br>
                <label for="data"><b>Data da Citação:</b></label>
                <input type="date" name="dtcit" id="data">
                <br><br><br>
                <label for="dtaud"><b>Data da Audiência:</b></label>
                <input type="date" name="dtaud" id="data">
                <br><br><br>
                <label for="dtjul"><b>Data do Julgamento:</b></label>
                <input type="date" name="dtjul" id="data">
                <br><br><br>
                <div class="inputBox">
                    <input type="text" name="advogado" id="advogado" class="inputUser">
                    <label for="advogado" class="labelInput">Advogado</label>
                </div>
                <br>
                <br>
                 
                <input type="submit" name="submit" id="submit">
            </fieldset>
        </form>
    </div>
</body>
</html>