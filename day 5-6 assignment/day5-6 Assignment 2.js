let buses = [{Name: '', Source: '', Destination: '', Number: '',Capacity: ''}];
    let table = document.getElementById("tt");
    let data = Object.keys(buses[0]);
    
  // Generate Table Heading 

    function generateHeading(table, data){
            let tabhead = table.createTHead();
            let row = tabhead.insertRow();
            for (let key of data){
                let th = document.createElement("th");
                let text = document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
            }
            
        }

        // Generate the table
         
    function generateTable(table, data){
        
            for (let element of data){
                let row = table.insertRow();
                for (key in element){
                    let td = document.createElement("td");
                let text = document.createTextNode(element[key]);
                td.appendChild(text);
                row.appendChild(td);
                }
            }
            
        }

// Add data to Table

    function adddata(){
        let name = document.getElementById("name").value;
        let source= document.getElementById("source").value;
        let destination= document.getElementById("destination").value;
        let number= document.getElementById("number").value;
        let capacity= document.getElementById("capacity").value;
        
        let toadd = {Name: name, Source: source, Destination: destination, Number: number,Capacity:capacity};
        console.log(toadd);
        buses.push(toadd);
        saveRecords(buses);
        refreshTable();
    }

// Refresh Table

    function refreshTable(){
            table.innerHTML = "";
            generateTable(table, buses);  
            generateHeading(table, data);

    }

    //Delete Data from the array

    function deleteRecords(){
           buses= [];
           table.innerHTML = "";
          window.localStorage.clear();

    }

    function saveRecords(arr) {
     window.localStorage.setItem('Buses', JSON.stringify(arr) );
    }

     function showRecords() {
     return JSON.parse(window.localStorage.getItem('Buses'));
     
    }

// Initialize from Local Data

showRecords() ? buses = showRecords() : false;


    function search(choice)
    {

      if(choice==0){
      let search = document.getElementById("search").value;
      let results = buses.filter(obj => {return obj.Source === search});
      if(results.length!=0)
      { 
      let searchdata = Object.keys(results[0]); 
      table.innerHTML = "";
      generateTable(table, results);  
      generateHeading(table, searchdata);
      }
      else{
          alert("No Results Found");
      }
        } 
       
    if(choice==1){
      let search = document.getElementById("search").value;
      let results = buses.filter(obj => {return obj.Destination === search});
      if(results.length!=0)
      { 
      let searchdata = Object.keys(results[0]); 
      table.innerHTML = "";
      generateTable(table, results);  
      generateHeading(table, searchdata);
      }
      else{
          alert("No Results Found");
      }
        }
     
    }

   // initial table generation call

   generateTable(table, buses);    
   generateHeading(table, data);
