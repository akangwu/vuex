# vuex

## 获取state中的变量
### 第一种
在template中是不需要写this的 可以省略this的
```js
this.$store.state.count // count是变量名称
```
### 第二种
使用辅助函数 mapState
```js
import {mapState} from 'vuex'
compute:{
    ...mapState(['count'])
}
```
