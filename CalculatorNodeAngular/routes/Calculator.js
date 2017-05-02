/**
 * New node file
 */
var ejs = require("ejs");
exports.addition=function(req,res){

	var operand1 = req.param("operand1");
	var operand2 = req.param("operand2");
	
	console.log(operand1);
	console.log(operand2);
	if(operand1 === undefined || operand2 === undefined || operand1 === " " || operand2 === " ")
	{
		res.send({"addition":('Enter Valid Numbers')});
		console.log("Invalid");
	
	}
	else if (isNaN(Number(operand1)) || isNaN(Number(operand2)))
	{
		res.send({"addition":('Enter valid numbers')});
		console.log("Invalid");
	}
	else
	{
		console.log("Addition " + ( parseInt(operand1)+parseInt(operand2)));
		res.send({"addition":( parseInt(operand1)+parseInt(operand2))});
		
	}
};
exports.subtraction=function(req,res){

	var operand1 = req.param("operand1");
	var operand2 = req.param("operand2");
	
	console.log(operand1);
	console.log(operand2);
	if(operand1 === undefined || operand2 === undefined || operand1 === " " || operand2 === " ")
	{
		res.send({"subtraction":('Enter Valid Numbers')});
		console.log("Invalid");
	
	}
	else if (isNaN(Number(operand1)) || isNaN(Number(operand2)))
	{
		res.send({"subtraction":('Enter valid numbers')});
		console.log("Invalid");
	}
	else
	{
		console.log("Subtraction " + ( parseInt(operand1)-parseInt(operand2)));
		res.send({"subtraction":( parseInt(operand1)-parseInt(operand2))});
		
	}
};
exports.division=function(req,res){

	var operand1 = req.param("operand1");
	var operand2 = req.param("operand2");
	
	console.log(operand1);
	console.log(operand2);
	if(operand1 === undefined || operand2 === undefined || operand1 === " " || operand2 === " ")
	{
		res.send({"sum":('Enter Valid Numbers')});
		console.log("Invalid");
	
	}
	else if (isNaN(Number(operand1)) || isNaN(Number(operand2)))
	{
		res.send({"sum":('Enter valid numbers')});
		console.log("Invalid");
	}
	
	else
	{
		if(parseInt(operand2) === 0)
		{
			console.log("Division by zero not allowed");
			res.send({"division":('Division by zero not allowed')});
			
		}
		else
		{
		console.log("division" + ( parseInt(operand1)/parseInt(operand2)));
		res.send({"division":( parseInt(operand1)/parseInt(operand2))});
		}
		
	}
};
exports.multiplication=function(req,res){

	var operand1 = req.param("operand1");
	var operand2 = req.param("operand2");
	
	console.log(operand1);
	console.log(operand2);
	if(operand1 === undefined || operand2 === undefined || operand1 === " " || operand2 === " ")
	{
		res.send({"multiplication":('Enter Valid Numbers')});
		console.log("Invalid");
	
	}
	else if (isNaN(Number(operand1)) || isNaN(Number(operand2)))
	{
		res.send({"multiplication":('Enter valid numbers')});
		console.log("Invalid");
	}
	else
	{
		console.log("Multiplication " + ( parseInt(operand1)*parseInt(operand2)));
		res.send({"multiplication":( parseInt(operand1)*parseInt(operand2))});
		
	}
};
