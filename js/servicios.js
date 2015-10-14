angular.module("myapp", []).controller("MyController",  ['$scope', '$location', function($scope, $location){
    $scope.templates=[ { name:'Estudios y Proyectos',                          url:'servicios/estudio_proyectos.html' },
                       { name:'Consultoria de Ingeniería de costos',           url:'servicios/consultoria_de_ingenieria_de_costos.html'},
                       { name:'Coordinación, supervisión y control de obras',  url:'servicios/coordinacion_supervision_control_obras.html'},
                       { name:'Ejecución de Obras',                            url:'servicios/ejecucion_obras.html'} ];
    var path=$location.path(); 
    var i=$scope.templates.length-1;
    if(path!=""){
	    for(; i>=0; i--) 
	    	if("/"+$scope.templates[i].url==path) break;
	    $scope.selectedTemplate=$scope.templates[i].url;	
    }
    else
    	$scope.selectedTemplate=$scope.templates[0].url;	
    $scope.selectTemplate=function(template){      $scope.selectedTemplate=template.url; }
}]);