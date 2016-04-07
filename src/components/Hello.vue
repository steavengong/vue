<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="doClick()">OK!</button><br><hr>
    <input v-model="newTodo" @keyup.enter="addTodo"></input>
    <ul>
      <li v-for="todo in todos">
        <span>{{ todo.text }}</span>
        <button @click="removeToDo($index)">X</button>
      </li>
    </ul>
    <div>{{ name }}</div>
  </div>
</template>

<script>
var data = {msg:'spider man',newTodo:'',todos:[{text:'Add some todos'}]}
export default {
  data() {
    return data
  },
  computed: {
    name() {
      return 'yuhi'
    }
  },
  methods: {
    doClick() {
      this.msg = this.msg.split('').reverse().join('')
      alert("reverse OK!")
    },
    addTodo () {
      var text = this.newTodo.trim()
      if(text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeToDo (index) {
      this.todos.splice(index, 1)
    }
  },
  ready(){
    // alert("hack")
  },
  watch: {
    msg(newVal,oldVal){
      console.log("newVal=" + newVal + ",oldVal=" + oldVal)
    }
  }
}
</script>
