angular.module('YourApp', ['ngMaterial']).controller("YourController", function($scope) {
    $scope.column = {
        name: 'NewAdd',
        type: 'string',
        size: '32',
        indexable: 'true',
        description: 'wosssdfsdf',
        propertys: [{
            key: 'Label',
            value: 'CO Ref Number'
        }, {
            key: 'Width',
            value: '50px'
        }, {
            key: 'Order',
            value: '0'
        }, {
            key: 'Visable',
            value: 'true'
        }, {
            key: 'Sortable',
            value: 'true'
        }, {
            key: 'SortName',
            value: 'RefNum'
        }, {
            key: 'Searchable',
            value: 'true'
        }, {
            key: 'ShortName',
            value: 'ref'
        }, {
            key: 'DataSourceType',
            value: ''
        }, {
            key: 'DataSource',
            value: ''
        }, {
            key: 'DataSourceGroupBy',
            value: ''
        }, {
            key: 'DataControlType',
            value: '1'
        }, {
            key: 'Require',
            value: 'false'
        }, {
            key: 'InvalidMsg',
            value: ''
        }, {
            key: 'InputRegular',
            value: ''
        }, {
            key: 'DataFormat',
            value: ''
        }, {
            key: 'JoinKeyword',
            value: ';'
        }]
    };
    $scope.types = ('int;string;dateTime').split(';').map(function(type) {
        return {
            columntype: type
        };
    });
    $scope.indexable = [true, false];

    $scope.columnsarray = [{
        name: 'RefNum',
        type: 'string',
        size: '32',
        indexable: 'true',
        description: 'wosssdfsdf',
        propertys: [{
            key: 'Label',
            value: 'CO Ref Number'
        }, {
            key: 'Width',
            value: '50px'
        }, {
            key: 'Order',
            value: '0'
        }, {
            key: 'Visable',
            value: 'true'
        }, {
            key: 'Sortable',
            value: 'true'
        }, {
            key: 'SortName',
            value: 'RefNum'
        }, {
            key: 'Searchable',
            value: 'true'
        }, {
            key: 'ShortName',
            value: 'ref'
        }, {
            key: 'DataSourceType',
            value: ''
        }, {
            key: 'DataSource',
            value: ''
        }, {
            key: 'DataSourceGroupBy',
            value: ''
        }, {
            key: 'DataControlType',
            value: '1'
        }, {
            key: 'Require',
            value: 'false'
        }, {
            key: 'InvalidMsg',
            value: ''
        }, {
            key: 'InputRegular',
            value: ''
        }, {
            key: 'DataFormat',
            value: ''
        }, {
            key: 'JoinKeyword',
            value: ';'
        }]
    }, {
        name: 'Requestdetails',
        type: 'string',
        size: '200',
        indexable: 'true',
        description: 'Requestdetails',
        propertys: [{
            key: 'Label',
            value: 'Requestdetails'
        }, {
            key: 'Width',
            value: '50px'
        }, {
            key: 'Order',
            value: '0'
        }, {
            key: 'Visable',
            value: 'true'
        }, {
            key: 'Sortable',
            value: 'true'
        }, {
            key: 'SortName',
            value: 'Requestdetails'
        }, {
            key: 'Searchable',
            value: 'true'
        }, {
            key: 'ShortName',
            value: 'Requestdetails'
        }, {
            key: 'DataSourceType',
            value: ''
        }, {
            key: 'DataSource',
            value: ''
        }, {
            key: 'DataSourceGroupBy',
            value: ''
        }, {
            key: 'DataControlType',
            value: '1'
        }, {
            key: 'Require',
            value: 'false'
        }, {
            key: 'InvalidMsg',
            value: ''
        }, {
            key: 'InputRegular',
            value: ''
        }, {
            key: 'DataFormat',
            value: ''
        }, {
            key: 'JoinKeyword',
            value: ';'
        }]
    }, {
        name: 'RequestNatureOfGift',
        type: 'string',
        size: '300',
        indexable: 'true',
        description: 'RequestNatureOfGift',
        propertys: [{
            key: 'Label',
            value: 'RequestNatureOfGift'
        }, {
            key: 'Width',
            value: '50px'
        }, {
            key: 'Order',
            value: '0'
        }, {
            key: 'Visable',
            value: 'true'
        }, {
            key: 'Sortable',
            value: 'true'
        }, {
            key: 'SortName',
            value: 'RequestNatureOfGift'
        }, {
            key: 'Searchable',
            value: 'true'
        }, {
            key: 'ShortName',
            value: 'ref'
        }, {
            key: 'DataSourceType',
            value: ''
        }, {
            key: 'DataSource',
            value: ''
        }, {
            key: 'DataSourceGroupBy',
            value: ''
        }, {
            key: 'DataControlType',
            value: '1'
        }, {
            key: 'Require',
            value: 'false'
        }, {
            key: 'InvalidMsg',
            value: ''
        }, {
            key: 'InputRegular',
            value: ''
        }, {
            key: 'DataFormat',
            value: ''
        }, {
            key: 'JoinKeyword',
            value: ';'
        }]
    }, {
        name: 'RealClientName',
        type: 'string',
        size: '50',
        indexable: 'true',
        description: 'Real Client Name',
        propertys: [{
            key: 'Label',
            value: 'Nature of gift'
        }, {
            key: 'Width',
            value: '50px'
        }, {
            key: 'Order',
            value: '0'
        }, {
            key: 'Visable',
            value: 'true'
        }, {
            key: 'Sortable',
            value: 'true'
        }, {
            key: 'SortName',
            value: 'RefNum'
        }, {
            key: 'Searchable',
            value: 'true'
        }, {
            key: 'ShortName',
            value: 'ref'
        }, {
            key: 'DataSourceType',
            value: ''
        }, {
            key: 'DataSource',
            value: ''
        }, {
            key: 'DataSourceGroupBy',
            value: ''
        }, {
            key: 'DataControlType',
            value: '1'
        }, {
            key: 'Require',
            value: 'false'
        }, {
            key: 'InvalidMsg',
            value: ''
        }, {
            key: 'InputRegular',
            value: ''
        }, {
            key: 'DataFormat',
            value: ''
        }, {
            key: 'JoinKeyword',
            value: ';'
        }]
    }];
    $scope.addclick = function() {
        console.log(JSON.stringify($scope.column));
        alert('add');
        //make a unique name for newly added
        //$scope.column.name = guid();

       $scope.columnsarray.push({
        name: guid(),
        type: 'string',
        size: '32',
        indexable: 'true',
        description: 'wosssdfsdf',
        propertys: [{
            key: 'Label',
            value: 'CO Ref Number'
        }, {
            key: 'Width',
            value: '50px'
        }, {
            key: 'Order',
            value: '0'
        }, {
            key: 'Visable',
            value: 'true'
        }, {
            key: 'Sortable',
            value: 'true'
        }, {
            key: 'SortName',
            value: 'RefNum'
        }, {
            key: 'Searchable',
            value: 'true'
        }, {
            key: 'ShortName',
            value: 'ref'
        }, {
            key: 'DataSourceType',
            value: ''
        }, {
            key: 'DataSource',
            value: ''
        }, {
            key: 'DataSourceGroupBy',
            value: ''
        }, {
            key: 'DataControlType',
            value: '1'
        }, {
            key: 'Require',
            value: 'false'
        }, {
            key: 'InvalidMsg',
            value: ''
        }, {
            key: 'InputRegular',
            value: ''
        }, {
            key: 'DataFormat',
            value: ''
        }, {
            key: 'JoinKeyword',
            value: ';'
        }]
    }
        );
    };

    $scope.saveedit = function(){
        console.log($scope.columnsarray);
        alert(JSON.stringify($scope.columnsarray));
    };

}).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}