// ------------------------------------
// Part 1: Variables, Conditionals
// ------------------------------------
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    let age = document.getElementById("ageInput").value;
  
    if (age >= 18) {
      document.getElementById("ageResult").innerText = "You are an adult ✅";
    } else {
      document.getElementById("ageResult").innerText = "You are a minor ❌";
    }
  });
  
  // ------------------------------------
  // Part 2: Functions
  // ------------------------------------
  function calculateTotal(price1, price2) {
    return price1 + price2;
  }
  
  function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
  }
  
  document.getElementById("totalBtn").addEventListener("click", function() {
    let total = calculateTotal(15.5, 9.99);
    document.getElementById("totalResult").innerText = "Total: " + formatCurrency(total);
  });
  
  // ------------------------------------
  // Part 3: Loops
  // ------------------------------------
  let items = ["Apples", "Bananas", "Oranges", "Milk"];
  
  document.getElementById("listBtn").addEventListener("click", function() {
    let list = document.getElementById("shoppingList");
    list.innerHTML = ""; // clear before adding
    for (let i = 0; i < items.length; i++) {
      let li = document.createElement("li");
      li.innerText = items[i];
      list.appendChild(li);
    }
  });
  
  // ------------------------------------
  // Part 4: DOM Manipulation
  // ------------------------------------
  document.getElementById("toggleBtn").addEventListener("click", function() {
    let title = document.getElementById("title");
    if (title.style.color === "darkblue") {
      title.style.color = "crimson";
    } else {
      title.style.color = "darkblue";
    }
  });
  