<template>
    <div>
        <ul class="tabs">
            <li
                v-for="tab in tabList"
                :key="tab"
                class="tab"
            > 
                <button
                    :class="{ active: tab.isActive }"
                    @click="selectedTab(tab)"
                >
                    {{ tab.name }}
                </button>
            </li>
        </ul>
        <div class="dynamic__component">
            <component
                v-if="currentTabComponent"
                :is="currentTabComponent"
                v-bind="sharedState"
                @toggle="handleToggle"
            />
        </div>
    </div>
</template>

<script setup>
const DynamicsTabOne = defineAsyncComponent(() => import('./dynamics/TabOne.vue'))
const DynamicsTabTwo = defineAsyncComponent(() => import('./dynamics/TabTwo.vue'))
const DynamicsTabThree = defineAsyncComponent(() => import('./dynamics/TabThree.vue'))
const handleToggle = user => {
    console.log('Toggle event received', user)
}
const sharedState = ref({
    userList: [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Doe', age: 25 },
        { name: 'Jim Doe', age: 35 }
    ],
    products: [
        { name: 'Product 1', price: 100 },
        { name: 'Product 2', price: 200 },
        { name: 'Product 3', price: 300 }
    ]
})
const tabList = ref([
    { name: 'Tab 1', isActive: true },
    { name: 'Tab 2', isActive: false },
    { name: 'Tab 3', isActive: false }
])
const selectedTab = (tab) => {
    tabList.value.forEach((tab) => {
        tab.isActive = false
    })
    tab.isActive = true
}
const currentTabComponent = computed(() => {
    const currentTab = tabList.value.find((tab) => tab.isActive)
    switch (currentTab.name) {
        case 'Tab 1':
            return DynamicsTabOne
        case 'Tab 2':
            return DynamicsTabTwo
        case 'Tab 3':
            return DynamicsTabThree
    }
})
</script>

<style lang="scss" scoped>
.tabs {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.tabs .tab {
    margin: 0;
    padding: 0;
}
button {
    background-color: #f1f1f1;
    border: none;
    color: black;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
button.active {
    background-color: #666;
    color: white;
}
</style>