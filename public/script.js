async function findHalls() {
  const targetTable = document.querySelector("#filler");

  const request = await fetch("/api/dining");
  const data = await request.json();
  const filter = data;

  const html = filter.data
    .map((item) => {
      return `
        <tr>
          <td>${item.hall_id}:</td>
          <td>${item.hall_name}</td>
          <td>${item.hall_address}</td>
        </tr>
        `;
    })
    .join("");
  targetTable.innerHTML = html;
}

async function windowActions() {
  await findHalls();
}

window.onload = windowActions;
