"use strict";

(function (angular) {

    var app = angular.module("cp.keyboard", []).directive("cpKeyboard", ["$compile", function ($compile) {
        return {
            restrict: 'A',
            require: '?ngModel',
            transclude: false,
            link: function link(scope, elements, attrs, ngModelCtrl) {
                var element = elements[0];

                if (!ngModelCtrl || !element) {
                    return;
                }

                $(element).after($compile('<div class="cp-keyboard-container"><cp-keyboard custom-rows="' + attrs.customRows + '" model="' + attrs.ngModel + '" type="' + (attrs.cpKeyboard || attrs.type) + '" enter="' + attrs.enter + '"></cp-keyboard></div>')(ngModelCtrl.$$scope));

                $(element).parent().css("position", "relative");

                $(element).on("focus", function () {
                    $(this).parent().find(".cp-keyboard-container").addClass("cp-in");
                });

                $(element).on("blur", function () {
                    $(this).parent().find(".cp-keyboard-container").removeClass("cp-in");
                });
            }
        };
    }]).directive("cpKeyboard", ["$sce", "$compile", "$timeout", function ($sce, $compile, $timeout) {
        return {
            restrict: 'E',
            transclude: false,
            scope: {
                model: '=',
                enter: '=',
                type: '=',
                customRows: '='
            },
            link: function link(scope, elements, attrs, Ctrl) {
                var element = elements[0];

                scope.keyboard = {
                    lang: "tr",
                    rows: [{
                        "class": "cp-top",
                        chars: [{
                            lowercase: { text: "1", value: "1" },
                            uppercase: { text: "1", value: "1" }
                        }, {
                            lowercase: { text: "2", value: "2" },
                            uppercase: { text: "2", value: "2" }
                        }, {
                            lowercase: { text: "3", value: "3" },
                            uppercase: { text: "3", value: "3" }
                        }, {
                            lowercase: { text: "4", value: "4" },
                            uppercase: { text: "4", value: "4" }
                        }, {
                            lowercase: { text: "5", value: "5" },
                            uppercase: { text: "5", value: "5" }
                        }, {
                            lowercase: { text: "6", value: "6" },
                            uppercase: { text: "6", value: "6" }
                        }, {
                            lowercase: { text: "7", value: "7" },
                            uppercase: { text: "7", value: "7" }
                        }, {
                            lowercase: { text: "8", value: "8" },
                            uppercase: { text: "8", value: "8" }
                        }, {
                            lowercase: { text: "9", value: "9" },
                            uppercase: { text: "9", value: "9" }
                        }, {
                            lowercase: { text: "0", value: "0" },
                            uppercase: { text: "0", value: "0" }
                        }]
                    }, {
                        chars: [{
                            lowercase: { text: "q", value: "q" },
                            uppercase: { text: "Q", value: "Q" }
                        }, {
                            lowercase: { text: "w", value: "w" },
                            uppercase: { text: "W", value: "W" }
                        }, {
                            lowercase: { text: "e", value: "e" },
                            uppercase: { text: "E", value: "E" }
                        }, {
                            lowercase: { text: "r", value: "r" },
                            uppercase: { text: "R", value: "R" }
                        }, {
                            lowercase: { text: "t", value: "t" },
                            uppercase: { text: "T", value: "T" }
                        }, {
                            lowercase: { text: "y", value: "y" },
                            uppercase: { text: "Y", value: "Y" }
                        }, {
                            lowercase: { text: "u", value: "u" },
                            uppercase: { text: "U", value: "U" }
                        }, {
                            lowercase: { text: "ı", value: "ı" },
                            uppercase: { text: "I", value: "I" }
                        }, {
                            lowercase: { text: "o", value: "o" },
                            uppercase: { text: "O", value: "O" }
                        }, {
                            lowercase: { text: "p", value: "p" },
                            uppercase: { text: "P", value: "P" }
                        }, {
                            lowercase: { text: "ğ", value: "ğ" },
                            uppercase: { text: "Ğ", value: "Ğ" }
                        }, {
                            lowercase: { text: "ü", value: "ü" },
                            uppercase: { text: "Ü", value: "Ü" }
                        }]
                    }, {
                        chars: [{
                            lowercase: { text: "a", value: "a" },
                            uppercase: { text: "A", value: "A" }
                        }, {
                            lowercase: { text: "s", value: "s" },
                            uppercase: { text: "S", value: "S" }
                        }, {
                            lowercase: { text: "d", value: "d" },
                            uppercase: { text: "D", value: "D" }
                        }, {
                            lowercase: { text: "f", value: "f" },
                            uppercase: { text: "F", value: "F" }
                        }, {
                            lowercase: { text: "g", value: "g" },
                            uppercase: { text: "G", value: "G" }
                        }, {
                            lowercase: { text: "h", value: "h" },
                            uppercase: { text: "H", value: "H" }
                        }, {
                            lowercase: { text: "j", value: "j" },
                            uppercase: { text: "J", value: "J" }
                        }, {
                            lowercase: { text: "k", value: "k" },
                            uppercase: { text: "K", value: "K" }
                        }, {
                            lowercase: { text: "l", value: "l" },
                            uppercase: { text: "L", value: "L" }
                        }, {
                            lowercase: { text: "ş", value: "ş" },
                            uppercase: { text: "Ş", value: "Ş" }
                        }, {
                            lowercase: { text: "i", value: "i" },
                            uppercase: { text: "İ", value: "İ" }
                        }]
                    }, {
                        chars: [{
                            lowercase: { text: "z", value: "z" },
                            uppercase: { text: "Z", value: "Z" }
                        }, {
                            lowercase: { text: "x", value: "x" },
                            uppercase: { text: "X", value: "X" }
                        }, {
                            lowercase: { text: "c", value: "c" },
                            uppercase: { text: "C", value: "C" }
                        }, {
                            lowercase: { text: "v", value: "v" },
                            uppercase: { text: "V", value: "V" }
                        }, {
                            lowercase: { text: "b", value: "b" },
                            uppercase: { text: "B", value: "B" }
                        }, {
                            lowercase: { text: "n", value: "n" },
                            uppercase: { text: "N", value: "N" }
                        }, {
                            lowercase: { text: "m", value: "m" },
                            uppercase: { text: "M", value: "M" }
                        }, {
                            lowercase: { text: "ö", value: "ö" },
                            uppercase: { text: "Ö", value: "Ö" }
                        }, {
                            lowercase: { text: "ç", value: "ç" },
                            uppercase: { text: "Ç", value: "Ç" }
                        }]
                    }, {
                        chars: [{
                            "class": "nogrow",
                            action: "clear",
                            lowercase: { text: "TEMİZLE <i class=\"far fa-backspace\"></i>", value: "" },
                            uppercase: { text: "TEMİZLE <i class=\"far fa-backspace\"></i>", value: "" }
                        }, {
                            "class": "nogrow",
                            action: "delete",
                            lowercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" },
                            uppercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" }
                        }, {
                            "class": "space",
                            lowercase: { text: " ", value: " " },
                            uppercase: { text: " ", value: " " }
                        }, {
                            "class": "nogrow",
                            action: "hide",
                            lowercase: { text: "TAMAM <i class=\"fal fa-long-arrow-right\"></i>", value: "" },
                            uppercase: { text: "TAMAM <i class=\"fal fa-long-arrow-right\"></i>", value: "" }
                        }]
                    }]
                };

                $(element).on("mousedown", function (ev) {
                    ev.preventDefault();
                });

                if (attrs.type != undefined && attrs.type != null && attrs.type != '' && attrs.type != 'text') {

                    if (attrs.type == 'email') {
                        scope.keyboard = {
                            lang: "tr",
                            rows: [{
                                "class": "cp-top",
                                chars: [{
                                    lowercase: { text: "1", value: "1" },
                                    uppercase: { text: "1", value: "1" }
                                }, {
                                    lowercase: { text: "2", value: "2" },
                                    uppercase: { text: "2", value: "2" }
                                }, {
                                    lowercase: { text: "3", value: "3" },
                                    uppercase: { text: "3", value: "3" }
                                }, {
                                    lowercase: { text: "4", value: "4" },
                                    uppercase: { text: "4", value: "4" }
                                }, {
                                    lowercase: { text: "5", value: "5" },
                                    uppercase: { text: "5", value: "5" }
                                }, {
                                    lowercase: { text: "6", value: "6" },
                                    uppercase: { text: "6", value: "6" }
                                }, {
                                    lowercase: { text: "7", value: "7" },
                                    uppercase: { text: "7", value: "7" }
                                }, {
                                    lowercase: { text: "8", value: "8" },
                                    uppercase: { text: "8", value: "8" }
                                }, {
                                    lowercase: { text: "9", value: "9" },
                                    uppercase: { text: "9", value: "9" }
                                }, {
                                    lowercase: { text: "0", value: "0" },
                                    uppercase: { text: "0", value: "0" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "q", value: "q" },
                                    uppercase: { text: "Q", value: "Q" }
                                }, {
                                    lowercase: { text: "w", value: "w" },
                                    uppercase: { text: "W", value: "W" }
                                }, {
                                    lowercase: { text: "e", value: "e" },
                                    uppercase: { text: "E", value: "E" }
                                }, {
                                    lowercase: { text: "r", value: "r" },
                                    uppercase: { text: "R", value: "R" }
                                }, {
                                    lowercase: { text: "t", value: "t" },
                                    uppercase: { text: "T", value: "T" }
                                }, {
                                    lowercase: { text: "y", value: "y" },
                                    uppercase: { text: "Y", value: "Y" }
                                }, {
                                    lowercase: { text: "u", value: "u" },
                                    uppercase: { text: "U", value: "U" }
                                }, {
                                    lowercase: { text: "ı", value: "ı" },
                                    uppercase: { text: "I", value: "I" }
                                }, {
                                    lowercase: { text: "o", value: "o" },
                                    uppercase: { text: "O", value: "O" }
                                }, {
                                    lowercase: { text: "p", value: "p" },
                                    uppercase: { text: "P", value: "P" }
                                }, {
                                    lowercase: { text: "ğ", value: "ğ" },
                                    uppercase: { text: "Ğ", value: "Ğ" }
                                }, {
                                    lowercase: { text: "ü", value: "ü" },
                                    uppercase: { text: "Ü", value: "Ü" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "a", value: "a" },
                                    uppercase: { text: "A", value: "A" }
                                }, {
                                    lowercase: { text: "s", value: "s" },
                                    uppercase: { text: "S", value: "S" }
                                }, {
                                    lowercase: { text: "d", value: "d" },
                                    uppercase: { text: "D", value: "D" }
                                }, {
                                    lowercase: { text: "f", value: "f" },
                                    uppercase: { text: "F", value: "F" }
                                }, {
                                    lowercase: { text: "g", value: "g" },
                                    uppercase: { text: "G", value: "G" }
                                }, {
                                    lowercase: { text: "h", value: "h" },
                                    uppercase: { text: "H", value: "H" }
                                }, {
                                    lowercase: { text: "j", value: "j" },
                                    uppercase: { text: "J", value: "J" }
                                }, {
                                    lowercase: { text: "k", value: "k" },
                                    uppercase: { text: "K", value: "K" }
                                }, {
                                    lowercase: { text: "l", value: "l" },
                                    uppercase: { text: "L", value: "L" }
                                }, {
                                    lowercase: { text: "ş", value: "ş" },
                                    uppercase: { text: "Ş", value: "Ş" }
                                }, {
                                    lowercase: { text: "i", value: "i" },
                                    uppercase: { text: "İ", value: "İ" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "z", value: "z" },
                                    uppercase: { text: "Z", value: "Z" }
                                }, {
                                    lowercase: { text: "x", value: "x" },
                                    uppercase: { text: "X", value: "X" }
                                }, {
                                    lowercase: { text: "c", value: "c" },
                                    uppercase: { text: "C", value: "C" }
                                }, {
                                    lowercase: { text: "v", value: "v" },
                                    uppercase: { text: "V", value: "V" }
                                }, {
                                    lowercase: { text: "b", value: "b" },
                                    uppercase: { text: "B", value: "B" }
                                }, {
                                    lowercase: { text: "n", value: "n" },
                                    uppercase: { text: "N", value: "N" }
                                }, {
                                    lowercase: { text: "m", value: "m" },
                                    uppercase: { text: "M", value: "M" }
                                }, {
                                    lowercase: { text: "ö", value: "ö" },
                                    uppercase: { text: "Ö", value: "Ö" }
                                }, {
                                    lowercase: { text: "ç", value: "ç" },
                                    uppercase: { text: "Ç", value: "Ç" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "@", value: "@" },
                                    uppercase: { text: "@", value: "@" }
                                }, {
                                    lowercase: { text: ".com", value: ".com" },
                                    uppercase: { text: ".com", value: ".com" }
                                }, {
                                    lowercase: { text: ".tr", value: ".tr" },
                                    uppercase: { text: ".tr", value: ".tr" }
                                }, {
                                    lowercase: { text: "@gmail.com", value: "@gmail.com" },
                                    uppercase: { text: "@gmail.com", value: "@gmail.com" }
                                }, {
                                    lowercase: { text: "@hotmail.com", value: "@hotmail.com" },
                                    uppercase: { text: "@hotmail.com", value: "@hotmail.com" }
                                }, {
                                    lowercase: { text: "@yandex.com", value: "@yandex.com" },
                                    uppercase: { text: "@yandex.com", value: "@yandex.com" }
                                }, {
                                    lowercase: { text: "@outlook.com", value: "@outlook.com" },
                                    uppercase: { text: "@outlook.com", value: "@outlook.com" }
                                }]
                            }, {
                                chars: [{
                                    "class": "nogrow",
                                    action: "clear",
                                    lowercase: { text: "TEMİZLE <i class=\"far fa-backspace\"></i>", value: "" },
                                    uppercase: { text: "TEMİZLE <i class=\"far fa-backspace\"></i>", value: "" }
                                }, {
                                    "class": "nogrow",
                                    action: "delete",
                                    lowercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" },
                                    uppercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" }
                                }, {
                                    "class": "space",
                                    lowercase: { text: " ", value: " " },
                                    uppercase: { text: " ", value: " " }
                                }, {
                                    "class": "nogrow",
                                    action: "hide",
                                    lowercase: { text: "TAMAM <i class=\"fal fa-long-arrow-right\"></i>", value: "" },
                                    uppercase: { text: "TAMAM <i class=\"fal fa-long-arrow-right\"></i>", value: "" }
                                }]
                            }]
                        };
                    } else if (attrs.type == 'search') {
                        scope.keyboard = {
                            lang: "tr",
                            rows: [{
                                "class": "cp-top",
                                chars: [{
                                    lowercase: { text: "1", value: "1" },
                                    uppercase: { text: "1", value: "1" }
                                }, {
                                    lowercase: { text: "2", value: "2" },
                                    uppercase: { text: "2", value: "2" }
                                }, {
                                    lowercase: { text: "3", value: "3" },
                                    uppercase: { text: "3", value: "3" }
                                }, {
                                    lowercase: { text: "4", value: "4" },
                                    uppercase: { text: "4", value: "4" }
                                }, {
                                    lowercase: { text: "5", value: "5" },
                                    uppercase: { text: "5", value: "5" }
                                }, {
                                    lowercase: { text: "6", value: "6" },
                                    uppercase: { text: "6", value: "6" }
                                }, {
                                    lowercase: { text: "7", value: "7" },
                                    uppercase: { text: "7", value: "7" }
                                }, {
                                    lowercase: { text: "8", value: "8" },
                                    uppercase: { text: "8", value: "8" }
                                }, {
                                    lowercase: { text: "9", value: "9" },
                                    uppercase: { text: "9", value: "9" }
                                }, {
                                    lowercase: { text: "0", value: "0" },
                                    uppercase: { text: "0", value: "0" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "q", value: "q" },
                                    uppercase: { text: "Q", value: "Q" }
                                }, {
                                    lowercase: { text: "w", value: "w" },
                                    uppercase: { text: "W", value: "W" }
                                }, {
                                    lowercase: { text: "e", value: "e" },
                                    uppercase: { text: "E", value: "E" }
                                }, {
                                    lowercase: { text: "r", value: "r" },
                                    uppercase: { text: "R", value: "R" }
                                }, {
                                    lowercase: { text: "t", value: "t" },
                                    uppercase: { text: "T", value: "T" }
                                }, {
                                    lowercase: { text: "y", value: "y" },
                                    uppercase: { text: "Y", value: "Y" }
                                }, {
                                    lowercase: { text: "u", value: "u" },
                                    uppercase: { text: "U", value: "U" }
                                }, {
                                    lowercase: { text: "ı", value: "ı" },
                                    uppercase: { text: "I", value: "I" }
                                }, {
                                    lowercase: { text: "o", value: "o" },
                                    uppercase: { text: "O", value: "O" }
                                }, {
                                    lowercase: { text: "p", value: "p" },
                                    uppercase: { text: "P", value: "P" }
                                }, {
                                    lowercase: { text: "ğ", value: "ğ" },
                                    uppercase: { text: "Ğ", value: "Ğ" }
                                }, {
                                    lowercase: { text: "ü", value: "ü" },
                                    uppercase: { text: "Ü", value: "Ü" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "a", value: "a" },
                                    uppercase: { text: "A", value: "A" }
                                }, {
                                    lowercase: { text: "s", value: "s" },
                                    uppercase: { text: "S", value: "S" }
                                }, {
                                    lowercase: { text: "d", value: "d" },
                                    uppercase: { text: "D", value: "D" }
                                }, {
                                    lowercase: { text: "f", value: "f" },
                                    uppercase: { text: "F", value: "F" }
                                }, {
                                    lowercase: { text: "g", value: "g" },
                                    uppercase: { text: "G", value: "G" }
                                }, {
                                    lowercase: { text: "h", value: "h" },
                                    uppercase: { text: "H", value: "H" }
                                }, {
                                    lowercase: { text: "j", value: "j" },
                                    uppercase: { text: "J", value: "J" }
                                }, {
                                    lowercase: { text: "k", value: "k" },
                                    uppercase: { text: "K", value: "K" }
                                }, {
                                    lowercase: { text: "l", value: "l" },
                                    uppercase: { text: "L", value: "L" }
                                }, {
                                    lowercase: { text: "ş", value: "ş" },
                                    uppercase: { text: "Ş", value: "Ş" }
                                }, {
                                    lowercase: { text: "i", value: "i" },
                                    uppercase: { text: "İ", value: "İ" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "z", value: "z" },
                                    uppercase: { text: "Z", value: "Z" }
                                }, {
                                    lowercase: { text: "x", value: "x" },
                                    uppercase: { text: "X", value: "X" }
                                }, {
                                    lowercase: { text: "c", value: "c" },
                                    uppercase: { text: "C", value: "C" }
                                }, {
                                    lowercase: { text: "v", value: "v" },
                                    uppercase: { text: "V", value: "V" }
                                }, {
                                    lowercase: { text: "b", value: "b" },
                                    uppercase: { text: "B", value: "B" }
                                }, {
                                    lowercase: { text: "n", value: "n" },
                                    uppercase: { text: "N", value: "N" }
                                }, {
                                    lowercase: { text: "m", value: "m" },
                                    uppercase: { text: "M", value: "M" }
                                }, {
                                    lowercase: { text: "ö", value: "ö" },
                                    uppercase: { text: "Ö", value: "Ö" }
                                }, {
                                    lowercase: { text: "ç", value: "ç" },
                                    uppercase: { text: "Ç", value: "Ç" }
                                }]
                            }, {
                                chars: [{
                                    "class": "nogrow",
                                    action: "clear",
                                    lowercase: { text: "TEMİZLE <i class=\"far fa-backspace\"></i>", value: "" },
                                    uppercase: { text: "TEMİZLE <i class=\"far fa-backspace\"></i>", value: "" }
                                }, {
                                    "class": "nogrow",
                                    action: "delete",
                                    lowercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" },
                                    uppercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" }
                                }, {
                                    "class": "space",
                                    lowercase: { text: " ", value: " " },
                                    uppercase: { text: " ", value: " " }
                                }, {
                                    "class": "nogrow",
                                    action: "enter",
                                    lowercase: { text: "ARAMA YAP <i class=\"fal fa-long-arrow-right\"></i>", value: "" },
                                    uppercase: { text: "ARAMA YAP <i class=\"fal fa-long-arrow-right\"></i>", value: "" }
                                }]
                            }]
                        };
                    } else if (attrs.type == 'address') {
                        scope.keyboard = {
                            lang: "tr",
                            rows: [{
                                "class": "cp-top",
                                chars: [{
                                    lowercase: { text: "1", value: "1" },
                                    uppercase: { text: "1", value: "1" }
                                }, {
                                    lowercase: { text: "2", value: "2" },
                                    uppercase: { text: "2", value: "2" }
                                }, {
                                    lowercase: { text: "3", value: "3" },
                                    uppercase: { text: "3", value: "3" }
                                }, {
                                    lowercase: { text: "4", value: "4" },
                                    uppercase: { text: "4", value: "4" }
                                }, {
                                    lowercase: { text: "5", value: "5" },
                                    uppercase: { text: "5", value: "5" }
                                }, {
                                    lowercase: { text: "6", value: "6" },
                                    uppercase: { text: "6", value: "6" }
                                }, {
                                    lowercase: { text: "7", value: "7" },
                                    uppercase: { text: "7", value: "7" }
                                }, {
                                    lowercase: { text: "8", value: "8" },
                                    uppercase: { text: "8", value: "8" }
                                }, {
                                    lowercase: { text: "9", value: "9" },
                                    uppercase: { text: "9", value: "9" }
                                }, {
                                    lowercase: { text: "0", value: "0" },
                                    uppercase: { text: "0", value: "0" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "q", value: "q" },
                                    uppercase: { text: "Q", value: "Q" }
                                }, {
                                    lowercase: { text: "w", value: "w" },
                                    uppercase: { text: "W", value: "W" }
                                }, {
                                    lowercase: { text: "e", value: "e" },
                                    uppercase: { text: "E", value: "E" }
                                }, {
                                    lowercase: { text: "r", value: "r" },
                                    uppercase: { text: "R", value: "R" }
                                }, {
                                    lowercase: { text: "t", value: "t" },
                                    uppercase: { text: "T", value: "T" }
                                }, {
                                    lowercase: { text: "y", value: "y" },
                                    uppercase: { text: "Y", value: "Y" }
                                }, {
                                    lowercase: { text: "u", value: "u" },
                                    uppercase: { text: "U", value: "U" }
                                }, {
                                    lowercase: { text: "ı", value: "ı" },
                                    uppercase: { text: "I", value: "I" }
                                }, {
                                    lowercase: { text: "o", value: "o" },
                                    uppercase: { text: "O", value: "O" }
                                }, {
                                    lowercase: { text: "p", value: "p" },
                                    uppercase: { text: "P", value: "P" }
                                }, {
                                    lowercase: { text: "ğ", value: "ğ" },
                                    uppercase: { text: "Ğ", value: "Ğ" }
                                }, {
                                    lowercase: { text: "ü", value: "ü" },
                                    uppercase: { text: "Ü", value: "Ü" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "a", value: "a" },
                                    uppercase: { text: "A", value: "A" }
                                }, {
                                    lowercase: { text: "s", value: "s" },
                                    uppercase: { text: "S", value: "S" }
                                }, {
                                    lowercase: { text: "d", value: "d" },
                                    uppercase: { text: "D", value: "D" }
                                }, {
                                    lowercase: { text: "f", value: "f" },
                                    uppercase: { text: "F", value: "F" }
                                }, {
                                    lowercase: { text: "g", value: "g" },
                                    uppercase: { text: "G", value: "G" }
                                }, {
                                    lowercase: { text: "h", value: "h" },
                                    uppercase: { text: "H", value: "H" }
                                }, {
                                    lowercase: { text: "j", value: "j" },
                                    uppercase: { text: "J", value: "J" }
                                }, {
                                    lowercase: { text: "k", value: "k" },
                                    uppercase: { text: "K", value: "K" }
                                }, {
                                    lowercase: { text: "l", value: "l" },
                                    uppercase: { text: "L", value: "L" }
                                }, {
                                    lowercase: { text: "ş", value: "ş" },
                                    uppercase: { text: "Ş", value: "Ş" }
                                }, {
                                    lowercase: { text: "i", value: "i" },
                                    uppercase: { text: "İ", value: "İ" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "z", value: "z" },
                                    uppercase: { text: "Z", value: "Z" }
                                }, {
                                    lowercase: { text: "x", value: "x" },
                                    uppercase: { text: "X", value: "X" }
                                }, {
                                    lowercase: { text: "c", value: "c" },
                                    uppercase: { text: "C", value: "C" }
                                }, {
                                    lowercase: { text: "v", value: "v" },
                                    uppercase: { text: "V", value: "V" }
                                }, {
                                    lowercase: { text: "b", value: "b" },
                                    uppercase: { text: "B", value: "B" }
                                }, {
                                    lowercase: { text: "n", value: "n" },
                                    uppercase: { text: "N", value: "N" }
                                }, {
                                    lowercase: { text: "m", value: "m" },
                                    uppercase: { text: "M", value: "M" }
                                }, {
                                    lowercase: { text: "ö", value: "ö" },
                                    uppercase: { text: "Ö", value: "Ö" }
                                }, {
                                    lowercase: { text: "ç", value: "ç" },
                                    uppercase: { text: "Ç", value: "Ç" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "Mah.", value: " Mah. " },
                                    uppercase: { text: "Mah.", value: " Mah. " }
                                }, {
                                    lowercase: { text: "Cad.", value: " Cad. " },
                                    uppercase: { text: "Cad.", value: " Cad. " }
                                }, {
                                    lowercase: { text: "Sok.", value: " Sok. " },
                                    uppercase: { text: "Sok.", value: " Sok. " }
                                }, {
                                    lowercase: { text: "Apt.", value: " Apt. " },
                                    uppercase: { text: "Apt.", value: " Apt. " }
                                }, {
                                    lowercase: { text: "No:", value: " No: " },
                                    uppercase: { text: "No:", value: " No: " }
                                }, {
                                    lowercase: { text: "D:", value: " D: " },
                                    uppercase: { text: "D:", value: " D: " }
                                }]
                            }, {
                                chars: [{
                                    "class": "nogrow",
                                    action: "clear",
                                    lowercase: { text: "TEMİZLE <i class=\"far fa-backspace\"></i>", value: "" },
                                    uppercase: { text: "TEMİZLE <i class=\"far fa-backspace\"></i>", value: "" }
                                }, {
                                    "class": "nogrow",
                                    action: "delete",
                                    lowercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" },
                                    uppercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" }
                                }, {
                                    "class": "space",
                                    lowercase: { text: " ", value: " " },
                                    uppercase: { text: " ", value: " " }
                                }, {
                                    "class": "nogrow",
                                    action: "hide",
                                    lowercase: { text: "TAMAM <i class=\"fal fa-long-arrow-right\"></i>", value: "" },
                                    uppercase: { text: "TAMAM <i class=\"fal fa-long-arrow-right\"></i>", value: "" }
                                }]
                            }]
                        };
                    } else if (attrs.type == 'number') {
                        scope.keyboard = {
                            lang: "tr",
                            rows: [{
                                chars: [{
                                    lowercase: { text: "1", value: "1" },
                                    uppercase: { text: "1", value: "1" }
                                }, {
                                    lowercase: { text: "2", value: "2" },
                                    uppercase: { text: "2", value: "2" }
                                }, {
                                    lowercase: { text: "3", value: "3" },
                                    uppercase: { text: "3", value: "3" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "4", value: "4" },
                                    uppercase: { text: "4", value: "4" }
                                }, {
                                    lowercase: { text: "5", value: "5" },
                                    uppercase: { text: "5", value: "5" }
                                }, {
                                    lowercase: { text: "6", value: "6" },
                                    uppercase: { text: "6", value: "6" }
                                }]
                            }, {
                                chars: [{
                                    lowercase: { text: "7", value: "7" },
                                    uppercase: { text: "7", value: "7" }
                                }, {
                                    lowercase: { text: "8", value: "8" },
                                    uppercase: { text: "8", value: "8" }
                                }, {
                                    lowercase: { text: "9", value: "9" },
                                    uppercase: { text: "9", value: "9" }
                                }]
                            }, {
                                chars: [{
                                    action: "clear",
                                    lowercase: { text: "T.SİL <i class=\"far fa-backspace\"></i>", value: "" },
                                    uppercase: { text: "T.SİL <i class=\"far fa-backspace\"></i>", value: "" }
                                }, {
                                    lowercase: { text: "0", value: "0" },
                                    uppercase: { text: "0", value: "0" }
                                }, {
                                    action: "delete",
                                    lowercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" },
                                    uppercase: { text: "SİL <i class=\"fas fa-backspace\"></i>", value: "" }
                                }]
                            }]
                        };
                    }
                }

                if (scope.customRows != undefined) {
                    scope.keyboard.rows = scope.keyboard.rows.concat(scope.customRows);
                }

                scope.trust = function (html) {
                    return $sce.trustAsHtml(html);
                };

                scope.keyboardAction = function ($event, _action, val) {

                    $event.preventDefault();

                    if (_action instanceof Function) {
                        _action();
                    }

                    var action = "addKey";

                    if (_action != undefined && _action != null && _action != "") {
                        action = _action;
                    }

                    $timeout(function () {
                        switch (action) {

                            case "addKey":
                                scope.model = (scope.model || '') + val;
                                break;
                            case "delete":
                                scope.model = (scope.model || '').length > 0 ? scope.model.substring(0, scope.model.length - 1) : '';
                                break;
                            case "clear":
                                scope.model = '';
                                break;
                            case "enter":
                                scope.enter(scope.model);
                                break;
                            case "hide":
                                $(element).parent().removeClass("cp-in");
                                $("input:focus").blur();
                                break;
                            default:
                                break;
                        }

                        scope.model = scope.model.replace(/[\s]{2}/gi, ' ').replace(/[\s]{2}/gi, ' ').replace(/[\s]{2}/gi, ' ').replace(/[\s]{2}/gi, ' ');
                    }, 1);

                    if ($(element).parent().hasClass("cp-keyboard-container")) {
                        $(element).parent().parent().find("input[cp-keyboard]").trigger("input");
                    }
                };
            },
            template: '<div class="cp-row" ng-repeat="cpk in keyboard.rows" ng-class="cpk.class"><button type="button" class="cp-button" ng-repeat="_c in cpk.chars" ng-class="_c.class" ng-bind-html="trust(_c.lowercase.text)" ng-mousedown="keyboardAction($event,_c.action, _c.lowercase.value)"></button></div>'
        };
    }]).factory("cpKeyboardService", [function () {
        return {
            closeAll: function closeAll() {
                $(".cp-keyboard-container").removeClass("cp-in");
                $("input:focus").blur();
            }
        };
    }]);
})(angular);

