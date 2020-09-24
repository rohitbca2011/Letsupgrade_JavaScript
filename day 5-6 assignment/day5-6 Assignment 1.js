let employees=[
		{
			name:"rohit",
			age:21,
			city:"bokaro",
			salary:20000
		},
		{
			name:"sushant",
			age:23,
			city:"ranchi",
			salary:25000
		},
		{

			name:"anish",
			age:21,
			city:"jamshedpur",
			salary:32000
		},
		{
			name:"sumit",
			age:28,
			city:"bokaro",
			salary:18000
		},
		{
			name:"ritu",
			age:25,
			city:"dhanbad",
			salary:12000

		}
		]

	 function display(empdata){
			let tabledata="";
			let srno=1;
			  empdata.forEach(function (employee, index) {
            let currentrow = `<tr>
       <td>${srno}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.city}</td>
      <td>${employee.salary}</td>
      <td><button
       onclick=deleteemployee(${index})>
                  delete</button></td>
      </tr>`;

           tabledata += currentrow;
           srno++;

  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    // document.getElementById("tdata").innerHTML = tabledata;
}
            display(employees);


	 function searchByName(){
	        let searchValue=document.getElementById("searchname").value;
            let newdata = employees.filter(function(employee) {
	       	return employee.name.indexOf(searchValue)!=-1;
	                     	
	    });

	          display(newdata);
	         }	

   	 function searchByCity(){
	        let searchValue=document.getElementById("searchcity").value;
            let newdata = employees.filter(function(employee) {
	       	return employee.city.indexOf(searchValue)!=-1;
	                     	
	    });

	          display(newdata);
	         }	


	      function deleteemployee(index){
	          	employees.splice(index,1);
	           	display(employees)
	            }
