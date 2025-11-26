function UserProfile() {
  return (
    <div
      className="
        user-profile
        bg-gray-100
        p-4 sm:p-4 md:p-8              /* responsive padding */
        max-w-xs sm:max-w-xs md:max-w-sm/* responsive width */
        mx-auto
        my-10 md:my-20
        rounded-lg
        shadow-lg
        hover:shadow-xl                /* stronger shadow on hover */
        transition-shadow duration-300 /* smooth shadow change */
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
          transition-transform duration-300 ease-in-out
          hover:scale-110               /* grow slightly on hover */
        "
      />
      <h1
        className="
          text-lg sm:text-lg md:text-xl /* responsive heading size */
          text-blue-800
          hover:text-blue-500           /* lighter blue on hover */
          transition-colors duration-200
          my-4
        "
      >
        John Doe
      </h1>
      <p
        className="
          text-sm sm:text-sm md:text-base /* responsive paragraph size */
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
