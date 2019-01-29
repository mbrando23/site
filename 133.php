<html>

	<head>
		<title>Confirmation Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
		<link href="style.css" type="text/css" rel="stylesheet">
	</head>
	
	<body class="content">
		
		<!-- 
      3: Confirmation Page
      Write a second PHP program to accept the data from the Purchase Review and display a simple message back to 
      the user. If this page was reached through the Confirm button on the Purchase Review, then return an HTML 
      document indicating that the purchase was complete. Note that if this were a real e-commerce site, the data 
      would be sent on to the order fulfillment software at this point. If this page was reached from the Cancel 
      button, then return an HTML document indicating that the purchase was canceled.
		-->
		
      <h2>

      <?php

         $subject = $_POST['subject'];
         if($subject == "confirm") {
            echo "The purchase was complete";
         }
         elseif($subject == "cancel") {
         	echo "The purchase was canceled";
         }
      ?>

      </h2>

      <p>
         <?php
            $firstName = $_POST['name1'];
            $lastName = $_POST['name2'];
            $address1 = $_POST['name3'];
            $addressNum = $_POST['number1'];
            $state = $_POST['name4'];
            $telephone = $_POST['number2'];            
            echo $firstName . ' ' . $lastName . '<br>';  
            echo 'Str./Av. ' . $address1 . ', ' . $addressNum . ', ' . $state . '<br>';
            echo 'Tel. ' . $telephone;                         
         ?>      
      </p>
      
      <p>      
      <?php
      
         $string = $_POST['expir'];	
         $substr = explode("/", $string);
         $string1 = "";
   
         if($substr[0]==12) {
         	$string1 = "December";
         }
         elseif($substr[0]==11) {
            $string1 = "November";
         }
         elseif($substr[0]==10) {
            $string1 = "October";
         }
         elseif($substr[0]==9) {
            $string1 = "September";
         }
         elseif($substr[0]==8) {
            $string1 = "August";
         }
         elseif($substr[0]==7) {
            $string1 = "July";
         }
         elseif($substr[0]==6) {
            $string1 = "June";
         }
         elseif($substr[0]==5) {
            $string1 = "May";
         }
         elseif($substr[0]==4) {
            $string1 = "April";
         }
         elseif($substr[0]==3) {
            $string1 = "March";
         }
         elseif($substr[0]==2) {
            $string1 = "February";
         }
         elseif($substr[0]==1) {
            $string1 = "January";
         }         
         $card = $_POST['card'];
         	                  
         echo "Credit Card: $card <br>Expiration Date: " . $string1 . " " . $substr[1] ;     
      ?>            
      </p>

      <p>
         <?php
            $itens = $_POST['itens'];
            $total = $_POST['total'];                                                          
            echo "The itens are: $itens <br>";
            echo "Amount: $total" ;       
         ?>
      </p>

      <p>
      
      
      </p><a href="13.html"><button>Go Back</button></a>


	</body>
	
</html>