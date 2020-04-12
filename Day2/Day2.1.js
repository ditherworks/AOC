
var test1 = [1,0,0,0,99];
var test2 = [2,3,0,3,99];
var test3 = [2,4,4,5,99,0];
var test4 = [1,1,1,4,99,5,6,0,99];
var result1 = [2,0,0,0,99];
var result2 = [2,3,0,6,99];
var result3 = [2,4,4,5,99,9801];
var result4 = [30,1,1,4,2,5,6,0,99];

var data = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,9,19,23,1,6,23,27,1,10,27,31,1,5,31,35,2,6,35,39,1,5,39,43,1,5,43,47,2,47,6,51,1,51,5,55,1,13,55,59,2,9,59,63,1,5,63,67,2,67,9,71,1,5,71,75,2,10,75,79,1,6,79,83,1,13,83,87,1,10,87,91,1,91,5,95,2,95,10,99,2,9,99,103,1,103,6,107,1,107,10,111,2,111,10,115,1,115,6,119,2,119,9,123,1,123,6,127,2,127,10,131,1,131,6,135,2,6,135,139,1,139,5,143,1,9,143,147,1,13,147,151,1,2,151,155,1,10,155,0,99,2,14,0,0];


function Log(text)
{
	var output = document.getElementById('output');
	output.innerHTML += text + "<br/>";
}


function RunData(data, testresult)
{
	if (testresult)
		Log('Data: ' + data + ' Expected: ' + testresult);

	var ip = 0;
	while (data[ip] != 99)
	{
		switch (data[ip])
		{
			case 1:
				data[data[ip + 3]] = data[data[ip + 1]] + data[data[ip + 2]];
				break;

			case 2:
				data[data[ip + 3]] = data[data[ip + 1]] * data[data[ip + 2]];
				break;
		}
		ip += 4;
	}

	Log('Result: ' + data);
	Log('');

	if ( testresult && JSON.stringify(data)==JSON.stringify(testresult) )
		Log('Test passed');
}


window.onload = function()
{
	RunData(test1, result1);
	RunData(test2, result2);
	RunData(test3, result3);
	RunData(test4, result4);

	Log('');

	data[1] = 12;
	data[2] = 2;
	RunData(data);
};