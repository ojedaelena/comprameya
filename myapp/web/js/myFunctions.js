function personas(){
    $.ajax({
        url:'http://127.0.0.1/clasesUTN2015/clasephputn/myapp/index.php/productos/',
        type:'get',
        success:function(res){
            var parent = document.getElementById('table1');
            
            //Creo theader th
            var keyTable;
            keyTable = Object.keys(res[res.length - 1]);
            var th;
            var thead = document.getElementById('theader');

            for(var hkey in keyTable){
                th = document.createElement('th');
                var content = document.createTextNode(keyTable[hkey]);
                th.appendChild(content);
                thead.appendChild(th);
            }
            parent.appendChild(thead);
        
            //creo tbody tr
            var tbody = document.getElementById('tbody');
            for (var x in res){
                var tr = document.createElement('tr');
                for(var row in res[x]){
                    var td = document.createElement('td');
                    var content = document.createTextNode(res[x][row]);
                    td.appendChild(content);
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
            }
            parent.appendChild(tbody);
        }
    });
}