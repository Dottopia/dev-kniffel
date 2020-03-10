<!--<?php
	session_start();
	if($_SESSION["login"] != 1)
	{
		session_destroy();
		header("Location: https://intern.vit-coding.de");
	}
?>-->

<!Doctype>
<html>
    <head>
        <title>Kniffel</title>
        <link rel="stylesheet" href="kniffel.css"/>
        <script src="kniffel.js"></script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Kniffel</h1>
        
        
        <div id="dice_place">
            <button id="button_wuerfeln" onclick="wuerfeln()">W&uuml;rfeln</button>
            <button id="nochmal_spielen" onclick="wuerfeln()">Nochmal spielen</button>
            
        </div>
        <!--<div><img src="./pictures/cube.jpg" id="wuerfelbild"/></div>-->
        
        <div>
            <table>
                <tr>
                    <th></th>
                    <th>Spieler</th>
                    <th>Computer</th>
                </tr>
                <tr>
                    <td>1er z&auml;hlen</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2er z&auml;hlen</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3er z&auml;hlen</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4er z&auml;hlen</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>5er z&auml;hlen</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>6er z&auml;hlen</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Zwischensumme</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Bonus bei 63 oder mehr (+35 Punkte)</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Summe Teil 1</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3er Pasch</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>4er Pasch</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Full-House</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Kleine Straße</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Große Straße</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Kniffel</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Chance</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Summe Teil 2</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Gesamtsumme</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </body>
</html>
