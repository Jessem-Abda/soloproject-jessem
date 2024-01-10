function myShop(name) {
    return {
        name,
        list: [],
        Maker: Maker,
        displayItems: displayItems,
    };
}

function generateID() {
    var count = 0;
    return function () {
        return count++;
    };
}

var id = generateID();

function Maker(price, name, category, images ) {
    var data = {
        price:price,
        name:name,
        category:category,
        images:images,
        id: id(),
    };
    this.list.push(data);
    return data;
}

    var multiShop = myShop("e-commerce");


    multiShop.Maker(1500, "Iphone 15 pro max", "Phones",
        "https://i.pinimg.com/564x/ca/ad/65/caad6510e0e3b3bf7892320fe46c0dd2.jpg")

    multiShop.Maker(650, "comfy chain", "Gaming",
        "https://i.pinimg.com/564x/20/f0/c2/20f0c2ecd3d69d5a03c762d1f148363d.jpg");

    multiShop.Maker(450, "z flip", "Phones",
        "https://i.pinimg.com/564x/fd/58/57/fd585735bdbc42e9fb85180a5262b769.jpg");
    multiShop.Maker(1000, "screen", "Gaming",
        "https://i.pinimg.com/564x/bc/72/63/bc7263014a88c84f71abc5a5ff6133cd.jpg");
    multiShop.Maker(2500, "laptop", "aming", "https://i.pinimg.com/564x/44/0a/4a/440a4aef86eaecb7aa0dd0e1241f7076.jpg")
    multiShop.Maker(1550, "item6", "Accessories",
        "https://i.pinimg.com/236x/64/f4/b3/64f4b3d8f28911bb122af31232254d6f.jpg");
    multiShop.Maker(1550, "item7", "Gaming",
        "https://i.pinimg.com/236x/e6/f7/f5/e6f7f58da7d5ec6205633fd38a5ce7ff.jpg");
    multiShop.Maker(2500, "item8", "Accessories", "https://i.pinimg.com/564x/dc/ff/d4/dcffd47e29f2bb4a160d7a1ebcbb4beb.jpg");
    multiShop.Maker(700, "item9", "Accessories", "https://i.pinimg.com/564x/5a/6c/03/5a6c03d8ca27cafa8e4411b82682d6ae.jpg");
    multiShop.Maker(500, "item10", "Accessories", "https://i.pinimg.com/originals/70/fe/9e/70fe9ee6c764c0b69ab33cfcb2f4f1bf.jpg");
    multiShop.Maker(340, "item11", "Phones", "https://i.pinimg.com/564x/40/32/b5/4032b56e287c45ccfb98e1ef5b6e44d2.jpg");
    multiShop.Maker(1500, "item12", "Gaming", "https://i.pinimg.com/564x/81/01/a2/8101a2389f8d41beb823167276844686.jpg");
    multiShop.Maker(1400, "item13", "Gaming", "https://i.pinimg.com/564x/5f/3b/e5/5f3be560a5034f3f823fbed8f48e773d.jpg");
    multiShop.Maker(1000, "item14", "Gaming", "https://i.pinimg.com/564x/40/8d/46/408d465cb45ff86988a247b6c1da35c5.jpg");
    multiShop.Maker(500, "item15", "Phones", "https://i.pinimg.com/564x/b1/62/a9/b162a927ad546aa0908fd84f5a2624e3.jpg");
    multiShop.Maker(1500, "item16", "Accessories", "https://i.pinimg.com/564x/e8/85/fb/e885fb7b8ccf003bd2e4be1ac2a77caf.jpg");
    multiShop.Maker(450, "item17", "Gaming", "https://i.pinimg.com/564x/73/a9/00/73a900a3dc9a695205b0d546d9148cb1.jpg");
    multiShop.Maker(500, "item18", "Phones", "https://i.pinimg.com/564x/3e/0f/3a/3e0f3af713ee3a957bb2cb70376f0751.jpg");
    multiShop.Maker(1000, "item19", "Gaming", "https://i.pinimg.com/564x/15/33/46/1533469fb9e0e7b6ded63160480abad5.jpg");
    multiShop.Maker(800, "item20", "Gaming", "https://i.pinimg.com/564x/73/9b/35/739b353043bba7e94a10a567410b7572.jpg");



function display(item) {
    console.log(item)
    var id = item.id;
    $("#shop").append(`
        <div class="post container" id="addto">
        <div clas   s="post-box">
        <h1>${item.name}</h1>
        <img class = "post-img" src=${item.images} >
        <h2 class="category">${item.category}</h2>
        <a href="post-page.html" class="post-title"></a>
        <p class="post-description">${item.price}</p>
        <button onclick="addToCart()" class = "add">Addtocart </button>
        </div>
        `);
}
// addto

function displayItems() {
    $("#shop").empty();
    for (var i = 0; i < this.list.length; i++) {
        display(this.list[i]);
    }
}

multiShop.displayItems();






$(".image").click(function () {
    var id = this.id;
    console.log(id);
    var src = this.src;
    var alt = this.alt;
    $(`#${id}`).attr("src", alt);
    $(`#${id}`).attr("alt", src);
});


$("select").on("change", function () {
    var value = $(this).val();
    console.log(value);
    var filtered = multiShop.list.filter(function (item) {
        return item.category === value;
    });
    $("#shop").empty();
    filtered.forEach(function (item) {
        display(item);
    });
});

// $('.message').hide()
// $('.take').click(function () {
//     $('.message').show()
//     $('#shop').hide()
//     $('.hided').hide()
// })


$("#cts").on("click", function () {
    var value = $("#search").val();
    console.log(value);
    var filtered = multiShop.list.filter(function (item) {
        return item.name.toLowerCase().includes(value.toLowerCase());
    });
    $("#shop").empty();
    filtered.forEach(function (item) {
        display(item);
    });
});

