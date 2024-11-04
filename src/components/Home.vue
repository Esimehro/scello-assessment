<template>
  <main class="max-w-screen-xl mx-auto my-0 bg-[#F2F0F9] w-full h-full px-8 pb-8 pt-8 md:pb-16 md:px-16">
    <h3 className="text-[#6E6893] text-[14px] font-bold leading-[16.94px] mb-4">
      TABLE HEADING
    </h3>

    <section
      class="flex flex-col gap-5 md:justify-between md:flex-row md:items-center mb-4 border-b border-[#C6C2DE]"
    >
      <div
        class="flex items-center gap-8 text-[#6E6893] text-[14px] font-medium leading-[16.94px]"
      >
        <p
          @click="selectedTab = 'All'"
          :class="{
            'border-b-2 border-solid border-[#25213B] mt-4 pb-3':
              selectedTab === 'All',
          }"
          class="cursor-pointer"
        >
          All
        </p>
        <p
          @click="selectedTab = 'Paid'"
          :class="{
            'border-b-2 border-solid border-[#25213B] mt-4 pb-3':
              selectedTab === 'Paid',
          }"
          class="cursor-pointer"
        >
          Paid
        </p>
        <p
          @click="selectedTab = 'Unpaid'"
          :class="{
            'border-b-2 border-solid border-[#25213B] mt-4 pb-3':
              selectedTab === 'Unpaid',
          }"
          class="cursor-pointer"
        >
          Unpaid
        </p>
        <p
          @click="selectedTab = 'Overdue'"
          :class="{
            'border-b-2 border-solid border-[#25213B] mt-4 pb-3':
              selectedTab === 'Overdue',
          }"
          class="cursor-pointer"
        >
          Overdue
        </p>
      </div>

      <div
        class="text-[#6E6893] text-[14px] font-medium leading-[16.94px] mb-2"
      >
        <p>
          Total payable amount:
          <span
            class="text-[#6D5BD0] font-medium text-[18px] leading-[21.78px] ml-1 mr-1"
            >${{ totalAmount }}</span
          >USD
        </p>
      </div>
    </section>

    <section class="bg-white rounded-[8px] border border-[#F4F2FF] shadow-md">
      <div class="flex flex-col p-3 gap-3 md:flex-row lg:flex-row lg:items-center lg:justify-between  lg:p-3 md:p-3 md:items-center md:justify-between">
        <div class="flex items-center gap-4 lg:gap-8 md:gap-8">
          <button
            @click="toggleFilterDropdown"
            class="border border-[#C6C2DE] flex gap-2 items-center rounded-[6px] text-[12px] weight-[400] text-[#25213B] p-1 lg:text-[16px] md:text-[16px]"
          >
            <FunnelIcon class="w-4 h-4 lg:w-5 lg:h-5 md:w-5 m:h-5 text-[#8B83BA]" />Filter
          </button>

          <div
            v-if="isFilterDropdownOpen"
            class="absolute top-[11.3rem] bg-white border border-[#C6CED2] rounded shadow-md w-48 z-10"
          >
            <div class="p-5">
              <div
                class="flex justify-center items-center px-4 py-4 h-4 w-4 rounded-full absolute dropdown-header bg-white right-[-10px] top-[-20px] hover:bg-[#F2F0F9] cursor-pointer shadow-md z-999"
              >
                <span
                  class="font-medium text-[18px] text-[#8B83BA]"
                  @click.stop="closeFilterDropdown()"
                >
                  x
                </span>
              </div>
              <p
                class="font-normal text-[#6E6893] text-x leading-[14.52px] tracking-wide mb-3"
              >
                SORT BY:
              </p>
              <div class="flex flex-col border-b border-[#F2F0F9]">
                <label
                  class="flex flex-row-reverse items-center justify-between font-normal text-[#25213B] text-x leading-[16.94px] tracking-wide mb-3"
                >
                  <input type="radio" value="default" v-model="sortBy" />
                  Default
                </label>
                <label
                  class="flex flex-row-reverse items-center justify-between font-normal text-[#25213B] text-x leading-[16.94px] tracking-wide mb-3"
                >
                  <input type="radio" value="first name" v-model="sortBy" />
                  First Name
                </label>
                <label
                  class="flex flex-row-reverse items-center justify-between font-normal text-[#25213B] text-x leading-[16.94px] tracking-wide mb-3"
                >
                  <input type="radio" value="last name" v-model="sortBy" />
                  Last Name
                </label>
                <label
                  class="flex flex-row-reverse items-center justify-between font-normal text-[#25213B] text-x leading-[16.94px] tracking-wide mb-3"
                >
                  <input type="radio" value="due date" v-model="sortBy" />
                  Due Date
                </label>
                <label
                  class="flex flex-row-reverse items-center justify-between font-normal text-[#25213B] text-x leading-[16.94px] tracking-wide mb-4"
                >
                  <input type="radio" value="last login" v-model="sortBy" />
                  Last Login
                </label>
              </div>

              <p
                class="font-normal text-[#6E6893] text-x leading-[14.52px] tracking-wide mb-3 mt-4"
              >
                USERS:
              </p>
              <div class="flex flex-col">
                <label
                  class="flex flex-row-reverse items-center justify-between font-normal text-[#25213B] text-x leading-[16.94px] tracking-wide mb-3"
                >
                  <input type="radio" value="all" v-model="userFilter" />
                  All
                </label>
                <label
                  class="flex flex-row-reverse items-center justify-between font-normal text-[#25213B] text-x leading-[16.94px] tracking-wide mb-2"
                >
                  <input type="radio" value="active" v-model="userFilter" />
                  Active
                </label>
                <label
                  class="flex flex-row-reverse items-center justify-between font-normal text-[#25213B] text-x leading-[16.94px] tracking-wide"
                >
                  <input type="radio" value="inactive" v-model="userFilter" />
                  Inactive
                </label>
              </div>
            </div>
          </div>

          <span
            class="flex items-center gap-3 bg-[#F4F2FF] rounded-[6px] w-full h-[40px] p-2 md:w-[24rem] lg:w-[24rem]"
          >
            <SearchIcon />
            <input
              type="search"
              v-model="searchTerm"
              placeholder="Search Users by Name, Email or Date"
              class="outline-none w-full h-full bg-[#F4F2FF]"
            />
          </span>
        </div>

        <button
          class="bg-[#6D5BD0] text-white text-[16px] font-semibold px-2 py-1 rounded-[6px] shadow-md hover:bg-[#6656c4] justify-end"
          @click="payDues"
        >
          Pay Dues
        </button>
      </div>

     <div class="overflow-auto">
        <table class="min-w-full text-left text-sm">
        <thead>
          <tr class="bg-[#F4F2FF] border-b text-[#6E6893]">
            <th class="px-4 py-3 w-[5%]">
              <input
                type="checkbox"
                class="form-checkbox border border-[#8B83BA] ring-1 ring-[#8B83BA] outline-none"
              />
            </th>
            <th
              class="px-4 py-3 w-[20%] text-[12px] leading-[14.52px] font-semibold tracking-wider"
            >
              NAME
            </th>
            <th
              class="px-4 py-3 w-[20%] text-[12px] leading-[14.52px] font-semibold tracking-wider"
            >
              USER STATUS
            </th>
            <th
              class="px-4 py-3 w-[20%] text-[12px] leading-[14.52px] font-semibold tracking-wider"
            >
              PAYMENT STATUS
            </th>
            <th
              class="px-4 py-3 w-[10%] text-[12px] leading-[14.52px] font-semibold tracking-wider"
            >
              AMOUNT
            </th>

            <th class="px-4 py-3 w-[10%] text-right">
              <div class="flex justify-end mr-4">
                <MoreIcon />
              </div>
            </th>
          </tr>
        </thead>

        <tbody
          v-if="filteredUsers && filteredUsers.length > 0"
          v-for="user in filteredUsers"
          :key="user.id"
        >
          <tr class="border-b hover:bg-gray-50"  :class="{ 'bg-[#F4F2FF]': expandedUser  === user.id }">
            <td class="px-4 py-2 w-[5%]">
              <div class="flex items-center gap-4">
                <input
                  type="checkbox"
                  class="form-checkbox text-[#6E6893]"
                  :checked="selectedUserIds.has(user.id)"
                  @change="toggleUserSelection(user.id, $event.target.checked)"
                />
                <Union @click="toggleExpand(user.id)" />
              </div>
            </td>
            <td class="px-4 py-2">
              <p
                class="text-[#25213B] text-[14px] font-medium leading-[16.94px mb-1"
              >
                {{ user.name }}
              </p>
              <p
                class="text-[#6E6893] text-[14px] font-normal tracking-wide leading-[16.94px]"
              >
                {{ user.email }}
              </p>
            </td>
            <td class="px-4 py-2">
              <div
                :class="[
                  user.userStatus === 'Active'
                    ? 'bg-[#E6E6F2] rounded-full py-[3px] px-[6px] w-[5rem]'
                    : 'bg-[#F2F0F9] rounded-full py-[3px] px-[6px] w-[5rem]',
                  'flex items-center gap-2 bg-[#E6E6F2]  mb-1',
                ]"
              >
                <span
                  :class="[
                    user.userStatus === 'Active'
                      ? 'bg-[#4A4AFF]'
                      : 'bg-[#6E6893]',
                    'h-2 w-2 rounded-full',
                  ]"
                >
                </span>
                <span
                  :class="
                    (user.userStatus === 'Active'
                      ? 'text-[#4A4AFF]'
                      : 'text-[#6E6893]',
                    'text-[12px] font-medium leading-[14.52px]')
                  "
                >
                  {{ user.userStatus }}
                </span>
              </div>
              <p class="text-[#6E6893] text-xs font-medium">
                Last login:
                <span class="text-[#6E6893] text-xs font-medium">{{
                  user.lastLogin
                }}</span>
              </p>
            </td>
            <td class="px-4 py-2">
              <div
                :class="{
                  'bg-[#CDFFCD]': user.paymentStatus === 'Paid',
                  'bg-[#FFE0E0]': user.paymentStatus === 'Overdue',
                  'bg-[#FFECCC]': user.paymentStatus === 'Unpaid',
                  flex: true,
                  'rounded-full': true,
                  'py-[3px]': true,
                  'px-[6px]': true,
                  'w-[5rem]': true,
                  'items-center': true,
                  'gap-2': true,
                  'mb-1': true,
                }"
              >
                <span
                  :class="{
                    'bg-[#007F00]': user.paymentStatus === 'Paid',
                    'bg-[#D30000]': user.paymentStatus === 'Overdue',
                    'bg-[#CE8500]': user.paymentStatus === 'Unpaid',
                    'h-2': true,
                    'w-2': true,
                    'rounded-full': true,
                  }"
                >
                </span>
                <span
                  :class="{
                    'text-[#007F00]': user.paymentStatus === 'Paid',
                    'text-[#D30000]': user.paymentStatus === 'Overdue',
                    'text-[#CE8500]': user.paymentStatus === 'Unpaid',
                    'text-[12px]': true,
                    'font-medium': true,
                    'leading-[14.52px]': true,
                  }"
                >
                  {{ user.paymentStatus }}
                </span>
              </div>
              <p class="text-[#25213B] text-xs font-medium leading-[14.52px]">
                Due on
                <span
                  class="text-[#25213B] text-xs font-medium leading-[14.52px]"
                  >{{ user.paymentDate }}</span
                >
              </p>
            </td>
            <td
              class="px-4 py-2 text-[#25213B] text-[14px] font-medium leading-[16.94px]"
            >
              <div class="flex flex-col gap-1">
                <span
                  class="text-[#25213B] text-[14px] font-medium leading-[16.94px]"
                >
                  ${{ user.amount }}</span
                >
                <span
                  class="text-[#6E6893] text-xs font-normal leading-[14.52px] tracking-wider"
                  >USD</span
                >
              </div>
            </td>
            <td class="px-4 py-2">
              <span
                @click="toggleDropdown(user.id)"
                class="text-[#6E6893] text-xs font-medium leading-[14.52px] cursor-pointer flex items-center gap-4"
              >
                View More
                <MoreIcon />
              </span>

              <div
                v-if="dropdownOpenUser === user.id"
                class="absolute right-20 w-36 bg-white border border-[#C6CED2] rounded-[6px] shadow-md z-10"
              >
                <div
                  class="flex justify-center items-center px-4 py-4 h-4 w-4 rounded-full absolute dropdown-header bg-white right-[-10px] top-[-20px] hover:bg-[#F2F0F9] cursor-pointer shadow-md z-999"
                >
                  <span
                    class="font-medium text-[18px] text-[#8B83BA]"
                    @click.stop="closeDropdown()"
                  >
                    x
                  </span>
                </div>
                <div
                  class="flex justify-between items-center p-2 hover:bg-[#F2F0F9] cursor-pointer border-b border-b-[#F2F0F9]"
                >
                  <span
                    class="text-[14px] text-[#25213B] font-normal leading-[16.94px] tracking-wide"
                    >Edit</span
                  >
                </div>
                <div
                  class="flex justify-between items-center p-2 hover:bg-[#F2F0F9] cursor-pointer border-b border-b-[#F2F0F9]"
                >
                  <span
                    class="text-[14px] text-[#25213B] font-normal leading-[16.94px] tracking-wide"
                    >View Profile</span
                  >
                </div>
                <div
                  class="flex justify-between items-center p-2 hover:bg-[#F2F0F9] cursor-pointer border-b border-b-[#F2F0F9]"
                  @click="activateUser(user.id)"
                >
                  <span
                    class="text-[14px] text-[#007F00] font-normal leading-[16.94px] tracking-wide"
                    >Activate User</span
                  >
                </div>
                <div
                  class="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer border-b border-b-[#F2F0F9]"
                  @click="deleteUser(user.id)"
                >
                  <span
                    class="text-[14px] text-[#D30000] font-normal leading-[16.94px] tracking-wide"
                    >Delete</span
                  >
                </div>
              </div>
            </td>
          </tr>
          <tr
            v-if="expandedUser !== null && expandedUser === user.id"
            class="bg-gray-50"
          >
            <td colspan="6" class="border-t border-gray-200">
              <table class="w-full text-center text-sm">
                <thead>
                  <tr class="text-[12px] text-[#6E6893] bg-[#F4F2FF] leading-[14.52px] font-semibold tracking-wider">
                    <th class="px-2 py-3">DATE</th>
                    <th class="px-2 py-3">USER ACTIVITY</th>
                    <th class="px-2 py-3"><span class="flex items-center gap-1">DETAIL <span><Info/></span></span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-if="!user.activity || user.activity.length === 0"
                    class="border-t border-gray-200"
                  >
                    <td colspan="3" class="text-center text-[16px] text-[#6E6893] bg-[#F4F2FF] leading-[19.36px] font-semibold tracking-wider p-10">
                      NO RECORDS FOUND
                    </td>
                  </tr>
                  <tr
                    v-for="activity in user.activity"
                    :key="activity.date"
                    class="border-t border-gray-200"
                  >
                    <td class="p-2 text-[14px] text-[#6E6893] leading-[16.94px] font-normal tracking-wide">{{ activity.date }}</td>
                    <td class="p-2 text-[14px] text-[#25213B] leading-[16.94px] font-normal">{{ activity.activity }}</td>
                    <td class="p-2 text-left text-[14px] text-[#25213B] leading-[16.94px] font-normal">{{ activity.detail }}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div class="flex justify-end gap-12 w-full bg-[#F4F2FF] py-2 px-6">
        <span class="flex items-center gap-3">
          <p
            class="text-xs font-semibold leading-[14.52px] tracking-wide text-[#6E6893]"
          >
            Rows per page: 10
          </p>
          <Polygon />
        </span>

        <span
          class="self-center text-[#6E6893] text-xs font-semibold leading-[14.52px] tracking-wide"
          >Page {{ currentPage }} of {{ totalPages }}</span
        >
        <span class="flex items-center gap-6">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="px-4 py-2 bg-none cursor-pointer"
          >
            <Prev />
          </button>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 bg-none cursor-pointer"
          >
            <Next />
          </button>
        </span>
      </div>
     </div>
    </section>
  </main>
