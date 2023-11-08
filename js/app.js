
const getData = async () => {
    const res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct");
    if (res.status === 200) {
        let items = res.data.data;
        for (const item of items) {
            console.log(item);
          document.getElementById("item-list").innerHTML += `
          
          <tr>
             <td>${item.ProductCode}</td>
             <td>${item.ProductName}</td>
             <td>${item.Qty}</td>
             <td>${item.UnitPrice}</td>
             <td>${item.TotalPrice}</td>
             <td><button class="button button-outline">Update</button></td>
             <td><button class="button button-outline">Delete</button></td>
             
          </tr>
          `
        }
    }
    else {
        console.log("error")
    }
}
getData();