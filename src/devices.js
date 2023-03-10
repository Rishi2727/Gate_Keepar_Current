const endpoint = "http://localhost:8082/"
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

if (window.electronAPI) {

const connectedDevices = window.electronAPI.sendSyncData();
console.log(connectedDevices);



setTimeout(() => {
  // console.log(connectedDevices)
}, 1000);



const getDevices = () => {
  const temp = [];
  const url = endpoint+"devicesSetup/getAllDevices";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "dbData");
      if (data.length === 0) {
        data = [
          {
            friendlyName: "friendlyName",
            locationId: "locationId",
            manufacturer: "manufacturer",
            path: "path",
            pnpId: "pnpId",
            productId: "productId",
            serialNumber: "serialNumber",
            vendorId: "vendorId",
          },
        ];
      }

      let id = 1;
      let html = ``;
      connectedDevices.forEach((device) => {
        // show all devices exept the ones that are already in the database
        if (!data.some((item) => item.path === device.port.path)) {
          html += `
    <tr>
        <td>${id++}</td>
        <td>${device.port.friendlyName}</td>
        <td>${device.port.locationId}</td>
        <td>${device.port.manufacturer}</td>
        <td>${device.port.path}</td>
        <td>${device.port.pnpId}</td>
        <td>${device.port.productId}</td>
        <td>${device.port.serialNumber}</td>
        <td>${device.port.vendorId}</td>
        <td><button type="button" class="btn btn-success" id="${
          device.port.path
        }"> + </button></td>
    </tr>
    `;

          tbody.innerHTML = html;
        }
      });
    });
};

const searchDevices = document.querySelector(".btn-primary");
searchDevices.addEventListener("click", () => {
  getDevices();
});

const addDevice = document.querySelector("tbody");
addDevice.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-success")) {
    console.log(e.target.id);
    //get all the data from the table row and console.log it
    const row = e.target.parentElement.parentElement;
    const data = {
      friendlyName: row.children[1].textContent,
      locationId: row.children[2].textContent,
      manufacturer: row.children[3].textContent,
      path: row.children[4].textContent,
      pnpId: row.children[5].textContent,
      productId: row.children[6].textContent,
      serialNumber: row.children[7].textContent,
      vendorId: row.children[8].textContent,
    };
    // console.log(data)
    const url = endpoint+"devicesSetup/addDevice";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    alert("Device added successfully");
    window.location.reload();
    
  }
});

}else{
  console.log("no electron api")
  // search button is disabled
  const searchDevices = document.querySelector(".btn-primary");
  searchDevices.disabled = true;

  // get all devices from the database
  const getDevices = () => {
    const temp = [];
    const url = endpoint+"devicesSetup/getAllDevices";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "dbData");
        if (data.length === 0) {
          data = [
            {
              friendlyName: "friendlyName",
              locationId: "locationId",
              manufacturer: "manufacturer",
              path: "path",
              pnpId: "pnpId",
              productId: "productId",
              serialNumber: "serialNumber",
              vendorId: "vendorId",
            },
          ];
        }

        let id = 1;
        let html = ``;
        data.forEach((device) => {
          // show all devices exept the ones that are already in the database
          html += `
    <tr>
        <td>${id++}</td>
        <td>${device.friendlyName}</td>
        <td>${device.locationId}</td>
        <td>${device.manufacturer}</td>
        <td>${device.path}</td>
        <td>${device.pnpId}</td>
        <td>${device.productId}</td>
        <td>${device.serialNumber}</td>
        <td>${device.vendorId}</td>
    </tr>
    `;

          tbody.innerHTML = html;
        });
      });
  };

  getDevices();

}