<script setup>
import { reactive, ref } from "vue";
// Helper variables
const orderSearch = ref(false);

</script>
<template>
  <div>
    <BaseBlock title="Recent Orders">
      <template #options>
        <div class="space-x-1">
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary"
            @click="
              () => {
                orderSearch = !orderSearch;
              }
            "
          >
            <i class="fa fa-search"></i>
          </button>
          <div class="dropdown d-inline-block">
            <button
              type="button"
              class="btn btn-sm btn-alt-secondary"
              id="dropdown-recent-orders-filters"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fa fa-fw fa-flask"></i>
              Filters
              <i class="fa fa-angle-down ms-1"></i>
            </button>
            <div
              class="dropdown-menu dropdown-menu-md dropdown-menu-end fs-sm"
              aria-labelledby="dropdown-recent-orders-filters"
            >
              <a
                class="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                href="javascript:void(0)"
              >
                Pending
                <span class="badge bg-primary rounded-pill">20</span>
              </a>
              <a
                class="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                href="javascript:void(0)"
              >
                Active
                <span class="badge bg-primary rounded-pill">72</span>
              </a>
              <a
                class="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                href="javascript:void(0)"
              >
                Completed
                <span class="badge bg-primary rounded-pill">890</span>
              </a>
              <a
                class="dropdown-item fw-medium d-flex align-items-center justify-content-between"
                href="javascript:void(0)"
              >
                All
                <span class="badge bg-primary rounded-pill">997</span>
              </a>
            </div>
          </div>
        </div>
      </template>

      <template #content>
        <div
          v-if="orderSearch"
          id="one-dashboard-search-orders"
          class="block-content border-bottom"
        >
          <!-- Search Form -->
          <form @submit.prevent>
            <div class="push">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control form-control-alt"
                  id="one-ecom-orders-search"
                  name="one-ecom-orders-search"
                  placeholder="Search all orders.."
                />
                <span class="input-group-text bg-body border-0">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
          <!-- END Search Form -->
        </div>
        <div class="block-content block-content-full">
          <!-- Recent Orders Table -->
          <div class="table-responsive">
            <table class="table table-hover table-vcenter">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th class="d-none d-xl-table-cell">Customer</th>
                  <th>Status</th>
                  <th class="d-none d-sm-table-cell text-center">Profit</th>
                  <th class="d-none d-sm-table-cell text-end">Created</th>
                  <th class="d-none d-sm-table-cell text-end">Value</th>
                </tr>
              </thead>
              <tbody class="fs-sm">
                <tr>
                  <td>
                    <a class="fw-semibold" href="javascript:void(0)"> ORD.00925 </a>
                    <p class="fs-sm fw-medium text-muted mb-0">Premium</p>
                  </td>
                  <td class="d-none d-xl-table-cell">
                    <a class="fw-semibold" href="javascript:void(0)">Marie Duncan</a>
                    <p class="fs-sm fw-medium text-muted mb-0">Photographer</p>
                  </td>
                  <td>
                    <span
                      class="fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-success-light text-success"
                      >Completed</span
                    >
                  </td>
                  <td class="d-none d-sm-table-cell">
                    <div class="progress mb-1" style="height: 5px">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 8%"
                        aria-valuenow="8"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="fs-xs fw-semibold mb-0">8%</p>
                  </td>
                  <td class="d-none d-sm-table-cell fw-semibold text-muted text-end">
                    7 min ago
                  </td>
                  <td class="d-none d-sm-table-cell text-end">
                    <strong>$786,81</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- END Recent Orders Table -->
        </div>
        <div class="block-content block-content-full bg-body-light">
          <!-- Pagination -->
          <nav aria-label="Photos Search Navigation">
            <ul class="pagination pagination-sm justify-content-end mb-0">
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript:void(0)"
                  tabindex="-1"
                  aria-label="Previous"
                >
                  Prev
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript:void(0)">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)" aria-label="Next">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <!-- END Pagination -->
        </div>
      </template>
    </BaseBlock>
  </div>
</template>
