
tableAscii = {
	"A":65,
	"B":66,	
	"C":67,	
	"D":68,	
	"E":69,	
	"F":70,	
	"G":71,	
	"H":72,	
	"I":73,	
	"J":74,	
	"K":75,	
	"L":76,	
	"M":77,	
	"N":78,	
	"O":79,	
	"P":80,
	"Q":81,	
	"R":82,	
	"S":83,
	"T":84,	
	"U":85,	
	"V":86,	
	"W":87,	
	"X":88,	
	"Y":89,	
	"Z":90
}

function tunnerLetterIntoNumber(list) {	

	const array = list.split('')	
	
	response = array.map((item) => {		
		if (isNaN(item)) {			
			return tableAscii[item]
		} 
		return item		
	})

	return response;
}


function shuffle(array) {
	return array.map((item) => item * 2);
}


function encript(vim) {
	let response = tunnerLetterIntoNumber(vim)
	const encryptedData = shuffle(response);
	console.log('Resultado após a criptografia: ', encryptedData);
	return encryptedData
}


//arquivo de teste
const vim = "1HJ2T578J"

encript(vim)

