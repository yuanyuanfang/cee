<div class="guide-identify">
	<div class="real-name">
		<div class="real-name-title">
				<div class="real-name-name">实名认证<img src="<%=identifyImg.realName%>"></div>
				<p class="real-name-message">平台审核司导的身份信息并视频确认</p>
				<p>保障资料真实有效</p>
		</div>	
		<ul class="identify-material">
			<%if(identify){%>
					<li>身份证证明材料<img src="<%=identifyImg.right%>" alt=""></li>
			<%}%>
			<%if(identifyWithPerson){%>
					<li>手持身份证照片<img src="<%=identifyImg.right%>" alt=""></li>
			<%}%>
			<%if(driverLicense){%>
					<li>驾驶证<img src="<%=identifyImg.right%>" alt=""></li>
			<%}%>
		</ul>
	</div>
	<div class="vehicle-year-examine">
		<div class="vehicle-title">
				<div class="vehicle-name">车辆年审<img src="<%=identifyImg.car%>"></div>
				<p class="vehicle-message">平台审核司导车辆信息</p>
				<p>每年到现场评定一次车辆等级</p>
		</div>	
		<ul class="vehicle-material">

			<%if(drivingPermission){%>
				<li class="clearfix">行驶证<img src="<%=identifyImg.right%>" alt=""> <div class="identify-date"><span >有效期至:</span> <%=drivingPermission%></div></li>
			<%}%>
			<%if(annualSurveyLicense){%>
				<li class="clearfix">车辆年检证<img src="<%=identifyImg.right%>" alt=""> <div class="identify-date"><span>有效期至: </span><%=annualSurveyLicense%></div></li>
			<%}%>
			<%if(actuarialEvidence){%>
				<li class="clearfix">车辆保险证明<img src="<%=identifyImg.right%>" alt=""> <div class="identify-date"><span>有效期至: </span><%=actuarialEvidence%></div></li>
			<%}%>
		</ul>
	</div>
	<div class="assess-job">
		<div class="assess-job-title">
				<div class="assess-job-name">考核上岗<img src="<%=identifyImg.job%>"></div>
				<p class="assess-job-message">每个司导上岗前都会通过平台的培训和考试</p>

		</div>	
		<ul class="assess-job-material">

			<%if(startTrain){%>
				<li class="clearfix">接受培训<img src="<%=identifyImg.right%>" alt=""><div class="identify-date "><span>培训时间:</span> <%=startTrain%></div></li>
			<%}%>
			<%if(trained){%>
				<li class="clearfix">通过培训考试<img src="<%=identifyImg.right%>" alt=""><div class="identify-date"><span>通过时间:</span> <%=trained%></div></li>
			<%}%>
			<%if(toFormal){%>
				<li class="clearfix">成为正式司导<img src="<%=identifyImg.right%>" alt=""><div class="identify-date"><span>上岗时间:</span> <%=toFormal%></div></li>
			<%}%>
			<li class="clearfix">服务皇包车第一笔订单<img src="<%=identifyImg.right%>" alt="">
				<%if(firstOrder){%>
						<div class="identify-date "><span>第一单时间:</span> <%=firstOrder%></div>
				<%}else{%>
						<div class="identify-date">暂无</div>
				<%}%>
			</li>
		</ul>
	</div>
	<div class="five-choose">
		<div class="five-choose-title">
				<div class="five-choose-name">五重甄选</div>
				<p class="five-choose-message">严苛的甄选流程，标准的服务规范 
					<span class="five-check-detail">查看细则</span>
				</p>
		</div>
		<div class="five-process clearfix">
			<div class="process"><img src="<%=identifyImg.process%>" alt=""><div>5重甄选流程</div></div>
			<div class="check"><img src="<%=identifyImg.check%>" alt=""><div>15项审核机制</div></div>
			<div class="standards"><img src="<%=identifyImg.standards%>" alt=""><div>500条司导规范</div></div>
		</div>
	</div>
</div>