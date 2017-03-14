define({
	map: true,
	drsSoeUrl : "http://localhost:6080/arcgis/rest/services/AddressManagement/AddressDataManagement_QA/MapServer/exts/DataReviewerServer",
	columns:[
			{label:"Phase",field:"lifecyclePhase", formatter : function(value){ if(value == 2){return "<img src='./images/DataReviewerLifecycleReviewed16.png' />";}else if(value == 4){return "<img src='./images/DataReviewerLifecycleCorrected16.png' />";} else if(value == 6) {return "<img src='./images/DataReviewerLifecycleVerified16.png' />";} else{return "<img src='./images/DataReviewerLifeCycleUnknown16.png' />";}} },
			{label:"Lifecycle Status ",field:"lifecycleStatus", formatter : function(value){var statusString; require(['esri/tasks/datareviewer/ReviewerLifecycle'],function(ReviewerLifecycle) {
				statusString = ReviewerLifecycle.toLifecycleStatusString(value);
			});
			return statusString; } },
			{label:"Check Title",field:"checktitle"},
			{label:"Resource",field:"resourceName"},
			{label:"Status",field:"reviewStatus"},
			{label:"Severity",field:"severity"}
	],
	returnFields: ["recordId","objectId","checktitle","resourceName","reviewstatus","severity","geometryType","lifecyclePhase","lifecycleStatus"]
});
