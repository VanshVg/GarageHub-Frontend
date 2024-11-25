export const GreenCheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="h-6 w-6 text-green-500"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M10 18a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 15.586l8.293-8.293a1 1 0 111.414 1.414l-9 9A1 1 0 0110 18z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const BlackCheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

export const WhiteTrustIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3"
      />
    </svg>
  );
};

export const WhitePlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
};

export const WhiteAccessibilityIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 12m-8 0a8 8 0 0116 0m-8-8a8 8 0 110 16"
      />
    </svg>
  );
};

export const EyeIconSettings = ({ className }: any) => {
  return (
    <svg
      className={` text-[#242425] ${className} `}
      stroke="currentColor"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9833 9.99896C12.9833 11.649 11.6499 12.9823 9.99993 12.9823C8.34993 12.9823 7.0166 11.649 7.0166 9.99896C7.0166 8.34896 8.34993 7.01562 9.99993 7.01562C11.6499 7.01562 12.9833 8.34896 12.9833 9.99896Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99987 16.8932C12.9415 16.8932 15.6832 15.1599 17.5915 12.1599C18.3415 10.9849 18.3415 9.0099 17.5915 7.8349C15.6832 4.8349 12.9415 3.10156 9.99987 3.10156C7.0582 3.10156 4.31654 4.8349 2.4082 7.8349C1.6582 9.0099 1.6582 10.9849 2.4082 12.1599C4.31654 15.1599 7.0582 16.8932 9.99987 16.8932Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShowPassword = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1083 7.8916L7.8916 12.1083C7.34994 11.5666 7.0166 10.8249 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C10.8249 7.0166 11.5666 7.34994 12.1083 7.8916Z"
        stroke="#242425"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.8501 4.8084C13.3918 3.7084 11.7251 3.1084 10.0001 3.1084C7.05845 3.1084 4.31678 4.84173 2.40845 7.84173C1.65845 9.01673 1.65845 10.9917 2.40845 12.1667C3.06678 13.2001 3.83345 14.0917 4.66678 14.8084"
        stroke="#242425"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.0166 16.2751C7.9666 16.6751 8.97493 16.8917 9.99993 16.8917C12.9416 16.8917 15.6833 15.1584 17.5916 12.1584C18.3416 10.9834 18.3416 9.0084 17.5916 7.8334C17.3166 7.40006 17.0166 6.99173 16.7083 6.6084"
        stroke="#242425"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.925 10.5833C12.7083 11.7583 11.75 12.7166 10.575 12.9333"
        stroke="#242425"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.89175 12.1084L1.66675 18.3334"
        stroke="#242425"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3334 1.66675L12.1084 7.89175"
        stroke="#242425"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CustomerIcon = () => {
  return (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="layer1">
        <path
          d="M 10 0 L 9.5644531 0.01953125 L 9.1328125 0.076171875 L 8.7050781 0.16992188 L 8.2890625 0.30273438 L 7.8867188 0.46875 L 7.5 0.66992188 L 7.1328125 0.90625 L 6.7871094 1.171875 L 6.4628906 1.4648438 L 6.1699219 1.7871094 L 5.9042969 2.1328125 L 5.6699219 2.5 L 5.46875 2.8886719 L 5.3027344 3.2910156 L 5.1699219 3.7070312 L 5.0761719 4.1328125 L 5.0195312 4.5664062 L 5 5.0019531 L 5.0175781 5.6816406 L 5.0742188 6.359375 L 5.1660156 7.0351562 L 5.2949219 7.703125 L 5.4589844 8.3613281 L 5.6601562 9.0136719 L 5.8984375 9.6523438 L 6.1660156 10.275391 L 6.4707031 10.884766 L 6.6523438 11.193359 L 6.8632812 11.484375 L 6.9296875 11.595703 L 6.9648438 11.720703 L 6.96875 11.847656 L 6.9375 11.974609 L 6.875 12.087891 L 6.7871094 12.181641 L 6.6777344 12.25 L 6.5527344 12.287109 L 5.6953125 12.449219 L 4.84375 12.646484 L 4.0019531 12.878906 L 3.1699219 13.146484 L 2.3515625 13.445312 L 2.0351562 13.591797 L 1.7382812 13.771484 L 1.4648438 13.986328 L 1.2167969 14.230469 L 0.99804688 14.5 L 0.81445312 14.794922 L 0.6640625 15.109375 L 0.46484375 15.652344 L 0.296875 16.208984 L 0.16796875 16.775391 L 0.07421875 17.345703 L 0.01953125 17.923828 L 0 18.503906 L 0.01953125 18.644531 L 0.080078125 18.775391 L 0.171875 18.882812 L 0.29296875 18.958984 L 0.42773438 19 L 0.57226562 19 L 0.70703125 18.958984 L 0.828125 18.882812 L 0.91992188 18.775391 L 0.98046875 18.644531 L 1 18.503906 L 1.0175781 17.988281 L 1.0664062 17.476562 L 1.1484375 16.964844 L 1.2636719 16.464844 L 1.4121094 15.96875 L 1.5898438 15.486328 L 1.7089844 15.242188 L 1.859375 15.017578 L 2.0390625 14.816406 L 2.2441406 14.640625 L 2.4707031 14.492188 L 2.7148438 14.378906 L 3.4960938 14.089844 L 4.2871094 13.835938 L 5.0878906 13.615234 L 5.9003906 13.427734 L 6.7167969 13.273438 L 6.9472656 13.216797 L 7.1699219 13.123047 L 7.3710938 12.996094 L 7.5507812 12.835938 L 7.7011719 12.652344 L 7.8222656 12.443359 L 7.9101562 12.220703 L 7.9570312 11.986328 L 7.9707031 11.748047 L 7.9433594 11.509766 L 7.8789062 11.279297 L 7.7792969 11.0625 L 7.6484375 10.865234 L 7.4902344 10.644531 L 7.3535156 10.416016 L 7.0742188 9.8554688 L 6.8261719 9.2792969 L 6.609375 8.6933594 L 6.4238281 8.09375 L 6.2734375 7.4863281 L 6.1542969 6.8710938 L 6.0683594 6.2519531 L 6.015625 5.6289062 L 6 5.0019531 L 6.0195312 4.609375 L 6.078125 4.2207031 L 6.171875 3.8398438 L 6.3046875 3.4707031 L 6.4726562 3.1152344 L 6.6738281 2.7792969 L 6.9082031 2.4628906 L 7.1699219 2.171875 L 7.4628906 1.9082031 L 7.7773438 1.6738281 L 8.1152344 1.4746094 L 8.4707031 1.3046875 L 8.8398438 1.1738281 L 9.21875 1.078125 L 9.6074219 1.0195312 L 10 1 L 10.392578 1.0195312 L 10.78125 1.078125 L 11.160156 1.1738281 L 11.529297 1.3046875 L 11.886719 1.4746094 L 12.222656 1.6738281 L 12.537109 1.9082031 L 12.830078 2.171875 L 13.091797 2.4628906 L 13.326172 2.7792969 L 13.527344 3.1152344 L 13.695312 3.4707031 L 13.828125 3.8398438 L 13.923828 4.2207031 L 13.982422 4.609375 L 14 5.0019531 L 13.984375 5.6289062 L 13.931641 6.2519531 L 13.845703 6.8710938 L 13.728516 7.4863281 L 13.576172 8.09375 L 13.390625 8.6933594 L 13.173828 9.2792969 L 12.925781 9.8554688 L 12.646484 10.416016 L 12.509766 10.644531 L 12.351562 10.865234 L 12.220703 11.0625 L 12.121094 11.279297 L 12.056641 11.509766 L 12.029297 11.748047 L 12.042969 11.986328 L 12.091797 12.220703 L 12.177734 12.443359 L 12.298828 12.652344 L 12.451172 12.835938 L 12.628906 12.996094 L 12.830078 13.123047 L 13.052734 13.216797 L 13.283203 13.273438 L 14.099609 13.427734 L 14.912109 13.615234 L 15.712891 13.835938 L 16.505859 14.089844 L 17.285156 14.378906 L 17.529297 14.492188 L 17.755859 14.640625 L 17.960938 14.816406 L 18.140625 15.017578 L 18.291016 15.242188 L 18.410156 15.486328 L 18.587891 15.96875 L 18.736328 16.464844 L 18.851562 16.964844 L 18.933594 17.476562 L 18.982422 17.988281 L 19 18.503906 L 19.019531 18.644531 L 19.080078 18.775391 L 19.171875 18.882812 L 19.292969 18.958984 L 19.427734 19 L 19.572266 19 L 19.708984 18.958984 L 19.828125 18.882812 L 19.919922 18.775391 L 19.980469 18.644531 L 20 18.503906 L 19.980469 17.923828 L 19.925781 17.345703 L 19.832031 16.773438 L 19.703125 16.208984 L 19.535156 15.652344 L 19.335938 15.109375 L 19.185547 14.794922 L 19.001953 14.5 L 18.783203 14.230469 L 18.535156 13.986328 L 18.263672 13.771484 L 17.966797 13.591797 L 17.648438 13.445312 L 16.830078 13.146484 L 15.998047 12.878906 L 15.15625 12.646484 L 14.306641 12.449219 L 13.447266 12.287109 L 13.322266 12.25 L 13.212891 12.181641 L 13.125 12.087891 L 13.0625 11.974609 L 13.033203 11.847656 L 13.035156 11.720703 L 13.070312 11.595703 L 13.136719 11.484375 L 13.347656 11.193359 L 13.529297 10.884766 L 13.833984 10.275391 L 14.103516 9.6523438 L 14.339844 9.0136719 L 14.541016 8.3613281 L 14.705078 7.703125 L 14.833984 7.0351562 L 14.925781 6.359375 L 14.982422 5.6816406 L 15 5.0019531 L 14.982422 4.5664062 L 14.923828 4.1328125 L 14.830078 3.7070312 L 14.697266 3.2910156 L 14.53125 2.8886719 L 14.330078 2.5 L 14.097656 2.1328125 L 13.830078 1.7871094 L 13.537109 1.4648438 L 13.212891 1.171875 L 12.869141 0.90625 L 12.5 0.66992188 L 12.113281 0.46875 L 11.710938 0.30273438 L 11.294922 0.16992188 L 10.867188 0.076171875 L 10.435547 0.01953125 L 10 0 z "
          style={{
            fill: "#1E293B",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: "0px",
            margin: "0 auto",
          }}
        ></path>
      </g>
    </svg>
  );
};

export const GarageOwnerIcon = () => {
  return (
    <svg
      height="100px"
      width="100px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 74.683 74.683"
      // xml:space="preserve"
      fill="#1E293B "
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          style={{ fill: "#1E293B", margin: "0 auto" }}
          d="M21.036,19.422h32.801c0.552,0,1-0.448,1-1c0-7.636-0.011-15.505-13.45-16.752 C41.312,0.747,39.57,0,37.436,0s-3.876,0.747-3.95,1.67c-13.439,1.247-13.45,9.116-13.45,16.752 C20.036,18.974,20.483,19.422,21.036,19.422z M37.436,3.494c14.779,0,15.375,6.067,15.399,13.928h-8.867 c-0.072-1.526-1.832-2.761-3.986-2.761H34.89c-2.154,0-3.914,1.235-3.986,2.761h-8.867C22.06,9.562,22.657,3.494,37.436,3.494z M33.346,10.13l0.391-0.677l-0.391-0.677h-1.359c-0.552,0-1-0.448-1-1s0.448-1,1-1h1.937c0.357,0,0.688,0.19,0.866,0.5l0.68,1.177 h3.935l0.68-1.177c0.179-0.31,0.509-0.5,0.866-0.5h1.937c0.552,0,1,0.448,1,1s-0.448,1-1,1h-1.359l-0.391,0.677l0.391,0.677h1.359 c0.552,0,1,0.448,1,1s-0.448,1-1,1h-1.937c-0.357,0-0.688-0.19-0.866-0.5l-0.68-1.177h-3.935l-0.68,1.177 c-0.178,0.31-0.508,0.5-0.866,0.5h-1.937c-0.552,0-1-0.448-1-1s0.448-1,1-1H33.346z M17.169,24.357 c0.022-0.76,0.09-3.072,1.69-3.677c1.585-0.597,3.248,1.061,3.565,1.4c0.377,0.403,0.356,1.036-0.047,1.414 c-0.404,0.376-1.037,0.355-1.414-0.047c-0.495-0.524-1.199-0.938-1.401-0.894c0.005,0-0.347,0.28-0.394,1.863 c-0.13,4.434,3.336,5.641,3.371,5.652c0.317,0.105,0.56,0.362,0.648,0.685l0.053,0.192c0.016,0.059,0.027,0.12,0.032,0.181 c0.953,11.363,9.955,15.039,14.164,15.039S50.647,42.488,51.6,31.125c0.005-0.061,0.016-0.122,0.032-0.181l0.053-0.192 c0.088-0.322,0.332-0.579,0.648-0.685c0.137-0.048,3.5-1.267,3.371-5.652c-0.047-1.589-0.401-1.865-0.405-1.868 c-0.214-0.054-0.948,0.424-1.39,0.898c-0.377,0.404-1.01,0.425-1.414,0.047s-0.424-1.01-0.047-1.414 c0.317-0.338,1.978-1.999,3.565-1.4c1.6,0.604,1.667,2.917,1.69,3.677c0.124,4.22-2.399,6.521-4.15,7.367 c-1.162,11.335-10.072,16.44-16.117,16.44s-14.956-5.105-16.117-16.44C19.568,30.878,17.045,28.577,17.169,24.357z M23.556,48.105 c-3.221,1.18-17.259,7.334-17.259,24.927c0,0.552-0.448,1-1,1s-1-0.448-1-1c0-19.967,17.341-26.39,19.146-27.003l-0.076-1.386 c-0.03-0.551,0.393-1.023,0.944-1.053c0.542-0.026,1.022,0.392,1.053,0.944l0.38,6.945l4.486-2.105 c0.499-0.234,1.095-0.021,1.33,0.48c0.235,0.5,0.02,1.095-0.48,1.33l-5.828,2.735c-0.135,0.063-0.28,0.095-0.425,0.095 c-0.178,0-0.355-0.047-0.513-0.142c-0.285-0.17-0.467-0.472-0.485-0.804L23.556,48.105z M19.164,69.686v3.346c0,0.552-0.448,1-1,1 s-1-0.448-1-1v-3.346c0-0.552,0.448-1,1-1S19.164,69.134,19.164,69.686z M70.387,73.032c0,0.552-0.448,1-1,1s-1-0.448-1-1 c0-17.018-13.671-23.507-17.261-24.916l-0.271,4.952c-0.018,0.332-0.2,0.633-0.485,0.804c-0.158,0.094-0.335,0.142-0.513,0.142 c-0.145,0-0.29-0.031-0.425-0.095l-5.828-2.735c-0.5-0.235-0.715-0.83-0.48-1.33c0.235-0.501,0.831-0.715,1.33-0.48l4.485,2.105 l0.38-6.945c0.03-0.551,0.502-0.969,1.053-0.944c0.551,0.03,0.974,0.502,0.944,1.053l-0.076,1.383 C53.955,47.001,70.387,53.709,70.387,73.032z M57.518,69.686v3.346c0,0.552-0.448,1-1,1s-1-0.448-1-1v-3.346c0-0.552,0.448-1,1-1 S57.518,69.134,57.518,69.686z M39.314,24.342c-0.292,0-0.569,0.127-0.759,0.349c-0.083,0.097-0.136,0.211-0.177,0.329h-1.885 c-0.041-0.118-0.094-0.232-0.177-0.329c-0.19-0.221-0.467-0.349-0.759-0.349H25.87c-0.268,0-0.525,0.108-0.713,0.299 s-0.291,0.45-0.287,0.718c0.014,0.8,0.168,4.86,1.822,6.204c1.04,0.844,2.668,1.369,4.25,1.369c1.495,0,2.745-0.468,3.521-1.317 c0.889-0.974,1.476-3.094,1.799-4.595h2.348c0.323,1.501,0.91,3.621,1.799,4.595c0.775,0.85,2.026,1.317,3.521,1.317 c1.583,0,3.211-0.525,4.25-1.369c1.654-1.344,1.809-5.403,1.823-6.204c0.004-0.268-0.099-0.527-0.287-0.718 s-0.445-0.299-0.713-0.299H39.314z M32.986,30.266c-0.387,0.423-1.131,0.666-2.044,0.666c-1.11,0-2.311-0.371-2.99-0.922 c-0.498-0.405-0.887-2.056-1.028-3.668h7.435C34.036,27.893,33.513,29.689,32.986,30.266z M46.919,30.01 c-0.679,0.551-1.88,0.922-2.99,0.922c-0.913,0-1.657-0.243-2.043-0.666c-0.526-0.576-1.05-2.373-1.373-3.924h7.435 C47.807,27.955,47.417,29.606,46.919,30.01z M38.836,51.635v22.048c0,0.552-0.448,1-1,1s-1-0.448-1-1V51.635c0-0.552,0.448-1,1-1 S38.836,51.083,38.836,51.635z M33.02,66.135c0,0.552-0.448,1-1,1h-9.333c-0.552,0-1-0.448-1-1s0.448-1,1-1h9.333 C32.572,65.135,33.02,65.583,33.02,66.135z"
        ></path>{" "}
      </g>
    </svg>
  );
};
