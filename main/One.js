// // // (function myfunc(){
// // //     console.log("function working");
// // // })();
// // module.exports.func = function myfunc(){
// //     console.log("function working");
// // };
// //  //myfunc();
// //  module.exports.num = x = 1234567;

// // //  //to export a code
// // //  module.exports.myfunc = myfunc;

// // //  //to call multiple funcs or var
// // //  module.exports.x =x;
// function myfunc(){
//     console.log("function working");
// };

// var num = 1234567;

// module.exports = {
//     func : myfunc,
//     num : num,
//     dummy :() => {console.log('dummy function')}//    dummy :function()  {console.log('dummy function')};

// }


class myclass 
{
    constructor(name)
    {
        this.name = name;
    }
    myfunc()
    {
        console.log('my name is  ' + this.name)
    }
}

module.exports.myclass = myclass;