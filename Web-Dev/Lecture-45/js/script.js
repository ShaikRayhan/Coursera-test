//object creation
//var company = new Object();
//company.name = "Facbook";
//console.log(company);
//company.ceo = new Object();
//company.ceo.firstname = "Mark";
//console.log(company);
//company.ceo.favColor = "blue;"
//console.log(company);
//console.log("Company CEO name is " + company.ceo.firstname);
//var stockPropName = "Stock of company";
//company[stockPropName] = 110;
//console.log("Stock price is :" + company[stockPropName]);
// Better way : object literal
var facebook = {
	name: "Facbook",
	ceo: {
		firstname:"Mark",
		favColor:"blue"
	},
	"Stock of company" : 110
}
console.log(facebook);