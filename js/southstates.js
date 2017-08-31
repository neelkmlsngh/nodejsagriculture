var initStackedBarChart = {
        draw: function(config) {
            me = this,
                domEle = config.element,
                stackKey = config.key,
                data = config.data,
                margin = { top: 20, right: 20, bottom: 30, left: 50 },
                parseDate = d3.timeParse("%m/%Y"),
                width = 1500 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom,
                xScale = d3.scaleBand().range([0, width]).padding(0.1),
                yScale = d3.scaleLinear().range([height, 0]),
                color = d3.scaleOrdinal(d3.schemeCategory20),
                //xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b")),
                xAxis = d3.axisBottom(xScale),
                yAxis = d3.axisLeft(yScale),
                svg = d3.select("#" + domEle).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var stack = d3.stack()
                .keys(stackKey)
                .order(d3.stackOrderNone)
                .offset(d3.stackOffsetNone);

            var layers = stack(data);
            data.sort(function(a, b) { return b.total - a.total; });
            xScale.domain(data.map(function(d) { return d.Particulars; }));
            //yScale.domain([0, d3.max(layers[layers.length - 1], function(d) { return d[0] + d[1]; }) ]).nice();
            yScale.domain([0, d3.max(data, function(d) { return d.v > 40 ? d.v : 40; })]);

            var layer = svg.selectAll(".layer")
                .data(layers)
                .enter().append("g")
                .attr("class", "layer")
                .style("fill", function(d, i) { return color(i); });

            layer.selectAll("rect")
                .data(function(d) { return d; })
                .enter().append("rect")
                .attr("x", function(d) { return xScale(d.data.Particulars); })
                .attr("y", function(d) { return yScale(d[1]); })
                .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); })
                .attr("width", xScale.bandwidth());

            svg.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + (height + 5) + ")")
                .call(xAxis);
            svg.append("g")
                .attr("class", "axis axis--y")
                .attr("transform", "translate(0,0)")
                .call(yAxis);

            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 5)
                .attr("dy", ".71em")
                .style("text-anchor", "end").text("Agricultural Production Foodgrains Rice in decimal");
        }
    }
    var key = ["year1993", "year1994", "year1995", "year1996", "year1997", "year1998", "year1999", "year2000", "year2001", "year2002", "year2003", "year2004", "year2005", "year2006", "year2007", "year2008", "year2009", "year2010", "year2011", "year2012", "year2013", "year2014"];
    var data1 = d3.json("../jsonfile/GraphData.json", function(error, jsonData) {
        if (error) throw error;
        // trigger render
        console.log('jsonData');
        console.log(jsonData);
        data1 = jsonData;
        initStackedBarChart.draw({
            data: jsonData,
            key: key,
            element: 'stacked-bar'
        });
    });
    console.log('data1');
    console.log(data1);