</template>

<script setup>
import { FunnelIcon } from "@heroicons/vue/20/solid";
import { useUserStore } from "@/stores/userStore";
import { ref, computed } from "vue";
import SearchIcon from "../assets/SearchIcon.vue";
import MoreIcon from "../assets/MoreIcon.vue";
import Union from "../assets/Union.vue";
import Prev from "../assets/Prev.vue";
import Next from "../assets/Next.vue";
import Polygon from "../assets/Polygon.vue";
import Info from "../assets/Info.vue";

const store = useUserStore();
const users = store.users;
const selectedTab = ref("All");
const totalAmount = store.totalAmount;
const searchTerm = ref("");
const dropdownOpenUser = ref(null);
const isFilterDropdownOpen = ref(false);
const sortBy = ref("default");
const userFilter = ref("all");
const selectedUserIds = ref(new Set());
const expandedUser = ref(null);
const currentPage = ref(1);
const itemsPerPage = 10;

const filteredUsers = computed(() => {
  if (!users || !Array.isArray(users)) return [];
  const lowerCaseSearchTerm = searchTerm.value.toLowerCase();

  let filtered = users.filter((user) => {
    const isSelectedTabMatch =
      selectedTab.value === "All" || user.paymentStatus === selectedTab.value;

    const isSearchMatch =
      user.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.email.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.paymentDate.toLowerCase().includes(lowerCaseSearchTerm);

    return isSelectedTabMatch && isSearchMatch;
  });

  if (userFilter.value === "active") {
    filtered = filtered.filter((user) => user.userStatus === "Active");
  } else if (userFilter.value === "inactive") {
    filtered = filtered.filter((user) => user.userStatus === "Inactive");
  }

  if (sortBy.value === "first name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === "last name") {
    filtered.sort((a, b) => {
      const aLastName = a.name.split(" ").pop();
      const bLastName = b.name.split(" ").pop();
      return aLastName.localeCompare(bLastName);
    });
  } else if (sortBy.value === "due date") {
    filtered.sort((a, b) => new Date(a.paymentDate) - new Date(b.paymentDate));
  } else if (sortBy.value === "last login") {
    filtered.sort((a, b) => new Date(a.lastLogin) - new Date(b.lastLogin));
  }

  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  filtered.forEach((user) => {
    console.log("User  ID:", user.id);
  });

  return filtered.slice(start, end);
});

