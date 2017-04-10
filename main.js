var sumsq = 0,
	sqsum = 0,
	diff = 0;

for (var i = 1; i < 11; i++) {
 	sumsq += i * i;
}

for (var i = 1; i < 11; i++) {
	sqsum += i;
}
sqsum *= sqsum;
diff = sqsum - sumsq;

document.getElementById('sumsq').innerHTML = "The sum of the squares is: " + sumsq;
document.getElementById('sqsum').innerHTML = "The square of the sum is: " + sqsum;
document.getElementById('diff').innerHTML = "And the difference is: " + sqsum;
document.getElementById('diff').innerHTML += " - " + sumsq + " = <b>" + diff + "</b>";