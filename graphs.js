/***
Holden Higgins & Naotaka Kinoshita
SoftDev2 Pd7
K14 - You Are Smarter Than The President
2018-03-26
***/

//Income tax comparison
var y2017 = [1.57,1,.368,.0968,.163]; //income, payroll, corporate, excise, other
var y2000 = [1.23,.801,.254,.0845,.113];

var c1 = d3.select(".y2017");
var bar2017 = c1.selectAll("div");
var bar17update = bar2017.data(y2017);
var bar17enter = bar17update.enter().append("div");

bar17enter.style("width", function(d) {
    return d * 1000 + "px";
});
bar17enter.text(function(d, i) {
    var text;
    if (i == 0) text = "Personal Income Tax";
    if (i == 1) text = "Payroll Tax";
    if (i == 2) text = "Corporate Income Tax";
    if (i == 3) text = "Excise Tax";
    if (i == 4) text = "Other Taxes";
    return text + "  $" + d;
});

var c2 = d3.select(".y2000");
var bar2000 = c2.selectAll("div");
var bar00update = bar2000.data(y2000);
var bar00enter = bar00update.enter().append("div");

bar00enter.style("width", function(d) {
    return d * 1000 + "px";
});
bar00enter.text(function(d, i) {
    var text;
    if (i == 0) text = "Personal Income Tax";
    if (i == 1) text = "Payroll Tax";
    if (i == 2) text = "Corporate Income Tax";
    if (i == 3) text = "Excise Tax";
    if (i == 4) text = "Other Taxes";
    return text + "  $" + d;
});
