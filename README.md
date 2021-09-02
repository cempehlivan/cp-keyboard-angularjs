
# cp-keyboard-angularjs

[Demo](https://cempehlivan.github.io/cp-keyboard-angularjs/example/)

![Demo](https://cempehlivan.github.io/cp-keyboard-angularjs/example/example.png)

Example:

    <input type="text" ng-model="foo" cp-keyboard>

Custom Add Rows
Controller:

    $scope.loginKeyboardCustomRows = [
        {
            chars: [
                {
                    action: "hide",
                    lowercase: { text: "OK", value: "" },
                    uppercase: { text: "OK", value: "" },
                },
                {
                    action: function () {
                        console.log('send action');
                    },
                    lowercase: {text: "Send",value: ""},
                    uppercase: { text: "Send",value: ""},
                },
            ]
        }
    ];
 Html:

    <input type="text" ng-model="user.userName" cp-keyboard custom-rows="loginKeyboardCustomRows">

Service:

    cpKeyboardService
