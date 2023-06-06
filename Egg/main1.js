let imageURL_Array = [
    "https://i.imgflip.com/457qaz.jpg",
    "https://i.imgflip.com/7kgzvk.jpg",
    "https://i.imgflip.com/7i4t5e.jpg",
    "https://i.imgflip.com/7napng.jpg",
    "https://i.imgflip.com/7m7itj.jpg",
    "https://i.imgflip.com/79hfb7.jpg",
    "https://i.imgflip.com/5nlc56.jpg",
    "https://i.imgflip.com/7jrsig.jpg"
];


$(function(){
    $("button").on("click",function(){
        // alert("Hi");
        // $("h1").text("Hello");
        var numberOfListItem = imageURL_Array.length;
        // 3
        // 0 ~ 1 => 0 ~ 3
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        console.log(randomChildNumber);
        // change image -> change image element's src
        
        $("#img1").attr("src",imageURL_Array[randomChildNumber]);
    });
});
