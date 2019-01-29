<html>

	<head>
		<title>Purchase Review</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
		<link href="style.css" type="text/css" rel="stylesheet">
	</head>
	
	<body class="content">
		
		<!-- 
      2: Purchase Review
      Write a PHP program to return an HTML document which is a Purchase Review page. This will accept all the user 
      data from the initial form and present it to the user in an easy to understand way. The purchase review page 
      must have the following:

      Title & Headings: The page should be well formatted and organized with an appropriate title and headings. 
      The details of how you do this are up to you.
      Name: The user's first and last name.
      Address: The user's address, presented in an easy-to-read way.
      Phone: The user's phone number.
      Items: A list of the items selected for purchase and their respective costs.
      Total: The total cost of all the items being purchased.
      Payment: The credit card type and expiration date. Display the expiration date with month and year, such as
      "January 2013."
      Confirm & Cancel: At the bottom of the page, have a form element with an action element referencing the second 
      PHP program (the Confirmation Page). There will be two submit buttons: one to confirm the purchase and one to 
      cancel the purchase. Both of these will re-submit all the information presented on the Review Page.
		-->
		
		<h2>Purchase Review</h2>

      <p class="confirm">
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
         	                  
         echo "Credit Card: $card <br>Expiration Date: " . $string1 . " " . $substr[1];     
      ?>            
      </p>

      <p>
         <?php
            $itens = $_POST['itens'];
            $total = $_POST['total'];                                                          
            echo "The purchase itens are: $itens <br>";
            echo "The total cost is $total";         
         ?>
      </p>
      
      <form action="133.php" method="post">
         Please confirm your purchase:
         <button class="w3-button w3-black" name="subject" type="submit" value="confirm">Confirm</button>
         <button class="w3-button w3-black" name="subject" type="submit" value="cancel">Cancel</button>
         <input type="hidden" name="itens" value="<?php echo $_POST['itens'] ?>">
         <input type="hidden" name="total" value="<?php echo $_POST['total'] ?>">
         <input type="hidden" name="card" value="<?php echo $_POST['card'] ?>">
         <input type="hidden" name="expir" value="<?php echo $_POST['expir'] ?>">
         <input type="hidden" name="name1" value="<?php echo $_POST['name1'] ?>">
         <input type="hidden" name="name2" value="<?php echo $_POST['name2'] ?>">
         <input type="hidden" name="name3" value="<?php echo $_POST['name3'] ?>">
         <input type="hidden" name="name4" value="<?php echo $_POST['name4'] ?>">
         <input type="hidden" name="number1" value="<?php echo $_POST['number1'] ?>">
         <input type="hidden" name="number2" value="<?php echo $_POST['number2'] ?>">         
      </form>


	</body>
	
</html>