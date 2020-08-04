// template
var vm = new Vue({
    el: "#vue_det",
    data: {
        firstname: "Mohammad",
        lastname: "Fatoni",
        htmlcontent: "<div>Vue JS Template</div>",
        imgsrc: "images/icon.png"
    }
});

// component
Vue.component('inicomponent', {
    template: '<div v-on:mouseover="changename()" v-on:mouseout="originalname()"><h1>Costum component <span id="name">{{name}}</span></h1></div>',
    data: function () {
        return {
            name: "Fatoni"
        }
    },
    methods: {
        changename: function () {
            this.name = "Satria";
        },
        originalname: function () {
            this.name = "Rahmat";
        }
    }
});

var vm1 = new Vue({
    el: '#component1'
});

var vm2 = new Vue({
    el: '#component2'
});

var vue_date = new Vue({
    el: '#intro',
    data: {
        message: 'My First VueJS Task'
    }
});
var app = new Vue({
    el: '#app',
    data: {
        name: "Fatoni"
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        msg: 'Belajar VueJS'
    }
});

var vm3 = new Vue({
    el: "#example",
    data: {
        message: 'FATONI'
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
});

var vm4 = new Vue({
    el: '#databinding',
    data: {
        kilometers: 0,
        meters: 0
    },
    watch: {
        kilometers: function (val) {
            this.kilometers = val;
            this.meters = val * 1000
        },
        meters: function (val) {
            this.kilometers = val / 1000;
            this.meters = val;
        }
    }
});

var vm5 = new Vue({
    el: '#databinding1',
    data: {
        title: "Data Binding",
        hreflink: "http://www.google.com"
    }
});

var vm6 = new Vue({
    el: '#classbinding',
    data: {
        title: "Class Binding",
        isactive: false,
        hasError: true
    }
});

var vm7 = new Vue({
    el: '#databinding2',
    data: {
        num1: 100,
        num2: 200,
        total: 0
    },
    methods: {
        displaynumbers: function (event) {
            console.log(event);
            return this.total = this.num1 + this.num2;
        }
    }
});

var vm8 = new Vue({
    el: '#databinding3',
    data: {
        styleobj: {
            width: "100px",
            height: "100px",
            backgroundColor: "red"
        }
    },
    methods: {
        changecolor: function () {
            this.styleobj.backgroundColor = "green";
        },
        originalcolor: function () {
            this.styleobj.backgroundColor = "red";
        },
    }
});

var vm9 = new Vue({
    el: '#databinding4',
    data: {
        show: true,
        styleobj: {
            cursor: 'pointer',
            padding: '8px',
            verticalAlign: 'middle',
        }
    },
    methods: {
        showdata: function () {
            this.show = !this.show;
        }
    }
})

var vm10 = new Vue({
    el: '#databinding5',
    data: {
        items: [],
        styleobj: {
            width: "30%",
            padding: "12px",
            margin: "8px",
            boxSizing: "border-box"
        }
    },
    methods: {
        showinputvalue: function () {
            this.items.push(event.target.value);
        }
    }
})

var vm11 = new Vue({
    el: '#databinding6',
    data: {
        show: true,
        styleobj: {
            fontSize: '30px',
            color: 'red'
        }
    },
    methods: {

    }
})

var vm12 = new Vue({
    el: '#databinding7',
    data: {
        show: true
    }
})

Vue.directive("changestyle", {
    bind(e1, binding, vnode) {
        console.log(e1);
        e1.style.color = "red";
        e1.style.fontSize = "30px";
    }
});

var vm13 = new Vue({
    el: '#databinding8'
});

const Route1 = { template: '<div style="border-radius:20px;background-color:cyan;width:200px;height:50px;margin:10px;font-size:25px;padding:10px">This is router 1</div>' };

const Route2 = { template: '<div style="border-radius:20px;background-color:green;width:200px;height:50px;margin:10px;font-size:25px;padding:10px">This is router 2</div>' };

const routes = [
    { path: '/route1', component: Route1 },
    { path: '/route2', component: Route2 }
];

const router = new VueRouter({
    routes
});


var vm14 = new Vue({
    el: '#app3',
    router
});

var vm = new Vue({
    el: '#databinding9'
})

var myMixin = {
    created: function () {
        this.startmixin()
    },
    methods: {
        startmixin: function () {
            // alert("Welcome to mixin")
            console.log("Welcome to mixins")
        }
    }
}

var Component = Vue.extend({
    mixins: [myMixin]
})

var component = new Component();

var mixin = {
    created: function () {
        console.log('mixin called')
    }
}

new Vue({
    mixins: [mixin],
    created: function () {
        console.log('component called')
    }
})

var mixin1 = {
    methods: {
        helloworld: function () {
            console.log('in helloworld');
        },
        samemethod: function () {
            console.log('mixin:same method')
        }
    }
}

var vm15 = new Vue({
    mixins: [mixin1],
    methods: {
        start: function () {
            console.log('start method');
        },
        samemethod: function () {
            console.log('main:method');
        }
    }
});


vm15.helloworld();
vm15.start();
vm15.samemethod();

Vue.component('inicomponent1', {
    // template: '<h1>asd<slot></slot></h1>',
    // data: function () {
    //     return {
    //     }
    // }
    render: function (createElement) {
        var a = this.elementtype.split(",");
        return createElement(a[0], {
            attrs: {
                id: a[3],
                style: "color:" + a[1] + ";font-size:" + a[2] + ";"
            }
        },
            this.$slots.default
        )
    },
    props: {
        elementtype: {
            attributes: String,
            required: true
        }
    }
});

var vm16 = new Vue({
    el: '#component_test'
});

var vm17 = new Vue({
    el: '#app4',
    data: {
        counter: 1
    }
})

vm17.$watch('counter', function (nval, oval) {
    alert('Counter' + oval + "to" + nval);
})

setTimeout(
    function () {
        vm17.counter = 2;
    }, 2000
)

var myproduct = { "id": 1, name: "book", "price": "20.00" };
var vm18 = new Vue({
    el: '#app5',
    data: {
        counter: 1,
        products: myproduct
    }
})

// vm18.products.qty = "1";
Vue.delete(myproduct, 'price');

console.log(vm18);

vm18.$watch('counter', function (nval, oval) {
    alert('Counter' + oval + "to" + nval);
})
