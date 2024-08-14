import React from "react";

function Card(props) {
  // We can pass different type of data to a component using Props.
  // Props is an Object, if we want different properties for Similar type of component like Card etc, we can use Props.
  // We can directly destructure the props Object here in the parameters.
  console.log(props);
  return (
    <>
      <div class="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">
            {props.userName}
            {props.obj.age}
          </h1>
          <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?{props.obj.age}
          </p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {props.btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
