const regions={
  '全国':{cities:['全部城市','广州','深圳','杭州','南京','成都'],factor:1,issues:18},
  '华东大区':{cities:['全部城市','杭州','南京','苏州'],factor:.94,issues:7},
  '华南大区':{cities:['全部城市','广州','深圳','佛山'],factor:.97,issues:5},
  '广州区域':{cities:['全部城市','广州','佛山'],factor:.91,issues:3}
};
const metrics={progress:{name:'峰值有单进度',unit:'%',target:95,base:[78,80,81,83,84,86,88,87,90,91,92,93,92,94]},cap:{name:'封顶达成率',unit:'%',target:90,base:[71,74,75,76,78,77,80,82,83,85,84,86,87,88]},growth:{name:'净增率',unit:'%',target:8,base:[3.2,3.7,4.1,4.8,5.2,4.9,5.8,6.1,6.6,7.0,6.8,7.4,7.7,8.1]},ontime:{name:'准时率',unit:'%',target:96,base:[94.2,94.5,94.3,94.9,95.1,95.4,95.2,95.5,95.7,95.6,95.9,96.1,96.0,96.2]}};
const cityRows=[
  {city:'广州',region:'华南',progress:88.2,cap:79.4,growth:3.1,issue:'招募不足',reason:'新线索转化偏低，近7日有效新增低于规划',action:'增加高潜线索首呼优先级，调整外呼时段'},
  {city:'南京',region:'华东',progress:90.1,cap:82.6,growth:4.3,issue:'留存偏低',reason:'新骑手首周留存下降，流失集中在入职后3天',action:'加强首周陪跑与站点侧回访，复盘首单体验'},
  {city:'成都',region:'西南',progress:91.6,cap:84.2,growth:5.2,issue:'出勤不足',reason:'骑手规模接近目标，但高峰出勤率持续偏低',action:'优化高峰激励门槛，定向触达低活跃骑手'},
  {city:'佛山',region:'华南',progress:92.5,cap:85.7,growth:5.8,issue:'结构风险',reason:'暑期工占比偏高，中长期运力稳定性承压',action:'同步扩大常规骑手招募，控制短期运力依赖'},
  {city:'杭州',region:'华东',progress:94.2,cap:88.3,growth:7.2,issue:'接近达成',reason:'整体进度健康，少数站点封顶达成仍偏低',action:'聚焦低达成站点做小范围补招与调度'}
];
let trendChart,distributionChart;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function current(){return{level:$('#levelSelect').value,city:$('#citySelect').value,metric:$('#metricSelect').value,grain:$('.grain.active').dataset.grain}}
function initCharts(){trendChart=echarts.init($('#trendChart'));distributionChart=echarts.init($('#distributionChart'));updateAll();window.addEventListener('resize',()=>{trendChart.resize();distributionChart.resize()})}
function seededFactor(text){return 1+([...text].reduce((a,c)=>a+c.charCodeAt(0),0)%9-4)/100}
function trendData(state){let data=metrics[state.metric].base.map(v=>+(v*regions[state.level].factor*seededFactor(state.city)).toFixed(1));if(state.grain==='week')data=[data.slice(0,7).reduce((a,b)=>a+b,0)/7,data.slice(7).reduce((a,b)=>a+b,0)/7].map(v=>+v.toFixed(1));return data}
function updateCities(){const level=$('#levelSelect').value,select=$('#citySelect');select.innerHTML=regions[level].cities.map(c=>`<option>${c}</option>`).join('')}
function updateAll(){const s=current(),m=metrics[s.metric],data=trendData(s),latest=data.at(-1),scope=s.city==='全部城市'?s.level:s.city;$('#trendScope').textContent=`${scope} · ${s.grain==='day'?'按日':'按周'}`;$('#trendTitle').textContent=`${m.name}趋势`;
  const factor=regions[s.level].factor*seededFactor(s.city);const cards=[['峰值有单进度',92.4*factor,'%','较上期 +3.2%'],['封顶达成率',86.8*factor,'%','距目标 3.2pct'],['骑手净增率',7.4*factor,'%','较上期 +0.6pct'],['问题城市',regions[s.level].issues,'','其中高优先级 6 个']];$('#kpiCards').innerHTML=cards.map((x,i)=>`<article><small>${x[0]}</small><b>${typeof x[1]==='number'?x[1].toFixed(i===3?0:1):x[1]}${x[2]}</b><span class="${i===1||i===3?'bad':''}">${x[3]}</span></article>`).join('');
  const labels=s.grain==='day'?['6/01','6/03','6/05','6/07','6/09','6/11','6/13','6/15','6/17','6/19','6/21','6/23','6/25','6/27']:['第1周','第2周'];trendChart.setOption({grid:{left:42,right:18,top:25,bottom:28},tooltip:{trigger:'axis'},xAxis:{type:'category',data:labels,axisLine:{lineStyle:{color:'#dfe5df'}},axisLabel:{color:'#7a847f',fontSize:10}},yAxis:{type:'value',min:stateMin(s.metric),max:stateMax(s.metric),axisLabel:{formatter:`{value}${m.unit}`,color:'#7a847f'},splitLine:{lineStyle:{color:'#edf0ed'}}},series:[{type:'line',data,smooth:true,symbolSize:6,lineStyle:{width:3,color:'#176b4d'},itemStyle:{color:'#176b4d'},areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(23,107,77,.22)'},{offset:1,color:'rgba(23,107,77,0)'}]}}},{type:'line',data:Array(data.length).fill(m.target),symbol:'none',lineStyle:{type:'dashed',color:'#e19b48',width:2}}]});
  distributionChart.setOption({tooltip:{trigger:'item'},legend:{bottom:0,textStyle:{fontSize:10}},series:[{type:'pie',radius:['48%','70%'],center:['50%','45%'],label:{show:false},data:[{name:'已达成',value:62,itemStyle:{color:'#176b4d'}},{name:'接近达成',value:23,itemStyle:{color:'#e19b48'}},{name:'需关注',value:15,itemStyle:{color:'#d95b4f'}}]}]});
  const gap=m.target-latest;$('#diagnosisTitle').textContent=gap<=0?`${scope}${m.name}已达到规划目标`:`${scope}${m.name}距目标仍有 ${gap.toFixed(1)}${m.unit} 差距`;$('#diagnosisText').textContent=gap<=0?'当前趋势整体健康，建议继续关注城市间结构差异与配送体验。':'问题主要集中在低达成城市，建议进入“达成明细”查看招募、留存和出勤归因。';
}
function stateMin(metric){return metric==='growth'?0:metric==='ontime'?92:65}function stateMax(metric){return metric==='growth'?10:100}
function renderTable(){const tbody=$('#cityTable');tbody.innerHTML=cityRows.map((r,i)=>`<tr data-index="${i}" class="${i===0?'active':''}"><td><b>${r.city}</b></td><td>${r.region}</td><td>${r.progress}%</td><td>${r.cap}%</td><td>${r.growth}%</td><td><span class="pill">${r.issue}</span></td></tr>`).join('');$$('#cityTable tr').forEach(tr=>tr.addEventListener('click',()=>{$$('#cityTable tr').forEach(x=>x.classList.remove('active'));tr.classList.add('active');renderPanel(cityRows[+tr.dataset.index])}));renderPanel(cityRows[0])}
function renderPanel(r){$('#cityPanel').innerHTML=`<small>城市诊断</small><h4>${r.city}</h4><dl><div><dt>峰值进度</dt><dd>${r.progress}%</dd></div><div><dt>封顶达成</dt><dd>${r.cap}%</dd></div><div><dt>净增率</dt><dd>${r.growth}%</dd></div><div><dt>问题标签</dt><dd style="color:#d95b4f">${r.issue}</dd></div></dl><h5>自动归因</h5><p>${r.reason}</p><h5>建议动作</h5><p>${r.action}</p>`}
$$('.tab').forEach(btn=>btn.addEventListener('click',()=>{$$('.tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$$('.view').forEach(v=>v.classList.remove('active'));$('#'+btn.dataset.view+'View').classList.add('active');if(btn.dataset.view==='trend')setTimeout(()=>{trendChart.resize();distributionChart.resize()},50)}));
$$('.grain').forEach(btn=>btn.addEventListener('click',()=>{$$('.grain').forEach(x=>x.classList.remove('active'));btn.classList.add('active');updateAll()}));$('#levelSelect').addEventListener('change',()=>{updateCities();updateAll()});$('#citySelect').addEventListener('change',updateAll);$('#metricSelect').addEventListener('change',updateAll);updateCities();renderTable();initCharts();
