const  Max_Battery =100;
let Mobile =  function (phoneName,color) {
    this.name=phoneName;
    this.Color=color;
    this.battery=100;
    this.inbox=[];
    this.outbox=[];
    this.message= "";
    this.WriteMessage=function (message) {
        this.message=message;
    };
    this.SendMessage=function (phone) {
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
        this.battery--;
    };
    this.getInbox=function () {
        return this.inbox;
    };
    this.getOutbox=function () {
        return this.outbox;
    };
    this.deleteInbox=function () {
        this.inbox=[];
    }
};
let samsung = new Mobile("oPPO","mau` trang");
let iphone= new Mobile("noKia","Den TRang");
samsung.WriteMessage("Hi.Chao`cau! to la samsung");
samsung.SendMessage(iphone);
document.getElementById("text").innerHTML=iphone.getInbox();
document.write("mau dien thoai samsung la: "+ samsung.Color+"<br>");
document.write("mau dien thoai nokia la: "+ iphone.Color);
document.write("<br>"+ "Thu da gui: "+ samsung.getOutbox());


