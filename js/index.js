const textarea = document.getElementById("textarea");
const input = document.getElementById("num");
const button = document.getElementById("btn");
const list = document.getElementById("list");
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

button.addEventListener("click", function () {
  const num = parseInt(input.value);
  let primes = [];
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  textarea.textContent = "小於" + num + "的質數有：" + primes.join(", ");
  let content = "";
  primes.forEach(function (i) {
    content +=`<li>${i},</li>`;
  });
  list.innerHTML = content;
});
