(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{68:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"闭包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包")]),n("p",[t._v("闭包（"),n("code",[t._v("closure")]),t._v("）是"),n("code",[t._v("Javascript")]),t._v("语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。")]),n("h2",{attrs:{id:"变量的作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量的作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量的作用域")]),n("p",[t._v("要理解闭包，首先必须理解"),n("code",[t._v("Javascript")]),t._v("特殊的变量作用域。")]),n("p",[t._v("变量的作用域无非就是两种：全局变量和局部变量。")]),n("p",[n("code",[t._v("Javascript")]),t._v("语言的特殊之处，就在于函数内部可以直接读取全局变量。")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("999")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 999")]),t._v("\n")])]),n("p",[t._v("另一方面，在函数外部自然无法读取函数内的局部变量。")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("999")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n")])]),n("p",[t._v("这里有一个地方需要注意，函数内部声明变量的时候，一定要使用"),n("code",[t._v("var")]),t._v("命令。如果不用的话，你实际上声明了一个"),n("strong",[t._v("全局变量")]),t._v("！")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    n"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("999")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 999")]),t._v("\n")])]),n("h2",{attrs:{id:"如何从外部读取局部变量？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何从外部读取局部变量？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何从外部读取局部变量？")]),n("p",[t._v("出于种种原因，我们有时候需要得到函数内的局部变量。但是，前面已经说过了，正常情况下，这是办不到的，只有通过变通方法才能实现。")]),n("p",[t._v("那就是在函数的内部，再定义一个函数。")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("999")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f2")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 999")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("在上面的代码中，函数"),n("code",[t._v("f2")]),t._v("就被包括在函数"),n("code",[t._v("f1")]),t._v("内部，这时"),n("code",[t._v("f1")]),t._v("内部的所有局部变量，对"),n("code",[t._v("f2")]),t._v("都是可见的。但是反过来就不行，"),n("code",[t._v("f2")]),t._v("内部的局部变量，对"),n("code",[t._v("f1")]),t._v("就是不可见的。这就是"),n("code",[t._v("Javascript")]),t._v('语言特有的"链式作用域"结构（'),n("code",[t._v("chain scope")]),t._v("），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。")]),n("p",[t._v("既然"),n("code",[t._v("f2")]),t._v("可以读取"),n("code",[t._v("f1")]),t._v("中的局部变量，那么只要把"),n("code",[t._v("f2")]),t._v("作为返回值，我们不就可以在"),n("code",[t._v("f1")]),t._v("外部读取它的内部变量了吗！")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("999")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f2")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f2"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("result")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 999")]),t._v("\n")])]),n("h2",{attrs:{id:"闭包的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#闭包的概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包的概念")]),n("p",[t._v("上一节代码中的"),n("code",[t._v("f2")]),t._v("函数，就是闭包。")]),n("p",[t._v('各种专业文献上的"闭包"（'),n("code",[t._v("closure")]),t._v("）定义非常抽象，很难看懂。我的理解是，闭包就是能够读取其他函数内部变量的函数。")]),n("p",[t._v('由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"'),n("strong",[t._v("定义在一个函数内部的函数")]),t._v('"。')]),n("p",[t._v("所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。")]),n("h2",{attrs:{id:"闭包的用途"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#闭包的用途","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包的用途")]),n("p",[t._v("闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。")]),n("p",[t._v("怎么来理解这句话呢？请看下面的代码。")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("999")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token function-variable function"}},[t._v("add")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        n"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("n"),n("span",{attrs:{class:"token operator"}},[t._v("+")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n　　"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("f2")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n　　"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f2"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token function"}},[t._v("f1")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("result")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 999")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("add")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//执行一次加")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("result")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 1000")]),t._v("\n")])]),n("p",[t._v("在这段代码中，"),n("code",[t._v("result")]),t._v("实际上就是闭包"),n("code",[t._v("f2")]),t._v("函数。它一共运行了两次，第一次的值是999，第二次的值是1000。这证明了，函数"),n("code",[t._v("f1")]),t._v("中的局部变量"),n("code",[t._v("n")]),t._v("一直保存在内存中，并没有在"),n("code",[t._v("f1")]),t._v("调用后被自动清除。")]),n("p",[t._v("为什么会这样呢？原因就在于"),n("code",[t._v("f1")]),t._v("是"),n("code",[t._v("f2")]),t._v("的父函数，而"),n("code",[t._v("f2")]),t._v("被赋给了一个全局变量，这导致"),n("code",[t._v("f2")]),t._v("始终在内存中，而"),n("code",[t._v("f2")]),t._v("的存在依赖于"),n("code",[t._v("f1")]),t._v("，因此"),n("code",[t._v("f1")]),t._v("也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。")]),n("p",[t._v("这段代码中另一个值得注意的地方，就是"),n("code",[t._v("add=function(){n=n+1}")]),t._v("这一行，首先在"),n("code",[t._v("add")]),t._v("前面没有使用"),n("code",[t._v("var")]),t._v("关键字，因此"),n("code",[t._v("add")]),t._v("是一个"),n("strong",[t._v("全局变量")]),t._v("，而不是"),n("strong",[t._v("局部变量")]),t._v("。其次，add的"),n("strong",[t._v("值")]),t._v("是一个"),n("strong",[t._v("匿名函数")]),t._v("（anonymous function），而这个匿名函数本身也是一个"),n("strong",[t._v("闭包")]),t._v("，所以"),n("code",[t._v("add")]),t._v("相当于是一个"),n("code",[t._v("setter")]),t._v("，"),n("strong",[t._v("可以在函数外部对函数内部的局部变量进行操作")]),t._v("。")]),n("h2",{attrs:{id:"使用闭包的注意点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用闭包的注意点","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用闭包的注意点")]),n("ul",[n("li",[n("p",[t._v("由于闭包会使得函数中的变量都被保存在内存中，"),n("strong",[t._v("内存消耗很大")]),t._v("，所以不能"),n("strong",[t._v("滥用闭包")]),t._v("，否则会造成网页的性能问题，在IE中可能导致"),n("strong",[t._v("内存泄露")]),t._v("。解决方法是，在退出函数之前，将不使用的局部变量全部删除。")])]),n("li",[n("p",[t._v("闭包会在父函数外部，"),n("strong",[t._v("改变父函数内部变量的值")]),t._v("。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，"),n("strong",[t._v("不要随便改变父函数内部变量的值")]),t._v("。")])])])])}],!1,null,null,null);s.default=o.exports}}]);