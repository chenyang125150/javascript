/* ---------------------------------------------------------------------------

    Init PubNub and Get your PubNub API Keys:
    http://www.pubnub.com/account#api-keys

--------------------------------------------------------------------------- */

var PUBNUB = require("../pubnub.js")

var pubnub = PUBNUB({
    publish_key   : "demo",
    subscribe_key : "demo",
    origin        : "pubsub-beta.pubnub.com"
});

function r() {
pubnub.read({
	callback : console.log,
    error : console.log,
    object_id : 'devd1'
});
}
/*
var x = JSON.parse(process.argv[2])
pubnub.write({
	callback : console.log,
    error : console.log,
    object_id : 'game',
    path  : 'abcd',
    data : x
})
r()
/*
pubnub.delete({
	callback : console.log,
    error : console.log,
    object_id : 'game',
});
*/
/*  
setInterval(function(){
    pubnub.write({
        callback : function(){},
        //callback : console.log,
        error : console.log,
        object_id : 'devdb',
        path  : '/home/owner/Bob',
        data : {'is_away' : true}
    })
    setTimeout(function(){
        pubnub.write({
            callback : function(){},
            //callback : console.log,
            error : console.log,
            object_id : 'devdb',
            path  : '/home/owner/Bob',
            data : {'is_away' : false}
        })
    }, 50);
},100);
*/

var o = pubnub.get({
	'object_id' : 'devd1',
    callback : function(r){ console.log(r); console.log(JSON.stringify(o, null, 2)); },
    error : function(r){ console.log(r); console.log(JSON.stringify(o, null, 2)); }
});
/*
setInterval(function(){
    console.log(JSON.stringify(o));
    r();
},5000);
*/


