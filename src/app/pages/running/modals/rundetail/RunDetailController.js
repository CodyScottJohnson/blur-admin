angular.module('Services')
  .controller('RunDetailCtrl', function ($scope,$uibModalInstance,items,$sce,$timeout) {
    $scope.items=items[0];
    $scope.graphs={};
    console.log($scope.items)

    angular.forEach($scope.items.distance, function(item, key) {
      if(item.timestamp>0){
      $scope.items.distance[key].pace = (item.timestamp/60.0)/ (item.distance/1609.34);
      if($scope.items.distance[key].pace > 20){
        $scope.items.distance[key].pace = 20;
      }
    }
    else{
      $scope.items.distance[key].pace = 0;
    }
    });
    console.log($scope.items);
    $scope.CloseModal = function () {
        $uibModalInstance.dismiss('cancel');
      };
    function initialize() {
      var mapCanvas = document.getElementById('google-maps');
      var mapOptions = {
        //center: new google.maps.LatLng(0, -180),
        //zoom: 8,
        mapTypeId: google.maps.MapTypeId.HYBRID
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);


          $scope.path = $scope.items.path
          var i;
          var bounds = new google.maps.LatLngBounds();
          for(i = 0; i < $scope.path.length; i++){
            $scope.path[i].lat = $scope.path[i]['latitude'];
            delete $scope.path[i].latitude;
            $scope.path[i].lng = $scope.path[i]['longitude'];
            delete $scope.path[i].longitude;
            bounds.extend($scope.path[i]);
          }
          var flightPath = new google.maps.Polyline({
            path: $scope.path,
            geodesic: true,
            strokeColor: '#209E91',
            strokeOpacity: 1.0,
            strokeWeight: 3
          });
          map.fitBounds(bounds);
          flightPath.setMap(map);
}
$timeout(function(){
  initialize();
}, 100);
$timeout(function(){

  $scope.graphs=$scope.items;
}, 200);
  });
