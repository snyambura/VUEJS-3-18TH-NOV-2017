<template>
  <div id="app">
      <h3>Add new Task</h3>
      <input v-focus type="text" v-model="message">
      <input type="button" v-on:click="Add()" value="Add"/>

      <h3>Pending Tasks </h3>
      <p v-for="(task, index) in tasks">
          <span v-text="task.name"></span>
          <a href="#" v-on:click.prevent="deleteObject(index)">&times;</a>
      </p>
  </div>
</template>

<script>
    export default {
        name: 'app',

        directives: 'focus',

        data() {
            return {
                tasks :[
                    {
                        "name": "attend training"
                    },
                    {
                        "name": "write today's daily blog"
                    },
                    {
                        "name": "do the vuejs report"
                    },
                    {
                        "name": "write a simple vuejs application"
                    },
                    {
                        "name": "complete the styling challenge"
                    }

                ]
            };
        },

        methods: {
            deleteObject: function(index) {
                this.$delete(this.tasks, index);
            },

            Add() {
                if(this.message != "") {
                    //alert message
                    this.tasks.unshift({
                        name: this.message
                        // status: false
                    });
                    this.message = '';
                }

            },


        }

    }
</script>


<style lang="scss">
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
