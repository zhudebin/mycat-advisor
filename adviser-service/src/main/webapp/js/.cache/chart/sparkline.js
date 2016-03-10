/*TMODJS:{"version":1,"md5":"a2dd3b89ff1bc4591c61149ed6965350"}*/
template('chart/sparkline',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$string=$utils.$string,chart=$data.chart,$out='';$out+='<div class="container"> ';
include('../public/breadcrumbs');
$out+=' <div class="mini-charts"> <div class="row"> <div class="col-sm-3"> <div class="mini-charts-item bgm-cyan"> <div class="clearfix"> <div id="statsBar" class="chart"></div> <div class="count"> <small>Website Traffics</small> <h2>987,459</h2> </div> </div> </div> </div> <div class="col-sm-3"> <div class="mini-charts-item bgm-lightgreen"> <div class="clearfix"> <div id="statsBar2" class="chart"></div> <div class="count"> <small>Website Impressions</small> <h2>356,785K</h2> </div> </div> </div> </div> <div class="col-sm-3"> <div class="mini-charts-item bgm-orange"> <div class="clearfix"> <div id="statsLine" class="chart"></div> <div class="count"> <small>Total Sales</small> <h2>$ 458,778</h2> </div> </div> </div> </div> <div class="col-sm-3"> <div class="mini-charts-item bgm-bluegray"> <div class="clearfix"> <div id="statsLine2" class="chart"></div> <div class="count"> <small>Support Tickets</small> <h2>23,856</h2> </div> </div> </div> </div> <div class="col-sm-3"> <div class="mini-charts-item bgm-teal"> <div class="clearfix"> <div id="statsPie" class="chart chart-pie"></div> <div class="count"> <small>Percentage</small> <h2>99.87%</h2> </div> </div> </div> </div> <div class="col-sm-3"> <div class="mini-charts-item bgm-red"> <div class="clearfix"> <div id="statsLineD" class="chart"></div> <div class="count"> <small>Total Sales</small> <h2>$ 458,778</h2> </div> </div> </div> </div> <div class="col-sm-3"> <div class="mini-charts-item bgm-blue"> <div class="clearfix"> <div id="statsPieD" class="chart chart-pie"></div> <div class="count"> <small>Percentage</small> <h2>99.87%</h2> </div> </div> </div> </div> <div class="col-sm-3"> <div class="mini-charts-item bgm-pink"> <div class="clearfix"> <div id="statsBarD" class="chart"></div> <div class="count"> <small>Website Traffics</small> <h2>987,459</h2> </div> </div> </div> </div> </div> </div> </div> <script src="lib/chart/sparklines/jquery.sparkline.js"></script> <script> mycatui.chart.sparklineBar(\'statsBar\', ';
$out+=$string(chart.statsBar);
$out+=', \'45px\', 3, \'#fff\', 2); mycatui.chart.sparklineBar(\'statsBarD\', ';
$out+=$string(chart.statsBar);
$out+=', \'45px\', 3, \'#fff\', 2); mycatui.chart.sparklineBar(\'statsBar2\',';
$out+=$string(chart.statsBar);
$out+=' , \'45px\', 3, \'#fff\', 2); mycatui.chart.sparklineLine(\'statsLine\',';
$out+=$string(chart.statsLine);
$out+=' , 85, 45, \'#fff\', \'rgba(0,0,0,0)\', 1.25, \'rgba(255,255,255,0.4)\', \'rgba(255,255,255,0.4)\', \'rgba(255,255,255,0.4)\', 3, \'#fff\', \'rgba(255,255,255,0.4)\'); mycatui.chart.sparklineLine(\'statsLineD\',';
$out+=$string(chart.statsLine);
$out+=' , 85, 45, \'#fff\', \'rgba(0,0,0,0)\', 1.25, \'rgba(255,255,255,0.4)\', \'rgba(255,255,255,0.4)\', \'rgba(255,255,255,0.4)\', 3, \'#fff\', \'rgba(255,255,255,0.4)\'); mycatui.chart.sparklineLine(\'statsLine2\',';
$out+=$string(chart.statsLine2);
$out+=' , 85, 45, \'#fff\', \'rgba(0,0,0,0)\', 1.25, \'rgba(255,255,255,0.4)\', \'rgba(255,255,255,0.4)\', \'rgba(255,255,255,0.4)\', 3, \'#fff\', \'rgba(255,255,255,0.4)\'); mycatui.chart.sparklinePie(\'statsPie\',';
$out+=$string(chart.statsPie);
$out+=' , 45, 45, [\'#fff\', \'rgba(255,255,255,0.7)\', \'rgba(255,255,255,0.4)\', \'rgba(255,255,255,0.2)\']); mycatui.chart.sparklinePie(\'statsPieD\',';
$out+=$string(chart.statsPie);
$out+=' , 45, 45, [\'#fff\', \'rgba(255,255,255,0.7)\', \'rgba(255,255,255,0.4)\', \'rgba(255,255,255,0.2)\']); </script>';
return new String($out);
});