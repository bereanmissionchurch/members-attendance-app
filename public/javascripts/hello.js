var memberInfo = document.getElementById("memberInfo");
var mc = new Hammer(memberInfo);
var start;

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

mc.on(" panmove panleft panright", function(e) {

    memberInfo.style.transform = 'translateX(' + e.deltaX + 'px)';
});
mc.on("panstart", function(e) {

    document.getElementById("status").innerHTML = e.pointers + " deltapointers" +
		e.changedPointers[0].clientX + " " +
		e.changedPointers[0].layerX + " " +
		e.changedPointers[0].movementX + " " +
		e.changedPointers[0].offsetX + " " +
		e.changedPointers[0].pageX + " " +
		e.changedPointers[0].screenX + " " +
		e.changedPointers[0].x + " ";
		console.log(e);
});

mc.on("panend", function(e) {
    document.getElementById("status2").innerHTML = e.pointers + " point " +
		e.pointers[0].clientX + " " +
		e.pointers[0].layerX + " " +
		e.pointers[0].movementX + " " +
		e.pointers[0].offsetX + " " +
		e.pointers[0].pageX + " " +
		e.pointers[0].screenX + " " +
		e.pointers[0].x + " ";
		console.log(e);
});
mc.on("panstart", function(e) {
    if (hasClass(memberInfo, 'transitionEase')) {
        memberInfo.className = "";
    }
});
var ml = document.getElementById("memberListing");

mc.on("panleft", function(e) {
    ml.className = "listingApprove";
});
mc.on("panright", function(e) {
    ml.className = "listingDelete";
});
mc.on("panend", function(e) {
    memberInfo.className = "transitionEase";
    memberInfo.style.transform = 'translateX(' + 0 + 'px)';
		setTimeout(function(){
			memberInfo.className="";
		},500);
});

function loadData() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            dat = data;
            useData(dat);
        }
    });
}

function useData(d) {
		var content = document.getElementById("memberName");
    document.getElementById("userImage").src = d.results[0].picture.medium;
    var name = d.results[0].name.first + " " + d.results[0].name.last;
    content.innerHTML = name;
}

loadData();
