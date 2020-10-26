messages = document.getElementById('messages')
input = document.getElementById('input')
left = document.getElementById('left')
right = document.getElementById('right')

index = 0

products = {
"apple":{cost:320,vitamins:"A,B1,B2,B6,C"},
"orange":{cost:100,vitamins:"C"},
"pineapple":{cost:200,vitamins:"A,B6,E,K"},
"blackberry":{cost:220,vitamins:"C,K"},
"banana":{cost:30,vitamins:"B6,B12"},
"grapes":{cost:150,vitamins:"C"},
}



function taketheinput(event) {
	if(event.key === "Enter"){
		messages.innerHTML += right.outerHTML
		index += 1
		messages.lastChild.id = index
		messages.lastChild.childNodes[1].textContent = input.value
		processinput(input.value.toLowerCase())
		input.value = ""
	}
}

function processinput(input){

	if(input!=""){
		messages.innerHTML += left.outerHTML
		index += 1
		messages.lastChild.id = index
		messages.lastChild.childNodes[1].textContent = output(input)	
	}

}

function output(input) {
	result = input.match(/(how)|(\w+)/g)
	if(result.includes("cost")){
		return recentproduct.cost
	}
	if(result.includes("vitamins")){
		return recentproduct.vitamins
	}
	a="";
	result.forEach(function(product){
		if(products.hasOwnProperty(product)){
			a = "Yes we have " + product + "/kg"
			recentproduct = products[product]
		}
	})
	if(a){
		return a;
	}
    if (input === "hi") {
		return "HELLO THERE...!"
	}
	return "Sorry " + input + " is not designed!"
}