(
    async function () {
        try {
            const response: Response = await fetch(
                'http://localhost:3000/employees',
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            if (response.status === 200) {
                try {
                    const data = await response.json()
                    //showRecords(data as any[])
                    //showRecords(<any[]>data)
                    showRecords(data)
                } catch (e) {
                    console.log(e)
                }
            } else {
                window.alert('try later...')
            }

        } catch (error) {
            console.log(error)
        }
    }
)();

function showRecords(arr: any[]) {
    const tbody = document.getElementById('tblBody')

    arr.forEach(
        (element) => {
            const tdName = document.createElement('td')
            tdName.innerText = element.name

            const tdBasic = document.createElement('td')
            tdBasic.innerText = element.basicPay.toString()

            const tdDa = document.createElement('td')
            tdDa.innerText = element.daPay.toString()

            const tdHra = document.createElement('td')
            tdHra.innerText = element.hraPay.toString()

            const tdExtra = document.createElement('td')
            if (element.incentivePay) {
                tdExtra.innerText = element.incentivePay
                    .toString()
            }

            if (element.gratuityPay) {
                tdExtra.innerText = element.gratuityPay
                    .toString()
            }

            const row = document.createElement('tr');
            row.append(tdName, tdBasic, tdDa, tdHra, tdExtra)

            tbody?.appendChild(row)
        }
    )
}