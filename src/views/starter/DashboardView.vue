<script setup></script>

<template>
  <BasePageHeading title="Dashboard" subtitle="Welcome ...!">
    <template #extra>
      <button type="button" @click="" class="btn btn-alt-primary" v-click-ripple>
        <i class="fa fa-refresh opacity-50 me-1"></i>
        Refresh
      </button>
    </template>
  </BasePageHeading>

  <div class="content">
    <div class="row items-push">
      <div class="col-sm-6 col-xl-4">
        <RouterLink to="dashboard1">
          <BaseBlock title="Dashboard 1" class="h-100 mb-0">
            <p>...</p>
          </BaseBlock></RouterLink
        >
      </div>
      <div class="col-sm-6 col-xl-4">
        <RouterLink to="dashboard2">
          <BaseBlock title="Dashboard 2" class="h-100 mb-0">
            <p>...</p>
          </BaseBlock></RouterLink
        >
      </div>
      <!-- <div class="col-xl-4">
        <BaseBlock title="Block" class="h-100 mb-0">
          <p>...</p>
        </BaseBlock>
      </div> -->
    </div>
  </div>
</template>
