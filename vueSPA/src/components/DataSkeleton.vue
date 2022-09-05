<template>
    <div class="skeleton" style="height:150%">
        <div class="shimmer">
            <div class="wrapper">       
                <div class="stroke animate link"></div>       
                <div class="stroke animate link"></div>       
                <div class="stroke animate link"></div>
                <div class="stroke animate link"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:"DataSkeleton"
}
</script>
<style scoped>

    @keyframes placeHolderShimmer{
        0%{
            background-position: -468px 0
        }
        100%{
            background-position: 468px 0
        }
    }

    .animatedBackground {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
        height: 56px;
        position: relative;
        transform: translateY(75%);
    }  
    .shimmer {
        height: 120px;
        background: #ffffff;
    }
    .stroke {
        height: 15px;
        background: #777;
        margin-top: 20px;
    }

    .wrapper {
        width: 0px;
        animation: fullView 0.5s forwards linear;
    }

    @keyframes fullView {
        100% {
            width: 100%;
        }
    }
    .animate {
        animation: shimmer 3s;
        animation-iteration-count: infinite;
        background: linear-gradient(to right, #e6e6e6 5%, #cccccc 25%, #e6e6e6 35%);
        background-size: 1000px 100%;
    }
    @keyframes shimmer {
        from {
            background-position: -1000px 0;
        }
        to {
            background-position: 1000px 0;
        }
    }
</style>