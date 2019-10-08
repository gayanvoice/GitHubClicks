var pathname = window.location.pathname; // Returns path only (/path/example.html)
var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
var origin   = window.location.origin;   // Returns base URL (https://example.com)

function checkOrigin(origin){
    return origin === 'https://github.com';
}

// https://api.github.com/repos/gayankuruppu/android-view-animations-java/contents/library/src/main/java/render/animations
// https://api.github.com/repos/gayankuruppu/android-view-animations-java get language type


function getPkg(){
    packageName = 'no_repo';
    $('span').filter(function(){
        if($(this).text() === "package"){
            tdTag = $(this).parent().closest('td');
            tdTag.children('span').next('span').css("border", "solid 2px green");
            packageName = tdTag.children('span').next('span').text();
        } else {
            return 'no_repo';
        }
    });
    return packageName;
}


function getCls(variable){
    packageName = 'no_repo';
    $('span').each(function(){
        if($(this).text() === "import"){
            tdTag = $(this).parent().closest('td');
            tdTag.children('span').next('span').css("border", "solid 2px red");
            var page = tdTag.children('span').next('span').text();
            if(page.includes(variable)){
                console.log('available ' + page);
                $(window).scrollTop($(this).offset().top);
                return false;
            } else {
                console.log('not available ' + page);
            }
            packageName = page;
        } else {
            tdTag = $(this).parent().closest('td');
            tdTag.children('span').next('span').css('border', '');
            return 'no_repo';
        }
    });
    return packageName;
}

function get_slicePkg(packageName, character){
    return array = packageName.split(character);
}

function get_langType() {
    value =  url.substring(url.lastIndexOf('/') + 1);
    if((value.split('.')[1]) === 'java'){
        return '.java'
    } else {
        return '.kt';
    }
}

function get_baseUrl() {
    return document.URL.substr(0,document.URL.lastIndexOf('/')) + '/';
}


function get_baseFile() {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    return filenameWithExtension.split(".")[0]; // <-- added this line
}

function check_isFile() {
    return pathname.split('/').pop().indexOf('.') > -1;
}
function check (variable){
    if(variable === get_baseFile()){
        return 0;
    } else {

    }
}

$(window).on('load', function() {
    if(checkOrigin(origin)) {
        if(check_isFile()){
            console.log(get_baseFile());
            $('td span').on('mousedown', function () {
                var variable = $(this).text();
                if(check(variable) === 0){
                    window.scrollTo(0, 0);
                } else {
                    getCls(variable);
                    //window.open(get_baseUrl() + variable +  get_langType(), '_blank');
                }
            });

            console.log(get_slicePkg(getPkg(), '.').length);

            console.log(getPkg());
            console.log(getCls('FileWriter'));

            $('tr td span').on('mouseover', function () {
                $(this).css('text-decoration', 'underline');

            }).on('mouseout', function () {
                $(this).css('text-decoration', '');
            });



        }
    }
});


//$(window).on('load', function() {
//    if(checkOrigin(origin)){
//
//
//
//    }
//  $('tr td span:contains("package")').each(function () {
//                 if ($(this).children().length < 1) {
//                     $(this).css('border', 'solid 2px green');
//                 }
//             });
//
//             $('tr td span:contains("import")').each(function () {
//                 if ($(this).children().length < 1) {
//                     $(this).css('border', 'solid 2px green');
//                 }
//             });
//
//
//    if(origin === 'https://github.com'){
//        $('tr td span:contains("package")').each(function(){
//            if($(this).children().length < 1) {
//                //tdTag = $(this).parent().closest('td').css("border", "solid 2px red");
//                tdTag = $(this).parent().closest('td');
//                tdTag.children('span').next('span').css("border", "solid 2px green");
//                packageName = tdTag.children('span').next('span');
//                //alert(packageName.text() + ' packageName');
//            }
//        });
//    }
//
///*
//    if(origin === 'https://github.com'){
//        $('tr td span:contains("package")').each(function() {
//            if ($(this).children().length < 1) {
//                $('td span').on('mouseover', function () {
//                    $(this).css('border', 'solid 2px red');
//                }).on('mouseout', function () {
//                    $(this).css('border', '');
//                });
//            }
//        });
//    }
//
//    if(origin === 'https://github.com'){
//        $('tr td span:contains("package")').each(function() {
//            if ($(this).children().length < 1) {
//                $('td span').mousedown(function (event) {
//                    switch (event.which) {
//                        case 1:
//                            //alert($(this).text());
//                            window.open(url, '_blank');
//                            break;
//                        default:
//                            $(this).attr('target', '_self"');
//                    }
//                });
//            }
//        });
//    }
//
//});
