var changeBodyColor={
    setBodyColor: function(_bodyColor){
        document.querySelector("body").style.color=_bodyColor;
    },
    setBodyBackColor: function(_bodyBackColor){
        document.querySelector("body").style.backgroundColor=_bodyBackColor;
},
};

var changeAColor={
    setAColor: function(_aColor){
        var aList = document.querySelectorAll("a");
        for(var i=0;i<aList.length;i++){
            aList[i].style.color=_aColor;
        }
    }
};



function convertDayNight(Self){
    if(self.value=="day"){
        self.value="night";
        changeBodyColor.setBodyColor("white");
        changeBodyColor.setBodyBackColor("#282828");
        changeAColor.setAColor("powerblue");
    }
    else {
        self.value="day";
        changeBodyColor.setBodyColor("black");
        changeBodyColor.setBodyBackColor("white");
        changeAColor.setAColor("blue");
    }
}
