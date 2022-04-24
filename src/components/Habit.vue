<template>
    <div class="habit">
        <span class="habit__name">{{ name }}</span>
        <span :class="{ 'habit__box--done': done }"
            class="habit__box" @click="onHabitDone">
            <span v-if="done">✔️</span>
        </span>
    </div>
</template>
<script>
export default{
    name: 'Habit',
    props: {
        name: {
            type: String,
            required: true
        },
    },
    data: () => ({
        done: false,
    }),
    methods: {
        onHabitDone(){
            this.done = !this.done;
        },
    },
};
</script>
<style>
    .habit{
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ui-sans-serif, system-ui;
        text-align: center;
        text-transform: uppercase;
    }
    .habit__name{
        font-weight: 700;
        font-size: 64px;
        margin-right: 20px;
    }
    .habit__box{
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid #cbd5e0;
        border-radius: 10px;
        background-color: #ffffff;
        font-size: 40px;
        cursor: pointer;
    }
    .habit__box--done{
        color: #ffffff;
    }
</style>
