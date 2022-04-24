## Testing Vue.js components with Vue Test Utils  ##
Inspired by this article [Testing Vue.js components with Vue Test Utils](https://blog.logrocket.com/testing-vue-js-components-vue-test-utils/)


Link to [Vue test utils](https://test-utils.vuejs.org/guide/)


My actions:  
1. vue create vue-test
2. vue add unit-jest
3. npm install --save-dev @vue/test-utils

Add test file *.spec.js* to *tests\unit*  
or test file *.js* to *tests*  

Add option "verbose" to jest.config.js
```json
module.exports = {  
  preset: '@vue/cli-plugin-unit-jest',  
  verbose: true,  
}
```