const totalPages = computed(() => {
  const filteredCount = users.filter((user) => {
    const isSelectedTabMatch =
      selectedTab.value === "All" || user.paymentStatus === selectedTab.value;

    const isSearchMatch =
      user.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      user.paymentDate.toLowerCase().includes(searchTerm.value.toLowerCase());

    return isSelectedTabMatch && isSearchMatch;
  }).length;

  return Math.ceil(filteredCount / itemsPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const toggleFilterDropdown = () => {
  isFilterDropdownOpen.value = !isFilterDropdownOpen.value;
  if (isFilterDropdownOpen.value) {
    dropdownOpenUser.value = null;
  }
};

const closeFilterDropdown = () => {
  isFilterDropdownOpen.value = null;
};

const toggleDropdown = (userId) => {
  dropdownOpenUser.value = dropdownOpenUser.value === userId ? null : userId;
  if (dropdownOpenUser.value) {
    isFilterDropdownOpen.value = false;
  }
};

const closeDropdown = () => {
  dropdownOpenUser.value = null;
};

const toggleExpand = (userId) => {
  console.log(userId);
  if (userId) {
    expandedUser.value = expandedUser.value === userId ? null : userId;
  } else {
    console.warn("User  ID is undefined");
  }
};

const toggleUserSelection = (userId, isChecked) => {
  if (isChecked) {
    selectedUserIds.value.add(userId);
  } else {
    selectedUserIds.value.delete(userId);
  }
};

const payDues = () => {
  selectedUserIds.value.forEach((userId) => {
    const user = users.find((user) => user.id === userId);
    if (user && user.paymentStatus === "Unpaid") {
      user.paymentStatus = "Paid";
    }
  });
  selectedUserIds.value.clear();
};
</script>
