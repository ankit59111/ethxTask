function calculateCoordinates() {
    let arrayOfData=[];
    let xPower=document.getElementById('xPower').value
    let yPower=document.getElementById('yPower').value
    let xConstant=document.getElementById('xConstant').value
    let yConstant=document.getElementById('xPower').value
    let constant=document.getElementById('constant').value
    let yValue,xValue;
    let maxY = constant;
    let minY =0;

    for (let i=0;i<100;i++){
        yValue=Math.pow(((constant-xConstant*Math.pow(i,xPower))/yConstant),1/yPower);
        if(minY>yValue){
            minY = yValue;
        }
        arrayOfData.push({x:i,y:yValue})
    }
    for (let j=-100;j<0;j++){
        y=Math.pow(((constant-xConstant*Math.pow(j,xPower))/yConstant),1/yPower);
        if(maxY<yValue){
            maxY =yValue;
        }
        arrayOfData.push({x:j,y:yValue})
    }
    console.log(arrayOfData);
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom
    ;


// set the ranges
    var x = d3.scale.ordinal().rangeRoundBands([-100, 100], .05);

    var y = d3.scale.linear().range([minY, maxY]);

// define the axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")


    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);


// add the SVG element
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


// load the data

    d3.json("data.json", function (error, data) {
data = arrayOfData;
        arrayOfData.forEach(function (d) {
            d.Letter = d.x;
            d.Freq = +d.y;
        });

        // scale the range of the data
        x.domain(arrayOfData.map(function (d) {
            return d.x;
        }));
        y.domain([0, d3.max(data, function (d) {
            return d.y;
        })]);

        // add axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 5)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Frequency");


        // Add bar chart
        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return x(d.x);
            })
            .attr("width", x.rangeBand())
            .attr("y", function (d) {
                return y(d.y);
            })
            .attr("height", function (d) {
                return height - y(d.y);
            });

    });

}
// set the dimensions of the canvas
