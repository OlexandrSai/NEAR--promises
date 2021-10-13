<template>
   <div class="relative flex h-screen bg-gray-700">
            <div class="hidden lg:block w-96 2xl:w-96 bg-gray-500 rounded-r-3xl section-shadow" s>
                <div class="w-full h-full left-bg">
                    <div class="px-6 2xl:px-10">
                        <div class="flex flex-col items-center">
                            <a href="#" class="mt-16 flex items-center text-white text-2xl md:text-3xl font-bold">
                                <div class="border-r pr-3 md:pr-4 mr-4 md:mr-5">
                                    <img src="@/assets/img/near_logo_stack1.png" alt="">
                                </div>
                                Promises
                            </a>
                            <div class="mt-9 flex justify-center items-center w-24 h-24 rounded-full bg-gray-200">
                                <img src="@/assets/img/photo-camera-interface-symbol-for-button1(1).png" alt="">
                            </div>
                            <p class="mt-6 text-white bg-gradient-to-r text-3xl from-blue-400 to-blue-500">Alex Brawn</p>
                            <p class="text-gray-400">alexbrawn.near</p>
                            <p class="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices morbi molestie.</p>
                            <a href="#" class="mt-9 btn-blue w-full text-white">Edit profile</a>
                            <a href="#" class="mt-4 btn-red w-full text-white">Log out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative w-full px-6 bg-text">
                <div class="w-full flex flex-col md:flex-row items-center justify-between text-white py-3">

                    <div class="flex items-center">
                        <a href="#" class="mr-2 lg:hidden"><img src="@/assets/img/menu.png" alt=""></a>
                        <a href="#" class="flex lg:hidden items-center text-2xl md:text-3xl font-bold">
                            <div class="border-r pr-3 md:pr-4 mr-4 md:mr-5">
                                <img src="@/assets/img/near_logo_stack1.png" alt="">
                            </div>
                            Promises
                        </a>
                    </div>
                    <a href="" class="mt-4 md:mt-0 btn-blue">Create a promise</a>
                </div>

                <!-- My promise section -->
                <div class="relative w-full bg-gray-600 px-6 rounded-3xl section-shadow pt-6 mt-6">
                    <h2 class="absolute -top-4 home-title">I <span class="bg-gradient-to-r from-blue-400 to-blue-500">promise</span></h2>
                    <div class="hidden md:grid grid-cols-9 w-full text-gray-400 px-6 mt-16">
                        <div class="col-span-3">
                            <p class="">What</p>
                        </div>
                        <div class="col-span-2">
                            <p class="">When</p>
                        </div>
                        <div class="col-span-1">
                            <p class="text-center">Progress</p>
                        </div>
                    </div>
                    
                    <!-- One Promise -->
                    <div class="hidden md:grid grid-cols-9 w-full bg-gray-700 rounded-full px-8 mt-3 py-1">
                        <!-- What -->
                        <div class="col-span-3">
                            <div class="flex h-full items-center">
                                <p class="text-lg text-white">
                                    To be good
                                </p>
                            </div>
                        </div>

                        <!-- When -->
                        <div class="col-span-2">
                            <div class="flex h-full items-center">
                                <img src="@/assets/img/image1442.png" alt="" class="mr-2">
                                <p class="text-white">26/06/2021</p>
                            </div>
                        </div>

                        <!-- Progress -->
                        <div class="ml-auto col-span-1">
                            <div class="flex justify-center h-full items-center">
                                <a href="#" class="flex justify-center bg-green-300 p-2 border-2 border-white rounded-md">
                                    <img src="@/assets/img/Amazing.png" alt="" class="">
                                    
                                </a>
                                <a href="#" class="flex text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div class="ml-auto col-span-3">
                            <div class="flex h-full items-center">
                                <a href="#" class="btn-blue w-36 text-white">Edit</a>
                                <a href="#" class="ml-4 text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    <!-- One Promise -->
                    <div class="hidden md:grid grid-cols-9 w-full bg-gray-700 rounded-full px-8 mt-3 py-1">

                        <!-- What -->
                        <div class="col-span-3">
                            <div class="flex h-full items-center">
                                <p class="text-lg text-white">
                                    To be good
                                </p>
                            </div>
                        </div>

                        <!-- When -->
                        <div class="col-span-2">
                            <div class="flex h-full items-center">
                                <img src="@/assets/img/image1442.png" alt="" class="mr-2">
                                <p class="text-white">26/06/2021</p>
                            </div>
                        </div>

                        <!-- Progress -->
                        <div class="ml-auto col-span-1">
                            <div class="flex justify-center h-full items-center">
                                <a href="#" class="flex justify-center bg-green-300 p-2 border-2 border-white rounded-md">
                                    <img src="@/assets/img/Amazing.png" alt="" class="">
                                    
                                </a>
                                <a href="#" class="flex text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div class="ml-auto col-span-3">
                            <div class="flex h-full items-center">
                                <a href="#" class="btn-blue w-36 text-white">Edit</a>
                                <a href="#" class="ml-4 text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    
                    <!-- One promise mobile -->
                    <div class="md:hidden bg-gray-700 rounded-3xl px-6 py-6 mt-6">
                        <div class="flex items-center">

                            <!-- When -->
                        <div class="">
                            <div class="flex h-full items-center">
                                <!-- <img src="./img/image 1442.png" alt="" class="mr-2"> -->
                                <p class="text-white text-xs">26/06/2021</p>
                            </div>
                        </div>

                        <!-- Progress -->
                        <div class="ml-auto ">
                            <div class="flex justify-center w-20 h-20 items-center">
                                <a href="#" class="flex justify-center bg-green-300 p-2 border-2 border-white rounded-md">
                                    <img src="@/assets/img/Amazing.png" alt="" class="">
                                    
                                </a>
                                <a href="#" class="flex text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div class="ml-auto ">
                            <div class="flex h-full items-center">
                                <a href="#" class="btn-blue w-20 text-white">Edit</a>
                                <a href="#" class="ml-4 text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        </div>
                        <p class="text-white text-xl mt-4">
                            To be good
                        </p>
                    </div>
                    <!-- One promise mobile -->
                    <div class="md:hidden bg-gray-700 rounded-3xl px-6 py-6 mt-6">
                        <div class="flex">

                            <!-- When -->
                        <div class="">
                            <div class="flex h-full items-center">
                                <!-- <img src="./img/image 1442.png" alt="" class="mr-2"> -->
                                <p class="text-white text-xs">26/06/2021</p>
                            </div>
                        </div>

                        <!-- Progress -->
                        <div class="ml-auto ">
                            <div class="flex justify-center  w-20 h-20 items-center">
                                <a href="#" class="flex justify-center  bg-green-300 p-2 border-2 border-white rounded-md">
                                    <img src="@/assets/img/Amazing.png" alt="" class="">
                                    
                                </a>
                                <a href="#" class="flex text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div class="ml-auto ">
                            <div class="flex h-full items-center">
                                <a href="#" class="btn-blue w-20 text-white">Edit</a>
                                <a href="#" class="ml-4 text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        </div>
                        <p class="text-white text-xl mt-4">
                            To be good
                        </p>
                    </div>
                   

                     <!-- Pagination -->
                     <div class="flex items-center justify-center md:justify-end py-5 text-white  md:text-lg">
                        <a href="#" class="px-2 hover:text-blue-400">Previous</a>
                        <a href="#" class="px-2 hover:text-blue-400">1</a>
                        <!-- Active element -->
                        <a href="#" class="border-b-2 border-blue-500 px-2 hover:text-blue-400">2</a>
                        <a href="#" class="px-2 hover:text-blue-400">3</a>
                        <a href="#" class="px-2 hover:text-blue-400">4</a>
                        <a href="#" class="px-2 hover:text-blue-400">5</a>
                        <a href="#" class="px-2 hover:text-blue-400">6</a>
                        <a href="#" class="px-2 hover:text-blue-400">Next</a>
                    </div>

                </div>

                <!-- People promise section -->
                <div class="relative w-full bg-gray-600 px-6 rounded-3xl section-shadow pt-6 mt-12">

                    <h2 class="absolute -top-4 home-title">People <span class="bg-gradient-to-r from-blue-400 to-blue-500">promise</span></h2>

                    <div class="hidden md:grid grid-cols-10 w-full text-gray-400 px-6 mt-16">
                        <div class="col-span-3">
                            <p class="">Person</p>
                        </div>
                        <div class="col-span-2">
                            <p class="">What</p>
                        </div>
                        <div class="col-span-2">
                            <p class="">When</p>
                        </div>
                        <div class="col-span-1">
                            <p class="text-center">Progress</p>
                        </div>
                    </div>
                    
                    <!-- One promise -->
                    <div class="hidden md:grid grid-cols-10 w-full bg-gray-700 rounded-full px-8 mt-3 py-1">

                        <!-- Person -->
                        <div class="col-span-3">
                            <div class="flex h-full items-center">
                                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200"></div>
                                <div class="ml-3">
                                    <p class="text-white text-lg">Alex Brown</p>
                                    <p class="-mt-2 text-gray-400">alexbrown.near</p>
                                </div>
                            </div>
                        </div>

                        <!-- What -->
                        <div class="col-span-2">
                            <div class="flex h-full items-center">
                                <p class="text-lg text-white">
                                    To be good
                                </p>
                            </div>
                        </div>

                        <!-- When -->
                        <div class="col-span-2">
                            <div class="flex h-full items-center">
                                <img src="@/assets/img/image1442.png" alt="" class="mr-2">
                                <p class="text-white">26/06/2021</p>
                            </div>
                        </div>

                        <!-- Progress -->
                        <div class="ml-auto col-span-1">
                            <div class="flex justify-center h-full items-center">
                                <a href="#" class="flex justify-center bg-green-300 p-2 border-2 border-white rounded-md">
                                    <img src="@/assets/img/Amazing.png" alt="" class="">
                                    
                                </a>
                                <a href="#" class="flex text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Button -->
                        <div class="ml-auto col-span-2">
                            <div class="flex h-full items-center">
                                <a href="#" class="btn-blue w-36 text-white">Edit</a>
                                <a href="#" class="ml-4 text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- One promise -->
                    <div class="hidden md:grid grid-cols-10 w-full bg-gray-700 rounded-full px-8 mt-6 py-1">

                        <!-- Person -->
                        <div class="col-span-3">
                            <div class="flex h-full items-center">
                                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200"></div>
                                <div class="ml-3">
                                    <p class="text-white text-lg">Alex Brown</p>
                                    <p class="-mt-2 text-gray-400">alexbrown.near</p>
                                </div>
                            </div>
                        </div>

                        <!-- What -->
                        <div class="col-span-2">
                            <div class="flex h-full items-center">
                                <p class="text-lg text-white">
                                    Start work faster and bee
                                </p>
                            </div>
                        </div>

                        <!-- When -->
                        <div class="col-span-2">
                            <div class="flex h-full items-center">
                                <img src="@/assets/img/image1442.png" alt="" class="mr-2">
                                <p class="text-white">26/06/2021</p>
                            </div>
                        </div>

                        <!-- Progress -->
                        <div class="ml-auto col-span-1">
                            <div class="flex justify-center h-full items-center">
                                <a href="#" class="flex justify-center bg-green-300 p-2 border-2 border-white rounded-md">
                                    <img src="@/assets/img/Amazing.png" alt="" class="">
                                    
                                </a>
                                <a href="#" class="flex text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Button -->
                        <div class="ml-auto col-span-2">
                            <div class="flex h-full items-center">
                                <a href="#" class="btn-blue w-36 text-white">Edit</a>
                                <a href="#" class="ml-4 text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- One promise mobile -->
                    <div class="md:hidden bg-gray-700 rounded-3xl px-6 py-6 mt-6">
                        <div class="flex items-center">

                            <div class="flex h-full items-center">
                                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200"></div>
                                <div class="ml-1">
                                    <p class="text-white text-lg">Alex B.</p>
                                    <p class="-mt-2 text-gray-400 text-xs">alexbrown.near</p>
                                </div>
                            </div>     

                            <div class="ml-auto flex justify-center  h-full items-center">
                                <a href="#" class="flex justify-center w-11 bg-green-300 p-2 border-2 border-white rounded-md">
                                    <img src="@/assets/img/Amazing.png" alt="" class="">
                                    
                                </a>
                                <a href="#" class="flex text-gray-400 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16.0001 20L10.3428 14.3427L12.2294 12.4573L16.0001 16.2293L19.7708 12.4573L21.6574 14.3427L16.0001 20Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>

                            <a href="#" class="ml-4 text-gray-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="currentColor"/>
                                </svg>
                            </a>

                        </div>
                        <div class="flex items-baseline justify-between mt-2">
                            <p class="text-white text-xl">To be good</p>
                            <p class="text-white">03/10/2021</p>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="flex items-center justify-center md:justify-end py-5 text-white  md:text-lg">
                        <a href="#" class="px-2 hover:text-blue-400">Previous</a>
                        <a href="#" class="px-2 hover:text-blue-400">1</a>
                        <!-- Active element -->
                        <a href="#" class="border-b-2 border-blue-500 px-2 hover:text-blue-400">2</a>
                        <a href="#" class="px-2 hover:text-blue-400">3</a>
                        <a href="#" class="px-2 hover:text-blue-400">4</a>
                        <a href="#" class="px-2 hover:text-blue-400">5</a>
                        <a href="#" class="px-2 hover:text-blue-400">6</a>
                        <a href="#" class="px-2 hover:text-blue-400">Next</a>
                    </div>

                </div>

            </div>
            
            <div class="fixed top-0 left-0 w-full h-screen bg-form text-gray-400">
                <div class="h-full flex justify-center items-center">
                    <div class="relative w-4/5 lg:w-2/3 bg-gray-600 rounded-3xl ">
            
                        <div class="w-full h-full creation-bg">
                            <div class="py-10 px-6">
                                <div class="-mt-12 home-title">Promise <span class="bg-gradient-to-r from-blue-400 to-blue-500">creation</span></div>
                                <div class="flex justify-end">
                                    <a href="#" class="text-white hover:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M16 14.1147L22.6 7.51467L24.4853 9.4L17.8853 16L24.4853 22.6L22.6 24.4853L16 17.8853L9.39998 24.4853L7.51465 22.6L14.1146 16L7.51465 9.4L9.39998 7.51467L16 14.1147Z" fill="currentColor"/>
                                        </svg>
                                    </a>
                                </div>
                                <form action="" class="w-full md:w-96 my-10">
            
                                    <p class="text-gray-400 font-semibold text-lg">What you promise?</p>
                                    <input type="text" placeholder="Study French" class="bg-white py-2 pl-6 outline-none w-full mt-2 rounded-md font-semibold text-lg border-2 border-white focus:border-blue-400">
                                  
                                    <div class="flex justify-between items-baseline">
                                        <p class="text-gray-400 font-semibold text-lg mt-4">Link for voters</p>
                                        <p class="text-gray-400 text-sm">not required</p>
                                    </div>
                                    <input type="text" placeholder="Type a NEAR ID...." class="bg-white py-2 pl-6 outline-none w-full mt-2 rounded-md font-semibold text-lg border-2 border-white focus:border-blue-400">
                                    
                                    <a href="#" class="btn-blue text-white w-full mt-7 py-3">Yes, I do it!</a>
                
                                    <p class="text-gray-400 mt-8">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices morbi molestie.
                                    </p>
                                </form>
            
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>

        </div>
</template>

<script>
export default {

}
</script>