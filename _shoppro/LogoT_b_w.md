---
layout: spropost
title: KingD Logo T Short Sleeve
shirt: 
print: 
price: 
headline: 
picture: /assets/images/shop/proD/logot.png
---




<div id='product-component-1685823963975'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'kingdthemc.myshopify.com',
      storefrontAccessToken: '19d08434d85d491ed47004062a4b5294',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8367606071596',
        node: document.getElementById('product-component-1685823963975'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#5f709b"
        },
        "background-color": "#697cac",
        ":focus": {
          "background-color": "#5f709b"
        },
        "border-radius": "22px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        ":hover": {
          "background-color": "#5f709b"
        },
        "background-color": "#697cac",
        ":focus": {
          "background-color": "#5f709b"
        },
        "border-radius": "22px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        ":hover": {
          "background-color": "#5f709b"
        },
        "background-color": "#697cac",
        ":focus": {
          "background-color": "#5f709b"
        },
        "border-radius": "22px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#697cac",
        ":hover": {
          "background-color": "#5f709b"
        },
        ":focus": {
          "background-color": "#5f709b"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
</script>
