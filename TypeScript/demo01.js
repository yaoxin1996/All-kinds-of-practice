(function () {
    class Person {
        // ts可以给属性添加修饰符
        // public （默认值） 修饰的属性可以在任意位置访问，包括子类(修改)
        // private 私有属性 只能在类内部进行访问(修改)
        // - 通过在类上添加方法，使得私有属性可以被外部访问
        // protected 受保护的属性，只能在当前类和当前类的子类中访问（修改)
        /*************************** */
        // private _name:string
        // private _age:number
        // 可以直接把属性定义在构造函数中
        // constructor (name, age) {
        // this._name = name
        // this._age = age
        // }
        constructor(_name, _age) {
            this._name = _name;
            this._age = _age;
            // 不需要声明和赋值
        }
        /*  getter方法用来读取属性
            setter方法用来设置属性
              -它们被称为属性读取器
    
          // 定义方法 获取name属性
          getName () {
            return this.name
          }
          // 定义方法 修改name属性
          setName (value:string) {
            this.name = value
          }
          setAge (value:number) {
            if (value >= 0) {
              this.age = value
            }
          }
        */
        // ts中设置getter方法
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    // 属性在对象中设置，可以任意修改
    // 属性可以被任意修改，会导致对象中的数据非常不安全
    const zs = new Person('张三', 20);
    // ts中使用getter获取属性值
    console.log(zs.name);
    // ts中使用setter修改属性值
    zs.name = '李四';
    console.log(zs);
})();
