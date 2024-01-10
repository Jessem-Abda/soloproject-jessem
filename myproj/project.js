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

function Maker(price, name, category, images, date) {
    var data = {
        price: price,
        name: name,
        category: category,
        images: images,
        date: date,
        id: id(),
    };
    this.list.push(data);
    return data;
}

var multiShop = myShop("e-commerce");


multiShop.Maker(1500, "Iphone 15 pro max", "Phones",
    "https://i.pinimg.com/236x/49/66/67/496667a4a4540052c4c837efc9f5cc6e.jpg", "available from: 15/01/2024")

multiShop.Maker(650, "Chair", "Gaming",
    "https://i.pinimg.com/564x/20/f0/c2/20f0c2ecd3d69d5a03c762d1f148363d.jpg", "available from: 15/01/2024")

multiShop.Maker(450, "z flip", "Phones",
    "https://i.pinimg.com/236x/38/c1/7b/38c17b657fc52cd82c67da0dc15dfa5c.jpg", "available from: 15/01/2024")
multiShop.Maker(1000, "laptop", "Gaming",
    "https://i.pinimg.com/236x/b4/01/aa/b401aa485f015d0e62242f52f805ee3c.jpg", "available from: 15/01/2024")
multiShop.Maker(500, "huawei", "Phones", "https://i.pinimg.com/236x/d6/f2/0e/d6f20e4c44a0154b20ede92b3ed6c532.jpg", "available from: 12/10/2023")
multiShop.Maker(1550, "mouse", "Accessories",
    "https://i.pinimg.com/564x/2b/04/df/2b04df784724301d2c8a633237d9a67d.jpg", "available from: 15/01/2024")
multiShop.Maker(1550, "ps 5", "Gaming",
    "https://i.pinimg.com/736x/cd/43/67/cd43672a63f6356bd4199d4ae6d1d480.jpg", "available from: 15/01/2024")
multiShop.Maker(2500, "headphone", "Accessories", "https://i.pinimg.com/236x/65/69/8a/65698a7398431bfbdc9e9189ad28ac90.jpg", "available from: 15/01/2024")
multiShop.Maker(700, "mouce ", "Accessories", "https://i.pinimg.com/236x/5d/37/fd/5d37fd0444281beaa4287a774da6fa96.jpg", "available from: 15/01/2024")
multiShop.Maker(500, "micro", "Accessories", "https://i.pinimg.com/236x/69/16/10/691610ae11281d5f932da1f537e19d01.jpg", "available from: 15/01/2024")
multiShop.Maker(340, "samsung", "Phones", "https://i.pinimg.com/236x/14/04/71/1404719207b4d0e57e256a6c2b085521.jpg", "available from: 15/01/2024")
multiShop.Maker(1500, "nintendo", "Gaming", "https://i.pinimg.com/236x/65/68/d4/6568d4f940af208209ecdd0419d2ed0a.jpg", "available from: 15/01/2024")
multiShop.Maker(1400, "xbox", "Gaming", "https://i.pinimg.com/236x/cd/ef/37/cdef37d49df388a45bb1137297b087e0.jpg", "available from: 15/01/2024")
multiShop.Maker(1000, "ps4", "Gaming", "https://i.pinimg.com/236x/1a/59/12/1a59123abcd0636068c5ab3bc3d868f5.jpg", "available from: 15/01/2024")
multiShop.Maker(500, "samsung note", "Phones", "https://i.pinimg.com/236x/84/61/3d/84613da06950cba6089c83936421562c.jpg", "available from: 15/01/2024")
multiShop.Maker(1500, "console", "Accessories", "https://i.pinimg.com/236x/05/68/6d/05686d7802e806066e824d03ca76136d.jpg", "available from: 15/01/2024")
multiShop.Maker(450, "gaming table", "Gaming", "https://i.pinimg.com/236x/ba/c4/07/bac407ac0f6b23a9e4c1c16fba14726c.jpg", "available from: 15/01/2024")
multiShop.Maker(500, "imei", "Phones", "https://i.pinimg.com/236x/2b/14/be/2b14bec38992888269ff2716a5f31d1a.jpg", "available from: 15/01/2024")
multiShop.Maker(1000, "gaming pc", "Gaming", "https://i.pinimg.com/236x/3c/01/0d/3c010df11c2a709560c7cf33e9457275.jpg", "available from: 15/01/2024")
multiShop.Maker(800, "rtx 4090", "Gaming", "https://i.pinimg.com/236x/12/ee/30/12ee303b4b1794aa55218410e146986f.jpg", "available from: 15/01/2024")



function display(item) {
    // console.log(9)
    var id = item.id;
    $("#shop").append(`
        <div class="post container" id="addto">
        <div clas   s="post-box">
        <h1>${item.name}</h1>
        <img class = "post-img" src=${item.images} >
        <h2 class="category">${item.category}</h2>
        <a href="post-page.html" class="post-title"></a>
        <span class="post-date">${item.date}</span>
        <p class="post-description">${item.price}</p>
        <button class = "add">Addtocart </button>
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


$("#options").on("change", function () {
    var value = $(this).val();
    console.log(5);
   
    var filtered = multiShop.list.filter(function (items) {
       
        return items.category === value;
    });
    $("#shop").empty();
    console.log(8);
    filtered.forEach(function (items) {
        display(items);
        console.log(3);
    });
});
document.getElementById('options').addEventListener('change', function() {
    const selectedOption = this.value; 
    const items = document.querySelectorAll('.item'); 
  
    items.forEach(item , function(){
      if (selectedOption === 'all' || item.dataset.category === selectedOption) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none'; 
      }
    });
  });


$("#cts").on("click", function () {
    var value = $("#shopp").val();
    console.log(2);
    var filtered = multiShop.list.filter(function (item) {
        return item.name.toLowerCase().includes(value.toLowerCase());
    });
    $("#shop").empty();

    filtered.forEach(function (item) {
        display(item);
    });
});


