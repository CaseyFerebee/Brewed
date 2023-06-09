import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders() 

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}
 
const employeeOrders = (id) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === id) {
            // Increment the number of fulfilled orders
            fulfilledOrders++
        }
    }

    // Return how many  orders were fulfilled
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "employee") {
            const employeeId = itemClicked.dataset.id

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(parseInt(employeeId))

                    window.alert(` ${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)