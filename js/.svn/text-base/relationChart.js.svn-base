/*--------------------------------
            *Author: ymf_wx1981@hotmail.com
            *Date:    2016-4-24 10:06
         ----------------------------------*/

$(document).ready(function() {

    //获取元素
    var oCorpName = $("#corp-name");
    var oChart = $("#chart"); //图容器
    var opanel = $("#detail-panel"); //弹出面板
    oBtn = $("#btn-close"), //关闭按钮
        oLis = $(".tab-nav li"), //弹出面板Menu
        odivs = $(".tab-content div"); //弹出面板Content

    var oCorpNamePop = $("#base-info-content"),
        oOwner = $("#legal-owner"), //法人代表
        oCapital = $("＃capital"), //注册资本
        oRunTime = $("#run-time"), //成立日期
        oRegion = $("#region"); //行业领域

    var oShareholders = $("#shareholders li"), //股东 
        oInvest = $("#invest li"), //投资
        oStuff = $("#stuff li"); //主要成员

    //获取panel的display属性
    var displayStyle = opanel.css("display");
    //close button click event
    oBtn.on("tap", function() {

        if (displayStyle == 'block') {
            opanel.css("display", "none");
        } else {
            opanel.css("display", "none");
        }
    });

    //防止点击panel面板关闭
    opanel.on("tap", function() {
        return false;
    });

    //按钮和内容页切换
    var l = oLis.length;
    var n = odivs.length;
    
    
    

    for (var i = 0; i < l; i++) {
        (function(index) {
            //nav click
            oLis.eq(index).on("tap", function() {
                //nav change
                oLis.eq(index).addClass("nav-border").siblings().removeClass("nav-border");
                //content change
                odivs.eq(index).css("display", "block").siblings().css("display", "none");
            });
        })(i);
    }

    //-------------------D3.js------------------------
    //数据
    var nodes = [{
            name: "本宁网络科技",
            type: "R",
            len: 100
        }, {
            name: "对外投资",
            type: "B",
            len: 24
        }, {
            name: "法院判决",
            type: "B",
            len: 24
        }, {
            name: "股东",
            type: "B",
            len: 24
        }, {
            name: "疑似关系",
            type: "B",
            len: 24
        }, {
            name: "法院公告",
            type: "B",
            len: 24
        }, {
            name: "员工",
            type: "B",
            len: 24
        }, {
            name: "高管",
            type: "B",
            len: 24
        },

        {
            name: "陈明",
            type: "C",
            len: 12
        }, {
            name: "国凯英计算机科技",
            type: "C",
            len: 12
        }, {
            name: "李勇峰",
            type: "C",
            len: 12
        }

    ];

    var edges = [

        {
            source: 0,
            target: 1
        }, {
            source: 0,
            target: 2
        }, {
            source: 0,
            target: 3
        }, {
            source: 0,
            target: 4
        }, {
            source: 0,
            target: 5
        }, {
            source: 0,
            target: 6
        }, {
            source: 0,
            target: 7
        },

        {
            source: 8,
            target: 3
        }, {
            source: 8,
            target: 7
        },

        {
            source: 9,
            target: 3
        }, {
            source: 3,
            target: 9
        },

        {
            source: 10,
            target: 7
        }, {
            source: 7,
            target: 10
        }

    ];
    
    //公司名
    oCorpName.html(nodes[0].name);

    var width = 320;
    var height = 380;

    var svg = d3.select(oChart[0])
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var myForce = d3.layout.force()
        .nodes(nodes) //指定节点数组
        .links(edges) //指定连线数组
        .size([width, height]) //指定范围
        .linkDistance(function(d) {
            return d.source.len;
        }) //指定连线长度
        .charge(-200); //相互之间的作用力

    myForce.start(); //开始作用

    console.log(nodes);
    console.log(edges);

    var myColor = d3.scale.category20();

    var isFirst = true;

    //添加连线    
    var svg_edges = svg.selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .style("stroke", function(d, i) {

            if (d.source.type == "R") {
                d.source.rgb = myColor(d.source.type);
                d.rgb = myColor(d.target.name);
                d.target.rgb = d.rgb;
            }

            if (d.source.type == "B") {
                d.rgb = d.source.rgb;
                d.target.rgb = d.rgb;
            }

            if (d.source.type == "C") {
                d.rgb = d.target.rgb;
                d.source.tindex = d.target.index;
                if (isFirst) {
                    isFirst = false;
                    d.source.rgb = d.target.rgb;
                }
                if (d.target.index < d.source.tindex) {
                    d.source.tindex = d.target.index;
                    d.source.rgb = d.target.rgb;
                }
            }

            return d.rgb;

        })
        .style("stroke-width", function(d, i) {

            if (d.source.type == "R")
                return 2;
            else if (d.source.type == "B")
                return 1;
            else if (d.source.type == "C")
                return 1;
            else
                return 1;

        });

    //添加节点          
    var svg_nodes = svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", function(d, i) {
            if (d.type == "R")
                return 16;
            else if (d.type == "B")
                return 8;
            else if (d.type == "C")
                return 3;
            else
                return 3;
        })
        .attr("class", "nodes-class")
        .style("fill", function(d, i) {

            if (d.type == "R") {
                return d.rgb;
            }

            if (d.type == "B") {
                return d.rgb;
            }

            if (d.type == "C") {
                return d.rgb;
            }
            if (d.target.index < d.tindex) {
                return d.rgb;
            }
            return d.rgb;
        })
        .style("stroke", function(d, i) {

            if (d.type == "R") {
                return d.rgb;
            }

            if (d.type == "B") {
                return d.rgb;
            }

            if (d.type == "C") {
                return d.rgb;
            }
            if (d.target.index < d.tindex) {
                return d.rgb;
            }
            return d.rgb;

        }).style("stroke-width", function(d, i) {

            if (d.type == "R") {
                return 8;
            }

            if (d.type == "B") {
                return 3;
            }

            if (d.type == "C") {
                return 2;
            }
            if (d.target.index < d.tindex) {
                return 1;
            }
            return 1;

        })
        .style("stroke-opacity", .25)
        .call(myForce.drag); //使得节点能够拖动

    svg_nodes.on("click", function(d) {

        if (d.type == "R") {
            //console.log(d.name);

            oCorpNamePop.html(d.name);
            oOwner.html("陈明");
            oCapital.html("1,000.000000 万人民币");
            oRunTime.html("2016-02-25");
            oRegion.html("计算机软件科技");

            oShareholders.eq(0).html("陈明");
            oShareholders.eq(1).html("国凯英计算机科技");

            oStuff.eq(1).html("李勇峰");

            opanel.css("display", "block");

        } else {

            return false;
        }

    })

    //添加描述节点的文字
    var svg_texts = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .style("fill", "#333333")
        .style("font-size", function(d, i) {
            if (d.type == "R")
                return 12;
            else if (d.type == "B")
                return 10;
            else if (d.type == "C")
                return 6;
            else
                return 6;

        })
        .attr("dx", 2)
        .attr("dy", 6)
        .text(function(d) {
            return d.name;
        });

    //对于每一个时间间隔
    myForce.on("tick", function() {

        //更新连线坐标
        svg_edges.attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            });

        //更新节点坐标
        svg_nodes.attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });

        //更新文字坐标
        svg_texts.attr("x", function(d) {
                return d.x;
            })
            .attr("y", function(d) {
                return d.y;
            });
    });

});