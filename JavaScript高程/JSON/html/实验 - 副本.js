<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- <script>
		var book = {
			"title": "a book",
			"authors": [
				"小米"
			],
			"edition": 4,
			"year": 2011
		}
	
		/*var jsonText = JSON.stringify(book);
		console.log(jsonText) //"a book"*/
	
		var jsonText = JSON.stringify(book, function (key, value) {
			switch (key) {
				case 'title':
					return value + 1;
					break;
				default:
					return value;
					break;
			}
		});
		console.log(jsonText) //"{"title":1,"authors":["小米"],"edition":4,"year":2011}"
	</script> -->
	<script>
        var book = {
            "title": "a book"
        }

        /*var jsonText = JSON.stringify(book);
        console.log(jsonText) //"a book"*/

        var jsonText = JSON.stringify(book, function (key, value) {
            if (key == '') {
            	return value;
            }
        });
        console.log(jsonText) // {}
    </script>
</body>
</html>