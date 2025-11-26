function UserProfile() {
  return (
    <div
      className="
        user-profile
        bg-gray-100
        p-4 sm:p-4 md:p-8              /* padding: smaller on small, larger on md+ */
        max-w-xs sm:max-w-xs md:max-w-sm/* width: xs on small, sm on md+ */
        mx-auto
        my-10 md:my-20                 /* vertical margin adjusts */
        rounded-lg
        shadow-lg
        text-center
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full
          w-24 h-24                     /* small screens */
          sm:w-24 sm:h-24
          md:w-36 md:h-36               /* larger on md+ */
          mx-auto
        "
      />
      <h1
        className="
          text-lg sm:text-lg md:text-xl /* heading size responsive */
          text-blue-800
          my-4
        "
      >
        John Doe
      </h1>
      <p
        className="
          text-sm sm:text-sm md:text-base /* paragraph size responsive */
          text-gray-600
        "
      >
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
